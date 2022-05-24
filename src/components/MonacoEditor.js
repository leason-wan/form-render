import { h, onMounted } from '@vue/composition-api';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export default {
	name: 'monaco-editor',
	setup() {
		const editorRef = ref(null);
		onMounted(() => {
			monaco.editor.create(editorRef, {
				language: 'json',
				theme: 'vs-dark'
			});
		});
		// return () => h('div', {
		// 	ref: 
		// 	style: "width:100%; height:100%;",
		// });
		return () => <div ref={editorRef} style={{ width: '100%', height: '100%' }} />;
	}
}