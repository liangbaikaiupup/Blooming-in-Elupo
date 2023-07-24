export const TOURISTS = [
    {
        path: '/',
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard/index.vue'),
                name: 'Dashboard',
                meta: { title: 'Dashboard', icon: 'home-filled', affix: true },
            },
        ],
    },
    {
        path: '/juejin',
        redirect: '/juejin/index',
        children: [
            {
                path: 'index',
                hidden: true,
                component: () => import('@/views/jue-jin/index.vue'),
                name: 'JueJin',
                meta: { title: '掘金', icon: 'Document' },
            },
        ],
    },
    {
        path: '/guide',
        redirect: '/guide/index',
        name: 'GuideBook',
        meta: { title: 'GuideBook', icon: 'Promotion' },
        children: [
            {
                path: 'index',
                component: () => import('@/views/guide/index.vue'),
                name: 'Guide',
                meta: { title: '指南', icon: 'Edit' },
            },
            {
                path: 'documentation',
                component: () => import('@/views/guide/documentation.vue'),
                name: 'Documentation',
                meta: { title: 'Documentation', icon: 'Fries' },
            },
        ],
    },
]