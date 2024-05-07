
import { createRouter, createWebHashHistory } from 'vue-router';

import kpTablePage from './KpTableTest.vue';
import kpTagPage from './KpTagTest.vue';
import indexPage from './indexPage.vue';

const routes = [
    { path: '/', component: indexPage },
    { path: '/kptable', component: kpTablePage },
    { path: '/kptag', component: kpTagPage },
  ];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
   
export default router;
 