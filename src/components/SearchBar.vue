<template>
	<div class="header">
		<div class="search-bar">
			<input type="text" v-model="search" placeholder="Search for photo" />
		</div>
	</div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
	name: "searchBar",
	setup() {
		const search = ref("");
		return { search };
	},
};
</script>

<style lang="scss" scoped>
.header {
	height: 200px;
	background-color: #dde2e8;
	position: relative;
	.search-bar {
		width: 70%;
		position: absolute;
		bottom: 40%;
		left: 14%;
		border-radius: 10px;
		padding: 4px 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
		background-color: white;
		input {
			padding: 15px 0;
			border: none;
			font-size: 16px;
			width: 100%;
			height: 100%;
			&:focus {
				border: none;
				outline: none;
			}
		}
	}
}
</style>
