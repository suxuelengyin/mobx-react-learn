import {observable, action, computed, autorun} from 'mobx';
class Time{
    @observable time=0
    @action.bound
    settime(){
        this.time++;
    }
}
export default new Time()
