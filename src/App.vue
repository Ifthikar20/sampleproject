
<template>
<Navigation/>
<router-view/>
</template>
<script>
import Navigation from './components/Navigation.vue'
export default{
  components:{
   Navigation
  }
}

</script>

<style>
*{

margin: 0;
padding:0;
box-sizing: border-box;
font-family: sans-serif;

}
.container {
  max-width:1440px;
  margin: 0 auto;
  
  }

.links{
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}
.link-light{
  color: white;
}
</style>
