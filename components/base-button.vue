<script lang = "ts" setup>
import { computed, defineProps} from 'vue';

const emit = defineEmits(['base-button-click'])
const props = defineProps({
    title: { type: String, default: ''},
    icon: { type: String, default: ''},
});

const styles = computed(() => {
    if ('' === props.icon) {
        return {};
    }

    return { 'background-image': `url(${props.icon})` }
})

const clickHandler = () => {
    emit('base-button-click');
}
</script>

<template>
    <button @click="clickHandler" :class="['base-button', {'base-button_no-image': icon === ''}, {'base-button_no-title': title === ''}]">
        <span class="base-button__title">{{ title }}</span>
        <span :class="['base-button__icon', {'base-button__icon_no-image': icon === ''}]" :style="styles"></span>
    </button>
</template>

<style scoped lang = "scss">
.base-button {
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #000;
    background: #FFF;
    padding: 12px 12px;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    transition: .2s;

    &_no-image {
        gap: 0;
    }

    &_no-title {
        gap: 0;
    }

    &:hover {
        background: #f1f1f1;
    }

    &__title {
        display: block;
        color: #000;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        max-width: 240px;
    }

    &__icon {
        display: block;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 24px;
        height: 24px;
        flex-shrink: 0;

        &_no-image {
            width: 0;
            height: 0;
        }
    }
}
</style>
