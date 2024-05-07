<template>
  <div id="app">
    <kp-table header="用户信息登记" footer="此表格数据为测试数据" 
        :tableData="tableData" 
        :tableFields="tableFields" 
        :total="total" 
        :pageSize="pageSize" 
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
    document.title = 'Table测试页面'
    return {
      tableFields: [
        {label: '姓名', prop: 'name'},
        {label: '地址', prop: 'address'},
        {label: '年龄', prop: 'age'},
        {label: '备注', prop: 'remark'},
      ],
      tableData: [
        {name: '王晗' , address: '广州市天河区', age: '43', remark: '测试1'},
        {name: '李宁' , address: '成都市金牛区', age: '25', remark: '测试2'},
        {name: '陈明' , address: '陕西省西安市', age: '33', remark: '测试3'},
        {name: '王民' , address: '河北省石家庄市', age: '31', remark: '测试4'},
        {name: '刘源' , address: '黑龙江省哈尔滨市', age: '29', remark: '测试5'}
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
