<template>
  <h1>Home Page</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit voluptatibus soluta asperiores aliquid neque?</p>
  <input type="text" @keydown.enter="goToDetails" />
</template>

<script>
export default {
  methods: {
    goToDetails(e) {
      // this.$router.push(`/detail/${e.target.value}`);
      this.$router.push({
        name: "Detail",
        params: {
          userID: e.target.value,
        },
        query: {
          type: "DetailAuth",
          user: "Tuna",
        },
      });
    },
  },
};
</script>
