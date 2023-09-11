<template>
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th v-for="field in tableFields" :key="field">{{ field }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in newTableData" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { inject, ref, watch } from 'vue';
  
  export default {
    setup() {
      const tableFields = ['日期', '成交股數', '成交金額', '開盤價', '最高價', '最低價', '收盤價', '漲跌價差', '成交筆數'];
      const tableData = inject('alldata');
      const newTableData = ref(Array.from(tableData.value)); // 使用 Array.from 转换初始值
      
      // 监听 tableData 的变化，并更新 newTableData
      watch(tableData, (newValue) => {
        // 在数据变化时，你可以在这里执行你的更新逻辑
        newTableData.value = Array.from(newValue);
      });
  
      return {
        tableFields,
        newTableData, // 将 newTableData 暴露给模板
      };
    },
  };
  </script>
  