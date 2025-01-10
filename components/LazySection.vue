<template>
    <div ref="sectionRef">
        <slot v-if="isVisible" />
    </div>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

const sectionRef = ref(null);
const isVisible = ref(false);

let observer;

const handleIntersect = (entries) => {
    if (entries[0].isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
    }
};

onMounted(() => {
    observer = new IntersectionObserver(handleIntersect, {
        threshold: 0.1,
    });
    if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
    if (observer) observer.disconnect();
})

</script>