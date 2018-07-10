<!--
목적 : 각 화면에서 사용할 공용 컨트롤 테스트
-->
<template>
<Page>
  <ActionBar title="Float-Up Labels" class="action-bar"></ActionBar>
  <ScrollView>
    <StackLayout class="m-20">
      <Label class="m-b-20" text="Give focus to one of the text fields below and watch the labels float up." textWrap="true" />
      <FloatLabel placeholder="Username" />
      <FloatLabel placeholder="Password" secure="true" />
    </StackLayout>
  </ScrollView>
</Page>
</template>

<script>
import FloatLabel from '../components/FloatLabel'
export default {
  components: {
    'FloatLabel': FloatLabel
  },
  created() {
    console.log('common control created2')
  },
}
</script>
