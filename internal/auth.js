import Cookies from "cookies";
import jwt from "jsonwebtoken";

export function setJWT(req, res, token) {
    const cookies = new Cookies(req, res)
    const payload = jwt.decode(token)
    cookies.set('JWT', token, {expires: new Date(payload.exp * 1000)});
}

export function unsetJWT(req, res) {
    const cookies = new Cookies(req, res)
    cookies.set('JWT', {expires: Date.now()});
}

export function isAuth(req, res) {
    const cookies = new Cookies(req, res)
    return cookies.get('JWT') !== undefined;
}

export function goToLogin() {
    return {
        redirect: {
            destination: '/login',
            permanent: false,
        },
    }
}

export function goToHome() {
    return {
        redirect: {
            destination: '/',
            permanent: false,
        },
    }
}