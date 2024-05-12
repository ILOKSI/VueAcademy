import { createApp, h } from "vue";
import { apolloClient } from "./ApolloClient";
import { provideApolloClient } from "@vue/apollo-composable"
import App from "./App.vue";



const app = createApp({
  setup() {
    provideApolloClient(apolloClient);
  },
  render: () => h(App),
});


app.mount("#app");