<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" id="del">删除</a>
    </div>
    <p class="user">
      <span>xxx</span>
      <span>说:</span>
    </p>
    <p class="centence">Vue不错!</p>
    <p id="time">2019/03/11 12:05:08</p>
  </li>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style scoped>
li {
  transition: 0.5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
#time {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
