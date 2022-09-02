<template>
    <div class="relative">
        <button @click.stop.prevent="toggle" type="button"
            class="border border-gray-200 px-4 py-2 rounded">
            <div class="flex items-center">
                <span class="text-base font-medium">
                    Dropdown text
                </span>
                <span class="ml-2">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </span>
            </div>
        </button>

        <div v-show="isOpen"
            class="w-56 mt-1 border border-gray-200 p-2 shadow-md rounded">
            <div class="hover:bg-gray-200 cursor-pointer duration-200 block py-2 px-4">
                Dropdown item 1
            </div>
            <div class="hover:bg-gray-200 cursor-pointer duration-200 block py-2 px-4">
                Dropdown item 2
            </div>

            <div class="border-b border-gray-200 my-2"></div>

            <div class="hover:bg-gray-200 cursor-pointer duration-200 block py-2 px-4">
                Dropdown item 3
            </div>
            <div class="hover:bg-gray-00 cursor-pointer duration-200 block py-2 px-4">
                Dropdown item 4
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DropdownUi',

    data() {
        return {
            isOpen: false,
        };
    },

    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        },
    },
};

</script>
