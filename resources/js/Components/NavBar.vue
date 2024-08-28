<script setup>

import {Link} from "@inertiajs/vue3";

defineProps({
    textColor: String,
})

</script>

<template>
    <div>
        <ul class="flex space-x-10">
            <Link :href="route('Homepage')" :class="textColor">Homepage</Link>
            <Link :href="route('Contact')" :class="textColor">Kontakt</Link>
            <Link :href="route('AboutMe')" :class="textColor">Über mich</Link>
            <Link :href="route('Experience')" :class="textColor">Erfahrung</Link>
            <Link :href="route('References')" :class="textColor">Referenzen</Link>
        </ul>
    </div>
</template>

<style scoped>

</style>
