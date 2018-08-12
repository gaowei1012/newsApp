import axios from 'axios'
import { Modal } from 'antd-mobile'

export default class Axios {

    static ajax(options) {
        //let baseURL = '/list/?tag=__all__&ac=wap&count=40&format=json_raw&as=A1255B74B740FE0'
        

        return new Promise((resolve, reject) => {
            axios({
                url: options.url || '',
                method: 'get',
                //baseURL: baseURL,
                params: (options.data && options.data.params) || ''
            }).then((response) => {
                if (response.status == '200') {
                    resolve(response.data);
                } else {
                    reject(response.data);
                }
            })
        })

    }    
}