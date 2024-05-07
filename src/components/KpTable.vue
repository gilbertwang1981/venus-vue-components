<template>
    <head>
        <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    </head>
    <body>
        <div>
            <el-card>
                <div>
                    <el-divider content-position="center"><h2>{{ header }}</h2></el-divider>
                </div>
                <div>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column v-for="(column , index) in tableFields" :key="index" :prop="column.prop" :label="column.label" width="180"/>
                    </el-table>
                </div>
                <div>
                    <el-divider content-position="center"></el-divider>
                        <el-pagination
                            @current-change="handlePageChanged"
                            :page-size="pageSize"
                            layout="prev, pager, next"
                            :total="total">
                        </el-pagination>
                    <el-divider content-position="center"></el-divider>
                </div>
                <div>
                    <el-divider content-position="center">{{ footer }}</el-divider>
                </div>
            </el-card>
        </div>
    </body>
</template>

<script>
    export default {
        name: 'KpTable',
        props: {
            header: String,
            footer: String,
            tableData: Array,
            tableFields: Array,
            total: Number,
            pageSize: Number
        },
        methods: {
            handlePageChanged(val) {
                this.$emit("currentPageEvt" , val)
            }
        }
    }
</script>
