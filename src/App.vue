<template>
  <div>
    <div>
      <v-range-selector
        :start-date.sync="range.start"
        :end-date.sync="range.end"
      />
      <div>SELECTED RANGE: {{ range.start || ''}} - {{ range.end || '' }}</div>
    </div>

    <div>
      <v-day-selector
        v-model="date"
      />

      <div>SELECTED DATE: {{ date || ''}}</div>
    </div>
  </div>
</template>

<style src="./App.scss"></style>
<style src="../node_modules/vuelendar/scss/vuelendar.scss"></style>

<script>
import VRangeSelector from 'vuelendar/components/vl-range-selector';
import VDaySelector from 'vuelendar/components/vl-day-selector';

export default {
  components: {
    VRangeSelector,
    VDaySelector
  },

  data () {
    return {
      range: {
        start: null,
        end: null
      },
      date: null
    }
  }
};
</script>
