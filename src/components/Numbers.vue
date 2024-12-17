<template>
    <div class="text-xl" >
        <p>
            {{ numberStore.testNumber1 }}
        </p>
        <p class="text-custom">{{ numberStore.testNumber2 }}</p>
        <p>{{ numberStore.testNumber3 }}</p>
        <p>{{ sum }}</p>
        <input class="border border-red" type="number" v-model="numberStore.testNumber2">
        <slot/>
    </div>
</template>

<script setup>
import {computed, onBeforeUnmount, onUnmounted, ref, toRef, watch} from "vue";
import {useNumbersStore} from "@/store/numbersStore.js";

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
const numberStore = useNumbersStore()

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
