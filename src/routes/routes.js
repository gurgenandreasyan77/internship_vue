import App from "@/App.vue";
import Template from "@/pages/Template.vue"
import LogIn from "@/pages/LogIn.vue"
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Contacts from "@/pages/contacts/Contacts.vue";
import ContactEdit from "@/pages/contacts/ContactEdit.vue";
import registration from "@/pages/Registration.vue";
import Registration from "@/pages/Registration.vue";

export default [
    {
        path: '/',
        component: Template,
        name: 'template',
    },
    {
        path: '/login',
        component: LogIn,
        name: 'login',
    },
    {
        path: '/register',
        component: Registration,
        name: 'register',
    },
    {
        path: '/home',
        component: Home,
        name: 'home',
    },
    {
        path: '/about',
        component: About,
        name: 'about',
        meta: {
            middleware: ['auth'],
        },
    },
    {
        path: '/contacts',
        component: Contacts,
        name: 'contacts',
    },
    {
        path: '/contacts/:id',
        component: ContactEdit,
        name: 'contactEdit',
    },

]