import {$axios} from "@/plugins/axios.js";
import {useRouter} from "vue-router";
import Cookies from 'js-cookie';

/**
 *
 * @param register_data
 * @returns {Promise<void>}
 */
export async function getRegistered(register_data) {

    const regDataObject = Object.fromEntries(register_data);

    const registration = await $axios.post('/auth/register', {
        name: `${regDataObject.reg_name}`,
        last_name: `${regDataObject.reg_lastName}`,
        email: `${regDataObject.reg_email}`,
        password: `${regDataObject.reg_password}`
    });

    if (registration.status === 200) {
        window.location.replace("http://localhost:5173/login");
    }
}


/**
 *
 * @param login_data
 * @returns {Promise<void>}
 */
export async function getAuthentificated(login_data) {

    const loginDataObject = Object.fromEntries(login_data);
    // console.log(loginDataObject);

    const login = await $axios.post('/auth/login', {
        email: `${loginDataObject.email}`,
        password: `${loginDataObject.password}`,
    });
    // console.log('status', response.status)

    if (login.status === 200) {
        if (loginDataObject.checkbox === true) {
            Cookies.set('token', login.data.token, {expires: 30, path: '/'});
        }
        window.location.replace("http://localhost:5173/");
    }
}

