<template>
	<footer class="footer">
		<base-button @base-button-click="copyClickHandler" :icon="share"/>
		<router-link v-if="!isHome" to="/">
			<base-button :icon="home"/>
		</router-link>
		<router-link v-if="!isCollection" to="/collection">
			<base-button :icon="collection"/>
		</router-link>
		<router-link v-if="!isGenerate" to="/generate">
			<base-button :icon="generate"/>
		</router-link>
		<push-notification :text="'Ссылка скопированна'" :isMount="isMountPushNotification"/>
	</footer>
</template>

<script lang="ts">
import Collection from '../assets/collection.svg';
import Share from '../assets/share.svg';
import Home from '../assets/home.svg';
import Generate from '../assets/generate.svg';
import {ref} from 'vue';

export default {
	name:  'base-footer',
	props: {},
	emits: ['show-notification'],
	setup(props, {emit}) {
		const collection = Collection;
		const share      = Share;
		const home       = Home;
		const generate   = Generate;

		const router                  = useRouter();
		const isHome                  = ref(false);
		const isCollection            = ref(false);
		const isGenerate              = ref(false);
		const isMountPushNotification = ref(false);

		onBeforeMount(() => {
			checkLocation();

			router.afterEach(() => {
				checkLocation();
			});
		});

		const copyClickHandler = async () => {
			const result = await copyLink();

			if (result) {
				showNotificationHandler();
			}
		};

		const copyLink = async () => {
			console.log('Text: ', `${window.location.href}`)

			try {
				await navigator.clipboard.writeText(`${window.location.href}`);

				return true;
			} catch (err) {
				console.log('Ошибка копирования ссылки: ', err);

				return false;
			}
		};

		const showNotificationHandler = () => {
			isMountPushNotification.value = true;

			setTimeout(() => {
				isMountPushNotification.value = false;
			}, 2000);
		}

		const checkLocation = () => {
			isHome.value       = ('/' === location.pathname);
			isCollection.value = ('/collection' === location.pathname);
			isGenerate.value   = ('/generate' === location.pathname);
		}

		return {
			collection,
			share,
			home,
			generate,
			isHome,
			isCollection,
			isGenerate,
			isMountPushNotification,
			showNotificationHandler,
			copyClickHandler
		}
	}
}
</script>

<style>
.footer {
	display:         flex;
	align-items:     center;
	justify-content: center;
	gap:             12px;
	z-index:         1000;
}
</style>
