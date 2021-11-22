import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify, {
    theme: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
    }
});

export default new Vuetify({
    icons: {
    iconfont: "mdi"
  }
});
