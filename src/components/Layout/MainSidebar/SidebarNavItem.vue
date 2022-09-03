<template>
    <Component :is="tag" :to="to" :href="href" :title="title" :target="target"
        class="block px-2 py-2 mb-1 text-gray-400 hover:bg-gray-800 hover:pl-4 duration-300 hover:duration-300 cursor-pointer">
        <div class="flex items-center">
            <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

            <span class="ml-2">
                {{ text }}
            </span>
        </div>
    </Component>
</template>

<script>
export default {
    name: 'SidebarNavItem',

    props: {
        text: {
            type: String,
            default: 'Nav item'
        },

        to: {
            type: [Object, String],
            default: undefined
        },

        href: {
            type: String,
            default: undefined
        },

        title: {
            type: String,
            default: null,
        },

        target: {
            type: String,
            default: '_self'
        }
    },

    computed: {
        tag() {
            if (typeof this.to != 'undefined')
                return 'RouterLink';

            return 'a';
        }
    },

    methods: {
    }
};
</script>