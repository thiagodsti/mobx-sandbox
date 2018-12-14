import NumberStore from './numberStore';
import TodoStore from './todoStore';
import AuthStore from './authStore';

class Store {
    numberStore = new NumberStore();

    todoStore = new TodoStore();

    authStore = new AuthStore();
}

export default new Store();
