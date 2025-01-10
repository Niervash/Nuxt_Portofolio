<template>
    <div>
        <Navbar />
        <main class="pt-16">
            <slot />
        </main>
        <SpeedInsights/>
    </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue';
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>