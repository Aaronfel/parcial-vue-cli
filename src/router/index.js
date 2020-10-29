import { createWebHistory, createRouter } from 'vue-router'

//import Binding from '../components/Binding.vue'
import FormularioGastos from '../components/FormularioGastos.vue'
import Table from '../components/Table.vue'
import TablaChoice from '../components/TablaChoice'


const routes = [
    { path: '/', name: 'Home', component: TablaChoice },
    { path: '/formulario', name: 'FormularioGastos', component: FormularioGastos },
    { path: '/table', name: 'Table', component: Table },
    { path: '/tablaChoice', name: 'TablaChoice', component: TablaChoice },




    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
