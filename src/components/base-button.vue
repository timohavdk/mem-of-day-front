<script lang = "ts" setup>
import { computed, defineProps, StyleValue} from 'vue';

const props = defineProps({
    title: { type: String },
    icon: { type: String, default: ''},
});

const styles = computed<StyleValue>(() => {
    if ('' === props.icon) {
        return {};
    }

    return { 'background-image': `url(${props.icon})` }
})
</script>
    
<template>
    <button :class="['base-button', {'base-button_no-image': icon === ''}]">
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
    padding: 12px 45px;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    transition: .2s;
    transform: translateX(0);
    max-width: 211px;

    &_no-image {
        gap: 0;
    }

    &:hover {
        transform: translateY(-10px);
    }

    &__title {
        display: block;
        color: #000;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
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
