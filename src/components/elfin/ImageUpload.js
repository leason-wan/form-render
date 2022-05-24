import { defineComponent } from '@vue/composition-api'
import { connect, mapProps, h, useField } from '@formily/vue'
import { ImageUpload as ElUpload} from '@webuy/elfin-ui'

const UploadWrapper = defineComponent({
  name: 'FUpload',
  props: {
    textContent: {
      type: String,
      default: '',
    },
    errorAdaptor: {
      type: Function,
      default(error) {
        return error?.message || ''
      },
    },
  },
  setup(curProps, { slots, attrs, listeners, emit }) {
    return () => {
      const fieldRef = useField()
      const setFeedBack = (error) => {
        const message = curProps.errorAdaptor(error)

        fieldRef.value.setFeedback({
          type: 'error',
          code: 'UploadError',
          messages: message ? [message] : [],
        })
      }

      const props = {
        ...attrs,
        onChange(
          file,
          fileList
        ) {
          ;attrs.onChange?.(file, fileList)
          setFeedBack()
          emit('change', fileList)
        },

        onRemove(
          file,
          fileList
        ) {
          ;attrs.onRemove?.(file, fileList)
          setFeedBack()
          emit('change', fileList)
        },

        onError(
          error,
          file,
          fileList
        ) {
          ;attrs.onError?.(error, file, fileList)

          setTimeout(() => {
            setFeedBack(error)
          }, 0)
        },
      }
      // const children = {
      //   ...slots,
      // }
      // if (!slots.default) {
      //   children.default = () => {
      //     const listType = attrs.listType
      //     const drag = attrs.drag

      //     if (drag) {
      //       return h(
      //         Fragment,
      //         {},
      //         {
      //           default: () => [
      //             h('i', { staticClass: 'el-icon-upload' }, {}),
      //             h(
      //               'div',
      //               { staticClass: 'el-upload__text' },
      //               { default: () => [curProps.textContent] }
      //             ),
      //           ],
      //         }
      //       )
      //     }

      //     if (listType === 'picture-card') {
      //       return h(
      //         'i',
      //         {
      //           staticClass: 'el-icon-plus',
      //         },
      //         {}
      //       )
      //     }

      //     return h(
      //       ElButton,
      //       { props: { icon: 'el-icon-upload2' } },
      //       { default: () => [curProps.textContent] }
      //     )
      //   }
      // }
      return h(ElUpload, { attrs: props, on: listeners }, [])
    }
  },
})

export const ImageUpload = connect(
  UploadWrapper,
  mapProps({ readOnly: 'readonly' })
)

export default ImageUpload
