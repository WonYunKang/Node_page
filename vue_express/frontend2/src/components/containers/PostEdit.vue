<template>
    
    <div class="container">
        <br>
        <h3>
            <small>제목</small><br>
            <input type="text" v-model="title"    style="width:100%;" />
        </h3>

        <div>
            <textarea style="width:100%;" rows="5" v-model="body"></textarea>
        </div>
        
        <button class="btn btn-primary" @click="save()">수정완료</button>
        
    </div>

</template>


<script>
export default {
    name : 'Posts',

    data(){
        return {
            id:null,
            post: null,

            title:null,
            body: null,
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
                this.$set(this, 'title', resp.data.post.title)
                this.$set(this, 'body', resp.data.post.body)
            })

        },


        save(){
            var post = {
                id: this.id,
                title: this.title,
                body:  this.body,
            }

            this.$http.put('/posts', post)
            .then(resp=>{
                console.log(resp.data)
                if(resp.data.status === 201){
                    this.$router.push('/posts')
                }else{
                    alert('다시 시도해 주세요')
                    return
                }
            })
        },

    }
}
</script>
