<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/" class="navbar-brand">Vuex</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link active"
                >Product</router-link
              >
            </li>
          </ul>
        </div>
        <div>
          <button class="btn btn-danger" @click="logOut">Logout</button>
        </div>
      </div>
    </nav>
    <router-view> </router-view>
  </main>
</template>

<script>
import store from "@/store";
import { computed } from "vue";
export default {
  name: "AppLayout",
  setup() {
    const logOut = computed(() => store.commit("logout"));
    return { logOut };
  },
};
</script>

<style>
</style>