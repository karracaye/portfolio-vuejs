<template>
    <div class="logo-carousel container mx-auto text-white flex justify-center items-center mb-10 p-20">
        <img src="../img/white-intelliseven.png" class="logo-animation small-logo" alt="Logo 1" style="width: 190px; height: 50px; margin-right: 110px;">
        <img src="../img/hotel carlito.png" class="logo-animation small-logo" alt="Logo 2" style="width: 110px; height: 50px; margin-right: 110px;">
        <img src="../img/GPA.png" class="logo-animation small-logo" alt="Logo 3" style="width: 90px; height: 90px; margin-right: 100px;">
        <img src="../img/Lawsys.png" class="logo-animation small-logo" alt="Logo 4" style="width: 70px; height: 70px; margin-right: 110px;">
        <img src="../img/75-anniv-logo.png" class="logo-animation small-logo" alt="Logo 5" style="width: 80px; height: 80px; margin-right: 110px;">
        <img src="../img/INNOVEX 1.png" class="logo-animation small-logo" alt="Logo 6" style="width: 80px; height: 80px; margin-right: 110px;">
        <!-- Duplicate -->
        <img src="../img/white-intelliseven.png" class="logo-animation small-logo" alt="Logo 1" style="width: 190px; height: 50px; margin-right: 110px;">
        <img src="../img/hotel carlito.png" class="logo-animation small-logo" alt="Logo 2" style="width: 110px; height: 50px; margin-right: 110px;">
        <img src="../img/GPA.png" class="logo-animation small-logo" alt="Logo 3" style="width: 90px; height: 90px; margin-right: 100px;">
        <img src="../img/Lawsys.png" class="logo-animation small-logo" alt="Logo 4" style="width: 70px; height: 70px; margin-right: 110px;">
        <img src="../img/75-anniv-logo.png" class="logo-animation small-logo" alt="Logo 5" style="width: 80px; height: 80px; margin-right: 110px;">
        <img src="../img/INNOVEX 1.png" class="logo-animation small-logo" alt="Logo 6" style="width: 80px; height: 80px; margin-right: 110px;">
        <!-- Duplicate -->
        <img src="../img/white-intelliseven.png" class="logo-animation small-logo" alt="Logo 1" style="width: 190px; height: 50px; margin-right: 110px;">
        <img src="../img/hotel carlito.png" class="logo-animation small-logo" alt="Logo 2" style="width: 110px; height: 50px; margin-right: 110px;">
        <img src="../img/GPA.png" class="logo-animation small-logo" alt="Logo 3" style="width: 90px; height: 90px; margin-right: 100px;">
        <img src="../img/Lawsys.png" class="logo-animation small-logo" alt="Logo 4" style="width: 70px; height: 70px; margin-right: 110px;">
        <img src="../img/75-anniv-logo.png" class="logo-animation small-logo" alt="Logo 5" style="width: 80px; height: 80px; margin-right: 110px;">
        <img src="../img/INNOVEX 1.png" class="logo-animation small-logo" alt="Logo 6" style="width: 80px; height: 80px; margin-right: 110px;">
        
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
        if (carousel.scrollLeft >= carousel.scrollWidth / 4) {
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
  white-space: nowrap;
}

.logo-carousel {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  animation: scroll 20s linear infinite;
}

.logo-carousel img {
  margin-right: 20px;
  display: inline-block;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@media (max-width: 768px) {
  .logo-carousel img {
    margin-right: 10px; /* Adjust spacing for smaller screens */
    width: 70px; /* Adjust image sizes for smaller screens */
    height: auto;
  }
}

@media (max-width: 480px) {
  .logo-carousel img {
    width: 50px; /* Further adjust image sizes for very small screens */
    height: auto;
  }
}
</style>
