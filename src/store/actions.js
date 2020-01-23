import axios from 'axios';
import router from '../router';

// const BASE_URL = "https://jsonplaceholder.typicode.com/"
const BASE_URL = "/sap/opu/odata/sap/ZHR_SMS_SEND_SRV/"
// axios.defaults.withCredentials = true;

const newAxios = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': "X",
        'Access-Control-Allow-Origin': '*'
    }
})
export const fetchDetails = async ({
    commit
}, employeeId) => {
    commit('loading', true)
    let response = await newAxios.get(`/EmployeeSet('${employeeId}')`);
    // let response = await newAxios.get('/users/1');
    let data = await response.data;
    console.log(data)

    // .then(data => {
    //     console.log(data);
    //     // * set the data to the States
    //     commit('setDetails', details)
    //     router.push('/send-sms')
    //     commit('loading', false)
    // })
    // .catch(err => {
    //     commit('loading', false)
    //     console.log(err)
    //     commit('responseMessage', {
    //         status: 'error',
    //         message: 'התרחשה שגיאה'
    //     })
    // })
};


export const sendSms = ({
    commit
}, {
    phoneNumber,
    message
}) => {
    commit('loading', true)
    console.log(phoneNumber, message)
    axios.post('', {
            phoneNumber,
            message
        })
        .then(data => {
            console.log(data);
            commit('loading', false)
            commit('responseMessage', {
                status: 'success',
                message: "נשלח בהצלחה"
            })
            commit('clearData')
            setTimeout(() => {
                router.replace('/')
            }, 3000)

        }).catch(_ => {
            commit('loading', false)
            commit('responseMessage', {
                status: 'error',
                message: 'התרחשה שגיאה'
            })
        })



}