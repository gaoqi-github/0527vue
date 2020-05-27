<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input
          id="username"
          type="text"
          class="form-control"
          placeholder="用户名"
        />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          id="content"
          class="form-control"
          rows="6"
          placeholder="评论内容"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button id="sub_btn" type="button" class="btn btn-default pull-right">
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style scoped></style>
