<!--
목적 : 각 화면에서 사용할 공용 컨트롤 테스트
-->
<template>
<Page>
  <ActionBar title="Float-Up Labels" class="action-bar"></ActionBar>
  <ScrollView>
    <StackLayout>
      <AutoComplete :title="'나라선택'" :dataList="countryDataList"></AutoComplete>
      <StackLayout class="m-20">
        <Label class="m-b-20" text="Give focus to one of the text fields below and watch the labels float up." textWrap="true" />
        <FloatLabel placeholder="Username" />
        <FloatLabel placeholder="Password" secure="true" />
      </StackLayout>
      <StackLayout class="m-20">
        <Label text="날짜선택" class="label m-b-5" />
        <DatePicker v-model="selectedDate" @loaded="onDatePickerLoaded" @dateChange="onDateChanged" />
      </StackLayout>
    </StackLayout>
  </ScrollView>
</Page>
</template>

<script>
import FloatLabel from '../components/FloatLabel'
import AutoComplete from '../components/AutoComplete'
import Observable from 'data/observable'

try {
var date = new Observable({})
}
catch (e) {
  console.log(e.message)
}

const countries = ["Albania", "Andorra", "Australia", "Belgium", "Bulgaria", "Cyprus", "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Japan", "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway", "Poland", "Romania", "Russia", "Slovakia", "Slovenia", "Sweden", "Turkey", "Ukraine", "USA"];
export default {
  components: {
    'FloatLabel': FloatLabel,
    'AutoComplete': AutoComplete
  },
  created() {
    console.log('common control created2')
  },
  data() {
    return {
      countryDataList: countries,
      selectedDate: date
    }
  },
  methods: {
    onDateChanged() {
      console.log('data changed');
      console.log(this.selectedDate);
    },
    onDatePickerLoaded() {
      this.selectedDate = "2018-08-01";
    }
  }
}
</script>
