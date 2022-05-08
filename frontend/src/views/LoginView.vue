<template>
<div>
<div class="main"> 
    <div class="login">
         <login-form/>
    </div>
   
  
</div>
<div class="footer">
     <a href="https://www.stl-horizon.com/" target="_blank"> <p>&copy; {{year}} Software Technologies Ltd</p></a>
        
  </div>
<div class="stl-logo">
     <a href="https://www.stl-horizon.com/" target="_blank"><img src="../assets/images/stl-logo.png" ></a> 
  </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
export default {
  components: { LoginForm },


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
.login
{
    
    margin:'100px';
  
}
.main {
  height: 70%;
    max-width: 400px;
    margin: auto !important;
    display: flex;
    flex-direction: column;
    border: 1px solid #9E9FA3;
    border-radius: 9px;
    margin-top: 40px!important;
}
  
  
  

.footer p{
 
    text-align: center;
    color: #a3a4a8;
   
}
.footer a{
text-decoration: none;
}
.footer{
  margin-top: 40px;
}
.stl-logo a{
    display: flex;
  
  height: 100px !important;
  justify-content: center;
   
}
</style>>

