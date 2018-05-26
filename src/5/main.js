import Vue from 'vue';
import Text from './text.js';
import MarkdownText from '../vue/markdown_text';
import TopPanel from '../vue/v2/top_panel';
import SidePanel from '../vue/main_side';
import './main.scss';

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
        text: '',
        root: null
    },
    computed: {

    },
    created () {
        this.text = Text;
    },
    mounted () {
        this.root = document.getElementById('main');
    },
    methods: {
        getScrollTop (e) {
            this.scrollTop = this.root.scrollTop;
        },
        jump (position) {
            this.scrollTop = position;
            this.root.scrollTop = position;
        }
    }
});
