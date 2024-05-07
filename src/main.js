import { createApp } from 'vue'
import KpTableTest from './KpTableTest.vue'

import ElementPlus from 'element-plus'

const kpTableApp = createApp(KpTableTest)
kpTableApp.use(ElementPlus)
kpTableApp.mount('#app')
