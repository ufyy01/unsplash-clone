<template>
	<div
		@click="openModal = true"
		class="card"
		:class="(parseInt(index) + 1) % 2 !== 0 ? 'short-card' : 'long-card'">
		<img :src="photo.urls.small" :alt="photo.slug" />
		<div class="details">
			<p>{{ photo.user.name }}</p>
			<p>{{ photo.user.location }}</p>
		</div>
		<div class="tint"></div>
	</div>
	<PhotoModal
		:openModal="openModal"
		:photo="photo"
		@update:openModal="(value) => (openModal = value)" />
</template>

<script lang="ts">
import { ref } from "vue";
import PhotoModal from "./PhotoModal.vue";

export default {
	name: "photoCard",
	props: ["photo", "index"],
	components: { PhotoModal },

	setup() {
		const openModal = ref<boolean>(false);

		return { openModal };
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/_globals.scss";

.card {
	@include card-style;
	cursor: pointer;
	img {
		width: 100%;
		height: 100%;
		border-radius: 10px;
		object-fit: cover;
	}
	.details {
		@include card-details;
		> *:first-child {
			font-size: 15px;
			margin-bottom: 3px;
		}
	}
	.tint {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 30%;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}
	&:hover {
		.details {
			padding: 15px;
			background-color: rgba(0, 0, 0, 0.5);
		}
		.tint {
			opacity: 0;
		}
	}
}
.short-card {
	height: 300px;
}
.long-card {
	height: 380px;
}

@media (max-width: 768px) {
	.card {
		width: 90vw;
	}
	.long-card,
	.short-card {
		height: 350px;
	}
}
@media only screen and (min-width: 769px) and (max-width: 1024px) {
	.long-card,
	.short-card {
		height: 380px;
	}
}
</style>
