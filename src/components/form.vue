<script setup>
import SchemaRenderer from './SchemaRenderer.vue';
import { ref, computed } from '@vue/composition-api';
import vueJsonEditor from "vue-json-editor";
import { schema as defaultSchema } from './schema';

const schema = ref(defaultSchema);
const status = ref('false');
const formOpt = computed(() => {
  const readPretty = status.value === 'true' ? true : false;
  return {
    readPretty
  };
});

</script>

<template>
  <div>
    <h1 style="text-align: center">formily playground</h1>
    <el-row>
      <el-tabs v-model="status">
        <el-tab-pane label="编辑态" name="false" />
        <el-tab-pane label="阅读态" name="true" />
      </el-tabs>
    </el-row>
    <el-row>
      <el-col :span="12">
        <vue-json-editor v-model="schema" :expandedOnStart="true" mode="code" />
      </el-col>
      <el-col :span="12">
        <SchemaRenderer :schema='schema' :formOpt="formOpt" />
      </el-col>
    </el-row>
  </div>
</template>

<style>
.ace-jsoneditor.ace_editor {
  height: 100vh !important;
}
</style>