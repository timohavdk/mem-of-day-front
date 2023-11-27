<template>
  <div class="generate">
    <img class="generate__image image" src="../assets/mock-day-of-day.jpeg"/>
    <base-button class="generate__button" :title="'Сохранить на устройтсво'" :icon="disk"/>
    <base-button class="generate__button" :title="'Поделиться праздником'" :icon="share"/>
    <base-button class="generate__button" :title="'Сохранить в общую коллекци'" :icon="collection"/>
  </div>
</template>

<script lang="ts">
import BaseButton from '../components/base-button.vue';
import Collection from '../assets/collection.svg';
import Share from '../assets/share.svg';
import Disk from '../assets/disk.svg';

export default {
    name: 'Generate',
    components: {
        BaseButton,
    },
    setup() {
        const collection = Collection;
        const share = Share;
        const disk = Disk;

        return {
            collection,
            share,
            disk,
        }
    }
}
</script>

<style lang="scss">
.generate {
    max-width: 260px;
    width: 100%;
    padding: 24px;
    border: 1px solid #000;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    &__image {
        width: 200px;
        object-fit: cover;
    }
}
</style>