import axios from "axios"
import Cookies from "js-cookie"
const login = async (values) => {
    const res = await axios.post(`https://api.exgain.ir/wallet/api/v1/User/SignIn`, { MobileNumber: values.number, Password: values.password })
    return res
}
const logOut = async () => {
    const res = await axios.get('https://api.exgain.ir/wallet/api/v1/User/LogOut', {
        headers: {
            Authorization: Cookies.get('Authorization')
        }
    })
    return res
}
const summaryReq = async () => {
    const res = await axios.get('https://api.exgain.ir/wallet/api/v1/User/Summary', {
        headers: {
            Authorization: Cookies.get('Authorization')
        }
    })
    return res
}
const fullReq = async () => {
    const res = await axios.get('https://api.exgain.ir/wallet/api/v1/User/My', {
        headers: {
            Authorization: Cookies.get('Authorization')
        }
    })
    return res
}

const cardReq = async () => {
    const res = await axios.get('https://api.exgain.ir/wallet/api/v1/User/BankInfo', {
        headers: {
            Authorization: Cookies.get('Authorization')
        }
    })
    return res
}


export {
    login,
    logOut,
    summaryReq,
    fullReq,
    cardReq
}