
<template>
    <div class="tmpl-card">
        <div class="title">
            空间模板
        </div>
        <ul class="content">
            <li class="kind-item" v-for="item in kinds" :key="item.id" @click="itemClicked(item.id)">
                {{item.name}}
            </li>
        </ul>
    </div>
    

</template>



<script>

export default {
    props: ["kinds"],
    data() {
        return {
            
        }
    },
    methods: {
        itemClicked(id) {
            this.$emit("triggered", id)
        }
    }
}
</script>



<style scoped>

ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
}

.tmpl-card {
    background-color: rgb(33, 35, 41);
    border-radius: 10px;
    margin: 20px 20px;
}

.title {
    color: #fff;
    height: 40px;
    line-height: 40px;
    font-weight: 300;
    font-size: 12px;
    user-select: none;
}

.content {
    min-height: 100px;
    padding: 10px 16px 20px 16px;
}

.kind-item {
    color: #fff;
    user-select: none;
    cursor: pointer;
    height: 36px;
    line-height: 36px;
    border-radius: 5px;
    font-weight: 600;
}

.kind-item:hover {
    background-color: rgb(50, 53, 59);
}

</style>