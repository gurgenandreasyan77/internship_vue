import {defineStore} from "pinia";
import {computed, reactive, ref} from "vue";

export const useNumbersStore = defineStore('numbers', () => {

    const testNumber1 = ref(1)
    const testNumber2 = ref(5)
    const testNumber3 = ref(3)
    const user = reactive({

    })

    function setTestNumber1(number) {
        testNumber1.value = number
    }

    function setTestNumber2(number) {
        testNumber2.value = number
    }

    function setTestNumber3(number) {
        testNumber3.value = number
    }

    async  function login(data) {
        // todo axios
    }

    const sum = computed(() => {
        return testNumber1.value + testNumber2.value + testNumber3.value
    })

    return {testNumber1, testNumber2, testNumber3, setTestNumber1, setTestNumber2, setTestNumber3, sum}
})