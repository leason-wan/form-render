<script setup>
import { ref, onMounted, onUnmounted, getCurrentInstance } from '@vue/composition-api';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const containerRef = ref(null);
const editorRef = ref(null);

onMounted(() => {
	editorRef.value = monaco.editor.create(containerRef.value, {
		language: 'json',
		theme: 'light'
	});
})

onUnmounted(() => {
	editorRef?.value.dispose();
})

</script>

<template>
	<div ref="containerRef" style="width:50%; height:100%;"></div>
</template>
