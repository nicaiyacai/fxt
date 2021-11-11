export default {
    namespaced: true,
    actions: {
        add(context, value) {
            setTimeout(() => {
                context.commit("ADD", value)
            }, 2000)
        }
    },
    mutations: {
        ADD(state, value) {
            state.sum += value;
        },
    },
    state: {
        sum: 12
    },
    getters: {
        bigNumber(state) {
            return state.sum * 10;
        }
    }
};