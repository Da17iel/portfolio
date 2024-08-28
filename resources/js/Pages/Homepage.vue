<script setup>
import BasicLayout from "@/Layouts/BasicLayout.vue";

defineOptions({
    layout: BasicLayout,
})

defineProps({
    laravelVersion: String,
    phpVersion: String,
})
</script>

<template>
    <Head title="Mein Portfolio" />

    <section>
        <div class="bg-[url('/images/background-1.jpg')] bg-cover h-screen">
            <h1 class="text-white text-center pt-[30vh] text-[100px] animate-growText ">Mein Portfolio</h1>
            <p class="text-white text-center">Ein Portfolio von Daniel Greil</p>
        </div>
    </section>

    <section>
        <div class="h-screen py-12 px-20">
            <div class="flex flex-col gap-12">
                <p class="text-[40px] animate-slideLeftInDelay1s">Wer bin ich?</p>
                <p class="text-[40px] ml-[10vw] animate-slideLeftInDelay2s">Was mache ich?</p>
                <p class="text-[40px] ml-[25vw] animate-slideLeftInDelay3s">Was sind meine Qualitäten?</p>
            </div>
            <p class="mt-12">All diese Fragen und noch mehr werde mithilfe von dieser Website beantworten</p>
        </div>
    </section>

    <section>
        <div class="h-screen flex gap-20 py-12 px-20">
            <div class="w-1/3 animate-slideLeftIn">
                <img src="/images/Daniel.jpg" alt="Daniel Greil">
            </div>
            <div class="w-full animate-slideRightIn">
                <p class="text-2xl font-bold">Mein Name ist Daniel Greil</p>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
