
<template>
    <el-container class="root">
      <el-header class="header">

      </el-header>

      <el-container class="bottom-main">
        <el-aside>
          <SpaceTemplateCard :kinds="tmplKinds" @triggered="changeTmpls"></SpaceTemplateCard>
        </el-aside>

        <el-main>
          <div class="right-side">
            <TemplateView :tmpls="tmpls"></TemplateView>
          </div>
        </el-main>
      </el-container>
    </el-container>

</template>

<script>

import SpaceTemplateCard from '../components/SpaceTemplateCard.vue'
import TemplateView from '../components/TemplateView.vue'

export default {
  name: 'DashBoard',
  components: {
    SpaceTemplateCard,
    TemplateView
  },
  data() {
    return {
      tmplKinds: [
        {id: 0, name: "全部模板"},
        {id: 1, name: "常用模板"},
        {id: 2, name: "程序模板"}
      ],
      tmpls: [
        {
          id: 1,
          name: "常用模板",
          items: [
            {id: 1, avatar: "", name: "Go", desc: "Go语言环境, 包含go sdk、make、git工具", tags:["Go", "Git"]},
            {id: 2, avatar: "", name: "C++", desc: "C++语言环境, 包含gcc、g++、make、git工具", tags:["Cpp", "Git"]},
            {id: 3, avatar: "", name: "C++", desc: "C++语言环境, 包含gcc、g++、make、git工具", tags:["Cpp", "Git"]},
            {id: 4, avatar: "", name: "C++", desc: "C++语言环境, 包含gcc、g++、make、git工具", tags:["Cpp", "Git"]}
          ]
        },
        {
          id: 2,
          name: "程序模板",
          items: []
        }
      ]
    }
  },
  methods: {
    changeTmpls(id) {
      console.log(id)
    }
  }
}
</script>

<style lang="less" scoped>

.root {
  height: 100%;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}



.bottom-main {
  width: 100%;
  height: calc(100% - 60px);
}

.el-aside {
  background-color: #D3DCE6;
  height: 100%;
  width: 260px !important;
  float: left;
}

.el-main {
  background-color: #E9EEF3;
  height: 100%;
  width: calc(100% - 260px);
  float: left;

  .right-side {
    background-color: rgb(33, 35, 41);
    margin: 20px 0 0 30px;
    height: calc(100% - 20px);
    border-top-left-radius: 8px;
  }
}



</style>