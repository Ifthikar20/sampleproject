<template>
    <div class="modal-test">
        <button v-b-modal.modal-1>Launch demo modal</button>
          <Login/>
        <b-modal id="modal-1" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </div>
</template>   
<script>
import Login from '../views/Login.vue'
export default{
props:['modelMessage'],
components:{Login},
methods:{
    closeModel(){
     
        this.$emit("close-model");
    }
}
}
</script>
<style lang="scss">

.modal-test{
  background-color: black;
}
</style>