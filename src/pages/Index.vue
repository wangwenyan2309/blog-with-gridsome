<template>
  <Layout>
     <el-card shadow="hover" v-for="edge in $page.dynamic.edges" :key="edge.node.id" style="margin-bottom: 20px">
                <div slot="header">
                    <el-row>
                        <el-col :span="16">
                            <span>{{edge.node.title}}</span>
                        </el-col>
                    </el-row>
                </div>
                <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                    最近更新 {{edge.node.published_at}}
                </div>
                <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
                    {{edge.node.content}}
                </div>
            </el-card>
  </Layout>
</template>
<page-query>
query{
  dynamic:allStrapiDynamic{
    edges{
      node{
        id
        title
        content
        created_at
        published_at
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: '最新动态'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
