<template>
  <div>
      <v-app-bar
      app
      clipped-left
      clipped-right
      flat
      dense
      elevation="1"
      height="55"
      class="nav"
      >
          <v-avatar width="95" class="logo" tile>
        <img src="../assets/images/logo.png" alt="" />
      </v-avatar>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-toolbar-title ml-3 class="name">
        My Company Name
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-switch
              v-model="ex11"
              label="dark"
              color="black"
              value="red"
              hide-details
              @change="toggleDark()"
            ></v-switch>
      <v-btn icon >
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      </v-app-bar>
  </div>
</template>

<script>
export default {
  methods:{
    toggleDark(){
       this.isDark = !this.isDark;
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;

    }
  }

}
</script>

<style scoped>
.logo {
  /* width: 124px; */
  left: 0 !important;

  margin-right: 20px;
  border: 1px solid black;

}
</style>