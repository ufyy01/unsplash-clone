import { ref } from "vue";
import axios, { AxiosError } from "axios";

export type Filter = {
	page: number;
	search?: string;
};

const getPhotos = () => {
	const photos = ref([]);
	const error = ref<string | null>(null);
	const loading = ref<boolean>(true);
	const totalPages = ref<number>(0);

	const load = async (filter: Filter) => {
		photos.value = [];
		loading.value = true;

		try {
			const accessKey = process.env.VUE_APP_UNSPLASH_ACCESS_KEY;
			const baseUri = process.env.VUE_APP_BASE_URL;

			const query = () => {
				if (filter.search) {
					return `African ${filter.search}`;
				} else {
					return "African";
				}
			};

			const response = await axios({
				method: "get",
				url: `${baseUri}`,
				headers: {
					Authorization: `Client-ID ${accessKey}`,
				},
				params: {
					per_page: 8,
					query: query(),
					orientation: "landscape",
					page: filter.page,
				},
			});
			photos.value = response.data.results;
			totalPages.value = response.data.total_pages;
		} catch (e: unknown) {
			console.log(e);
			if (e instanceof AxiosError) {
				error.value = e.message;
			} else if (e instanceof Error) {
				error.value = e.message;
			} else {
				error.value = "An unexpected error occurred";
			}
		} finally {
			//I would usually not do this but for the purpose of the test to show the loading screen that is why the loading is been delayed by 2 seconds...

			setTimeout(() => {
				loading.value = false;
			}, 2000);
		}
	};
	return { photos, error, loading, load, totalPages };
};

export default getPhotos;
