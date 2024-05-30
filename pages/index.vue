<template>
    <div>
      <!-- Home Section -->
      <div class="h-80 -mt-[5rem]" style="background-image: url('https://i.ibb.co/7bJ0DWH/Karra-2.png'); background-size: cover; background-position: center;">
        <img class="w-screen h-screen object-cover" src="https://i.ibb.co/7bJ0DWH/Karra-2.png" border="0" alt="Full Screen Image">
  
        <div class="absolute top-1/2 right-1/4 transform -translate-y-1/2 translate-x-1/2 text-black">
          <div>
            <p class="text-9xl p-4 font-babylonica fade-in-move-up">Karra Caye</p>
            <p class="text-base font-medium opacity-40">FRONT-END DEVELOPER & UI/UX DESIGNER</p>
            <p class="text-sm opacity-30 mt-4">Behind every outstanding design lies a captivating story. <br> As I invest myself in my work, its success grows.</p>
  
            <div class="flex space-x-3 mt-3 p-1">
              <a href="https://github.com/karracaye" class="bg-black w-10 h-10 flex items-center justify-center p-2 rounded-full transition-transform duration-700 ease-in-out transform hover:scale-110">
                <i class="fab fa-github text-white"></i>
              </a>
              <a href="https://linkedin.com/in/karra-caye-santillan-313429224/" class="bg-black w-10 h-10 flex items-center justify-center p-2 rounded-full transition-transform duration-700 ease-in-out transform hover:scale-110">
                <i class="fab fa-linkedin-in text-white"></i>
              </a>
              <a href="mailto:your-karahcaesantillan@gmail.com" class="bg-black w-10 h-10 flex items-center justify-center p-2 rounded-full transition-transform duration-700 ease-in-out transform hover:scale-110">
                <i class="fas fa-envelope text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <div class="bg-gray-100 py-12 ">
        <div style="height: 500px;">
    </div> 
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold mb-6">
                <span class="font-normal">Recent</span> <span class="font-bold">work..</span>
            </h2>
            <p class="text-sm opacity-50 mt-4">I care about the work I do and the people I do it with. That's why I show up ready everyday to create amazing projects.
                <br> I'm proud to have worked with really cool people, learning powerful insights along the way & gain valuable experience.
                <br> I deeply value the work I undertake and the connections I forge along the way. Each day, I approach my tasks with 
                <br> enthusiasm and dedication, fueled by a passion for creating exceptional projects. It's not just about completing tasks; 
                <br> it's about infusing every endeavor with creativity, precision, and a genuine commitment to excellence.
            </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Example recent work item -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-xl font-semibold mb-2">Project Title</h3>
              <p class="text-gray-600">Project description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" class="block mt-4 text-blue-600 hover:underline">View Project</a>
            </div>
            <!-- Add more recent work items as needed -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  
  
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
  
  <style scoped>
  @keyframes fadeInMoveUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .fade-in-move-up {
    animation: fadeInMoveUp 2s ease-out;
  }
  </style>
  