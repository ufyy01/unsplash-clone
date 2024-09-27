<template>
	<div class="header">
		<div v-if="value && loading" class="search-query">
			<h3>
				Searching for <span>"{{ value }}"</span>
			</h3>
		</div>
		<div v-else-if="value" class="search-query">
			<h3>
				Search Results for <span>"{{ value }}"</span>
			</h3>
		</div>
		<SearchBar v-model="searchQuery" v-else />
	</div>
</template>

<style lang="scss" scoped>
@import "@/styles/_globals.scss";
.header {
	height: 200px;
	background-color: $primary-color;
	position: relative;
	.search-query {
		@include header-absolutes;
		text-align: start;
		h3 {
			font-size: 28px;
			span {
				text-transform: capitalize;
				color: #797c8c;
			}
		}
	}
}
</style>

<script lang="ts">
import { ref, watch } from "vue";
import SearchBar from "./SearchBar.vue";

export default {
	name: "HeaderFrame",
	components: {
		SearchBar,
	},
	props: {
		value: {
			type: String,
		},
		loading: {
			type: Boolean,
		},
	},
	emits: ["search"],
	setup(
		props: { value: string | undefined; loading: boolean },
		{ emit }: { emit: (event: "search", query: string) => void }
	) {
		const searchQuery = ref(props.value || "");

		watch(
			() => props.value,
			(newVal) => {
				searchQuery.value = newVal || "";
			}
		);

		watch(searchQuery, (newQuery) => {
			if (newQuery) {
				emit("search", newQuery);
			}
		});

		return { searchQuery };
	},
};
</script>
