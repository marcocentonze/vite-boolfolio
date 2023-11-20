

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


<div class="container my-4">
      <form action="">
        <div class="mb-3">
          <label for="name" class="form-label text-uppercase">Name</label>
          <input type="text" name="name" id="name" class="form-control" placeholder="Mario Rossi"
            aria-describedby="nameHelper">
          <small id="nameHelper" class="text-muted">Type your name</small>
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label  text-uppercase">phone</label>
          <input type="tel" name="phone" id="phone" class="form-control" placeholder="123456"
            aria-describedby="phoneHelper">
          <small id="phoneHelper" class="text-muted">Type your phone</small>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label text-uppercase">email</label>
          <input type="text" name="email" id="email" class="form-control" placeholder="nome@gmail.com"
            aria-describedby="emailHelper">
          <small id="emailHelper" class="text-muted">Type your email</small>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea class="form-control" name="message" id="message" rows="3" placeholder="You can write your message here..."></textarea>
        </div>


        <button type="submit" class="btn btn-primary">Send</button>

      </form>
    </div>


  </template>


<style>

</style>