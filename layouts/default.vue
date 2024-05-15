<script setup lang="ts"></script>

<template>
	<div class="app">
		<header class="app__header">
			<h1 class="app__title title title_big">День дня</h1>
		</header>
		<main>
			<slot />
		</main>
		<base-footer class="app__footer"/>
	</div>
</template>

<style lang="scss">
@import "~/assets/styles/style";

.app {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&__header {
		margin-top: 52px;
		position: sticky;
		top: 0;
		background-color: #fff;
		width: 100%;
	}

	&__title {
		text-align: center;
	}

	&__footer {
		position: fixed;
		bottom: 20px;
	}
}
</style>
