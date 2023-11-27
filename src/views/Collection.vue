<template>
  <div class="collection">
    <h2 class="collection__title title title_medium">Коллеция праздников</h2>
    <div class="collection__image-container">
        <img v-for="i in 20" class="collection__image image" src="../assets/mock-day-of-day.jpeg">
    </div>
  </div>
</template>

<script lang="ts">
export default {
    name: 'Collection',
    setup() {
        return;
    }
}
</script>

<style lang="scss">
.collection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__title {
        max-width: 300px;
        margin-bottom: 30px;
        text-align: center;
    }

    &__image-container {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: center;
    }

    &__image {
        object-fit: cover;
        width: 150px;
        height: 150px;
        gap: 10px
    }
}
</style>