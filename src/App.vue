<template>
  <Navigation v-if="!navigation" />
  <router-view />
</template>
<script>
import Navigation from "./components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
  created() {
    this.checkRoute();
  },
  data() {
    return {
      navigation: null,
      test:123,
      testData: 333,
    };
  },
 created(){
      console.log(this.test);
  },
 mounted(x){
  this.test= (x+444);
console.log(this.test);
 },
 updated(){

 },
  methods: {
    checkRoute() {
      if (
        this.$route.name === "Login" ||
        this.$route.name === "Register" ||
        this.$route.name === "ForgotPassword"
      ) {
        this.navigation = true;
     
        return;
      }
      this.navigation = false;
      return;
    },

  },
  watch:{
    $route(){
      this.checkRoute();
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
.container {
  max-width: 1440px;
  margin: 0 auto;
}

.links {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}
.link-light {
  color: white;
}
</style>
