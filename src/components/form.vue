
<script>
import { createForm } from "@formily/core";
import { FormProvider, createSchemaField } from "@formily/vue";
import * as ElementUI from "@formily/element";
import vueJsonEditor from "vue-json-editor";
import { schema as defaultSchema } from './schema';
import { ref, watch } from '@vue/composition-api';

const SchemaField = createSchemaField({
  components: {
    ...ElementUI,
  },
});

export default {
  components: {
    SchemaField,
    FormProvider,
    vueJsonEditor,
    ...ElementUI,
    ...SchemaField,
  },
  setup() {
    const readPretty = ref('false');
    const schema = ref(defaultSchema);
    const form = ref();

    watch([schema, readPretty], () => {
      form.value = createForm({
        readPretty: readPretty.value === 'true' ? true : false,
      });
    }, {
      deep: true,
      immediate: true
    });

    function onSubmit(val) {
      console.log(val);
    }

    return {
      readPretty,
      form,
      schema,
      onSubmit,
    };
  }
};
</script>

<template>
  <div>
    <h1 style="text-align: center">formily playground</h1>
    <el-row>
      <el-tabs v-model="readPretty">
        <el-tab-pane label="编辑" name="false" />
        <el-tab-pane label="只读" name="true" />
      </el-tabs>
    </el-row>
    <el-row>
      <el-col :span="12">
        <vue-json-editor v-model="schema" :expandedOnStart="true" mode="code" />
      </el-col>
      <el-col :span="12">
        <FormProvider :form="form">
          <SchemaField :schema="schema" />
          <Submit @submit="onSubmit">提交</Submit>
        </FormProvider>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.ace-jsoneditor.ace_editor {
  height: 100vh !important;
}
</style>