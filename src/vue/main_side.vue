<template lang="html">
    <div class="side_menu">
        <div class="list_wrapper">
            <ul>
                <li v-for="item in documents">
                    <div class="index" :class="{display: item.rect.top <= scrollTop
                                                && item.rect.bottom > scrollTop}"
                         @click="jump(item.rect.top)">
                        {{ item.content }}
                    </div>
                    <ul class="sub_tree">
                        <template v-for="subItem in item.children">
                            <li>
                                <div class="sub_index"
                                :class="{display: subItem.rect.top <= scrollTop
                                    && subItem.rect.bottom > scrollTop}"
                                    @click="jump(subItem.rect.top)">
                                    {{ subItem.content }}
                                </div>
                            </li>
                        </template>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        scrollTop: Number,
        documents: Array
    },
    data () {
        return {
            root: Element,
            indexes: []
        };
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
