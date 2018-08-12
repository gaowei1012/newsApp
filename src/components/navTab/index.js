import React from 'react'
import { Tabs } from 'antd-mobile'
import './index.less'

export default class NavTabs extends React.Component {

    state = {
        tabs: [
            { title: '推荐' },
            { title: '视频' },
            { title: '热点' },
            { title: '社会' },
            { title: '娱乐' },
            { title: '军事' },
            { title: '科技' },
            { title: '汽车' },
            { title: '体育' },
            { title: '财经' },
            { title: '国际' },
            { title: '时尚' },
        ]
    }

    renderContent = tab => (
        <div>
            <p>{tab.title}</p>
        </div>
    )

    render() {
        return (
            <div className='wapper_nav_bar'>
                <Tabs
                    tabs={this.state.tabs}
                >
                    {this.renderContent}
                </Tabs>
            </div>
        );
    }
}