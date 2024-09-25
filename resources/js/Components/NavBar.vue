<script setup>

import {Link} from "@inertiajs/vue3";

defineProps({
    textStyle: String,
})

</script>

<template>
    <div>
        <ul class="flex space-x-10">
            <Link :href="route('Homepage')" :class="textStyle">Homepage</Link>
            <Link :href="route('Contact')" :class="textStyle">Kontakt</Link>
            <Link :href="route('AboutMe')" :class="textStyle">Über mich</Link>
            <Link :href="route('Experience')" :class="textStyle">Erfahrung</Link>
            <Link :href="route('References')" :class="textStyle">Referenzen</Link>
        </ul>
    </div>
</template>

<style scoped>

</style>
