<script setup>
import {onMounted, ref} from "vue";
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
    <header
        :class="'fixed w-full flex justify-between px-14 py-8 font-bold text-xl z-50 ' + (!showNavBarBackground && $page.component === 'Homepage' ?  'bg-none text-white' : 'bg-white text-black shadow-xl')">
        <p>Mein Portfolio</p>

        <NavBar
            :text-style="(!showNavBarBackground && $page.component === 'Homepage' ?
                'text-white hover:text-white hover:underline ' :
                'text-black hover:text-black hover:underline')"/>
    </header>
</template>

<style scoped>

</style>
