<template>
    
    <div class="container">
        <br>
        <h1>
            {{user.name}} 
            <router-link :to="{path:'/edit/'+id}">
                <button class="btn btn-primary">수정</button>
            </router-link>
        </h1>
        <hr>
        <p>
            <b>Email : </b> {{user.email}}
        </p>
        <p>
            <b>Address : </b> {{user.address.street}}
        </p>

    </div>

</template>




<script>
export default {
    name : 'Users',

    data(){
        return {
            id:null,
            user: null
        }
    },

    created(){
        var id =  this.$router.history.current.params.id
        this.$set(this, 'id', id)
        this.getUser(id)
    },

    methods: {
        getUser(id){
            this.$http.get('/users/'+id)
            .then(resp=>{
                this.$set(this, 'user', resp.data.user)
            })

        }

    }
}
</script>
