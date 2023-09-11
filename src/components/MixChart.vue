<template>
    <canvas class="my-4" ref="myChart" width="200" height="100"></canvas>
</template>
  
<script>
import { inject, ref, onMounted, watch } from 'vue';
import Chart from 'chart.js/auto';

export default {
    setup() {
        const myChart = ref(null);
        const date = inject('date');
        const heighpice = inject('heighpice');
        const lowpice = inject('lowpice');

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
                data: {
                    labels: Array.from(date.value),
                    datasets: [
                        {
                            type: 'line',
                            label: '最高',
                            data: Array.from(heighpice.value),
                            backgroundColor: 'rgba(240, 67, 58, 0.2)',
                            borderColor: 'rgb(240, 67, 58)',
                            borderWidth: 0.5,
                            fill: true,
                        }, {
                            type: 'line',
                            label: '最低',
                            data: Array.from(lowpice.value),
                            backgroundColor: 'rgba(135, 250, 110, 0.2)',
                            borderColor: 'rgb(135, 250, 110)',
                            borderWidth: 0.5,
                            fill: true,
                        },
                    ],
                },
                options: chartOptions,
            });

            // 使用 watch 监听数据变化并更新图表
            watch(heighpice, () => {
                chartInstance.data.datasets[0].data = Array.from(heighpice.value);
                chartInstance.update();
            });

            watch(lowpice, () => {
                chartInstance.data.datasets[1].data = Array.from(lowpice.value);
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
  