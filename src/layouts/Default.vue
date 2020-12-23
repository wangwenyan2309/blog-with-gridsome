<template>
    <div>
        <section class="page-header" style="linear-gradient(120deg, rgb(38, 144, 249), rgb(252, 45, 45));color: #fff">
            <h1 class="project-name">我的博客</h1>
            <h2 class="project-tagline">欢迎来到我的博客</h2>
            <a href="https://github.com/wangwenyan2309" class="btn" target="_blank">GitHub主页</a>
            <a href="https://github.com/wangwenyan2309/blog-with-gridsome" class="btn" target="_blank">博客源码</a>
        </section>
        <section class="main-content">
            <el-row>
                <el-col :span="6" style="padding-right:10px">
                    <sidebar></sidebar>
                </el-col>
                <el-col :span="18" style="padding-left:10px">
                    <section>
                      <slot />
                    </section>
                </el-col>
            </el-row>

        </section>
        <section class="foot">
            <foot></foot>
        </section>


    </div>
</template>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
    import Sidebar from './components/Sidebar'
    import AppMain from './components/AppMain'
    import Foot from './components/Foot'
    export default {
      components: {
        Sidebar,
        AppMain,
        Foot
      },
}
</script>
<style>
    .page-header {
        padding: 5rem 6rem;
        color: #fff;
        text-align: center;
        background-color: #159957;
        background-image: linear-gradient(120deg, #155799, #159957);
    }

    .project-name {
        font-size: 3.25rem;
        margin-top: 0;
        margin-bottom: 0.1rem;
    }

    .project-tagline {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        font-weight: normal;
        opacity: 0.7;
    }

    .btn:hover {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        background-color: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.3);
    }

    a:hover {
        text-decoration: underline;
    }

    a:active,
    a:hover {
        outline: 0;
    }

    .btn {
        padding: 0.75rem 1rem;
        display: inline-block;
        margin-bottom: 1rem;
        color: rgba(255, 255, 255, 0.7);
        background-color: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        border-style: solid;
        border-width: 1px;
        border-radius: 0.3rem;
        transition: color 0.2s, background-color 0.2s, border-color 0.2s;
    }

    a {
        color: #1e6bb8;
        text-decoration: none;
    }

    .btn+.btn {
        margin-left: 1rem;
    }

    .main-content {
        max-width: 64rem;
        padding: 30px 0px 30px 0px;
        margin: 0 auto;
        font-size: 1.1rem;
        word-wrap: break-word;
        /* min-height: 800px; */
    }

    .foot {
        max-width: 67rem;
        margin: 0 auto;
        font-size: 12px !important;
        color: #586069 !important;
        word-wrap: break-word;
    }
</style>
