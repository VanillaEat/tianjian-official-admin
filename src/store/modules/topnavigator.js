import api from '@/api'


const topnavigator = defineTop(
    'topnavigator',

    {
        state: () => ({
            navigators: '',
            position: '',
        }),
        getter: {},
        actions: {


            getList() {
                return new Promise(resolve => {
                    // 通过 mock 获取权限
                    api.get('member/permission', {
                        baseURL: '/mock/',
                        params: {
                            account: this.account
                        }
                    }).then(res => {
                        this.permissions = res.data.permissions
                        resolve(res.data.permissions)
                    })
                })
            }




            }



        }

)
