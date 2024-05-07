<template>
    <head>
        <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    </head>
    <body>
        <el-tag v-for="(tag , index) in tags" class="custom-tag" :key="index" :type="convert(tag.tagColor)">{{ tag.tagName }}</el-tag>
    </body>
</template>

<script>
    export default {
        name: 'KpTag',
        props: {
            tags: Array
        },
        methods: {
            convert(color) {
                if (color == 'green') {
                    return 'success'
                } else if (color == 'gray') {
                    return 'info'
                } else if (color == 'orange') {
                    return 'warning'
                } else if (color == 'red') {
                    return 'danger'
                } else {
                    return 'info'
                }
            }
        }
    }
</script>

<style>
    .custom-tag {
    margin-right: 30px; 
    margin-bottom: 5px;
    }
</style>