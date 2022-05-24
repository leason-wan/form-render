<script>
import { FormProvider, createSchemaField } from "@formily/vue";
import * as ElementUI from "@formily/element";

const SchemaField = createSchemaField({
  components: {
    ...ElementUI,
  },
});

export default {
  components: {
    SchemaField,
    FormProvider,
    ...ElementUI,
    ...SchemaField,
  }
}
</script>

<script setup>
import { createForm } from "@formily/core";
import { schema as defaultSchema } from './schema';
import { ref } from '@vue/composition-api';

const readPretty = ref('false');
const schema = ref(defaultSchema);
const form = createForm({
  readPretty: readPretty.value === 'true' ? true : false,
});

function onSubmit(val) {
  console.log(val);
}
</script>

<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" />
    <Submit @submit="onSubmit">提交</Submit>
  </FormProvider>
</template>
