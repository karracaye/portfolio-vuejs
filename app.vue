<template>
  <div class="relative">
    <div class="h-screen w-screen absolute main-image"></div>
    <!-- <img src="https://i.ibb.co/n18WzZv/Background-Karra.png" class="h-screen w-screen absolute" alt="" srcset=""> -->

    <!-- <img class="w-screen h-screen object-cover absolute" src="https://i.ibb.co/n18WzZv/Background-Karra.png" border="0" alt="Full Screen Image"> -->
    <header class="font-jakartSans w-screen  flex items-center justify-center p-5 h-[2rem] z-[9999] relative">
      <div class="glass-container fix-this">
        <div class="logo w-16 h-16 p-3">
        <img src="./public/img/K.png" alt="K" border="0">
      </div>
      <nav>
        <ul class="flex space-x-10 items-center text-sm">
          <li><NuxtLink to="/">HOME</NuxtLink></li>
          <li><NuxtLink to="/">WORK</NuxtLink></li>
          <li><NuxtLink to="/portfolio">GALLERY</NuxtLink></li>
          <li class="bg-white px-3 py-2 text-black rounded-sm"><NuxtLink to="/portfolio">LET'S TALK</NuxtLink></li>

        </ul>
      </nav>
      </div>
    </header>
    <div class="font-jakartSans w-screen h-max">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <!-- <NuxtWelcome /> -->
    </div>
  </div>
  
</template>
