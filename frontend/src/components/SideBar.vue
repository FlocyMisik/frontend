<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      permanent
    >
      <v-list-item class="px-2">
       
        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :to="items.to"
          :key="item.title"
          v-on="on"
          link
        
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          
        </v-list-item>

      </v-list>
      
      
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          to: { name: "Dashboard" ,icon:"mdi-view-dashboard" },
          

        },

        
      ],
      mini: true,
    };
  },
  
};
</script>

<style scoped>
a {
  color: #000 !important;
}
.side-bar {
  /* height: calc(100% - 123px) !important; */

  /* margin-top: 10px !important; */

  position: fixed !important;
  /* margin-right: 7px; */
}
</style>
