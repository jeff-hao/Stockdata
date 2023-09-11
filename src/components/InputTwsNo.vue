<template>
    <a class="logo navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Fa Da Cai</a>
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" v-model="stockNo" class="form-control form-control-dark" placeholder="股票代碼..">
        </form>
        <div class="text-end">
            <button type="button" @click="fetchData" class="btn btn-outline-light me-2">查詢</button>
            <button type="button" class="btn btn-outline-light me-2">登入</button>
        </div>
    </div>
</template>

<script>
import { ref, inject, computed } from 'vue';
import axios from 'axios';

export default {
    name: 'InputTwsNo',
    setup() {
        const stockNo = ref('');
        const apiUrl = computed(() => `/api?date=20230907&stockNo=${stockNo.value}&response=json&_=1694079775105`);
        const tradingNo = computed(() => `TWSE:${stockNo.value}`);

        //股票各個數值
        const alldata = inject('alldata');
        const chartdate = inject('date');
        const chartallstock = inject('allstock')
        const chartallpice = inject('allpice')
        const chartopenpice = inject('openpice')
        const chartheighpice = inject('heighpice')
        const chartlowpice = inject('lowpice')
        const chartendpice = inject('endpice')
        const symbol = inject('symbol')

        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl.value);
                symbol.value = tradingNo.value
                console.log(response.data);
                if (response.data && Array.isArray(response.data.data)) {
                    alldata.value = response.data.data
                    chartdate.value = response.data.data.map(item => item[0]);
                    chartallstock.value = response.data.data.map(item => item[1]);
                    chartallpice.value = response.data.data.map(item => item[2]);
                    chartopenpice.value = response.data.data.map(item => item[3]);
                    chartheighpice.value = response.data.data.map(item => item[4]);
                    chartlowpice.value = response.data.data.map(item => item[5]);
                    chartendpice.value = response.data.data.map(item => item[6]);
                } else {
                    console.error('JSON DATA ERROR');
                }
            } catch (error) {
                console.error('API DATA ERROR', error);
            }
        };

        return {
            alldata,
            chartdate,
            chartallstock,
            chartallpice,
            chartopenpice,
            chartheighpice,
            chartlowpice,
            chartendpice,
            fetchData,
            stockNo,
            tradingNo,
        };
    },
};
</script>