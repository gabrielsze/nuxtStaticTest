<template>
  <div class="container">
    <ik-image
      class="test"
      src="https://firebasestorage.googleapis.com/v0/b/my-ar-project-1578038399492.appspot.com/o/deals_images%2FTempura%20Makino%2FTempura-Makino-Free-Egg-Tempura_1634105383.jpg?alt=media&token=20859f8e-fa52-4040-946b-35d70a469bce"
      :transformation="[{ height: 300, width: 400 }, { rotation: 90 }]"
    />

    <div v-for="deal in deals_array" :key="deal.id">
      <nuxt-link :to="getLink(deal)">{{ deal.val.bra }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getLink(deal) {
      let brand = deal.val.bra;
      return `/brands/${brand}`;
    },
  },
  async asyncData({ params, payload }) {
    console.log("asyncData called");
    let deals_array;
    if (payload) {
      deals_array = payload.finalDealsArray;
    } else {
      // const devRootPort = "http://localhost:3000";
      // const deals_response = await fetch(`${devRootPort}/data/data.json`);
      deals_array = require("../static/data.json");
    }

    return { deals_array };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.test {
  height: 200px;
  width: 200px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
