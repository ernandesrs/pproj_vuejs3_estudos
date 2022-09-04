<template>
    <Component @click="subnavToggler" :is="tag" :to="navItem.to" :href="navItem.href"
        :title="navItem.title" :target="navItem.target"
        class="w-full hover:bg-gray-800 text-gray-400 block px-2 py-2 mb-1 hover:pl-4 duration-300 hover:duration-300 cursor-pointer"
        :class="{'bg-gray-800 border-l-2 border-gray-700 pl-4' : subnavVisible && navItem.subnav}">
        <div class="flex items-center">
            <svg v-if="!subnavVisible || !navItem.subnav" class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

            <svg v-else class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

            <span class="ml-2">
                {{ navItem.text }}
            </span>
        </div>
    </Component>

    <SidebarNavUi v-if="navItem.subnav" v-show="subnavVisible" :nav-items="navItem.subnav"
        is-subnav />
</template>

<script>

import SidebarNavUi from './SidebarNavUi.vue';

export default {
    name: "SidebarNavItemUi",

    components: { SidebarNavUi },

    props: {
        navItem: {
            type: Object,
            default: null
        }
    },

    data() {
        return {
            subnavVisible: false,
        };
    },

    computed: {
        tag() {
            if (typeof this.navItem.to != "undefined")
                return "RouterLink";
            return "a";
        }
    },

    methods: {
        subnavToggler() {
            this.subnavVisible = !this.subnavVisible;
            console.log(this.subnavVisible);
        },
    },
};

</script>