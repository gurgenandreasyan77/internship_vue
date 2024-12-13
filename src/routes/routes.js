import App from "@/App.vue";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Contacts from "@/pages/contacts/Contacts.vue";
import ContactEdit from "@/pages/contacts/ContactEdit.vue";

export default [
    {
        path: '/',
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