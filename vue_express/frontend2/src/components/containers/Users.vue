<template>
    
    <div class="container">
        <br>
        <h1>Users</h1>
        <router-link :to="{path:'/users/'+user.id}" v-for="(user, idx) in users" :key="user.id">
            <div >- {{ user.name }}</div>
        </router-link>
    </div>

</template>



<script>
    export default{
        name : 'Users',

        data(){
            return {

                users:[]

            }
        },

        created(){
            this.getUsers()
        },

        methods: {

            getUsers(){

                this.$http.get('/users')
                .then(resp=>{
                    this.$set(this, 'users', resp.data.users)
                })

            }


        }
    }
</script>