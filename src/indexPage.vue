<template>
    <html>
    <head>
      <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    </head>
    <body>
      <el-card class="box-card">
      <h1>Vue自定义组件Demo</h1>
  
      <router-view>
        <router-link to="/kptable"><el-link type="info" :underline="false">自定义表格</el-link></router-link><br><br>
        <router-link to="/kptag"><el-link type="info" :underline="false">自定义标签</el-link></router-link><br><br>
      </router-view>
    </el-card>
    </body>
    </html>
  </template>
  
  <script>
    export default {
      mounted() {
        document.title = 'Vue自定义组件Demo'
      }
    }
  </script>