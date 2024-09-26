<template>
	<div
		class="card"
		:class="(parseInt(index) + 1) % 2 !== 0 ? 'short-card' : 'long-card'">
		<img :src="photo.urls.thumb" :alt="photo.slug" />
		<div class="details">
			<p>{{ photo.user.name }}</p>
			<p>{{ photo.user.location }}</p>
		</div>
		<div class="tint"></div>
	</div>
</template>

<script lang="ts">
export default {
	name: "photoCard",
	props: ["photo", "index"],
};
</script>

<style lang="scss" scoped>
.card {
	position: relative;
	border-radius: 10px;
	overflow: hidden;
	height: 100%;
	width: 280px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
	cursor: pointer;
	img {
		width: 100%;
		border-radius: 10px;
		object-fit: cover;
	}
	.details {
		position: absolute;
		bottom: 20px;
		left: 0;
		padding-left: 15px;
		color: white;
		width: 100%;
		text-align: start;
		z-index: 10;
		font-size: 12px;
		> *:first-child {
			font-size: 15px;
		}
	}
	.tint {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
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
	height: 250px;
}
.long-card {
	height: 350px;
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
</style>
