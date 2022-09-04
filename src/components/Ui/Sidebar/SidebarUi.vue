<template>
    <div class="grid grid-cols-12 h-screen overflow-hidden relative">
        <!-- backdrop -->
        <div v-if="inMobile && visible"
            class="bg-gray-900 opacity-80 w-screen h-screen absolute z-30 top-0 left-0">
        </div>
        <!-- /backdrop -->

        <div v-show="visible" class="bg-gray-900 z-40" :class="sidebarClass">
            <!-- sidebar header -->
            <header class="flex justify-center items-center py-3">
                <div v-if="!$slots.header">
                    <img class="w-16 h-16" src="./../../../assets/logo.png" alt="">
                </div>
                <slot v-else name="header" />
            </header>
            <!-- /sidebar header -->

            <!-- sidebar content -->
            <div>
                <div class="mx-auto py-3 px-5">
                    <slot name="sidebar" />
                </div>
            </div>
            <!-- /sidebar content -->
        </div>

        <div :class="contentClass">
            <!-- sidebar topbar -->
            <div class="">
                <div class="flex px-5 py-3">
                    <!-- others topbar content -->
                    <div class="w-full md:order-last">
                    </div>
                    <!-- /others topbar content -->

                    <!-- sidebar toggler -->
                    <button @click.stop.prevent="toggler"
                        class="relative z-50 md:text-gray-800"
                        :class="{'text-gray-300': inMobile && visible}">
                        <!-- close icon -->
                        <svg v-if="visible" class="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>

                        <!-- /close icon -->

                        <!-- open icon -->
                        <svg v-else class="w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                        <!-- /open icon -->

                    </button>
                    <!-- /sidebar toggler -->
                </div>
            </div>
            <!-- /sidebar topbar -->
            {{visible}}
            <!-- sidebar content -->
            <slot name="content" />
            <!-- /sidebar content -->
        </div>
    </div>
</template>

<script>

// TAILWIND CSS MD BREAK POINT VALUE
let MIN_WIDTH = 768;

export default {
    name: 'SidebarUi',

    data() {
        return {
            visible: false,
            inMobile: true,
            sidebarClass: 'sidebar-mobile',
            contentClass: 'content-mobile',
        };
    },

    mounted() {
        this.windowResized();
        window.addEventListener("resize", this.windowResized);
    },

    watch: {
        visible(visible) {
            if(visible) {
                if(!this.inMobile) {
                    this.contentClass = 'content';
                }
            } else {
                if(!this.inMobile) {
                    this.contentClass = 'content-wosidebar';
                }
            }
        },

        inMobile(inMobile) {
            if(inMobile) {
                this.sidebarClass = 'sidebar-mobile';
                this.contentClass = 'content-mobile';
            } else {
                this.sidebarClass = 'sidebar';
                this.contentClass = 'content';
            }

            this.toggler();
        }
    },

    methods: {
        toggler() {
            this.visible = !this.visible;
        },

        windowResized() {
            let cwidth = window.innerWidth;

            if(cwidth <= MIN_WIDTH && !this.inMobile)
                this.inMobile = true;
            else if(cwidth > MIN_WIDTH && this.inMobile)
                this.inMobile = false;
        },
    },
};
</script>