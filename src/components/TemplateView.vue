
<template>
    <div>
      <div class="header">模板预置了环境配置与样本代码，选择模板即可直接创建新的空间，如需新建自定义工作空间请点击左下角「新建空间」按钮新建。</div>
      <div class="tmpl-area" v-for="item in tmpls" :key="item.id">
        <div class="title">{{ item.name }}</div>
        <div class="card-area clear-fix">
          <ul>
            <li v-for="tmpl in item.items" :key="tmpl.id" :info="tmpl">
              <TemplateCard :info="tmpl" @click.native="tmplSelected(tmpl.id)"></TemplateCard>
            </li>
          </ul>
        </div>
      </div>
    </div>
    

</template>



<script>

import TemplateCard from "./TemplateCard.vue"

export default {
    props: ["tmpls"],
    components: {
        TemplateCard
    },
    data() {
        return {
            
        }
    },
    methods: {
      tmplSelected(id) {
          console.log("tmpl id:", id)
      }
    }
}
</script>



<style lang="less" scoped>

ul, li {
  list-style: none;
}

.header {
    height: 30px;
    color: white;
    font-size: 10px;
    padding: 16px 0 16px 24px;
    text-align: left;
}

.title {
    color: white;
    font-size: 16px;
    line-height: 30px;
    font-weight: 600;
}

.clear-fix:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

ul {
  padding: 20px 10px;
}

.card-area {
  display: block;
  width: 100%;

  ul {

    li {
      float: left;
      margin: 10px;
    }
  }

}




</style>