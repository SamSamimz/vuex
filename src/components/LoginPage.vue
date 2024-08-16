<template>
  <div class="container mt-5 mb-5 d-flex justify-content-center">
    <div class="card px-1 py-2 col-12 col-md-8 col-lg-6">
      <div class="card-body">
        <form @submit.prevent="submitLogin">
          <h3 class="card-title mb-3">Login Form</h3>
          <div class="row mb-2">
            <div class="col-sm-12">
              <div class="form-group">
                <label for="email" class="form-label">Email :</label>
                <input
                  v-model="email"
                  class="form-control"
                  type="email"
                  id="email"
                  placeholder="Email address"
                />
                <span v-if="errors.email" class="error">{{
                  errors.email
                }}</span>
              </div>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-sm-12">
              <div class="form-group">
                <label for="password" class="form-label">Password :</label>
                <div class="input-group">
                  <input
                    v-model="password"
                    class="form-control"
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <span v-if="errors.password" class="error">{{
                  errors.password
                }}</span>
              </div>
            </div>
          </div>
          <div class="pt-3 d-flex">
            <button class="btn btn-primary col-12">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
    validateForm() {
      let isValid = true;

      this.errors.email = "";
      this.errors.password = "";

      if (!this.email) {
        this.errors.email = "Email is required";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(this.email)) {
        this.errors.email = "Email is invalid";
        isValid = false;
      }

      if (!this.password) {
        this.errors.password = "Password is required";
        isValid = false;
      }

      return isValid;
    },
    async submitLogin() {
      if (!this.validateForm()) {
        return;
      }

      try {
        const credentials = {
          email: this.email,
          password: this.password,
        };

        await this.login(credentials);

        this.email = "";
        this.password = "";
      } catch (error) {
        console.log("Error", error);
      }
    },
  },
};
</script>

<style>
.error {
  color: red;
}
</style>
