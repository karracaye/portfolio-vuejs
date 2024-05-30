<template>
   <header class=" bg-gray-500 flex items-center justify-between p-5 h-[5rem] z-10 relative" style="background-color: rgba(255, 255, 255, 0);">
      <div class="logo">
        <img src="https://i.ibb.co/jGd34HR/K.png" alt="K" border="0">
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
        </ul>
      </nav>
    </header>
  <div class="z-0">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <NuxtWelcome /> -->
  </div>
  <div>footer</div>
</template>
