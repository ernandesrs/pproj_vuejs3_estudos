<template>
    <SidebarUi>
        <template v-slot:sidebar>
            <SidebarElemUi title="Dashboard" :nav-items="dashNavItems"></SidebarElemUi>
            <SidebarElemUi title="Configurações" :nav-items="settingsNavItems">
            </SidebarElemUi>
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
    </SidebarUi>
</template>

<script>

import MainHeader from '@/components/Layout/MainHeader.vue';
import MainMain from '@/components/Layout/MainMain.vue';
import MainFooter from '@/components/Layout/MainFooter.vue';
import SidebarUi from '@/components/Ui/Sidebar/SidebarUi.vue';
import SidebarElemUi from '@/components/Ui/Sidebar/SidebarElemUi.vue';

export default {
    name: "SidebarLayout",
    components: { MainHeader, MainMain, MainFooter, SidebarElemUi, SidebarUi },

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