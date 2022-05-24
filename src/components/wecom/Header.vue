<script setup>
const STATUS_ENUM = {
  0: '未提交审核',
  1: '审批中',
  2: '审批通过',
  3: '审批拒绝',
  4: '流程已失效',
};

const {value: data} = defineProps({
  value: Object
});
</script>

<template>
  <div class="container">
    <div class="name">{{ data.processName }}</div>
    <div class="status" :class="`status${data.processStatus}`">
      {{ STATUS_ENUM[data.processStatus] }}
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  padding: 16px;
  align-items: center;
  border: 1px solid #f2f2f2;
}
.avatar {
  width: 48px;
  height: 48px;
  margin-right: 12px;
}
.name {
  margin-right: 12px;
  font-size: 16px;
  font-weight: 600;
}
.status {
  background: #36b37e;
  padding: 0 6px;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  border-radius: 2px;
}
.status0 {
  background: #e0e0e0;
}
.status1 {
  background: #0065ff;
}
.status2 {
  background: #36b37e;
}
.status3 {
  background: #ff5630;
}
.status4 {
  background: #e0e0e0;
}
</style>
