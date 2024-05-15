<template>
	<div class="home">
		<h2 class="home__title title title_medium">Сервис для генерации изображений "День дня". Доставим вам кринжа.</h2>
		<router-link to="/generate">
			<base-button class="home__button" :title="'Сгенерировать изображение'" :icon="generate"/>
		</router-link>
		<router-link to="/collection">
			<base-button class="home__button" :title="'Коллекция'" :icon="collection"/>
		</router-link>
		<h3 class="home__decription title title_small">Сегодня:</h3>
		<img class="home__image image" :src="imageUrl" :alt="imageTitle"/>
	</div>
</template>

<script lang="ts">
import useMemStore from '~/stores/mem-store';
import Collection from '../assets/collection.svg';
import Generate from '../assets/generate.svg';

export default {
	setup() {
		const store = useMemStore();

		useAsyncData('mem-of-day', () => store.fetchMemOfDayImage().then(() => true));

		const collection = Collection;
		const generate   = Generate;

		const imageUrl   = computed(() => store.memOfDayImageUrl);
		const imageTitle = computed(() => store.memOfDayTitle);

		return {
			collection,
			generate,
			imageUrl,
			imageTitle
		}
	}
}
</script>

<style lang="scss">
.home {
	display:        flex;
	flex-direction: column;
	align-items:    center;
	padding:        0 30px 0 30px;

	&__title {
		max-width:     300px;
		margin-bottom: 30px;
		text-align:    center;
	}

	&__button {
		margin-bottom: 20px;
	}

	&__description {
		margin-bottom: 10px;
	}

	&__image {
		width: 300px;
		object-fit: cover;
	}
}
</style>
