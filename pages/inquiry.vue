<template>
    <div class="h-max w-screen bg-[#191919] mt-[-2.5rem] relative overflow-hidden">
        <div class="document text-center top-0 left-0 right-0">
        <p class="text-white text-8xl font-thin mb-5">INQUIRE</p>
        <p class="text-white text-lg font-thin opacity-50 mb-4 pb-10">Thank you for your interest in my work! I’m passionate about creating intuitive and engaging user experiences that meet the unique needs of each project. If you have a question, want to collaborate, or simply wish to discuss design ideas, I’d love to hear from you. Please fill out the inquiry form, and I will get back to you as soon as possible. Let’s create something amazing together!</p>
        <div class="max-w-4xl mx-auto p-8 rounded-lg shadow-lg opacity-3">
    <h2 class="text-2xl font-thin mb-4 text-center text-white text-">Inquiry Form</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4 text-left">
        <label class="block text-gray-700 pb-3 text-white" for="name">Name</label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          required
          class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Juan Dela Cruz"
        />
      </div>

      <div class="mb-4 text-left">
        <label class="block text-gray-500 pb-3 text-white" for="email">Email</label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          required
          class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="@gmail.com"
        />
      </div>

      <div class="mb-4 text-left">
        <label class="block text-gray-700 pb-3 text-white" for="subject">Subject</label>
        <input
          v-model="formData.subject"
          type="text"
          id="subject"
          required
          class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Subject"
        />
      </div>

      <div class="mb-4 text-left">
        <label class="block text-gray-700 pb-3 text-white" for="message">Message</label>
        <textarea
          v-model="formData.message"
          id="message"
          required
          class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          rows="4"
          placeholder="Type here . . . "
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-700"
      >
        Send Inquiry
      </button>
    </form>
  </div>
    <p class="text-gray-500 pt-10"> You can also send inquiries directly to my email address for better communication. </p>
    <p class="text-gray-500 pt-2"> Thank you and have a nice day! </p>
    <p class="text-gray-500 pt-2"> Email Address: karahcaesantillan@gmail.com </p>
      
      
  
      
    
  
  
  
  
  
  
  
  
    </div>
    <Footer />
  </div>
  </template>
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          subject: '',
          message: '',
        },
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission logic here (e.g., send data to an API or email)
        console.log("Form Submitted", this.formData);
        // Clear the form after submission
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: '',
        };
        alert("Your inquiry has been submitted!");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add additional styles here if needed */
  </style>