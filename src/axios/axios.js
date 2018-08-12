import axios from 'axios'

export default class Axios {

    /**
     * 网络请求封装
     * @param {传入参数} options 
     */
    static ajax(options) {
    
        // 返回一个promise
        return new Promise((resolve, reject) => {
            axios({
                url: options.url || '',
                method: 'get',
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