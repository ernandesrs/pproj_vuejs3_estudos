<template>
    <nav class="flex flex-col">
        <template v-for="item in navItems" v-bind:key="item">
            <SidebarNavItemUi v-if="!item.subnav" :text="item.text" :to="item.to"
                :href="item.href" :title="item.title" :target="item.target" />
            <div v-else>
                <SidebarNavItemUi :text="item.text" :to="item.to" :href="item.href"
                    :title="item.title" :target="item.target" />
                <nav v-if="item.subnav" class="flex flex-col ml-5">
                    <SidebarNavItemUi v-for="subItem in item.subnav" v-bind:key="subItem"
                        :text="subItem.text" :to="subItem.to" :href="subItem.href"
                        :title="subItem.title" :target="subItem.target" />
                </nav>
            </div>
        </template>
    </nav>
</template>

<script>

import SidebarNavItemUi from './SidebarNavItemUi.vue';

export default {
    name: "SidebarNavUi",

    components: { SidebarNavItemUi },

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