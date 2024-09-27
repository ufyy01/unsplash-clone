<template>
	<div class="shimmer-wrapper">
		<div class="shimmer"></div>
	</div>
</template>

<style lang="scss" scoped>
.shimmer-wrapper {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	animation: loading 2.5s infinite;
	overflow: hidden;
	.shimmer {
		width: 50%;
		height: 100%;
		background: rgba(225, 225, 225, 0.2);
		transform: skew(-20deg);
		box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.5);
	}
}

@keyframes loading {
	0% {
		transform: translateX(-150%);
	}
	50% {
		transform: translateX(-60%);
	}
	100% {
		transform: translateX(150%);
	}
}
</style>
