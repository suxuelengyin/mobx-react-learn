import {observable, action, computed, autorun} from 'mobx';
class Time{
    @observable time=0
    @action.bound
    settime(){
        this.time++;
    }
    @computed get computedTime(){
        return this.time+1
    }
}
export default new Time()
