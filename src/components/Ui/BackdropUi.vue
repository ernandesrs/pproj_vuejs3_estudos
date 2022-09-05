<template>
    <Transition enter-from-class="bg-gray-800 opacity-0"
        enter-active-class="duration-1000" enter-to-class="bg-gray-800 opacity-80"
        leave-from-class="bg-gray-800 opacity-80" leave-active-class="duration-1000"
        leave-to-class="bg-gray-800 opacity-0" @after-enter="ok" @after-leave="ok">
        <div class="w-screen h-screen absolute z-30 top-0 left-0"
            :class="{ 'bg-gray-800 opacity-80': showed }">
        </div>
    </Transition>
</template>

<script>

export default {
    name: 'BackdropUi',

    data() {
        return {
            showed: false,
        };
    },

    methods: {
        ok() {
            this.showed = !this.showed;
        },
    },
};

</script>