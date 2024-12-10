<template>
    <div class="text-xl" >
        <p>
            {{ test }}
        </p>
        <p class="text-custom">{{ test2 }}</p>
        <p>{{ test3.number }}</p>
        <p>{{ sum }}</p>
        <slot/>
    </div>
</template>

<script setup>
import {computed, onBeforeUnmount, onUnmounted} from "vue";

const props = defineProps({
    test: Number,
    test2: {
        type: [Number, String],
        required: true
    },
    test3: {
        type: Object
    },
    sum: {
        type: Number
    },
})

const backgroundColor = computed(() => {
    return {
        'bg-red-600': props.test2 > 4,
        'bg-green-600': props.test2 <= 4,
    }
})

console.log('Number component created')

onBeforeUnmount(() => {
    console.log('Number component before unmounted')
})

onUnmounted(() => {
    console.log('Number component unmounted')
})
</script>
