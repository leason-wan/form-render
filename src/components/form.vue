<template>
  <div>
    <h1 style="text-align: center;">json-schema 协议渲染</h1>
    <el-row>
      <el-col :span="12">
        <vue-json-editor v-model="schema" :expandedOnStart="true" mode="code" />
      </el-col>
      <el-col :span="12">
        <Form :form="form">
          <SchemaField :schema="schema" :key="schema" />
          <Submit @submit="onSubmit">提交</Submit>
        </Form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/vue";
import { Form, FormItem, Input, Submit } from "@formily/element";
import vueJsonEditor from "vue-json-editor";
import  { Row, Col } from 'element-ui';

const schema = {
  type: "object",
  properties: {
    input: {
      type: "string",
      title: "输入框",
      required: true,
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
  },
};

const form = createForm();
const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Input,
  },
});

export default {
  components: { Form, SchemaField, Submit, vueJsonEditor, [Row.name]: Row, [Col.name]: Col },
  data() {
    return {
      form,
      schema,
    };
  },
  watch: {
    schema() {
      this.form = createForm();
    },
  },
  methods: {
    onSubmit(value) {
      console.log(value);
    },
  },
};
</script>

<style>
.ace-jsoneditor.ace_editor {
  height: 100vh !important;
}
</style>