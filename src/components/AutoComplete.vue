<!--
공용컴포넌트 : AutoComplete
참고urls : 
  https://play.nativescript.org/?template=play-vue&id=MDT4GO&v=4
-->

<template>
    <StackLayout class="m-20">
      <Label :text="title" class="label m-b-5" />
      <RadAutoCompleteTextView :items="filteredDataList" suggestMode="Suggest" displayMode="Tokens">
        <SuggestionView ~suggestionView>
          <StackLayout v-suggestionItemTemplate orientation="vertical">
            <v-template scope="item">
              <GridLayout columns="auto, *">
                <Image height="40" col="0" :src="item.text | imageName" />{{item.text | imageName}}
                <Label col="1" :text="item.text" class="p-l-5" />
              </GridLayout>
            </v-template>
          </StackLayout>
        </SuggestionView>
      </RadAutoCompleteTextView>
      <!-- <StackLayout class="hr-light"></StackLayout> -->
    </StackLayout>
</template>

<script>
require("../nativescript-vue/autocomplete-directives");
const autocompleteModule = require("nativescript-ui-autocomplete");
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;

// const filteredDataList = new ObservableArray();
// countries.forEach((country) => {
//   filteredDataList.push(new autocompleteModule.TokenModel(country, undefined));
// });

export default {
  props: {
    title: {
      type: String,
      default: 'select'
    },
    dataList: {
      type: Array,
      default: []
    }
  },
  // data () {
  //   return {
  //     filteredDataList: filteredDataList
  //   }
  // },
  computed: {
    filteredDataList() {
      var filteredList = new ObservableArray();
      this.dataList.forEach((_item) => {
        filteredList.push(new autocompleteModule.TokenModel(_item, undefined));
      });
      return filteredList;
    }
  },
  filters: {
    imageName(_value) {
      console.log("_value:" + _value);
      if (_value) console.log("~/images/" + _value.toLowerCase() + ".png");
      // console.log("~/images/" + _value.toLowerCase() + ".png");
      return _value ? "~/images/" + _value.toLowerCase() + ".png" : "";
    }
  }
}
</script>


