<template>
    <Component :is="tag" :to="navItem.to" :href="navItem.href" :title="navItem.title"
        :target="navItem.target"
        class="w-full hover:bg-gray-800 text-gray-400 flex items-center px-2 py-2 mb-1 hover:pl-4 duration-300 hover:duration-300 cursor-pointer">
        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>

        <span class="ml-2">
            {{ navItem.text }}
        </span>
    </Component>
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

    computed: {
        tag() {
            if (typeof this.navItem.to != "undefined")
                return "RouterLink";
            return "a";
        }
    },
};

</script>