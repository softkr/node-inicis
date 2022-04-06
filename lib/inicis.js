const axios = require('axios').default;

function inicis_mobile (obj){
    const {P_STATUS, P_RMESG1, P_TID, P_REQ_URL, P_NOTI, P_AMT} = obj;
    if (P_STATUS == '00') {
        const params = new URLSearchParams();
        params.append("P_MID", P_TID.substring(20, 10));
        params.append("P_TID", P_TID);

        axios
            .post(P_REQ_URL, params)
            .then(function (response) {
                var params = new URLSearchParams(response.data);
                console.log(params)
                console.log(params.get("P_STATUS"))
                console.log(response, 'response');
            })
            .catch(function (error) {
                console.log(error, 'error');
            });
    }
}

exports.mobile = inicis_mobile;
