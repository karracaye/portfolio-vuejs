<template>
      <div class="container h-screen mt-[5rem] relative z-20">
        <div class="text-white w-screen d-flex justify-center items-center">
          <div class="d-flex items-center justify-center text-center mt-[22rem]">
            <p class="text-[12rem] text-white font-Amsterdam me-name">Karra Caye</p>
            <p class="text-2xl leading-8">FRONT-END DEVELOPER & UI/UX DESIGNER</p>
            <p class="text-md opacity-80 mt-4">Behind every outstanding design lies a captivating story. <br> As I invest myself in my work, its success grows.</p>
            <div class="w-screen justify-center  flex align-middle self-center space-x-3 mt-8 p-1">
                <a href="https://github.com/karracaye" class="bg-white w-10 h-10 flex items-center justify-center p-2 rounded-full transition-transform duration-700 ease-in-out transform hover:scale-110">
                  <i class="fab fa-github text-black"></i>
                </a>
                <a href="https://linkedin.com/in/karra-caye-santillan-313429224/" class="bg-white w-10 h-10 flex items-center justify-center p-2 rounded-full transition-transform duration-700 ease-in-out transform hover:scale-110">
                  <i class="fab fa-linkedin-in text-black"></i>
                </a>
                <a href="mailto:your-karahcaesantillan@gmail.com" class="bg-white w-10 h-10 flex items-center justify-center p-2 rounded-full transition-transform duration-700 ease-in-out transform hover:scale-110">
                  <i class="fas fa-envelope text-black"></i>
                </a>
            </div>
          </div>
        </div>
        <div class="h-max w-screen bg-[#191919]">
          <LogoCarousel />
        <div class="text-white grid grid-cols-3 p-12">
          <div class="box">
            <div class="content">
              <h2 class="text-xs mb-2 opacity-50">01</h2>
              <h3 class="text-lg mb-6 opacity-75">UI/UX DESIGN</h3>
              <p class="text-sm mb-4 opacity-30">With a focus on merging your brand identity 
                <br> and user preferences, I design visually striking websites that engage and captivate your audience.</p>
              <div class="additional-info">
                <div class="icon-container">
                  <div class="circle glass-effect">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </div>
                <p class="text-sm opacity-30">ABOUT UI/UX DESIGN</p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="content">
              <h2 class="text-xs mb-2 opacity-50">02</h2>
              <h3 class="text-lg mb-6 opacity-75">WEB DESIGN</h3>
              <p class="text-sm mb-5 opacity-30">My mission is to sculpt digital landscapes that 
                not only <br>reflect your brand's essence but also resonate deeply with your target audience. 
              </p>
              <div class="additional-info">
                <div class="icon-container">
                  <div class="circle glass-effect">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </div>
                <p class="text-sm opacity-30">ABOUT WEB DESIGN</p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="content">
              <h2 class="text-xs mb-2 opacity-50">03</h2>
              <h3 class="text-lg mb-6 opacity-75">GRAPHIC DESIGN</h3>
              <p class="text-sm mb-5 opacity-30">Creative graphic designs that convey your <br> message effectively and leave a lasting impression on your audience.</p>
              <div class="additional-info">
                <div class="icon-container">
                  <div class="circle glass-effect">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </div>
                <p class="text-sm opacity-30">ABOUT GRAPHIC DESIGN</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-white font-extralight flex justify-between items-center mt-8 p-16">
          <div>
            <p class="text-4xl opacity-75">Selected Work</p>
          </div>
          <div class="flex items-center">
            <div class="circle glass-effect">
              <i class="fas fa-arrow-right"></i>
            </div>
            <p class="text-xs ml-2">SEE ALL</p>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-2 gap-6 p-12 -mt-[4rem]">
          <div class="relative">
            <img src="https://i.ibb.co/fp76QSt/MOCK-UP-02.png" alt="Sample Image" class="w-full h-full object-cover rounded-sm gallery-img">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div class="circle glassy">
                <i class="fas fa-arrow-right text-gray"></i>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gray-300 bg-opacity-80 p-3 m-10 flex justify-between gallery-info">
              <p class="text-sm font-extralight text-white p-2">DOCUMENT</p>
              <p class="text-sm font-extralight text-white p-2">MOBILE</p>
            </div>
          </div>
          <div class="relative">
            <img src="https://i.ibb.co/dg2xPnQ/MOCK-UP-01.png" alt="Sample Image" class="w-full h-full object-cover rounded-sm gallery-img">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div class="circle glassy">
                <i class="fas fa-arrow-right text-gray"></i>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gray-300 bg-opacity-80 p-3 m-10 flex justify-between gallery-info">
              <p class="text-sm font-extralight text-white p-2">BENEA</p>
              <p class="text-sm font-extralight text-white p-2">WEB DESIGN</p>
            </div>
          </div>
          <div class="relative">
            <img src="https://i.ibb.co/rxLPS5J/MOCK-UP-03.png" alt="Sample Image" class="w-full h-full object-cover rounded-sm gallery-img">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div class="circle glassy">
                <i class="fas fa-arrow-right text-gray"></i>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gray-300 bg-opacity-80 p-3 m-10 flex justify-between gallery-info">
              <p class="text-sm font-extralight text-white p-2">JCI</p>
              <p class="text-sm font-extralight text-white p-2">WEB DESIGN</p>
            </div>
          </div>
          <div class="relative">
            <img src="https://i.ibb.co/8mKZN64/MOCK-UP-04.png" alt="Sample Image" class="w-full h-full object-cover rounded-sm gallery-img">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div class="circle glassy">
                <i class="fas fa-arrow-right text-gray"></i>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gray-300 bg-opacity-80 p-3 m-10 flex justify-between gallery-info">
              <p class="text-sm font-extralight text-white p-2">INNOVEX</p>
              <p class="text-sm font-extralight text-white p-2">WEB DESIGN</p>
            </div>
          </div>
        </div>
        <!-- .. --> 
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import LogoCarousel from '~/pages/LogoCarousel.vue';
  
  const recentWorkVisible = ref(false);
  
  const handleScroll = () => {
    const recentWorkEl = document.getElementById('recentWork');
    if (recentWorkEl) {
      const viewportHeight = window.innerHeight;
      const recentWorkOffset = recentWorkEl.getBoundingClientRect().top;
      if (recentWorkOffset < viewportHeight * 0.75) {
        recentWorkVisible.value = true;
        window.removeEventListener('scroll', handleScroll);
      }
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  </script>
  