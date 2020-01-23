export const setDetails = (state, details) => {
    // TODO : set to the state the details from server
    state.employeeId = details.employeeId;
    console.log(details)
};

export const loading = (state, payload) => {
    state.isLoading = payload;

};

export const responseMessage = (state, payload) => {
    state.responseMessage = payload
    setTimeout(() => {
        state.responseMessage = {};
    }, 2000)
}

export const clearData = state => {
    state.employeeId = '',
        state.firstName = '',
        state.lastName = '',
        state.city = '',
        state.address = '',
        state.phoneNumber = '',
        state.smsText = '',
        state.isLoading = false,
        state.alert = ''
}