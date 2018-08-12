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
            let list = res.data.map((item, index) => {
                item.key = index;
                return item;
            })
            this.setState({
                list: list
            })
        }) 
    }

    render() {
        return (
            <div>
                <Card title={this.list.title}>
                    
                </Card>
            </div>
        );
    }
}