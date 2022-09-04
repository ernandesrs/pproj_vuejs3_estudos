<template>
    <nav class="flex flex-col">
        <SidebarNavItemUi v-for="navItem in navItems" v-bind:key="navItem.id" :nav-item="navItem" />
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
    },

    methods: {
    },
};

</script>