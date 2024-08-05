<script setup>

import {Link} from "@inertiajs/vue3";
</script>

<template>
    <div>
        <ul class="flex space-x-10">
            <Link :href="route('Homepage')">Homepage</Link>
            <Link :href="route('Contact')">Kontakt</Link>
            <Link :href="route('AboutMe')">Über mich</Link>
            <Link :href="route('Experience')">Erfahrung</Link>
            <Link :href="route('References')">Referenzen</Link>
        </ul>
    </div>
</template>

<style scoped>

</style>
