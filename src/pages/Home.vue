<template>
    <div class="bg-custom flex justify-center items-center text-center w-48 h-48 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Numbers
            :test="test"
            v-model:test2="test2"
            :test3="test3"
            :sum="numberStore.sum"
            class="bg-amber-400"
        >
            <p class="text-2xl text-white">Slot content</p>
        </Numbers>
    </div>
    <input type="number" v-model="test3" class="border p-2">
  <template v-for="number in array">
    Step {{ number }}
  </template>
  <button @click="up" class="p-4 border mx-8">
    up
  </button>
  <div v-show="test2 > 4">
    <button @click="down"  class="p-4 border mx-8">
      down
    </button>
  </div>
  <!--    <template v-if="test2 > 4">-->
<!--        <button @click="down"  class="p-4 border mx-8">-->
<!--            down-->
<!--        </button>-->
<!--    </template>-->
</template>

<script setup>
import {
    computed,
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onMounted, onUnmounted,
    onUpdated,
    reactive,
    ref,
    watch
} from "vue";
import Numbers from "@/components/Numbers.vue";
import {useRoute, useRouter} from "vue-router";
import {$axios} from "@/plugins/axios.js";
import {useNumbersStore} from "@/store/numbersStore.js";

const router = useRouter()
const route = useRoute()

const numberStore = useNumbersStore()

let test = ref(numberStore.testNumber1);
const test2 = ref(numberStore.testNumber2)
const test3 = ref(numberStore.testNumber3)

const array = [1, 2, 3, 4, 5]
console.log('created');

function up() {
  numberStore.setTestNumber1(numberStore.testNumber1 + 1)
  numberStore.setTestNumber2(numberStore.testNumber2 + 1)
  numberStore.setTestNumber3(numberStore.testNumber3 + 1)
}

function down() {
    numberStore.setTestNumber1(numberStore.testNumber1 - 1)
    numberStore.setTestNumber2(numberStore.testNumber2 - 1)
    numberStore.setTestNumber3(numberStore.testNumber3 - 1)
}

// watch(sum, (value, oldValue) => {
//     console.log(sum.value, oldValue);
// }, {
//     deep: true,
//     immediate: true,
// })

// watch(() => sum.value, (value, oldValue) => {
//     console.log(sum.value, oldValue);
// }, {
//     deep: true,
//     immediate: true,
// })
//
// watch([sum, test, test2], (value, oldValue) => {
//     console.log(sum.value, oldValue);
// }, {
//     deep: true,
//     immediate: true,
// })

async function getSpecifications() {
  // const res = await $axios.get('/companies', {
  //   params: {
  //     asd:'asdasdsa',
  //   }
  // })
  // try {
  //   const res2 = await $axios.post('/companies', {
  //     test: 'asdasdasd'
  //   }, {
  //     params: {
  //       asd:'asdasdsa',
  //     },
  //     headers: {
  //       'content-type': 'multipart/form-data',
  //     }
  //   })
  // } catch (error) {
  //   console.log(error)
  // }
  // const res = await $axios.put('/companies')
  // const res = await $axios.delete('/companies')
}

onBeforeMount(() => {
    console.log('before mounted');
})

onMounted(() => {
    console.log('mounted');
  getSpecifications()
})

onBeforeUpdate(() => {
    console.log('before update')
})

onUpdated(() => {
    console.log('updated')
})

onBeforeUnmount(() => {
    console.log('before unmounted')
})

onUnmounted(() => {
    console.log('unmounted')
})

</script>
