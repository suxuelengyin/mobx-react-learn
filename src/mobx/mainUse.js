import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
//先注意主入口index.js的store注入
@inject('timer')
@observer
class TimerView extends React.Component {
    componentDidMount() {
        setInterval(() => {
            this.props.timer.settime()
        }, 1000)
    }
    render() {
        return (
            <>
                <span>像redux一样注入: {this.props.timer.time}</span>
                <span>@computed计算属性：{this.props.timer.computedTime}</span>
            </>
        );
    }
};
export default TimerView
