<template>
    <div class="pb-4">
        <h3 v-if="title" class="text-gray-400 font-semibold py-2">{{ title }}</h3>
        <div class="py-4">
        </div>
    </div>
</template>

<script>

export default {
    name: "SidebarElemUi",

    components: {  },

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