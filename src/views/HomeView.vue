<template>
	<div class="home">
		<search-bar />
		<div class="grid-container">
			<div v-if="error" class="error-message">
				{{ error }}
			</div>
			<div v-if="photos.length">
				<photo-grid :photos="photos" />
			</div>
			<div v-else>
				<p>Loading...</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import getPhotos from "@/composables/getPhotos";
import PhotoGrid from "@/components/PhotoGrid.vue";

export default {
	name: "HomeView",
	components: {
		SearchBar,
		PhotoGrid,
	},
	setup() {
		const { photos, error, load } = getPhotos();

		load();

		return { photos, error };
	},
};
</script>

<style lang="scss" scoped>
.home {
	position: relative;
	background-color: white;
	.grid-container {
		position: absolute;
		width: fit-content;
		top: 120px;
		width: 100%;
	}
}
</style>
