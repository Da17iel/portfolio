<script setup>
import BasicLayout from "@/Layouts/BasicLayout.vue";
import {onMounted} from "vue";
import HomePageInitialQuestions from "@/Components/HomePageInitialQuestions.vue";
import HomePageShortAboutMe from "@/Components/HomePageShortAboutMe.vue";

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
        <div class="h-[80vh] flex flex-col justify-center py-12 px-20">
            <HomePageInitialQuestions />
        </div>
    </section>

    <hr>

    <section>
        <div class="h-screen py-12 px-20">
            <HomePageShortAboutMe />
        </div>
    </section>
</template>

<style scoped>

</style>
