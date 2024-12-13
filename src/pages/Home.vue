<template>
    <div class="bg-custom flex justify-center items-center text-center w-48 h-48 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Numbers
            :test="test"
            v-model:test2="test2"
            :test3="test3"
            :sum="sum"
            class="bg-amber-400"
        >
            <p class="text-2xl text-white">Slot content</p>
        </Numbers>
    </div>
    <input type="number" v-model="test3.number" class="border p-2">
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

const router = useRouter()
const route = useRoute()

let test = 1;
const test2 = ref(2)
const test3 = reactive({
    number: 3,
})

const array = [1, 2, 3, 4, 5]
console.log('created');

const sum = computed(() => {
    return test + test2.value + test3.number
})

function up() {
    test +=1;
    test2.value +=1;
    test3.number +=1;
}

function down() {
    test -=1;
    test2.value -=1;
    test3.number -=1;
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
  try {
    const res2 = await $axios.post('/companies', {
      test: 'asdasdasd'
    }, {
      params: {
        asd:'asdasdsa',
      },
      headers: {
        'content-type': 'multipart/form-data',
      }
    })
  } catch (error) {
    console.log(error)
  }
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
