<template>
  <div class="h-full w-full overflow-hidden">
    <!-- Slides -->
    <div
      v-for="(image, index) in images"
      :key="index"
      class="absolute inset-0 transition-transform duration-700"
      :class="{
        'opacity-100 translate-x-0': currentIndex === index,
        'opacity-0 translate-x-full': currentIndex !== index
      }"
    >
      <img :src="image" alt="Carousel Image" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  setup() {
    const currentIndex = ref(0);
    const images = [
      "https://plus.unsplash.com/premium_photo-1661758351472-52ed02e99496?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661758351472-52ed02e99496?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];
    const totalSlides = images.length;
    let interval = null;

    const next = () => {
      currentIndex.value = (currentIndex.value + 1) % totalSlides;
    };

    const prev = () => {
      currentIndex.value =
        (currentIndex.value - 1 + totalSlides) % totalSlides;
    };

    // Auto-play
    const startAutoplay = () => {
      interval = setInterval(next, 10_000);
    };

    const stopAutoplay = () => {
      clearInterval(interval);
    };

    onMounted(() => {
      startAutoplay();
    });

    onBeforeUnmount(() => {
      stopAutoplay();
    });

    return { currentIndex, next, prev, images };
  },
};
</script>

<style>
.opacity-100 {
  opacity: 1;
  transform: translateX(0);
}

.opacity-0 {
  opacity: 0;
  transform: translateX(-100%);
}

.translate-x-full {
  transform: translateX(100%);
}

.transition-transform {
  transition: all 0.7s ease-in-out;
}
</style>
