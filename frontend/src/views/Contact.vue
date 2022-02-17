<template>
<div class="container">
    <form action="/thank-you">
    <!-- Will need to implement sending  -->
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="First name">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Last name">

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="email@email.com">

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Your comments here!" style="height:200px"></textarea>

<!-- Will need to do a v-on:click take to thank -->
    <input type="submit" value="Submit">

  </form>
</div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style>
form {
    margin: 0 auto;
}

input, textarea {
  width: 100%; 
  padding: 12px; 
  border: 1px solid #f6c453; 
  border-radius: 4px; 
  box-sizing: border-box; 
  margin-top: 6px; 
  margin-bottom: 16px; 
  resize: vertical;
}

input[type=submit] {
  background-color: #f6c453;
  color: #fefbe9;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #f6c453;
  transition: ease-out 0.3s;
}

input[type=submit]:hover {
  box-shadow: inset 300px 0 0 0 #fefbe9;
  background-color: #fefbe9;
  color: #f6c453;
}

.container {
  border-radius: 5px;
  padding: 20px;
}
</style>