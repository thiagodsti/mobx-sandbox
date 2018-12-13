import { observable, action } from 'mobx';

export default class TodoStore {
    @observable list = [];

    @action.bound
    add(todo) {
        this.list.push(todo);
    }

    @action.bound
    remove(todo) {
        this.list.splice(this.list.indexOf(todo), 1);
    }
}