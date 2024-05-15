<script lang="ts" setup>
defineProps({
	isMount: {type: Boolean},
	text:    {type: String},
});
</script>

<template>
	<transition name="push-notification">
		<div v-if="isMount" class="push-notification">
			<p class="push-notification__text">{{ text }}</p>
		</div>
	</transition>
</template>

<style lang="scss">
.push-notification-enter-active, .push-notification-leave-active {
	transition: .5s ease;
}

.push-notification-enter-from, .push-notification-leave-to {
	transform: translateY(100px);
	opacity:   0;
}

.push-notification {
	position:         fixed;
	bottom:           100px;
	padding:          12px;
	border:           1px solid #000;
	background-color: #fff;
	border-radius:    10px;

	&__text {
		color:       #000;
		font-family: Inter;
		font-style:  normal;
		font-weight: 400;
		line-height: normal;
		font-size:   16px;
	}
}
</style>
