<template>
    <div v-if="isMount" :class="['push-notification__overlay', {'push-notification__overlay_visible': isVisible}]">
        <div :class="['push-notification', {'push-notification_visible': isVisible}]">
            <p class="push-notification__text">{{ text }}</p>
        </div>
    </div>
</template>

<script>
import { watch, ref} from 'vue'
export default {
    name: 'PushNotification',
    props: {
        isMount: { type: Boolean },
        text: { type: String },
        visibleTime: {type: Number},
    },
    setup(props) {
        const isVisible = ref(false);

        watch(() => props.isMount, (currentValue) => {
            setTimeout(() => {
                isVisible.value = currentValue;
            }, 1);

            setTimeout(() => {
                isVisible.value = !currentValue;
            }, props.visibleTime - 300);
        });

        return {
            isVisible
        }
    }
}
</script>

<style lang="scss">
.push-notification {
    position: fixed;
    bottom: -100px;
    padding: 12px;
    border: 1px solid #000;
    background-color: #fff;
    border-radius: 10px;
    transform: translateY(0);
    transition: .3s;

    &_visible {
        transform: translateY(-400px);
    }

    &__overlay {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 1000vh;
        z-index: 2000;
        transition: .3s;

        &_visible {
            background: rgba(0, 0, 0, 0.5);
        }
    }

    &__text {
        color: #000;
        font-family: Inter;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        font-size: 16px;
    }
}
</style>