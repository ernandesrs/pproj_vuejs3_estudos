<template>
    <div class="grid grid-cols-12 h-screen overflow-hidden relative">
        <div v-show="visible"
            class="bg-gray-900 md:relative z-50 hidden md:flex flex-col md:col-span-3 xl:col-span-2">
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

        <div class="overflow-y-auto" :class="contentClass">
            <!-- sidebar topbar -->
            <div class="bg-gray-400">
                <div class="px-5 py-3">
                    <!-- sidebar toggler -->
                    <button @click.stop.prevent="toggler">
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

            <!-- sidebar content -->
            <slot name="content" />
            <!-- /sidebar content -->
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'MainSidebar',

    data() {
        return {
            visible: true,
            contentClass: 'col-span-12 md:col-span-9 xl:col-span-10',
        };
    },

    watch: {
        visible(visible) {
            if (visible) {
                this.contentClass = 'col-span-12 md:col-span-9 xl:col-span-10';
            } else {
                this.contentClass = 'col-span-12';
            }
        },
    },

    methods: {
        toggler() {
            this.visible = !this.visible;
        },
    },
};
</script>