import { observable, action } from 'mobx';

export default class NumberStore {
    @observable value = 0;

    @action.bound
    increase() {
        this.value++;
    }

    @action.bound
    decrease() {
        this.value--;
    }
}