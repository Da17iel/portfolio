<script setup>
import BasicLayout from "@/Layouts/BasicLayout.vue";
import ApprenticeFinalProject from "@/Components/Experiences/ApprenticeFinalProject.vue";
import ForumProject from "@/Components/Experiences/ForumProject.vue";

defineOptions({
    layout: BasicLayout,
})

</script>

<template>
    <Head title="Erfahrung" />

    <section class="my-44 mx-24">
        <h1 class="siteTitle">Meine Erfahrung</h1>
        <p>Erfahrung ist nichts einfaches was schnell aufgezählt werden kann. Also werde ich mich hier stark limitieren müssen. </p>

        <ApprenticeFinalProject />

        <ForumProject />
    </section>
</template>

<style scoped>

</style>
