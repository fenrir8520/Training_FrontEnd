<template lang="html">
    <div class="top">
        <div class="split_wrapper" @mouseenter="mouseOn('left')" @mouseleave="mouseOut('left')">
            <!-- マウスアウト時 -->
            <div class="split split_left">
                <div class="split_start">
                </div>
                <div class="split_middle">
                    <div></div>
                    <div class="hamburger_icon">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                    <h1 class="title">
                        <slot name="title_left"></slot>
                    </h1>
                </div>
                <div class="split_end">
                </div>
            </div>
            <transition name="top">
                <!-- マウスオン時 -->
                <div v-if="onMouse.left" class="split split_left on_mouse" key="on">
                    <div class="split_start">
                        <h2 class="serif slidein_top">
                            The {{ times }}st.
                        </h2>
                        <h2 class="serif big">
                            FrontEnd Learning
                        </h2>
                    </div>
                    <div class="split_middle">
                        <div class="menu_wrapper">
                            <p class="today">
                                Today's Proglam...
                            </p>
                            <ul class="menu_list">
                                <template v-for="(page, pageIndex) in documents">
                                    <li v-for="item in page" @click="jump(item.rect.top, pageIndex)">
                                        {{ item.title }}
                                    </li>
                                </template>
                            </ul>
                        </div>
                    </div>
                    <div class="split_end">
                        <small>&copy;2018 kei sugimoto</small>
                    </div>
                </div>
            </transition>
        </div>
        <div class="split_wrapper right" @mouseenter="mouseOn('right')" @mouseleave="mouseOut('right')">
            <!-- マウスアウト時 -->
            <div class="split split_right" :class="{on: onMouse.right}">
                <div class="split_start">
                </div>
                <div class="split_middle">
                    <h1 class="title">
                        <slot name="title_right"></slot>
                    </h1>
                </div>
                <div class="split_end">
                </div>
            </div>
            <transition name="top">
                <!-- マウスオン時 -->
                <div v-if="onMouse.right" class="split split_right on_mouse" key="on">
                    <div class="split_start">

                    </div>
                    <div class="split_middle">

                    </div>
                    <div class="split_end">
                        <slot name="title_ja"></slot>
                        <slot name="message"></slot>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        documents: Array,
        times: Number
    },
    data () {
        return {
            onMouse: {
                left: false,
                right: false
            },
            indexes: [],
            root: Element,
        };
    },
    computed: {
    },
    mounted () {
    },
    methods: {
        mouseOn (key) {
            this.onMouse[key] = true;
        },
        mouseOut (key) {
            this.onMouse[key] = false;
        },
        jump (position, page) {
            this.$emit('side-jump', position, page);
        }
    }
}
</script>
