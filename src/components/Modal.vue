<template>
    <div>
        <button v-b-modal.modal-1>Launch demo modal</button>
      
        <b-modal id="modal-1" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </div>
</template>   
<script>
export default{
props:['modelMessage'],
methods:{
    closeModel(){
        this.$emit("close-model");
    }
}
}
</script>
<style lang="scss">


</style>