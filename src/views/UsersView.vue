<template> 
    <div class=" row " >
      <UsersCard v-for="user in users" :key="user.id" :user="user" @view-user="viewuser(user)"></UsersCard>
    </div>
    </template>
    
    <script setup>
    import UsersCard from '../components/UsersCard.vue'
    
    import { computed, onMounted } from "vue";
    import { useStore } from "vuex"
    import { useRouter } from "vue-router"
    
    
    const store = useStore();
    const router = useRouter();
    
    onMounted(async () =>{
      await store.dispatch("fetchUsers");
    });
    
    const users = computed(() => store.state.users)
    
    function viewuser(user){
      router.push({ name: 'userDetailsView', params: {id: user.id} })
    }
     
    </script>
    
    <style>
    
    </style>