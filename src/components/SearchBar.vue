<template>
	<div class="search-bar">
		<Icon icon="ion:search-outline" class="search-icon" />
		<input
			type="text"
			:value="modelValue"
			placeholder="Search for photo"
			@keypress="onKeyPress"
			required />
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
	border-radius: 7px;
	padding: 4px 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	background-color: white;
	display: flex;
	align-items: center;
	input {
		padding: 15px 0;
		border: none;
		font-size: 16px;
		width: 90%;
		height: 100%;
		font-weight: 500;
		margin-left: 20px;
		&:focus {
			border: none;
			outline: none;
		}
	}
	.search-icon {
		width: 16px;
		margin-left: 7px;
	}
}
</style>
