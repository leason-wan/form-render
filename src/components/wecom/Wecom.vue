<script setup>
// import SchemaRenderer from '@webuy/formily-elfin/esm/schema-renderer';
import SchemaRenderer from '../schema/render';
import { ref } from '@vue/composition-api';
import defaultSchema from '../schema/crud';
const schema = ref(defaultSchema);
const formOpt = {
  readPretty: false,
};
</script>

<template>
  <SchemaRenderer :schema='schema' :formOpt="formOpt" />
</template>
