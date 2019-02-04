<template>
  <div class="blog">
  <header>
    <h1 class="blogTitle">Good drinks</h1>
    <hr>
  </header>
  <main>
  <div class="row">
    <div class="col-md-4"
         v-for="post in posts"
         :key="post.id"
    >
      <div class="formCard">
          <router-link
            :to="{ name: 'post', params: { id: post.id  } }"
          >
            <img :src="img">
            <div class="formCardText">
            <span class="titlePost">{{post.title}}</span>
            <hr>
            <div class="categoryDate">
              <p>{{post.category}}</p>
              <p>{{post.dataPost}}</p>
            </div>
            </div>
          </router-link>
      </div>
    </div>
  </div>
  </main>
  </div>
</template>

<script>
  import axios from "axios";
    export default {
        name: "Blog",
      data () {
        return {
          img: "src/assets/water.jpg",
          posts: []
        }
      },

      mounted() {
        axios
          .get('data.json')
          .then(response => (this.posts = response.data))
          .catch(error => console.log(error));
      },
    }
</script>

<style scoped>
  header hr[data-v-a2af8a5c] {
    margin-top: 2rem;
    margin-bottom: 30px;
  }
  .blogTitle{
    margin-top: 10px;
    text-align: center;
    margin-bottom: -16px;
  }
  .formCardText{
    padding: 20px;
  }
  hr{
    margin-top: 2rem;
  }
  .formCard img {
    width: 100%;
    border-radius: 6px 6px 0 0;
  }
  .formCard {
    border: 1px solid #eaeaea;
    border-radius: 6px;
    background: #fff;
    margin-bottom: 18px;
  }
  .categoryDate{
    display: flex;
    justify-content: space-between;
  }
  .blockComments img{
    max-width: 60px;
    border-radius: 30px;
    max-height: 60px;
  }
  .titlePost{
    font-size: 17px;
    line-height: 24px;
    font-weight: bold;
  }
  .titlePost {
    color: #333333;
    line-height: 14px;
    padding-bottom: 30px;
  }
  .categoryDate{
    font-weight: bold;
    border-top: 1px;
    color: #333;
    opacity: 0.7;
    font-size: 14px;
  }
  .formCard a {
    text-decoration: none;
  }
  .formCard:hover {
    background: #c6dee5;
  }

</style>
