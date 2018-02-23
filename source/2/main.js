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
        root: Element,
        scrollTop: 0,
        documents: [],
        rectContent: [],
        text: ''
    },
    computed: {

    },
    created () {
        this.text = Text;
    },
    mounted () {
        this.root = document.getElementById('root');
        this.$nextTick(function () {
            this.rectContent = this.getRectContent();
        }.bind(this));
    },
    methods: {
        getRectContent () {
            let h1 = this.root.getElementsByTagName('h1');
            return Array.prototype.map.call(h1, h1El => {
                let content = '';
                Array.prototype.forEach.call(h1El.childNodes, node => {
                    if (node.nodeType === 3) {
                        content = node.nodeValue;
                    }
                });
                let rect = h1El.getBoundingClientRect();
                rect = {top: rect.top, bottom: rect.bottom}
                let parent = h1El.parentElement;
                let h2 = parent.getElementsByTagName('h2');
                let children = Array.prototype.map.call(h2, h2El => {
                    let rect = h2El.getBoundingClientRect();
                    console.log(rect);
                    rect = {top: rect.top, bottom: rect.bottom}
                    let content = '';
                    Array.prototype.forEach.call(h2El.childNodes, node => {
                        if (node.nodeType === 3) {
                            content =  node.nodeValue;
                        }
                    });
                    return {rect, content};
                });
                return {rect, content, children};
            });
        },
        getScrollTop () {
            this.scrollTop = this.$el.scrollTop;
        },
        jump (position) {
            this.scrollTop = position;
            this.$el.scrollTop = position;
        }
    }
});
