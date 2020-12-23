<template>
    <div>
        <el-card shadow="never">
            <el-menu>
                <el-menu-item index="1">
                    <i class="el-icon-document"></i>
                    <span slot="title"><g-link to="/">最新动态</g-link></span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-document"></i>
                    <span slot="title"><g-link to="/social">社交圈</g-link></span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title"><g-link to="/blogs">博客列表</g-link></span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-document"></i>
                    <span slot="title"><g-link to="/projects">开源项目</g-link></span>
                </el-menu-item>
            </el-menu>
        </el-card>
    </div>
</template>

