<template>
	<transition name="slide">
		<div class="modal" @click.self="closeModal" v v-if="openModal">
			<Icon icon="iconoir:cancel" class="cancel-icon" @click="closeModal" />
			<div class="modal-content">
				<img :src="photo.urls.regular" alt="photo.slug" />
				<div class="details">
					<p>{{ photo.user.name }}</p>
					<p>{{ photo.user.location }}</p>
				</div>
			</div>
		</div>
	</transition>
</template>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease;
}
.slide-enter,
.slide-leave-to {
	transform: translateX(-100%);
	opacity: 0;
}
.modal {
	position: fixed;
	inset: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	z-index: 100;
	.modal-content {
		background-color: white;
		border-radius: 10px;
		width: 80%;
		height: 80vh;
		padding-bottom: 10px;
		margin: 5% 0;
		img {
			width: 100%;
			height: 85%;
			object-fit: cover;
			border-top-right-radius: 10px;
			border-top-left-radius: 10px;
		}
		.details {
			text-align: start;
			text-transform: capitalize;
			margin: 10px 25px;
			p:first-child {
				font-weight: bold;
				font-size: 18px;
			}
			p:last-child {
				font-size: 12px;
				margin-top: 6px;
			}
		}
	}
	.cancel-icon {
		width: 40px;
		height: 40px;
		position: absolute;
		z-index: 200;
		top: 5%;
		right: 5%;
	}
}

@media (max-width: 768px) {
	.modal {
		.cancel-icon {
			right: 0;
			width: 30px;
			height: 30px;
		}
	}
}
</style>

<script lang="ts">
import { Icon } from "@iconify/vue";
import { Photo } from "./PhotoGrid.vue";

export default {
	name: "PhotoModal",
	props: ["openModal", "photo"],
	components: { Icon },
	emits: ["update:openModal"],

	setup(
		props: { openModal: boolean; photo: Photo },
		{ emit }: { emit: (event: "update:openModal", value: boolean) => void }
	) {
		const closeModal = () => {
			emit("update:openModal", false);
		};

		return { closeModal };
	},
};
</script>
