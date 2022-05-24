import { createForm } from '@formily/core'
import { ref, watch, toRefs, defineComponent } from '@vue/composition-api'
import { createSchemaField, h } from '@formily/vue'
import * as ElementUI from '@formily/element'
import { Form } from '@formily/element'
// import * as ElfinUI from '../index'

const SchemaFields = createSchemaField({
  components: { ...ElementUI, 
    // ...ElfinUI
   },
})

export const SchemaRenderer = defineComponent({
  name: 'SchemaRenderer',
  props: ['schema', 'formOpt'],
  setup(props) {
    const { schema: schemaRef, formOpt: formOptRef } = toRefs(props)
    const form = ref(null)

    watch(
      [schemaRef, formOptRef],
      () => {
        form.value = createForm(formOptRef.value)
      },
      { immediate: true }
    )

    return () => {
      return h(
        Form,
        { props: { form: form.value } },
        {
          default: () =>
            h(
              SchemaFields.SchemaField,
              {
                props: {
                  schema: schemaRef.value,
                },
              },
              {}
            ),
        }
      )
    }
  },
})

export default SchemaRenderer
