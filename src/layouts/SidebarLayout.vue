<template>
    <MainSidebar>
        <template v-slot:sidebar>
            <SidebarElem title="Dashboard" :nav-items="dashNavItems"></SidebarElem>
            <SidebarElem title="Site" :nav-items="siteNavItems"></SidebarElem>
            <SidebarElem title="Configurações" :nav-items="settingsNavItems">
            </SidebarElem>
        </template>

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
import MainSidebar from '@/components/Layout/MainSidebar/MainSidebar.vue';
import SidebarElem from '@/components/Layout/MainSidebar/SidebarElem.vue';

export default {
    name: "SidebarLayout",
    components: { MainHeader, MainMain, MainFooter, MainSidebar, SidebarElem },

    data() {
        return {
            dashNavItems: [
                {
                    text: 'Usuários',
                    title: 'Listagem de usuários',
                    to: { name: 'index' },
                    target: '_self',
                },
                {
                    text: 'Mensagens',
                    title: 'Listagem de mensagens',
                    href: 'https://www.google.com',
                    target: '_blank',
                }
            ],

            siteNavItems: [
                {
                    text: 'Páginas',
                    title: 'Listagem de páginas',
                    href: 'https://www.google.com',
                    target: '_blank',
                },
                {
                    text: 'Seções',
                    title: 'Listagem de seções',
                    href: 'https://www.google.com',
                    target: '_blank',
                },
                {
                    text: 'Menus',
                    title: 'Listagem de menus',
                    href: 'https://www.google.com',
                    target: '_blank',
                },
            ],

            settingsNavItems: [
                {
                    text: 'Dashboard',
                    title: 'Configurações do dashboard',
                    href: 'https://www.google.com',
                    target: '_blank',
                },
                {
                    text: 'Site',
                    title: 'Configurações do site',
                    href: 'https://www.google.com',
                    target: '_blank',
                },
            ],
        };
    },
}
</script>