<template>
    <div class="logo-carousel container mx-auto text-white flex justify-center items-center mb-10 p-20">
        <img src="https://i.ibb.co/JqT6R7b/White-Logo.png" class="logo-animation small-logo" alt="Logo 1" style="width: 190px; height: 50px; margin-right: 110px;">
        <img src="https://i.ibb.co/8Y71gQp/tagaytay-hotel-carlito-white-logo.png" class="logo-animation small-logo" alt="Logo 2" style="width: 110px; height: 50px; margin-right: 110px;">
        <img src="https://i.ibb.co/DQ2FHtz/GPA.png" class="logo-animation small-logo" alt="Logo 3" style="width: 90px; height: 90px; margin-right: 100px;">
        <img src="https://i.ibb.co/MZZbg99/305498352-446799040800489-7047549972492762959-n-removebg-preview.png" class="logo-animation small-logo" alt="Logo 4" style="width: 110px; height: 110px; margin-right: 110px;">
        <img src="https://i.ibb.co/jLfsWjD/75-anniv-logo.png" class="logo-animation small-logo" alt="Logo 5" style="width: 80px; height: 80px; margin-right: 110px;">
        <img src="https://i.ibb.co/HFVbqWn/INNOVEX-1.png" class="logo-animation small-logo" alt="Logo 6" style="width: 80px; height: 80px; margin-right: 110px;">
      <!-- Duplicate -->
        <img src="https://i.ibb.co/JqT6R7b/White-Logo.png" class="logo-animation small-logo" alt="Logo 1" style="width: 190px; height: 50px; margin-right: 110px;">
        <img src="https://i.ibb.co/8Y71gQp/tagaytay-hotel-carlito-white-logo.png" class="logo-animation small-logo" alt="Logo 2" style="width: 110px; height: 50px; margin-right: 110px;">
        <img src="https://i.ibb.co/DQ2FHtz/GPA.png" class="logo-animation small-logo" alt="Logo 3" style="width: 90px; height: 90px; margin-right: 100px;">
        <img src="https://i.ibb.co/MZZbg99/305498352-446799040800489-7047549972492762959-n-removebg-preview.png" class="logo-animation small-logo" alt="Logo 4" style="width: 110px; height: 110px; margin-right: 110px;">
        <img src="https://i.ibb.co/jLfsWjD/75-anniv-logo.png" class="logo-animation small-logo" alt="Logo 5" style="width: 80px; height: 80px; margin-right: 110px;">
        <img src="https://i.ibb.co/HFVbqWn/INNOVEX-1.png" class="logo-animation small-logo" alt="Logo 6" style="width: 80px; height: 80px; margin-right: 110px;">
        
    </div>
</template>
  
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.startCarousel();
    });
  },
  beforeDestroy() {
    this.stopCarousel();
  },
  methods: {
    startCarousel() {
      const scrollSpeed = 1;
      const carousel = this.$refs.carousel;
      const animate = () => {
        carousel.scrollLeft += scrollSpeed;
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
        setTimeout(animate, 10); 
      };
      animate();
    },
    stopCarousel() {
    }
  }
}
</script>
<style scoped>
.logo-carousel-container {
  overflow: hidden;
}

.logo-carousel {
  display: flex;
  animation: scroll 20s linear infinite; 
}

.logo-carousel img {
  margin-right: 20px;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

</style>