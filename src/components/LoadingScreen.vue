<template>
	<div class="loader-screen">
		<div class="text-box">
			<h2>Unsplash Clone 🎉</h2>
			<p>Beautiful images when you need it..</p>
		</div>
		<div class="confetti-container">
			<img
				v-for="(image, index) in confetti"
				:key="index"
				:src="image"
				alt="confetti" />
		</div>
	</div>
</template>

<script lang="ts">
import { computed, ref } from "vue";

export default {
	name: "loadingScreen",
	setup() {
		const images = ref<string[]>([
			"/images/ve1.png",
			"/images/Vector.png",
			"/images/Vector2.png",
		]);

		const confetti = computed(() => {
			const result: string[] = [];

			for (let i = 0; i < 40; i++) {
				result.push(images.value[i % 3]);
			}
			return result;
		});

		return { confetti };
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/_globals.scss";

@mixin delay($total-images) {
	$max-translate-x: 80;
	$max-translate-y: 100;
	$max-size: 15;
	$min-size: 6;

	@for $i from 1 to $total-images {
		$random-translate-x: random($max-translate-x);
		$random-translate-y: random($max-translate-y);
		$random-size: random($max-size - $min-size + 1) + $min-size;
		$random-direction: if(random(2) == 1, 1, -1);

		&:nth-child(#{$i}) {
			width: #{$random-size}px;
			height: #{$random-size}px;
			animation: bg-vector-#{$i} 4s ease-in-out infinite;

			@keyframes bg-vector-#{$i} {
				0% {
					transform: translateY(0) translateX(50vw) rotate(0deg);
					opacity: 0;
				}
				50% {
					transform: translateY(-#{$random-translate-y}vh)
						translateX(calc(#{$random-direction} * #{$random-translate-x}vw))
						rotate(180deg);
					opacity: 0.6;
				}
				70% {
					transform: translateY(0)
						translateX(calc(#{$random-direction} * #{$random-translate-x}vw))
						rotate(360deg);
					opacity: 0;
				}
				100% {
					opacity: 0;
				}
			}
		}
	}
}

.loader-screen {
	position: fixed;
	inset: 0;
	width: 100%;
	height: 100%;
	background-color: $primary-color;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 200;
	overflow: hidden;

	.text-box {
		width: 90%;
	}
	.confetti-container img {
		position: absolute;
		bottom: 0;
		opacity: 0;
		@include delay(40);
	}
}
</style>
