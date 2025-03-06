import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';
import { commentsStore } from './store/store.ts';

const store = createStore({
  modules: {
    comments: commentsStore,
  },
});

createApp(App).use(store).mount('#root');
