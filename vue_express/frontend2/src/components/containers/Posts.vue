<template>
    
    <div class="container">
        <br>
        <h1>Posts</h1>

        <div class="row">

            <div class="col-3" v-for="(post, idx) in posts" style="padding:7px 4px !important;">
            <div class="card" style="">
                <img class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164e4c5cfb7%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164e4c5cfb7%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.203125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ strCut(15,post.title) }}</h5>
                    <p class="card-text">{{ strCut(45,post.body) }}</p>
                    <router-link :to="{path:'/posts/'+post.id}">
                        <a class="btn btn-primary">Go somewhere</a>
                    </router-link>
                    
                </div>
            </div>
            </div>

        </div>


    </div>

</template>




<script>
export default {
    name : 'Posts',

    data(){
        return {

            posts:[]

        }
    },

    created(){
        this.getPosts()
    },

    methods: {

        getPosts(){

            this.$http.get('/posts')
            .then(resp=>{
                this.$set(this, 'posts', resp.data.posts)
            })

        },



        strCut(leng, str){
            var txt = (str.length > leng) ? str.substr(0, leng)+'...' : str
            return txt
        }


    }
}
</script>
