<template>
  <div class="home">
    <Blogpost :post="welcomeScreen"/>
    <Blogpost :post="post" v-for="(post,index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import Blogpost from "../components/Blogpost.vue";
export default {
  name: "Home",
  components: {
    Blogpost,
  },
  data() {
    return {
      welcomeScreen: {
        title: "welcome!",
        blogpost: "This is the weekly blog post",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "this is a filter title",
          blogHtml: "this is a filter blog post",
          blogcoverStories: "beautiful stories...",
        },
        {
          title: "this is a filter title 2",
          blogHtml: "this is a filter blog post 2",
          blogcoverStories: "beautiful stories..2.",
        },
      ],
    };
  },
};
</script>
