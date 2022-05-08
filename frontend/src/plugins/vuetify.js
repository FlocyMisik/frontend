import Vue from 'vue';
import Vuetify from 'vuetify';
// import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#007BFF',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },

      dark: {
        primary: "#0d041a",
        secondary: "#CCC",
        error: "#113768",
        accent: "#555555",
        dark: "#CCC",
        white: "#fff",

    },
    },
  },
});
