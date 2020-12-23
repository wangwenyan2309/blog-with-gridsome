<template>
  <Layout>
     <el-card shadow="hover" v-for="edge in $page.posts.edges" :key="edge.node.id" style="margin-bottom: 20px">
                <div slot="header">
                    <el-row>
                        <el-col :span="16">
                            <span>
                                <g-link style="text-decoration:none;cursor:pointer" :to="'/post/'+edge.node.id">
                                    <i class="el-icon-edit-outline"></i>&nbsp;&nbsp; {{edge.node.title}}
                                </g-link>
                            </span>
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
            <Pager style="text-align: center" :info="$page.posts.pageInfo"/>
            
  </Layout>
</template>
<page-query>
query($page: Int){
  posts: allStrapiPost(
      perPage:2
      page:$page
  ) @paginate {
    pageInfo {
        totalPages
        currentPage
    }
    edges{
      node{
        id
        title
        content
        published_at
      }
    }
  }
}
</page-query>
<script>
import { Pager } from 'gridsome'
export default {
  metaInfo: {
    title: '博客列表'
  },
    components: {
    Pager
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
