<template>
    <nav class="flex flex-col">
        <template v-for="item in navItems" v-bind:key="item">
            <SidebarNavItem v-if="!item.subnav" :text="item.text" :to="item.to"
                :href="item.href" :title="item.title" :target="item.target" />
            <div v-else>
                <SidebarNavItem :text="item.text" :to="item.to" :href="item.href"
                    :title="item.title" :target="item.target" />
                <nav v-if="item.subnav" class="flex flex-col ml-5">
                    <SidebarNavItem v-for="subItem in item.subnav" v-bind:key="subItem"
                        :text="subItem.text" :to="subItem.to" :href="subItem.href"
                        :title="subItem.title" :target="subItem.target" />
                </nav>
            </div>
        </template>
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