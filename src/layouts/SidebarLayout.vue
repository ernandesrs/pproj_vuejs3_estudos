<template>
    <MainSidebar>
        <template v-slot:sidebar>
            <SidebarElem title="Dashboard" :nav-items="dashNavItems"></SidebarElem>
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
                },
                {
                    text: 'Com submenu',
                    title: 'Abrir submenu',
                    href: '#',
                    subnav: [
                        {
                            text: 'Sub item #1',
                            title: '',
                            to: { name: 'index' },
                            target: '_blank',
                        },
                        {
                            text: 'Sub item #2',
                            title: 'Sub item #2',
                            href: 'https://www.google.com',
                            target: '_blank',
                        },
                        {
                            text: 'Sub item #3',
                            title: 'Sub item #3',
                            href: 'https://www.google.com',
                            target: '_blank',
                        },
                    ]
                }
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