import Vuex from 'vuex'
import Vue from "vue";
import add from "./add"
import minous from "./minous"
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        add,
        minous
    }
})