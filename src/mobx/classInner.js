import React, { Component } from 'react';
import {observer} from 'mobx-react'
import {observable} from 'mobx'
@observer 
class ClassInner extends React.Component {
    @observable secondsPassed = 0

    componentWillMount() {
        setInterval(() => {
            this.secondsPassed++
        }, 1000)
    }

    render() {
        return (<span>局部类状态: { this.secondsPassed } </span> )
    }
}
export default ClassInner