<template>
  <div id="app">
    <kp-table header="用户信息登记" footer="此表格数据为测试数据" 
        :tableData="tableData" :tableFields="tableFields" :total="total" :pageSize="pageSize" 
        @currentPageEvt="handlePageChanged"/>
  </div>
</template>

<script>
import KpTable from './components/KpTable.vue'

export default {
  components: {
    KpTable
  },
  data() {
    document.title = '测试页面'
    return {
      tableFields: [
        {label: '姓名', prop: 'name'},
        {label: '地址', prop: 'address'},
        {label: '年龄', prop: 'age'},
      ],
      tableData: [
        {name: '王晗' , address: '广州市天河区', age: '43'},
        {name: '李宁' , address: '成都市金牛区', age: '25'},
        {name: '陈明' , address: '陕西省西安市', age: '33'}
      ],
      total: 1000,
      pageSize: 10
    }
  },

  methods: {
    handlePageChanged(val) {
      alert("当前页" + val)
    }
  }
}
</script>
