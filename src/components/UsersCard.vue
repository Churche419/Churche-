<template>
  <div class="card row" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{user.name}} </h5>
      <p class="card-text">{{user.email}}</p>
      <p>{{user.username}}</p>
      <!-- <a href="#" class="btn btn-primary">click</a> -->
      <button class="btn btn-warning" @click="$emit('view-user', user)">Get user</button>
    </div>
  </div>
  </template>
  
  <script>
  export default {
      name: 'UsersCard',
      // props:['name','email','username']
      props: {
          user : {
              type: Object,
              required: true
          }
      }
  }
  </script>
  
  <style>
  
  </style>