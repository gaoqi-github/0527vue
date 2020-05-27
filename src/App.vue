<template>
  <div>
    <div>
      <header class="site-header jumbotron">
        <div class="newDate">2020/05/27 12:05:08</div>
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对Vue的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <Add />
        <List />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Add from "./components/Add";
import List from "./components/List";

//配置别名@
// import Add from "@/components/Add";
// import List from "@/components/List";
export default {
  components:{
    Add,
    List
  }

};
</script>

<style scoped>
.jumbotron {
  position: relative;
}
.newDate {
  position: absolute;
  right: 120px;
  bottom: 0;
  font-size: 30px;
  color: deeppink;
}
</style>
