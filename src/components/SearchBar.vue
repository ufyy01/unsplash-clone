<template>
	<div class="search-bar">
		<input
			type="text"
			:value="modelValue"
			placeholder="Search for photo"
			@keypress="onKeyPress"
			required />
		<Icon icon="ion:search-outline" class="search-icon" />
	</div>
</template>

<script lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
export default {
	name: "searchBar",
	emits: ["update:modelValue"],
	components: { Icon },
	props: {
		modelValue: { type: String },
	},
	setup(
		props: { modelValue: string },
		{ emit }: { emit: (event: "update:modelValue", value: string) => void }
	) {
		const search = ref("");

		const onKeyPress = (event: KeyboardEvent) => {
			if (event.key === "Enter") {
				const target = event.target as HTMLInputElement;
				emit("update:modelValue", target.value);
			}
		};

		return { search, onKeyPress };
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/_globals.scss";

.search-bar {
	@include header-absolutes;
	border-radius: 10px;
	padding: 4px 10px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	background-color: white;
	input {
		padding: 15px 0;
		border: none;
		font-size: 16px;
		width: 90%;
		height: 100%;
		font-weight: 500;
		&:focus {
			border: none;
			outline: none;
		}
	}
	.search-icon {
		position: absolute;
		top: 30%;
		left: 2%;
		width: 15px;
	}
}
</style>
