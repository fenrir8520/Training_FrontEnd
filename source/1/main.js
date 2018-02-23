import Vue from 'vue';
import Text from './markdown_text.js';
import MarkdownText from '../vue/markdown_text.vue';
import TopPanel from '../vue/top_panel.vue';
import SidePanel from '../vue/main_side.vue';

const mainVue = new Vue({
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
        selectedPage: 0,
        loading: [],
        text: ''
    },
    computed: {

    },
    created () {
        this.text = Text;
    },
    mounted () {
        this.root = document.getElementById('root');
        this.documents = this.getDocuments();
    },
    methods: {
        getScrollTop () {
            this.scrollTop = this.$el.scrollTop;
        },
        getDocuments () {
            let pages = this.root.getElementsByClassName('page');
            pages = Array.prototype.map.call(pages, (page, pageNum) => {

                let divisions = page.getElementsByClassName('division');
                divisions = Array.prototype.map.call(divisions, division => {
                    let index = Array.prototype.map.call(division.getElementsByTagName('h1'), indexElement => {
                        return indexElement;
                    });
                    let subIndex = Array.prototype.map.call(division.getElementsByClassName('block1'), indexElement => {
                        return indexElement;
                    });
                    let title = index[0].innerText.trim();
                    let subTitle = [];
                    subIndex.forEach(element => {
                        let subTitleElement = element.getElementsByTagName('h2');
                        if (subTitleElement.length > 0) {
                            subTitle.push({
                                title: subTitleElement[0].textContent.trim(),
                                rect: element.getBoundingClientRect(),
                                page: pageNum
                            });
                        }
                    });
                    let rect = division.getBoundingClientRect();
                    return {
                        title,
                        subTitle,
                        rect,
                        page: pageNum
                    };
                }, this);

                console.dir(divisions);
                return divisions;
            }, this);
            // this.loading.splice(0, 1, true);

            return pages;
        },
        jump (position, page) {
            this.selectedPage = page;
            this.scrollTop = position;
            this.$el.scrollTop = position;
        }
    }
});
