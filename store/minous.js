export default {
    namespaced: true,
    actions: {

    },
    mutations: {
        JIAN(state, value) {
            state.sum2 -= value;
        },
    },
    state: {
        sum2: 10
    }
}