<template>
<div class="container">
    <form action="/thank-you">
    <!-- Will need to edit as needed -->
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="First name">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Last name">

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="email@email.com">

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Your comments here!" style="height:200px"></textarea>

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

</style>