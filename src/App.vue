<template>
  <div>
    <div class="app__block">
      <v-range-selector
        :start-date.sync="range.start"
        :end-date.sync="range.end"
        :is-disabled="d => d > '2019-06-30'"
        enable-single-date
      />
      <div class="app__caption">
        SELECTED RANGE:
        <div
          v-if="range.start && range.end"
          class="app__dates"
        >
          {{ range.start }} - {{ range.end }}
        </div>
      </div>
    </div>

    <div class="app__block">
      <v-day-selector
        v-model="date"
      />

      <div class="app__caption">
        SELECTED DATE:
        <div
          v-if="date"
          class="app__dates"
        >
          {{ date }}
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./App.scss"></style>
<style src="vuelendar/scss/vuelendar.scss"></style>

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
