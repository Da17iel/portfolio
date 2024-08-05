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
            <h1 class="text-white text-center pt-[30vh] text-[100px]">Mein Portfolio</h1>
            <p class="text-white text-center">Ein Portfolio von Daniel Greil</p>
        </div>
    </section>

    <section>
        <div class="h-screen py-12 px-20">
            <p class="text-2xl">Wer bin ich? Was mache ich? Was sind meine Qualitäten?</p>
            <p class="mt-2">All diese Fragen und noch mehr werde mithilfe von dieser Website beantworten</p>
        </div>
    </section>
</template>

<style scoped>

</style>
