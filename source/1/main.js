import Vue from 'vue';
import TopPanel from '../vue/top_panel.vue';
import SidePanel from '../vue/main_side.vue';

const mainVue = new Vue({
    el: '#app',
    components: {
        TopPanel,
        SidePanel
    },
    data: {
        root: Element,
        scrollTop: 0,
        documents: [],
        selectedPage: 0,
        loading: []
    },
    computed: {
        documentHeight () {
            let height = 0;
            if (this.documents.length) {
                let length = this.documents[this.selectedPage].length;
                let top = this.documents[this.selectedPage][0].rect.top;
                let bottom = this.documents[this.selectedPage][length - 1].rect.bottom;
                height = bottom - top;
            }
            return height;
        }
    },
    created () {
        let pages = document.getElementsByClassName('page');
        Array.prototype.forEach.call(pages, (page, index) => {
            this.loading.push(true);
        });
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
