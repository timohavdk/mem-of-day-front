<script setup>
import BaseButton from './components/base-button.vue';
import BaseFooter from './components/base-footer.vue';
import PushNotification from './components/push-notification.vue';
import Collection from './assets/collection.svg';
import Share from './assets/share.svg';
import Home from './assets/home.svg';
import { ref } from 'vue';

const isMountPushNotification = ref(false);

const showNotificationHandler = () => {
    console.log('324234');
    isMountPushNotification.value = true;

    setTimeout(() => {
        isMountPushNotification.value = false;
    }, 2000);
}
</script>

<template>
    <div class="app">
        <header class="app__header">
            <h1 class="app__title title title_big">День дня</h1>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <push-notification :text="'Ссылка скопированна'" :isMount="isMountPushNotification" :visibleTime="2000"/>
        <base-footer class="app__footer" @showNotification="showNotificationHandler"/>
    </div>
</template>

<style lang="scss">
@import "style.scss";

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
