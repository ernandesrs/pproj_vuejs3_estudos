<template>
    <div class="relative">
        <button @click="dropdownToggler" :class="['px-4 py-1.5', dropdownButtonDinamicStyles]"
            type="button">
            <div class="flex items-center text-gray-700">
                <span>
                    <slot name="dropdownButtonContent"></slot>
                </span>
                <span class="ml-2">
                    <svg v-if="dropdownShow" class="w-4 h-4" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M5 15l7-7 7 7"></path>
                    </svg>

                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </span>
            </div>
        </button>

        <div v-show="dropdownShow"
            class="mt-1 absolute w-full max-w-xs border border-gray-200 px-4 py-3 shadow-md">
            <slot name="dropdownContent"></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DropdownUi',

    props: ['borderless', 'unround', 'opened'],

    data() {
        return {
            dropdownShow: false,
            dropdownButtonBorder: 'border',
            dropdownButtonRounded: 'rounded',

            dropdownButtonDinamicStyles: [],
        };
    },

    created() {
        if (this.borderless)
            this.dropdownButtonBorder = null;

        if (this.unround)
            this.dropdownButtonRounded = null;

        if (this.opened)
            this.dropdownShow = true;
        
        this.dropdownButtonDinamicStyles.push(this.dropdownButtonBorder);
        this.dropdownButtonDinamicStyles.push(this.dropdownButtonRounded);
    },

    methods: {
        dropdownToggler() {
            this.dropdownShow = !this.dropdownShow;
        }
    },
};

</script>