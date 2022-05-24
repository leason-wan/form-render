<script setup>
import dayjs from 'dayjs';

function timeFormat(val) {
  if (!val) return '';
  return dayjs(val).format('YYYY-MM-DD HH:mm:ss');
}

const { value: data } = defineProps({
  value: Array,
});

</script>

<template>
  <div class="container">
    <h3 class="title">审批流</h3>
    <el-timeline>
      <el-timeline-item v-for="(item, index) in data" :key="index" icon="el-icon-s-promotion" color="#0065FF">
        <div class="des">
          <p>{{ item.nodeDesc }}</p>
          <p class="time">{{ timeFormat(item.processDate) }}</p>
        </div>
        <div v-for="people in item.audiGroupMemberList" :key="people.userId" class="name">
          <span>{{ people.userName }}</span>
        </div>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style scoped>
.container {
  padding: 16px;
}

.title {
  color: #666666;
  margin-bottom: 16px;
}

.name {
  color: #a3a3a3;
  margin-top: 10px;
}

.des {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time {
  color: #909399;
}
</style>
