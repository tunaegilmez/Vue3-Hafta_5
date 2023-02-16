<template>
  <h1>{{ $route.params.userID }}</h1>
  <p>Details ...</p>

  <button @click="goBack">Go Back Home</button>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
