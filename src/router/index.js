import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Generate from '../views/Generate.vue';
import Collection from '../views/Collection.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/generate',
            name: 'Generate',
            component: Generate,
        },
        {
            path: '/collection',
            name: 'Collection',
            component: Collection,
        }
    ],
});

