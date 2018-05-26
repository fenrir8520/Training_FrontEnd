<template>
    <div class="top_ver2">
        <div class="title_area">
            <transition name="menu-button">
                <div v-if="!showMenu" class="button" @click="toggleMenu">
                    <div class="humbarger"></div>
                    <div class="humbarger"></div>
                    <div class="humbarger"></div>
                </div>
            </transition>
            <div class="button_clicked" :class="{on: this.showMenu}" @click="toggleMenu">
                <div class="close"></div>
            </div>
            <img src="/images/v2/title.svg" alt="FrontEnd Learning" class="title">
        </div>
        <transition name="menu-background">
            <div v-if="showMenu" class="menu_over_ray_background">
                <div class="menu_over_ray">
                    <div class="left">
                        <transition name="over-ray-1">
                            <div v-if="openedMenu" class="over_ray_header">
                                <p class="times">
                                    <slot name="times"></slot>
                                </p>
                                <p class="lecture_theme">
                                    <slot name="lecture_theme"></slot>
                                </p>
                            </div>
                        </transition>
                        <transition name="over-ray-3">
                            <div v-if="openedMenu" class="lecture_discription">
                                <slot name="message"></slot>
                            </div>
                        </transition>
                    </div>
                    <transition name="over-ray-2">
                        <div v-if="openedMenu" class="right">
                            <p class="todays">Today's Proglam...</p>
                            <ul class="index_list">
                                <li v-for="item in documents" @click="jump(item.rect.top)">
                                    {{ item.content }}
                                </li>
                            </ul>
                        </div>
                    </transition>
                    <transition name="copyright">
                        <small v-if="openedMenu" class="copyright">&copy;2018 kei sugimoto</small>
                    </transition>
                </div>

            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        documents: Array
    },
    data: () => {
        return {
            showMenu: false,
            openedMenu: false
        };
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
            setTimeout(()=>{
                this.openedMenu = !this.openedMenu
            });
        },
        jump(position) {
            this.toggleMenu();
            this.$emit('side-jump', position);
        },
        scrollDown() {
            this.jump(this.documents[0].rect.top)
        }
    }
}
</script>
