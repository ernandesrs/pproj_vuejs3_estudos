<template>
    <MainHeader></MainHeader>

    <MainMain>
        <template v-slot:view>
            <RouterView />
        </template>
    </MainMain>

    <MainFooter></MainFooter>
</template>

<script>

import MainHeader from '@/components/Layout/MainHeader.vue';
import MainMain from '@/components/Layout/MainMain.vue';
import MainFooter from '@/components/Layout/MainFooter.vue';

export default {
    name: "DefaultLayout",
    components: { MainHeader, MainMain, MainFooter }
}

</script>