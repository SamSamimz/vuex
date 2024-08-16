<template>
  <div class="hello">
    <h2 class="text-center py-3">{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
