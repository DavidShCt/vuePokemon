import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#00589c',
        secondary: '#004179',
        accent: '#c5911e',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        'gris-10': '#5e5e5f',
        'text-gray': '#666666',
        'text-primary': '#0c71c3'
      }
    },
  },
});
