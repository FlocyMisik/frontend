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

      <v-list nav dense>
     
          <v-list-item
            v-for="menuItem in menuItems"
            :key="menuItem.name"
            link
            class="py-5 mr-n2"
            :to="menuItem.route"
          >
            
            <v-list-item-title
              :class="
                'font-weight-bold text-subtitle-1 text-capitalize mb-2   ' +
                menuItem.color +
                '--text'
"
            >
              <div>
                <v-icon left large  :color="menuItem.color">{{
                  menuItem.icon
                }}</v-icon>
                {{ menuItem.name }}
              </div>
            </v-list-item-title>
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
      menuItems: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          route: "/dashboard",
          to: { name: "Dashboard" ,icon:"mdi-view-dashboard" },
        },
{
        name: "Dashboard",
        route: "/dashboard",
        icon: "mdi-home",
        color: "blue",
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
