import { ref } from "vue";
import axios, { AxiosError } from "axios";

const getPhotos = () => {
	const photos = ref([]);
	const error = ref<string | null>(null);

	const load = async () => {
		try {
			const accessKey = process.env.VUE_APP_UNSPLASH_ACCESS_KEY;

			const response = await axios({
				method: "get",
				url: "https://api.unsplash.com/search/photos",
				headers: {
					Authorization: `Client-ID ${accessKey}`,
				},
				params: {
					per_page: 8,
					query: "African",
					orientation: "portrait",
				},
			});
			console.log(response.data);
			photos.value = response.data.results;
		} catch (e: unknown) {
			if (e instanceof AxiosError) {
				error.value = e.message;
			} else if (e instanceof Error) {
				error.value = e.message;
			} else {
				error.value = "An unexpected error occurred";
			}
		}
	};
	return { photos, error, load };
};

export default getPhotos;
