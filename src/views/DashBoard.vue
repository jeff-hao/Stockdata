<template>
  <section class="container">
    <div class="row row-cols-lg-2">
      <div class="col col-lg-6">
        <Linechart />
      </div>
      <div class="col col-lg-6">
        <MixChart />
      </div>
    </div>
    <div class="row row-cols-lg-2">
      <div class="col col-lg-9 mt-4">
       <TableData />
      </div>
      <div class="col col-lg-3">
       <TradingView />
      </div>
    </div>
  </section>
</template>

<script>
import Linechart from '@/components/LineChart.vue'
import MixChart from '@/components/MixChart.vue'
import TableData from '@/components/TableData.vue'
import TradingView from '@/components/TradingView.vue'

export default {
  name: 'DashBoard',
  components: {
    Linechart,
    MixChart,
    TableData,
    TradingView,
  }
}
</script>
