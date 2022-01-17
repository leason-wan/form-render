<template>
  <div id="app">
    <render-form />
  </div>
</template>

<script>
import RenderForm from "./components/form.vue";

export default {
  name: "App",
  components: {
    RenderForm,
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>