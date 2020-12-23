<template>
  <Layout>
    <el-card shadow="hover">
                <div slot="header">
                    <el-row>
                        <el-col :span="16">
                            <span>                             
                                <i class="el-icon-edit-outline"></i>&nbsp;&nbsp; {{$page.post.title}}
                            </span>
                        </el-col>
                    </el-row>
                </div>
                <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                    更新 {{$page.post.published_at}}
                </div>
                <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
                    {{$page.post.content}}
                </div>
            </el-card>
  </Layout>
</template>
<page-query>
	query($id: ID!){
        post:strapiPost(id:$id){
            title
            content
            created_at
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
