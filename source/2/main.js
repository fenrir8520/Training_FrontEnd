import Vue from 'vue';
import Text from './text.js';
import MarkdownText from '../vue/markdown_text.vue';
import TopPanel from '../vue/top_panel.vue';
import SidePanel from '../vue/main_side.vue';

const app = new Vue({
    el: '#app',
    components: {
        TopPanel,
        SidePanel,
        MarkdownText
    },
    data: {
        scrollTop: 0,
        rectContent: [],
        text: ''
    },
    computed: {

    },
    created () {
        this.text = Text;
    },
    mounted () {
    },
    methods: {
        getScrollTop () {
            this.scrollTop = this.$el.scrollTop;
        },
        jump (position) {
            this.scrollTop = position;
            this.$el.scrollTop = position;
        }
    }
});
