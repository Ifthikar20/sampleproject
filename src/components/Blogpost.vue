<template>
  <div class="blog-wrapper">
    <Modal v-if="modalActive" @close-model="CloseModal()"/>
    <div class="blog-content">
      <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
      <h2 v-else>{{ post.title }}</h2>
      <p v-if="post.welcomeScreen">{{ post.blogpost }}</p>
      <p v-else>{{ post.blogHtml }}</p>
     
    </div>
    <div class="blog-image">
  
    </div>
  </div>

</template>

<script>
import { VueElement } from "vue";
import Modal from "../components/Modal.vue";


//VueElement.config.silent=true;
export default {
  data() {
    return {
      email: null,
      modalActive: true,
      modalMessage: "",
      parentTitle:"welcome"
    };
  },
  components:{
    Modal
  },
  name: "blogpost",
  props: ["post"],
  created(){
      this.testMethod();
  },
  methods:{
    testMethod(){
      //console.log(this.$root.$options);

    }

  }
};
</script>
