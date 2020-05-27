<template>
  <div>
    <MyBlog v-for="blog in blogs" :key="blog.id" :title="blog.title"></MyBlog>
  </div>
</template>

<script type="text/ecmascript-6">
import MyBlog from "./components/MyBlog";
export default {
  components: {
    MyBlog
  },
  data() {
    return {
      blogs: [
        { id: 1, title: "111" },
        { id: 2, title: "222" },
        { id: 3, title: "333" }
      ]
    };
  }
};
</script>

<style scoped></style>
