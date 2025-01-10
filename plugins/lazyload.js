export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('fade-in', {
        mounted(el) {
            const obeserver = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        el.classList.add('visible');
                        obeserver.unobserve(el);
                    }
                },
                { threshold: 0.1 }
            );

            el.classList.add('opacity-0', 'transition-opacity', 'duration-500');
            obeserver.observe(el);
        }
    });
});