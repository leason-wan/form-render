export const schema = {
  type: "object",
  properties: {
    input: {
      type: "string",
      title: "输入框",
      default: "测试字符串测试字符串",
      required: true,
      display: false,
      visible: false,
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    // select: {
    //   type: "number",
    //   title: "日期",
    //   default: 1646372537107,
    //   required: true,
    //   "x-decorator": "FormItem",
    //   "x-component": "DatePicker",
    //   "x-component-props": {
    //     type: "datetime",
    //     format: "yyyy-MM-dd HH:mm:ss",
    //   },
    // },
    upload: {
      type: 'array',
      title: '上传',
      default: [{
        name: 'test.png',
        url: 'https://files.codelife.cc/website/5db651526286ed4818112bda.png',
      }],
      'x-decorator': 'FormItem',
      'x-component': 'Upload',
      'x-component-props': {
        action: 'https://formily-vue.free.beeceptor.com/file',
        textContent: '上传',
        listType: 'picture-card',
      },
      required: true,
    },
  },
};