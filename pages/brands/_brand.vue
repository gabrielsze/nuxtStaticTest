<template>
  <div>{{ brand }}</div>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    const brand = params.brand;
    console.log("_brand.vue asyncData: ", brand);

    return { brand };
  },
};
</script>

<style>
</style>