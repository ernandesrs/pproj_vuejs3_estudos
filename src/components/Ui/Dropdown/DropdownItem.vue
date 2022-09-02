<template>
    <a :href="href" :title="title" :target="target"
        class="block px-5 py-2 hover:bg-gray-100">
        <span class="flex items-center">
            <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5l7 7-7 7"></path>
            </svg>
            <span v-if="!$slots.dropdownItemContent">{{ text }}</span>
            <slot name="dropdownItemContent"></slot>
        </span>
    </a>
</template>

<script>
export default {
    name: 'DropdownItem',

    props: ['href', 'text', 'title', 'target'],

}
</script>