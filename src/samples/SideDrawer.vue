<!--
목적 : sideDrawer 컨트롤을 테스트 하기 위한 샘플
-->
<template>
<Page>
    <RadSideDrawer ref="drawer">
        <StackLayout ~drawerContent class="sideStackLayout">
            <StackLayout class="sideTitleStackLayout">
                <Label text="Navigation Menu"></Label>
            </StackLayout>
            <StackLayout class="sideStackLayout">
                <Label text="Primary" class="sideLabel sideLightGrayLabel"></Label>
                <Label text="Social" class="sideLabel"></Label>
                <Label text="Promotions" class="sideLabel"></Label>
                <Label text="Labels" class="sideLabel sideLightGrayLabel"></Label>
                <Label text="Important" class="sideLabel"></Label>
                <Label text="Starred" class="sideLabel"></Label>
                <Label text="Sent Mail" class="sideLabel"></Label>
                <Label text="Drafts" class="sideLabel"></Label>
            </StackLayout>
            <Label text="Close Drawer" color="lightgray" padding="10" style="horizontal-align: center" @tap="onCloseDrawerTap"></Label>
        </StackLayout>
        <StackLayout ~mainContent>
            <Label textWrap="true" class="drawerContentText"></Label>
            <Button text="OPEN DRAWER" @tap="openDrawer()" class="drawerContentButton"></Button>
        </StackLayout>
    </RadSideDrawer>
</Page>
</template>
<script>
export default {
  data() {
    return {
      mainContentText: ""
    };
  },
  created() {
    this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
  },
  methods: {
      openDrawer() {
          this.$refs.drawer.nativeView.showDrawer();
      },
      onCloseDrawerTap() {
          this.$refs.drawer.nativeView.closeDrawer();
      }
  }
}
</script>

<style>
button {
  font-size: 15;
  horizontal-align: center;
}

.drawerContentText {
  font-size: 13;
  padding: 10;
}

.drawerContentButton {
  margin: 10;
  horizontal-align: left;
}

.sideStackLayout {
  background-color: gray;
}

.sideTitleStackLayout {
  height: 56;
  text-align: center;
  vertical-align: center;
}

.sideLabel {
  padding: 10;
}

.sideLightGrayLabel {
  background-color: lightgray;
}
</style>
