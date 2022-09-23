export default [
    {
        url: '/mock/member/login',
        method: 'post',
        response: option => {
            return {
                error: '',
                status: 1,
                data: {
                    account: option.body.account,
                    token: 'token',
                    failure_time: '6546345654'

                    // failure_time: Math.ceil(new Date().getTime() / 1000) + 24 * 60 * 60
                }
            }
        }
    },

    // {
    //     url: '/mock/member/getNavigator',
    //     method: 'post',
    //     response: option => {
    //         return {
    //             status: 1,
    //             data: {
    //                 account: option.body.account,
    //                 token: 'token',
    //                 failure_time: '6546345654'
    //
    //                 // failure_time: Math.ceil(new Date().getTime() / 1000) + 24 * 60 * 60
    //             }
    //         }
    //     }
    // },


    //
    // {
    //     "id":"1",
    //     "name":"2",
    //     "description":"3"
    // }
    //
    //
    //
    // {
    //     "error": "",
    //     "status": 1,
    //     "data": {
    //         "account": "aaaa",
    //         "token": "aaaa",
    //         "failure_time": "6546345654"
    //     }
    // }


    {
        url: '/mock/member/permission',
        method: 'get',
        response: option => {
            let permissions = []
            if (option.query.account == 'admin') {
                permissions = [
                    'permission.browse',
                    'permission.create',
                    'permission.edit',
                    'permission.remove'
                ]
            } else if (option.query.account == 'test') {
                permissions = [
                    'permission.browse'
                ]
            }
            return {
                error: '',
                status: 1,
                data: {
                    permissions
                }
            }
        }
    }
]
