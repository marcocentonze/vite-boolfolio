

<script>
import axios from 'axios';
export default {
    name: 'ContactsView',
    data() {
        return {
           
            
        }
    },
    methods: {
 
        


    },
    mounted() {
       
        
    }
}
</script>


<template> 


<div class="container pt-4">
      <form action="">
        <div class="mb-3">
          <label for="name" class="form-label text-uppercase text-style">Name</label>
          <input type="text" name="name" id="name" class="form-control" placeholder="Mario Rossi"
            aria-describedby="nameHelper">
          <small id="nameHelper" class="text-style-small">Type your name</small>
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label  text-uppercase text-style">phone</label>
          <input type="tel" name="phone" id="phone" class="form-control" placeholder="123456"
            aria-describedby="phoneHelper">
          <small id="phoneHelper" class="text-style-small">Type your phone</small>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label text-uppercase text-style">email</label>
          <input type="text" name="email" id="email" class="form-control" placeholder="nome@gmail.com"
            aria-describedby="emailHelper">
          <small id="emailHelper" class="text-style-small">Type your email</small>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label text-style">Message</label>
          <textarea class="form-control" name="message" id="message" rows="3" placeholder="You can write your message here..."></textarea>
        </div>


        <div class="pb-4">
          <button type="submit" class="btn btn-primary w-100 contact-btn">Send</button>
        </div>

      </form>
    </div>


  </template>


<style>
.text-style {
  color: white; 
  text-shadow: 2px 2px 4px #000000; 
}
.text-style-small {
  color: #d3d32e; 
  font-size: 0.875em; 
  display: block; 
  margin-top: 0.25rem; 
  text-shadow: 1px 1px 2px #000000; 
  text-shadow: 2px 2px 4px #000000; 
}
.contact-btn {
  background-color: #50c878; 
  background-image: linear-gradient(to right, #50c878, #009688); 
  color: white; 
  border: none; 
  border-radius: 5px; 
  padding: 10px 20px; 
  transition: 0.3s ease; 
}

.contact-btn:hover {
  background-image: linear-gradient(to left, #50c878, #009688); 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}
</style>