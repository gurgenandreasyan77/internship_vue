<template>
    <div class="text-xl" >
        <p>
            {{ test }}
        </p>
        <p class="text-custom">{{ test2 }}</p>
        <p>{{ test3.number }}</p>
        <p>{{ sum }}</p>
        <input class="border border-red" type="number" v-model="customTest">
        <slot/>
    </div>
</template>

<script setup>
import {computed, onBeforeUnmount, onUnmounted, ref, toRef, watch} from "vue";

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

const emit = defineEmits(['update:test2']);
const customTest = toRef(props.test2)

watch(props.test2, () => {
  customTest.value = props.test2
})

watch(customTest, () => {
  console.log(customTest.value, props.test2);
  if (customTest.value !== props.test2) {
    emit('update:test2', customTest.value);
  }
})



const input = ref('')
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
