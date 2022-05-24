import { h } from "@formily/vue";
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
    name: 'Test',
    setup: function () {
        return function () { return h('h1', {}, {
            default: function () { return ['this is a h1 tag']; }
        }); };
    }
});