<template>
      <div class="container h-screen mt-[5rem] relative z-20">
        <div class="text-white w-screen d-flex justify-center items-center">
          <div class="d-flex items-center justify-center text-center mt-[22rem]">
            <p class="text-[12rem] text-white font-babylonica me-name">Karra Caye</p>
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

          <a href="/document" class="relative">
            <img src="../public/img/MOCK UP 02.png" alt="Sample Image" class="w-full h-full object-cover rounded-sm gallery-img">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div class="circle glassy">
                <i class="fas fa-arrow-right text-gray"></i>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gray-300 bg-opacity-80 p-3 m-10 flex justify-between gallery-info">
              <p class="text-sm font-extralight text-white p-2">DOCUMENT</p>
              <p class="text-sm font-extralight text-white p-2">MOBILE</p>
            </div>
          </a>

          <a href="/benea" class="relative">
            <img src="../public/img/MOCK UP - 01.png" alt="Sample Image" class="w-full h-full object-cover rounded-sm gallery-img">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div class="circle glassy">
                <i class="fas fa-arrow-right text-gray"></i>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gray-300 bg-opacity-80 p-3 m-10 flex justify-between gallery-info">
              <p class="text-sm font-extralight text-white p-2">BENEA</p>
              <p class="text-sm font-extralight text-white p-2">WEB DESIGN</p>
            </div>
          </a>
          <div class="relative">
            <img src="../public/img/MOCK UP-03.png" alt="Sample Image" class="w-full h-full object-cover rounded-sm gallery-img">
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
            <img src="../public/img/MOCK UP- 04.png" alt="Sample Image" class="w-full h-full object-cover rounded-sm gallery-img">
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
          <div class="text-white font-extralight flex items-center justify-center text-center mt-8 p-16">
            <div>
              <p class="text-sm opacity-30 ">METHOD INSIGHTS</p>
              <p class="text-7xl opacity-75 p-5"> Building Your Website</p>
              <p class="text-6xl opacity-75 font-serif steps">One Step at a Time.</p>
              <p class="text-lg opacity-30 p-6">Your web design will be meticulously tailored to precisely <br> match your unique requirements and preferences.</p>
             <div class="flex justify-center items-center relative flex-col gap-4">
                <div class="circle-glass">
                  <i class="fas fa-arrow-down text-gray opacity-50"></i>
                </div>
               <div class="bg-white opacity-5 w-px h-48 " />
             </div>


             <!-- ITEM CARD 1 RIGHT -->
             <div class="grid grid-cols-3 pt-7 ">
              <div></div>

              <div class="flex justify-center items-center relative flex-col gap-4">
                <p class="text-xs circle-glass">01</p>
               <div class="bg-white opacity-5 w-px vertical" />
              </div>
              <div class="circle-glass w-full p-8 no-display">
                <!-- .. -->
                <div class="box m-60 max-w-md w-30 animate-fade-in-up" style="animation-delay: 0s;" ref="recentWork">
                  <div class="content-box w-96 p-3 text-left">
                    <h2 class="text-xs mb-3 opacity-50">ARE WE COMPATIBLE?</h2>
                    <h3 class="text-lg mb-2 opacity-75">LET'S CONNECT </h3>
                    <p class="text-sm mb-5 opacity-30"> Before we start, let's ensure I can assist you effectively. What functionalities do you need for your new website? What's prompting the need for it? Clarifying your objectives helps us tackle challenges and set goals. </p>
                      <i class="fas fa-phone-alt text-gray opacity-50 mr-4"></i>
                      <i class="fas fa-video text-gray opacity-50"></i>
                  </div>
                </div>
              </div>
             </div>

             <!-- ITEM CARD 2 LEFT -->
             <div class="grid grid-cols-3 pt-7">
              <div class="circle-glass w-full p-7 no-display">
                <!-- .. -->
                <div class="box max-w-md w-30 box-card animate-fade-in-up left-box"  style="animation-delay: 0.3s;">
                  <div class="content-box w-96 p-3 text-left ">
                    <h2 class="text-xs mb-2 opacity-50">PLANNING FOR SUCCESS</h2>
                    <h3 class="text-lg mb-3 opacity-75">THE CONCEPT & STRATEGY</h3>
                    <p class="text-sm mb-3 opacity-30"> We collaborate to develop a roadmap that merges your goals with your audience's needs. This roadmap guides the creation of initial wireframes and an interactive prototype, offering a clear vision of the website's layout and user experience.</p>
                    <div class="logo flex items-center">
                    <img src="../public/img/figma-transparent.png" alt="Figma Logo" class="text-gray opacity-50 figma-logo">
                    <img src="../public/img/XD.png" alt="xd Logo" class="text-gray opacity-50 xd-logo">
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-center items-center relative flex-col gap-4">
                <p class="text-xs circle-glass">02</p>
               <div class="bg-white opacity-5 w-px h-48 vertical"/>
              </div>
                <div></div>
             </div>

             <!-- ITEM 3 RIGHT -->
             <div class="grid grid-cols-3 pt-7">
              <div></div>

              <div class="flex justify-center items-center relative flex-col gap-4">
                <p class="text-xs circle-glass">03</p>
               <div class="bg-white opacity-5 w-px vertical " />
              </div>

              <div class="circle-glass w-full p-8 no-display">
                <!-- .. -->
                <div class="box m-60 max-w-md animate-fade-in-up w-30"  style="animation-delay: 0.6s;">
                  <div class="content-box w-96 p-3 text-left">
                    <h2 class="text-xs mb-2 opacity-50">INTERACTIVE PROTOTYPE</h2>
                    <h3 class="text-lg mb-4 opacity-75">WEB & MOBILE DESIGN</h3>
                    <p class="text-sm mb-5 opacity-30">Prepare for the transformation. Drawing from your initial concept, I'll fashion a premium screen design finely tuned to your brand. This web design isn't just about standing out—it's about resonating with your audience and delivering seamless user experiences.</p>
                  </div>
                </div>
              </div>
             </div>

             <!-- ITEM 4 LEFT -->
             <div class="grid grid-cols-3 pt-7">
              <div class="circle-glass w-full p-7 no-display">
                <!-- .. -->
                <div class="box max-w-md w-30 box-card animate-fade-in-up left-box"  style="animation-delay: 1s;">
                    <div class="content-box w-96 p-3 text-left ">
                      <h2 class="text-xs mb-2 opacity-50">CROSS-PLATFORM SOLUTION</h2>
                      <h3 class="text-lg mb-3 opacity-75">DEVELOPMENT</h3>
                      <p class="text-sm mb-3 opacity-30">Now, we infuse vitality into your refined design. Expect a bespoke website crafted with a modular web design system and seamless CMS integration. Elevate your online presence with captivating animations that distinguish you from the mundane competition.</p>
                      <div class="logo flex items-center">
                      <img src="../public/img/nuxt.png" alt="nuxt Logo" class="text-gray opacity-50 nuxt-logo mr-2">
                      <img src="../public/img/logo.png" alt="vue Logo" class="text-gray opacity-50 vue-logo mr-1">
                      <img src="../public/img/screenshot_361-removebg-preview.png" alt="tailwind Logo" class="text-gray opacity-50 tailwind-logo mr-1">
                      <img src="../public/img/react-logo.png" alt="react Logo" class="text-gray opacity-50 react-logo mr-2">
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-center items-center relative flex-col gap-4">
                <p class="text-xs circle-glass">04</p>
               <div class="bg-white opacity-5 w-px vertical "/>
              </div>
              <div></div>
             </div>

              <!-- ITEM 5 RIGHT -->
              <div class="grid grid-cols-3 pt-7">
                <div></div>

                  <div class="flex justify-center items-center relative flex-col gap-4">
                    <p class="text-xs circle-glass">05</p>
                  <div class="bg-white opacity-5 w-px vertical " />
                  </div>

                <div class="circle-glass">
                  <!-- .. -->
                  <div class="box m-60 max-w-md w-30">
                    <div class="content-box w-96 p-3 text-left">
                      <h2 class="text-xs mb-2 opacity-50">READY TO GO</h2>
                      <h3 class="text-lg mb-3 opacity-75">WEBSITE ONBOARDING</h3>
                      <p class="text-sm mb-5 opacity-30">Begin a tailored Framer workshop to equip yourself with the abilities to promptly and easily modify your recently launched website. Dive into personalized video tutorials for quick access whenever necessary. Our user-friendly system ensures that editing content on your website feels natural and intuitive.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="text-white font-extralight flex items-center justify-center text-center mt-1 p-10">
              <div>
                <p class="text-sm opacity-30 ">TESTIMONIALS</p>
                <p class="text-7xl opacity-75 p-5"> What my</p>
                <p class="text-6xl opacity-75 mb-3 font-serif steps">clients say</p>
                <p class="text-lg opacity-30 p-6">Unlock the power of real stories. Discover firsthand experiences and successes <br> shared by my valued clients, highlighting the transformative impact of our collaboration.</p>
                <div class="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 mr-5 text-yellow-500">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 mr-5 text-yellow-500">
                      <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 mr-5 text-yellow-500">
                      <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 mr-5 text-yellow-500">
                      <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 mr-5 opacity-30">
                      <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="new-container">
              <div class="testimonials-container">
                  <div class="box max-w-md h-96 w-96 right-box">
                    <div class="box h-96 w-96 right-two-box">
                    </div>
                    <div class="testimonials h-30 w-96 justify-center items-center">
                      <div class="testimonial-content flex items-center">
                        <div class="testimonial-image m-1">
                          <img src="../public/img/pf-4.jpeg" alt="Testimonial Image">
                        </div>
                        <div class="testimonial-text flex justify-between items-center w-full">
                          <p class="text-xs text-white font-thin opacity-70">This is a customer testimonial. It could be a comment about the product or service.</p>
                          <div class="like-icon p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-6 h-6 text-white opacity-50">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="test bottom h-[6rem] w-96 justify-center items-center">
                      <div class="testimonial-content flex items-center">
                        <div class="testimonial-image m-1">
                          <img src="../public/img/pf.jpeg" alt="Testimonial Image">
                        </div>
                      <div class="testimonial-text flex justify-between items-center w-full">
                        <p class="text-xs text-white font-thin opacity-70">From the first conversation and idea exchanges on what and how to develop a website to our endless list of needs.</p>
                        <div class="like-icon p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-6 h-6 text-white opacity-50">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="description-testimonials ml-20">
                <div class="rounded-sm p-5">
                  <p class="description font-thin text-white text-lg opacity-30">Discover firsthand testimonials from my clients, showcasing their experiences collaborating with me and the remarkable outcomes we achieved together. Delve into narratives ranging from triumphs over challenges to the realization of their most ambitious goals. Through these stories, witness the profound impact of our collaboration and the invaluable contributions of my expertise, illustrating the transformative journey we embarked upon together.</p>
              </div>
            </div>
          </div>
          <div class="flex justify-between relative items-center mt-[19em]" style="background-image: url('../public/img/Caye.png');">
            <div class="about-me">
              <img src="../public/img/Caye.png" height="200" width="200" alt="Background Image" class="w-full h-full">
            </div>
            <div class="text-left desc-me pr-[15rem]">
              <p class="text-xs text-white font-thin opacity-50">ABOUT</p>
              <p class="text-5xl text-white mt-3 leading-[60px]">Designing websites that make a <span class="font-serif italic">memorable impact!</span></p>
              <p class="text-lg text-white font-thin opacity-50 mt-5 leading-[30px]">Hi, I'm Karra Caye Santillan, a freelance professional with expertise in top-tier web design, development, and software engineering. 
               My dedication lies in crafting distinctive and impactful solutions tailored to each client's needs. Collaborate with me, and let's transform your ideas into reality!</p>
               <div class="additional-info mt-5">
                <div class="icon-container">
                  <div class="circle glass-effect">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </div>
                <p class="text-xs text-white font-thin">ABOUT ME</p>
                </div>
               
              </div>
              
              
              
          </div>
          <Footer />
          
        </div>
        
       
        
      </div>
      
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import LogoCarousel from '~/components/LogoCarousel.vue';
  

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
  