<template>
  <div class="single">
    <div class="test" v-for="post in posts" v-if="post.id == id">
    <img :src="img" alt="">
      <div class="postTitle"><p class="postName">{{post.title}}</p>
        <p class="postCategory">{{post.category}}</p>
      </div>
    <p>{{post.description}}</p>
    </div>
    <div class="btnPosition">
      <router-link to="/" tag="button" class="btn btnBack">back to main page</router-link>
    </div>
    <div class="blockComment">
      <h2>Add your comments please</h2>
      <div class="inputBlock">
        <span>Your name:</span>
        <input type="text" placeholder="Name"
               v-model="user"
        >
        <span>Input data:</span>
        <input type="text" placeholder="31.01.2019"
               v-model="data"
        >
      </div>
      <div class="blockCommentMessenger">
        <span>Your messenger:</span>
        <textarea type="text" placeholder="messenger"
               v-model="messenger"
        ></textarea>
      </div>
      <button class="btn btn-primary" @click="addComment(messenger, user, data)">Add comment</button>
      <div class="blockComments" v-for="comment in comments">
        <div class="titleComments">
          <img :src="static.img" alt="">
          <h2>Name:   {{comment.user}}</h2>
        </div>
        <p>{{comment.messenger}}</p>
        <p><strong>Data:{{comment.data}}</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    props: ['id'],
    data() {
      return {
        posts: [],
        post: null,
        img: "src/assets/water.jpg",
        blockVisibility: false,
        messenger: '',
        user: '',
        data: '',
        static:{
          img: 'src/assets/avatar.png',
        },
        comments: [],
      }
    },
    methods:{
      addComment(messenger, user, data){
        this.comments.push({
          user: user,
          messenger: messenger,
          data: data,
        });
      },
    },
    mounted() {
      axios.get('data.json')
        .then(response => (this.posts = response.data))
        .catch(error => console.log(error));
    },


  }
</script>

<style scoped>
  .titleComments img {
    width: 90px;
    height: 90px;
    margin: 0px 20px 10px 0px!important;
  }
  .titleComments {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
  }
  .inputBlock input {
    width: 37%;
  }
  .blockCommentMessenger{
    display: flex;
    flex-direction: column;
  }
  .blockCommentMessenger textarea{
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .inputBlock {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-top: 15px;
  }
  .blockComment{
    max-width: 800px;
    margin: 10px auto;
  }
  .btnPosition{
    display: flex;
    justify-content: flex-end;
  }
  .postName{
    font-weight: bold;
    font-size: 32px;
    background-color: #3D6099;
    color: white;
    padding-right: 10%;
    padding-left: 10px;
  }
  .postCategory {
    font-weight: bold;
    font-size: 20px;
    background-color: #58afb8;
    color: white;
    padding-top: 8px;
    padding-right: 10%;
    padding-left: 10px;
  }
  .single img{
    max-width: 440px;
    display: block;
    margin: 10px auto;
  }
  .postTitle {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .btnBack {
    background-color: #FF7440;
    color: white;
    min-width: 200px;
    min-height: 50px;
    border-radius: 0;
  }
  .btnBack:hover{
    background-color: #E8462F;
    font-size: 20px;
  }
  .blockComment span {
    font-weight: bold;
    margin-top: 2px;
  }
</style>
