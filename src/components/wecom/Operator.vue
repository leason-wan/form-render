<script setup>
import { useParentForm } from '@formily/vue'
const { value: data } = defineProps({
  value: Array,
});

const formRef = useParentForm();
function handlePass() {
  formRef.value.submit(data => console.log(data));
}
</script>

<template>
  <el-card class="container" >
    <!-- <el-button type="success" @click="pass">通过</el-button>
    <el-button type="danger" @click="refuse">拒绝</el-button> -->
    <el-button type="success" @click="handlePass">提交</el-button>
  </el-card>
</template>

<style scoped>
.container {
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
}
</style>
