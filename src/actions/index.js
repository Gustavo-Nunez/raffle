const axios = require('axios');

export const registerUser = (userInformation) => {
    const body = {
        "firstName": userInformation.firstName,
        "lastName": userInformation.lastName,
        "company": userInformation.company,
        "title": userInformation.title,
        "decisions": userInformation.budgetCheck,
        "muleFeatures": [
            userInformation.apiCheck,
            userInformation.esbCheck,
            userInformation.etlCheck,
            userInformation.cloudHub
        ]
    };
    debugger
    return (dispatch) => {
        
        return axios.post("https://g6c9baf9xa.execute-api.us-east-1.amazonaws.com/prod/register", body)
        .then((response) =>  {
            console.log(response)
            dispatch(changeState(response, body.firstName, body.lastName))
        })
        .catch(error => {console.log(error);})
    }
}

function changeState(response, firstName, lastName){
    return {
        type: 'REGISTER_USER',
        firstName,
        lastName,
        userId: response.userId
    }
}