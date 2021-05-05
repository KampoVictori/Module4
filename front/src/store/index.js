import { createStore, createLogger } from 'vuex';
import message from "./message";
import books from "./photo";

const store = createStore({
    plugins: [createLogger()],
    modules: {
        message,
        photo
    },
});

export default store;