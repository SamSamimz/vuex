<template>
  <div class="container py-4">
    <h4 class="text-center mb-4">Welcome to Product Page</h4>

    <div v-if="isLoading" class="loader-container">
      <div class="loader"></div>
    </div>

    <!-- Products List -->
    <div v-else>
      <div v-if="products.length">
        <div class="row">
          <div
            v-for="product in products"
            :key="product.product.id"
            class="col-md-4 mb-4"
          >
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ product.product.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Price: ${{ product.product.price }}
                </h6>
                <p class="card-text">{{ product.product.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p v-else class="text-center">No products available.</p>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductPage",
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters(["getProducts"]),
    products() {
      return this.getProducts;
    },
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    async loadProducts() {
      try {
        await this.fetchProducts();
      } finally {
        this.isLoading = false;
      }
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>

<style scoped>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999; /* Ensure it is on top of other elements */
}

.loader {
  width: 50px;
  aspect-ratio: 1;
  --_c: no-repeat radial-gradient(farthest-side, #25b09b 92%, #0000);
  background: var(--_c) top, var(--_c) left, var(--_c) right, var(--_c) bottom;
  background-size: 12px 12px;
  animation: l7 1s infinite;
}

@keyframes l7 {
  to {
    transform: rotate(0.5turn);
  }
}
</style>

