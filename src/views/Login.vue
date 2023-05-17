<template>
  <div class="form-warp">
    <form action="" class="login">
      <p class="login-register">
        <router-link :to="{ name: 'Register' }"></router-link>
      </p>
      <h2>Login to Ali's Blog</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data(){
    return{
    just:202020,
    }
  },
    created(){
    this.displayLog();
    },
  methods: {
    displayLog() {
      //console.log(this.$root.$data.test);
      const result= this.$root.$data.testData ===333 ? this.$root.$options.mounted(this.just): console.log("no shit serhlock");
      //console.log(result);
    },
  },
};
</script>
<style lang="scss"></style>
