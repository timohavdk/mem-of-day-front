import {defineStore} from 'pinia';
import {API_MEM_OF_DAY} from '~/urls-config';

const useMemStore = defineStore('memStore', {
	state:   () => ({
		memOfDayImageUrl: '',
		memOfDayTitle:    '',
	}),
	actions: {
		async fetchMemOfDayImage() {
			try {
				const result = await $fetch(API_MEM_OF_DAY);

				this.memOfDayTitle    = result.data.title;
				this.memOfDayImageUrl = result.data.url;
			}
			catch (err) {
				console.log('Ошибка получения изображения дня: ', err);
			}
		},
	},
});

export default useMemStore;
