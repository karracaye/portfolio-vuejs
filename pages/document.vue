<template>
    <div class="h-max w-screen bg-[#191919] mt-[-2.5rem] relative overflow-hidden">
      <div class="document text-center top-0 left-0 right-0">
        <p class="text-white text-8xl font-thin mb-5">Legal Document</p>
        <p class="text-white text-lg font-thin opacity-50">Legal Document streamlines legal document creation, management, and storage <br>with a user-friendly interface and robust features, simplifying the complex and <br>time-consuming process of drafting agreements, contracts, and forms.</p>
        <div class=" flex justify-center items-center mt-[5rem]">
          <div class="box-document flex flex-col items-center justify-center mb-60">
            <p class="text-white text-sm font-thin mb-1">CLIENT</p>
            <p class="text-white text-sm font-thin opacity-50">Intelliseven Inc.</p>
          </div>
          <div class="box-document flex flex-col items-center justify-center mb-60">
            <p class="text-white text-sm font-thin mb-1">TIMELINE</p>
            <p class="text-white text-sm font-thin opacity-50">2 weeks</p>
          </div>
          <div class="box-document flex flex-col items-center justify-center mb-60">
            <p class="text-white text-sm font-thin mb-1">SERVICES</p>
            <p class="text-white text-sm font-thin opacity-50"> Mobile </p>
          </div>
          <div class="box-document flex flex-col items-center justify-center mb-60">
            <p class="text-white text-sm font-thin mb-1">WEBSITE</p>
            <p class="text-white text-sm font-thin opacity-50">Private</p>
          </div>
        </div>
        <div class="more-details flex justify-center items-center mt-[-10rem] mb-7">
            <a href="/moredetails" class="circle"></a>
                <a href="/moredetails" class="text-white text-xs font-thin opacity-50 ml-2">MORE DETAILS</a>
            </div>
            <iframe 
              style="border: 1px solid rgba(0, 0, 0, 0.1);" 
              width="800" 
              height="800" 
              src="https://embed.figma.com/proto/eG3i9EJ3os7gTmB5EO0Y9W/Admin-Dashboard-Mobile-v.1-Design-(DocumentMaker)?node-id=1-188&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A188&embed-host=share" 
              allowfullscreen 
              class="document-photo w-full mb-[6rem]">
            </iframe>
            <div class="grid grid-cols-2 mt-10 gap-4">
            <!-- Left side -->
            <div v-if="sticky" class="text-white text-sm font-thin text-left transition-all sticky">
                <p class="mb-3 opacity-50">CLIENT</p>
                <p class="text-4xl">Concept, Design, and Development. All-in-one.</p>
            </div>
            <div  class="text-white text-sm font-thin text-left transition-all" :style="sticky ? 'visibility:hidden': ''">
                <p class="mb-3 opacity-50">CLIENT</p>
                <p class="text-4xl">Concept, Design, and Development. All-in-one.</p>
            </div>
            <!-- Right side -->
            <div class="box-text text-white text-sm text-left font-thin">
            <p class="text-2xl mb-3">Challenge</p>
            <p class="text-sm opacity-30">Our client was struggling to attract and retain customers due to an outdated and non-responsive website that didn't align with their brand identity.</p>
            </div>
            <!-- Left side -->
            <div class="text-white text-sm font-thin text-left">
            </div>
            <!-- Right side -->
            <div class="box-text text-white text-sm text-left font-thin">
            <p class="text-2xl mb-3">Goal</p>
            <p class="text-sm opacity-30">Our goal was to create a modern and visually appealing website that reflected the client's brand and delivered a seamless user experience. The website needed to be responsive, easy to navigate, and optimized for search engines to improve their online visibility.</p>
            </div>
            <!-- Left side -->
            <div class="text-white text-sm font-thin text-left">
            
            </div>
            <!-- Right side -->
            <div class="box-text text-white text-sm text-left font-thin">
            <p class="text-2xl mb-3">Result</p>
            <p class="text-sm opacity-30">Our team developed a custom website design that was not only visually stunning but also user-friendly and optimized for search engines. The client's website now showcases their products and services in a professional and engaging manner, and has seen a significant increase in organic traffic and customer engagement. The client is thrilled with the final result and has received positive feedback from their customers.</p>
            </div>  
        </div>
    </div>
    <Footer/>
</div>
</template>
  
<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'

    const sticky = ref(false)

    // Function to handle scroll event
    const handleScroll = () => {
        sticky.value = window.pageYOffset > 1300; // Change 300 to the desired scroll position where you want the sticky behavior to start
    }

    // Add event listener when component is mounted
    onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    })

    // Remove event listener when component is unmounted
    onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    })
</script>
<style scoped>
    /* Add styles for sticky class */
    .sticky {
    position: fixed;
    top: 124px;
    left: 124px;
    width: 40%;
    right: 0;
    z-index: 1000; /* Adjust z-index as needed */
    /* Add other styles for sticky behavior */
    }
</style>