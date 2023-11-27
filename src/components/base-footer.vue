<template>
    <footer class="footer">
        <base-button @base-button-click="baseButtonClickHandler" :icon="share" />
        <router-link v-if="!isHome" to="/">
            <base-button  :icon="home" />
        </router-link>
        <router-link v-if="!isCollection" to="/collection">
            <base-button  :icon="collection" />
        </router-link>
        <router-link v-if="!isHome && !isGenerate" to="/generate">
            <base-button  :icon="generate" />
        </router-link>
    </footer>
</template>

<script lang="ts">
import BaseButton from './base-button.vue';
import Collection from '../assets/collection.svg';
import Share from '../assets/share.svg';
import Home from '../assets/home.svg';
import Generate from '../assets/generate.svg';
import { onMounted, ref } from 'vue';

export default {
    components: {
        BaseButton,
    },
    props: {},
    emits: ['show-notification'],
    setup(props, {emit}) {
        const collection = Collection;
        const share = Share;
        const home = Home;
        const generate = Generate;

        const isHome = ref(false);

        const isCollection = ref(false);
        
        const isGenerate = ref(false);

        onMounted(() => {
            window.addEventListener('change-page', () => {
                isHome.value = ('/' === location.pathname);
                isCollection.value = ('/collection' === location.pathname);
                isGenerate.value = ('/generate' === location.pathname);
            });
        });

        const baseButtonClickHandler = () => {
            console.log(3453453534);
            
            emit('show-notification');
        }

        return {
            collection,
            share,
            home,
            generate,
            isHome,
            isCollection,
            isGenerate,
            baseButtonClickHandler,
        }
    }
}
</script>

<style>
.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    z-index: 1000;
}
</style>