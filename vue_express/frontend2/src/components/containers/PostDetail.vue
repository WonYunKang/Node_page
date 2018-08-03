<template>
    
    <div class="container">
        <br>
        <h1>
            {{post.title}} 
            <router-link :to="{path:'/edit/'+id}">
                <button class="btn btn-primary">수정</button>
            </router-link>
            <button class="btn btn-dnager" @click="deletePost">삭제</button>
        </h1>
        <hr>
        <p>
            {{ post.body }}
        </p>

    </div>

</template>




<script>
export default {
    name : 'Posts',

    data(){
        return {
            id:null,
            post: null
        }
    },

    created(){
        var id =  this.$router.history.current.params.id
        this.$set(this, 'id', id)
        this.getPost(id)
    },

    methods: {
        getPost(id){
            this.$http.get('/posts/'+id)
            .then(resp=>{
                this.$set(this, 'post', resp.data.post)
            })

        },


        deletePost(){
            this.$http.delete('/posts/'+this.id)
            .then(resp=>{
                if(resp.data.status === 200){
                    this.$router.push('/posts')
                }else{
                    alert('다시 시도해 주세요')
                    return
                }
            })
        }

    }
}
</script>
