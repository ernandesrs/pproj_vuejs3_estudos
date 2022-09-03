<template>
    <nav class="flex flex-col">
        <SidebarNavItem v-for="item in navItems" v-bind:key="item" :text="item.text"
            :to="item.to" :href="item.href" :title="item.title" :target="item.target" />
    </nav>
</template>

<script>

import SidebarNavItem from './SidebarNavItem.vue';
export default {
    name: "SidebarNav",

    components: { SidebarNavItem },

    props: {
        navItems: {
            type: Array,
            default: null
        },
    },

    data() {
        return {};
    },
};

</script>