<template>
	<div class="skeleton-wrapper">
		<div
			class="card"
			:class="(index + 1) % 2 !== 0 ? 'short-card' : 'long-card'">
			<div class="details">
				<div class="text"></div>
				<div class="text small"></div>
			</div>
		</div>
		<LoadingShimmer />
	</div>
</template>

<script lang="ts">
import LoadingShimmer from "./LoadingShimmer.vue";
export default {
	name: "lordingCard",
	props: ["index"],
	components: { LoadingShimmer },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_globals.scss";

.skeleton-wrapper {
	position: relative;
	height: fit-content;
	overflow: hidden;
	border-radius: 10px;
}
.card {
	background-color: #f5f5f5;
	@include card-style;
	.details {
		@include card-details;
		.text {
			height: 10px;
			width: 130px;
			background-color: #e5e5e5;
			margin-bottom: 7px;
		}
		.small {
			width: 100px;
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
