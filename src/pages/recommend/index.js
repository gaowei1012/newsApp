import React from 'react'
import { Card } from 'antd-mobile'
import axios from './../../axios/axios'

export default class Recommend extends React.Component {


    state = {}

    params = {}

    componentWillMount() {
        this.requestList();
    }

    requestList = () => {

        let remomend = '/list/?tag=__all__&ac=wap&count=40&format=json_raw&as=A1255B74B740FE0'

        axios.ajax({
            url: remomend,
            data: { 
                params: {} 
            },
        }).then((res) => {
           let list = res.data.forEach((item, index) => {
               item.key = index;
               debugger
               return item;
           });
           this.setState({
               list
           })
        }) 
    }

    render() {
        return (
            <div>
               
            </div>
        );
    }
}