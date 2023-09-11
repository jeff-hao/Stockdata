<template>
  <div class="TradingView">
    <div class="pt-2 col-12 align-items-start">
      <TechnicalAnalysis :options="options" :key="key" />
      <chart />
    </div>
  </div>
</template>

<script>
// 导入 Chart 组件
import { ref, inject, watch } from 'vue'
import { TechnicalAnalysis } from 'vue-tradingview-widgets'; // 请根据实际的导入路径进行替换

export default {
  name: 'TestComponent', // 使用更具描述性的组件名称
  components: {
    TechnicalAnalysis
  },

  data() {
    const symbol = inject('symbol');
    const key = ref(0);
    const options = {
      symbol: 'TWSE:1101',
      locale: "zh_TW",
      width: '100%',
      height: '400',
      isTransparent: true,
    }

    watch(symbol, () => {
      options.symbol = symbol.value;
      key.value += 1;
    });

    return {
      options,
      key,
    }
  },
};
</script>