<template>
	<div class="container">
		<div class="grid">
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
import PhotoCard from "./PhotoCard.vue";

interface Photo {
	id: string;
	url: string;
	title: string;
}

export default {
	name: "photoGrid",
	components: { PhotoCard },
	props: {
		photos: {
			type: Array as () => Photo[],
			required: true,
		},
	},
	setup(props: { photos: Photo[] }) {
		const columnSize = ref(3);

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
		return {
			columnSize,
			columns,
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
		gap: 35px;
		width: fit-content;
		.column {
			display: flex;
			flex-direction: column;
			gap: 25px;
		}
	}
}
</style>
