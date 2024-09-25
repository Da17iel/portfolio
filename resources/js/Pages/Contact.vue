<script setup>
import BasicLayout from "@/Layouts/BasicLayout.vue";
import ContactMeLinkedIn from "@/Components/ContactMeLinkedIn.vue";
import ContactMeEMail from "@/Components/ContactMeEMail.vue";
import ContactMeGitHub from "@/Components/ContactMeGitHub.vue";

defineOptions({
    layout: BasicLayout,
})
</script>

<template>
    <Head title="Kontakt" />

    <section class="my-44 flex justify-center">
        <div class="flex flex-col w-3/4">
            <h1 class="siteTitle">Kontakt</h1>

            <p class="my-12">Sie möchten mich kontaktieren?</p>

            <p>Da biete ich Ihnen mehrere Möglichkeiten</p>

            <ContactMeLinkedIn />

            <ContactMeEMail />

            <ContactMeGitHub />
        </div>
    </section>
</template>

<style scoped>

</style>
