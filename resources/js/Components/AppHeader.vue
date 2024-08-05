<script setup>
import {onMounted, ref} from "vue";
import {Link} from "@inertiajs/vue3";
import NavBar from "@/Components/NavBar.vue";

const showNavBarBackground = ref(false);

const handleScroll = () => {
    const threshold = 200;
    showNavBarBackground.value = window.scrollY > threshold;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})

</script>

<template>
    <header :class="'fixed w-full flex justify-between px-14 py-8 font-bold text-xl ' + (showNavBarBackground ? 'bg-white shadow-xl' : 'bg-none text-white')">
        <p>Mein Portfolio</p>

        <NavBar/>
    </header>
</template>

<style scoped>

</style>
