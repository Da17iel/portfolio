<script setup>
import {onMounted, ref} from "vue";

const showQuestionAnimation = ref(false);

const handleScroll = () => {
    const threshold = 150;
    showQuestionAnimation.value = window.scrollY > threshold;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})

</script>

<template>
    <div v-if="showQuestionAnimation" class="flex flex-col gap-12">
        <p class="text-[40px] animate-slideLeftInDelay1s">Wer bin ich?</p>
        <p class="text-[40px] ml-[10vw] animate-slideLeftInDelay2s">Was mache ich?</p>
        <p class="text-[40px] ml-[25vw] animate-slideLeftInDelay3s">Was sind meine Qualitäten?</p>
    </div>
    <p class="mt-12 text-xl italic text-center">All diese Fragen und noch mehr werde mithilfe von dieser Website beantworten</p>
</template>

<style scoped>

</style>
