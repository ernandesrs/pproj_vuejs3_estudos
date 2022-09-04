<template>
    <SidebarUi>
        <template v-slot:sidebar>
            <SidebarElemUi title="Dashboard" :nav-items="dashNavItems" />
            <SidebarElemUi title="Configurações" :nav-items="settingsNavItems" />
        </template>

        <template v-slot:content>
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

import MainMain from '@/components/Layout/MainMain.vue';
import MainFooter from '@/components/Layout/MainFooter.vue';
import SidebarUi from '@/components/Ui/Sidebar/SidebarUi.vue';
import SidebarElemUi from '@/components/Ui/Sidebar/SidebarElemUi.vue';

export default {
    name: "SidebarLayout",
    components: { MainMain, MainFooter, SidebarElemUi, SidebarUi },

    data() {
        return {
            dashNavItems: [
                {
                    id: 1,
                    text: 'Usuários',
                    title: 'Listagem de usuários',
                    to: { name: 'index' },
                    target: '_self',
                },
                {
                    id: 2,
                    text: 'Mensagens',
                    title: 'Listagem de mensagens',
                    href: 'https://www.google.com',
                    target: '_blank',
                },
                {
                    id: 3,
                    text: 'Com submenu',
                    title: 'Abrir submenu',
                    href: '#',
                    subnav: [
                        {
                            id: 1,
                            text: 'Sub item #1',
                            title: '',
                            to: { name: 'index' },
                            target: '_blank',
                        },
                        {
                            id: 2,
                            text: 'Sub item #2',
                            title: 'Sub item #2',
                            href: 'https://www.google.com',
                            target: '_blank',
                        },
                        {
                            id: 3,
                            text: 'Sub item #3',
                            title: 'Sub item #3',
                            href: 'https://www.google.com',
                            target: '_blank',
                        },
                    ]
                },
                {
                    id: 4,
                    text: 'Com submenu',
                    title: 'Abrir submenu',
                    href: '#',
                    subnav: [
                        {
                            id: 1,
                            text: 'Sub item #1',
                            title: '',
                            to: { name: 'index' },
                            target: '_blank',
                        },
                        {
                            id: 2,
                            text: 'Sub item #2',
                            title: 'Sub item #2',
                            href: 'https://www.google.com',
                            target: '_blank',
                        },
                        {
                            id: 3,
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
                    id: 5,
                    text: 'Dashboard',
                    title: 'Configurações do dashboard',
                    href: 'https://www.google.com',
                    target: '_blank',
                },
                {
                    id: 6,
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