<template>
    <div>
        <button @click="add(n)">数据增长</button>
        {{$store.state.add.sum}}
        {{sum}}
        {{bigNumber}}
        <button @click="jian(n)">数据减少</button>
        {{$store.state.minous.sum2}}
        {{sum2}}
    </div>
</template>


<script>
    import {mapState, mapGetters, mapMutations, mapActions} from "vuex"

    export default {
        name: "functionText",
        data() {
            return {
                n: 1
            }
        },
        methods: {
            ...mapActions("add", {add: "add"}),
            ...mapMutations("minous", {jian: "JIAN"})

        },
        computed: {
            ...mapState("add", ["sum"]),
            ...mapState("minous", ["sum2"]),
            //相当于sum(){return this.$store.state.sum}
            ...mapGetters("add", ["bigNumber"])
        }
    }
</script>


<style scoped></style>
