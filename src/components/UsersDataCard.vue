<template>
<div class="card row" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{user.name}} </h5>
    <p class="card-text">{{user.email}}</p>
    <p>{{user.username}}</p>
   
    <button class="btn btn-primary" @click="$emit('view-user', user)">Get User</button>

  </div>
</div>
<button class ="btn btn-primary">Add User</button>
</template>

<script>
export default {
    name: 'UsersDataCard',
    
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