<template>
  <Form :form="form" :label-col="6" :wrapper-col="10" @autoSubmit="log" @autoSubmitFailed="log">
    <SchemaField>
      <SchemaStringField name="input" title="输入框" x-decorator="FormItem" x-component="Input" :required="true" />
      <SchemaStringField name="select" title="选择框" x-decorator="FormItem" x-component="Select" :enum="[
        {
          label: '选项1',
          value: 1,
        },
        {
          label: '选项2',
          value: 2,
        },
      ]" :required="true" />
    </SchemaField>
    <FormButtonGroup alignFormItem>
      <Submit>提交</Submit>
    </FormButtonGroup>
  </Form>
</template>