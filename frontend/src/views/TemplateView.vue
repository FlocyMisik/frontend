<template>
   <v-layout dark class="main">
   <p class="footer">
        &copy; {{ new Date().getFullYear() }}
        <strong>Software Technologies Limited</strong>
      </p>
   
       <SideBar />
       <nav-bar></nav-bar>
      
     <v-main class="main_1 light">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>

import NavBar from '../components/NavBar.vue'
import SideBar from "../components/SideBar.vue"
export default {
  components:{
 SideBar,
    NavBar,
   
    
  },
   computed:{
    year(){
      const d = new Date();
let year_ = d.getFullYear();
      return year_
    }
  }
   

}
</script>

<style scoped>
.main_1 {
  overflow-y: auto !important;
  min-height: 100vh;
  background-color:white;
  border-radius: 34px;
  margin: 40px 10px 40px 10px;
  
}
.main {
  background-color: rgba(210, 218, 220, 0.998) !important;
  min-height: 100vh;
}
.footer{
 position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
padding-top: 10px;
   color: black;
   text-align: center;
  
}


</style>