'use client';

import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { NavSecondary } from './nav-secondary';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
    LayoutDashboardIcon,
    ListIcon,
    SearchIcon,
    GithubIcon,
    FileTextIcon,
    ChartColumnIncreasingIcon,
    CoinsIcon,
} from 'lucide-react';
import Link from 'next/link';

const data = {
    user: {
        name: '최수빈',
        email: 'sub1n17@naver.com',
        avatar: '',
    },
    navMain: [
        {
            title: '홈',
            url: '/',
            icon: <LayoutDashboardIcon />,
        },
        {
            title: '코인 검색',
            url: '/search',
            icon: <SearchIcon />,
        },
        {
            title: '매매 일지',
            url: '/trades',
            icon: <ListIcon />,
        },
    ],
    navSecondary: [
        {
            title: 'GitHub',
            url: 'https://github.com/sub1n17',
            icon: <GithubIcon />,
        },
        {
            title: 'Velog',
            url: 'https://velog.io/@sub1n17',
            icon: <FileTextIcon />,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:p-1.5!"
                        >
                            <Link href="/">
                                <CoinsIcon className="size-5!" />
                                <span className="text-base font-bold tracking-tighter">
                                    CoinTradeLog
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}
