<script>
// for deconsructuring schema
import { createForm } from "@formily/core";
import * as ElementUI from "@formily/element";

// custom component
import Header from "./wecom/Header.vue";
import Flow from "./wecom/Flow.vue";
import Operator from "./wecom/Operator.vue";

// elfin-ui
import ImageUpload from "./elfin/ImageUpload.js";

import { createSchemaField } from "@formily/vue";

const SchemaFields = createSchemaField({
  components: {
    ...ElementUI,
    Header,
    Flow,
    Operator,

    ImageUpload,
  },
});
export default {
  components: {
    ...SchemaFields,
  },
}
</script>

<script setup>
import { ref, watch, toRefs } from '@vue/composition-api';
import { Form } from "@formily/element";

const props = defineProps({
  schema: Object,
  formOpt: Object,
});

const { schema: schemaRef, formOpt: formOptRef } = toRefs(props);
const form = ref(null);

watch([schemaRef, formOptRef], () => {
  form.value = createForm(formOptRef.value);
}, { immediate: true });
</script>

<template>
  <Form :form="form">
    <SchemaField :schema="schemaRef" />
  </Form>
</template>
