<template>
  <LayoutGlobal class="">
    <router-view v-slot="{ Component }">
      <transition :name="$route.meta.animation">
        <component :is="Component" />
      </transition>
    </router-view>
  </LayoutGlobal>
</template>
<script setup lang="ts">
// Imports
import LayoutGlobal from '@/layouts/LayoutGlobal.vue'
</script>
<style>
.slide-left-enter-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-right-leave-active {
  transition: all 0.4s ease-out;
}

/* Left */
.slide-left-enter-to {
  position: absolute;
  right: 0;
}
.slide-left-enter-from {
  position: absolute;
  right: -100%;
}
.slide-left-leave-to {
  position: absolute;
  left: -100%;
}
.slide-left-leave-from {
  position: absolute;
  left: 0;
}

/* Right */
.slide-right-enter-to {
  position: absolute;
  right: 0;
}
.slide-right-enter-from {
  position: absolute;
  right: 100%;
}
.slide-right-leave-to {
  position: absolute;
  left: 100%;
}
.slide-right-leave-from {
  position: absolute;
  left: 0;
}

/* Down */
.slide-down-enter-active,
.slide-down-text-leave-active {
  transition: all 0.4s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
}
</style>
