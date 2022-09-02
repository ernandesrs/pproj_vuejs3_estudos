<template>
    <div class="hover:bg-gray-200 cursor-pointer duration-200 block py-2 px-4">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'DropdownItemUi',
};
</script>