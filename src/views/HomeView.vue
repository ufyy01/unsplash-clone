<template>
	<div v-if="showSplashScreen">
		<loading-screen />
	</div>
	<div class="home">
		<HeaderFrame
			@search="updateSearch"
			:value="filter.search"
			:loading="loading" />

		<div v-if="error" class="error-message">
			<h4 class="error-heading">{{ error }}</h4>
			<p class="error-text">Opps! Something went wrong. Try again</p>
		</div>
		<div class="grid-container" v-else>
			<photo-grid :photos="photos" :loading="loading" />
			<div class="pagination" v-if="totalPages > 0">
				<span>{{ filter.page }}/{{ totalPages }}</span>
				<button @click="goBack"><Icon icon="subway:round-arrow-1" /></button>
				<button @click="prevPage" :class="filter.page === 1 ? 'disable' : ''">
					<Icon icon="ion:arrow-undo-outline" />
				</button>
				<button
					@click="nextPage"
					:class="filter.page === totalPages ? 'disable' : ''">
					<Icon icon="ion:arrow-redo-outline" />
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import getPhotos, { Filter } from "@/composables/getPhotos";
import PhotoGrid from "@/components/PhotoGrid.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import { onMounted, reactive, ref, watchEffect } from "vue";
import HeaderFrame from "@/components/HeaderFrame.vue";
import { Icon } from "@iconify/vue";

export default {
	name: "HomeView",
	components: {
		PhotoGrid,
		LoadingScreen,
		HeaderFrame,
		Icon,
	},
	setup() {
		const showSplashScreen = ref(true);
		const { photos, error, loading, load, totalPages } = getPhotos();

		const filter = reactive<Filter>({
			page: 1,
			search: "",
		});

		const goBack = () => {
			filter.page = 1;
			filter.search = "";
			load(filter);
		};

		const nextPage = () => {
			if (filter.page < totalPages.value) {
				filter.page++;
				load(filter);
			}
		};

		const prevPage = () => {
			if (filter.page > 1) {
				filter.page--;
				load(filter);
			}
		};

		onMounted(() => {
			load(filter);

			setTimeout(() => {
				showSplashScreen.value = false;
			}, 3000);
		});

		const updateSearch = (query: string) => {
			filter.search = query;
		};

		watchEffect(() => {
			load(filter);
		});

		return {
			photos,
			error,
			loading,
			showSplashScreen,
			updateSearch,
			goBack,
			nextPage,
			prevPage,
			totalPages,
			filter,
		};
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/_globals.scss";
.home {
	position: relative;
	background-color: white;
	.grid-container {
		position: absolute;
		width: 100%;
		top: 120px;
		.pagination {
			margin-top: 10px;
			.disable {
				cursor: not-allowed;
			}
			button {
				margin: 7px;
				padding: 10px;
				background-color: $primary-color;
				border: none;
				border-radius: 10px;
				font-weight: 600;
			}
			span {
				font-size: 15px;
			}
		}
	}
	.error-message {
		background-color: $primary-color;
		width: 80%;
		margin: auto;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border-radius: 20px;
		position: absolute;
		top: 300px;
		left: 10%;
		.error-heading {
			font-weight: 600;
			font-size: 20px;
			margin-bottom: 10px;
		}
		.error-text {
			font-size: 15px;
			font-style: italic;
		}
	}
}
</style>
