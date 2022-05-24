<template>
  <div id="app" style="width:100%;height:990px;">
    <Wecom />
    <!-- <render-form /> -->
    <!-- <MonacoEditor /> -->
  </div>
</template>

<script>
// import RenderForm from "./components/form.vue";
import Wecom from "./components/wecom/Wecom.vue";
// import Crud from "./components/Crud.vue";
// import MonacoEditor from "./components/MonacoEditor.vue";

export default {
  name: "App",
  components: {
    // RenderForm,
    // Crud,
    Wecom,
    // MonacoEditor,
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>