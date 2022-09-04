<template>
    <div class="pb-4">
        <h3 v-if="title" class="text-gray-400 font-semibold py-2">{{ title }}</h3>
        <div class="py-4">
            <SidebarNavUi v-if="navItems" :navItems="navItems" />
        </div>
    </div>
</template>

<script>

import SidebarNavUi from './SidebarNavUi.vue';

export default {
    name: "SidebarElemUi",

    components: { SidebarNavUi },

    props: {
        title: {
            type: String,
            default: null
        },

        navItems: {
            type: Array,
            default: null
        },
    },
}

</script>