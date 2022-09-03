<template>
    <MainSidebar>
        <template v-slot:content>
            <MainHeader></MainHeader>

            <MainMain>
                <template v-slot:view>
                    <RouterView />
                </template>
            </MainMain>

            <MainFooter></MainFooter>
        </template>
    </MainSidebar>
</template>

<script>
import MainHeader from '@/components/Layout/MainHeader.vue';
import MainMain from '@/components/Layout/MainMain.vue';
import MainFooter from '@/components/Layout/MainFooter.vue';
import MainSidebar from '@/components/Layout/MainSidebar.vue';
export default {
    name: "SidebarLayout",
    components: { MainHeader, MainMain, MainFooter, MainSidebar }
}
</script>