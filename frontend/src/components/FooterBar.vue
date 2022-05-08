<template>
  <v-footer inset outlined  height="40" paddless>
    <div class="foot_text">
      <p class="footer">
        &copy; {{ new Date().getFullYear() }}
        <strong>Software Technologies Limited</strong>
      </p>
    </div>
  </v-footer>
</template>

<script>
export default {
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
.foot_text {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.foot_text p {
  font-size: 13px;
  margin-top: 15px;
}


</style>