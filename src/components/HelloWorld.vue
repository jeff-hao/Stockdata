<template>
<div class="TradingView">
  <div class="pt-2 col-12 align-items-start">
    <input v-model="selectedSymbol" placeholder="Enter Symbol">
    <button @click="updateSymbol">Change Symbol</button>
    <SingleTicker :options="options" :key="key" />
    <chart/>
  </div>
</div>
</template>

<script>
// 导入 Chart 组件
import { SingleTicker } from 'vue-tradingview-widgets'; // 请根据实际的导入路径进行替换

export default {
  name: 'TestComponent', // 使用更具描述性的组件名称
  components: {
    SingleTicker
  },

  data() {
    return {
      selectedSymbol: '', // 设置初始值为 ''
      key: 0, // 使用 key 属性来触发重新渲染
      options: { // 添加 options 属性，并设置默认选项
        symbol: 'TWSE:1101',
        locale: "zh_TW",
      },
    }
  },
  methods: {
    updateSymbol() {
      this.options.symbol = this.selectedSymbol;
      console.log(this.options)
      this.key += 1; // 增加 key 的值以触发重新渲染
    },
  },
  // computed: {
  //   computedOptions() {
  //     // 返回 options 对象，确保每次 selectedSymbol 或 options 更新时都会重新计算
  //     return this.options;
  //   },
  // },
};
</script>