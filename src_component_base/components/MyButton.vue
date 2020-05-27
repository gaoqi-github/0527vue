<template>
  <div>
    <button @click="count++">给{{ title }}点了{{ count }}个赞</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["title"],
  data() {
    return {
      count: 0
    };
  }
};
</script>

<style scoped></style>
