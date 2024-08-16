<template>
  <div class="hello"></div>
  <HelloWorld msg="Welcome to Vue.js" />
</template>

  <script>
import { useStore } from "vuex";
import HelloWorld from "./HelloWorld.vue";

export default {
  name: "HomePage",
  setup() {
    const store = useStore();
    const count = store.getters.getCount;

    return {
      count,
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
