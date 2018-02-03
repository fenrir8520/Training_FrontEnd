<template lang="html">
    <div class="side_menu">
        <div class="list_wrapper">
            <ul>
                <template v-for="(page, pageIndex) in documents">
                    <li v-for="item in page">
                        <div class="index" :class="{display: item.rect.top <= scrollTop
                                                    && item.rect.bottom > scrollTop
                                                    && pageIndex === selectedPage}"
                             @click="jump(item.rect.top, pageIndex)">
                            {{ item.title }}
                        </div>
                        <ul class="sub_tree">
                            <li v-for="subItem in item.subTitle" >
                                <div class="sub_index"
                                     :class="{display: subItem.rect.top <= scrollTop
                                              && subItem.rect.bottom > scrollTop
                                              && pageIndex === selectedPage}"
                                     @click="jump(subItem.rect.top, pageIndex)">
                                    {{ subItem.title }}
                                </div>
                            </li>
                        </ul>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        scrollTop: Number,
        selectedPage: Number,
        documents: Array
    },
    data () {
        return {
            root: Element,
            indexes: []
        };
    },
    computed: {

    },
    mounted () {
    },
    methods: {
        jump (position, page) {
            this.$emit('side-jump', position, page);
        }
    }
}
</script>
