<template>
  <div>
    <h2>
      文章标题是：{{ title }}
      <MyButton :title="title"></MyButton>
    </h2>
  </div>
</template>

<script type="text/ecmascript-6">
// 导入
import MyButton from "./MyButton";
export default {
  // 声明接收属性
  props: ["title"],
  // 注册
  components: {
    MyButton
  }
};
</script>

<style scoped></style>
