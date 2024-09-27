<template>
	<div class="container">
		<div class="grid" v-if="loading || photos.length === 0">
			<div
				class="column"
				v-for="(loadingColumn, loadingColIndex) in loadingColumns"
				:key="loadingColIndex">
				<loading-card
					v-for="(_, index) in loadingColumn"
					:index="index + loadingColIndex * columnSize"
					:key="index" />
			</div>
		</div>
		<div class="grid" v-else>
			<div class="column" v-for="(column, colIndex) in columns" :key="colIndex">
				<photo-card
					v-for="(photo, index) in column"
					:key="index"
					:photo="photo"
					:index="index + colIndex * columnSize" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, ref } from "vue";
import LoadingCard from "./LoadingCard.vue";
import PhotoCard from "./PhotoCard.vue";

export interface Photo {
	id: string;
	urls: {
		thumb: string;
		regular: string;
	};
	user: {
		location: string;
		name: string;
	};
}

export default {
	components: { PhotoCard, LoadingCard },
	name: "photoGrid",
	props: {
		photos: {
			type: Array as () => Photo[],
		},
		loading: {
			type: Boolean,
		},
	},
	setup(props: { photos: Photo[] }) {
		const columnSize = ref(3);
		const loadingIndex = ref<number[]>([1, 2, 3, 4, 5, 6, 7, 8]);

		const columns = computed<Photo[][]>(() => {
			const result: Photo[][] = [];
			for (let i = 0; i < columnSize.value; i++) {
				result.push(
					props.photos.filter(
						(_: Photo, index: number) => index % columnSize.value === i
					)
				);
			}
			return result;
		});

		const loadingColumns = computed<number[][]>(() => {
			const result: number[][] = [];
			for (let i = 0; i < columnSize.value; i++) {
				result.push(
					loadingIndex.value.filter(
						(_: number, index: number) => index % columnSize.value === i
					)
				);
			}
			return result;
		});

		return {
			columnSize,
			columns,
			loadingIndex,
			loadingColumns,
		};
	},
};
</script>

<style lang="scss" scoped>
.container {
	max-width: 1224px;
	width: 90%;
	margin: auto;
	padding: 40px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	.grid {
		display: flex;
		flex-wrap: wrap;
		gap: 40px;
		width: fit-content;
		.column {
			display: flex;
			flex-direction: column;
			gap: 25px;
		}
	}
}
</style>
