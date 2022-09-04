<template>
    <nav class="flex flex-col" :class="{'bg-gray-800 border-l-2 border-gray-700 pl-4': isSubnav}">
        <SidebarNavItemUi v-for="item in navItems" v-bind:key="item" :nav-item="item" />
    </nav>
</template>

<script>

import SidebarNavItemUi from './SidebarNavItemUi.vue';

export default {
    name: "SidebarNavUi",
    components: { SidebarNavItemUi },

    data() {
        return {
        };
    },

    props: {
        navItems: {
            type: Array,
            default: null
        },

        isSubnav: {
            type: Boolean,
            default: false
        },
    },

    methods: {
    },
};

</script>