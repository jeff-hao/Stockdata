<template>
  <canvas class="my-4" ref="myChart" width="200" height="100"></canvas>
</template>

<script>
import { inject, ref, onMounted, watch } from 'vue';
import Chart from 'chart.js/auto';

export default {
  setup() {
    const myChart = ref(null);
    const openpice = inject('openpice');
    const date = inject('date');

    const chartOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false, // 不从 0 开始
        }
      }
    };

    onMounted(() => {
      // 创建图表实例
      const ctx = myChart.value.getContext('2d');
      const chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from(date.value),
          datasets: [
            {
              fill: true,
              label: '當月開盤價',
              data: Array.from(openpice.value),
              borderColor: 'rgb(240, 67, 58)',
              tension: 0.1,
              backgroundColor: 'rgba(240, 67, 58, 0.2)',
            },
          ],
        },
        options: chartOptions,
      });

      // 使用 watch 监听数据变化并更新图表
      watch(openpice, () => {
        chartInstance.data.datasets[0].data = Array.from(openpice.value);
        chartInstance.update();
      });

      watch(date, () => {
        chartInstance.data.labels = Array.from(date.value);
        chartInstance.update();
      });
    });

    return {
      myChart,
    };
  },
};
</script>
