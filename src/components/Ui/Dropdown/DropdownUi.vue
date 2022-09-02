<template>
    <div class="relative">
        <button type="button" class="border border-gray-200 px-4 py-2 rounded">
            <div class="flex items-center">
                <span>
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

        <div class="w-56 mt-1 border border-gray-200 p-2 shadow-md rounded">
            <div class="hover:bg-gray-200 cursor-pointer duration-200 block py-2 px-4">
                Dropdown item 1
            </div>
            <div class="hover:bg-gray-200 cursor-pointer duration-200 block py-2 px-4">
                Dropdown item 2
            </div>
            <div class="hover:bg-gray-200 cursor-pointer duration-200 block py-2 px-4">
                Dropdown item 3
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DropdownUi',
};

</script>
