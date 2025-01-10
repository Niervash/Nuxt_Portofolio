<template>
  <nav
    class="fixed top-0 left-0 w-full backdrop-blur-lg bg-[#F8F8F8]/30 shadow-md z-50"
  >
    <div
      class="container mx-auto flex justify-between items-center px-4 py-4 relative"
    >
      <div class="text-2xl text-gray-800 font-bold hover:text-[#4287f5]">
        <a href="#hero">Julian Witjaksono</a>
      </div>

      <!-- Hamburger -->
      <button
        class="sm:hidden flex flex-col justify-center items-center w-8 h-8 relative"
        @click="toggleMenu"
      >
        <span
          class="block w-full h-1 bg-gray-800 rounded transition-transform duration-300"
          :class="{ 'rotate-45 translate-y-[10px]': menuOpen }"
        ></span>
        <span
          class="block w-full h-1 bg-gray-800 rounded mt-1 transition-opacity duration-300"
          :class="{ 'opacity-0': menuOpen }"
        ></span>
        <span
          class="block w-full h-1 bg-gray-800 rounded mt-1 transition-transform duration-300"
          :class="{ '-rotate-45 -translate-y-[10px]': menuOpen }"
        ></span>
      </button>

      <ul
        ref="menu"
        :class="[
          menuOpen ? 'translate-x-0' : 'translate-x-full',
          'absolute top-16 right-0 backdrop-blur-lg bg-[#F8F8F8]/30 shadow-md rounded-lg w-2/3 sm:w-auto sm:static sm:translate-x-0 sm:shadow-none sm:flex sm:space-x-6 sm:items-center sm:bg-transparent font-medium transition-transform duration-300',
        ]"
      >
        <li class="py-4 sm:py-0 text-center">
          <a href="#about" class="hover:text-[#4287f5] block" @click="closeMenu"
            >About</a
          >
        </li>
        <li class="py-4 sm:py-0 text-center">
          <a
            href="#projects"
            class="hover:text-[#4287f5] block"
            @click="closeMenu"
            >Portofolio</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<!-- flex font-medium space-x-6 -->

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const menuOpen = ref(false);
    const menuRef = ref(null);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const closeMenu = () => {
      menuOpen.value = false;
    };

    const handleClickOutside = (event) => {
      if (menuRef.value && !menuRef.vvalue.contains(event.target)) {
        closeMenu();
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    return { menuOpen, toggleMenu, closeMenu, menu: menuRef };
  },
};
</script>

<style scoped>
body {
  padding-top: 64px;
}
</style>
