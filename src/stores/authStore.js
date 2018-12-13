import { observable, action } from 'mobx';

export default class AuthStore {
    @observable isAuthenticated = false;
    @observable teste = 'thiago';

    @action.bound
    authenticate(username, password) {
        if (username === 'admin' && password === 'admin') {
            this.isAuthenticated = true;
            return true;
        }
        return false;
    }

    @action.bound
    logout() {
        this.isAuthenticated = false;
    }
}