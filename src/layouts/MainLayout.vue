<template>
  <q-layout view="lHr LpR lFr">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-icon color="primary" name="fas fa-dove" size="sm" class="q-pa-lg lt-md absolute-center" />

        <q-toolbar-title class="text-weight-bold gt-sm">
          {{$route.name}}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="283"
    >
      <q-icon color="primary" name="fas fa-dove" size="lg" class="q-pa-lg" />
      <!-- drawer content -->
      <q-list>
        <q-item exact clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="house" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>
        <q-item exact clickable v-ripple to="/about">
          <q-item-section avatar>
            <q-icon name="help" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold"
            >About</q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
      <q-input
        color="purple-12"
        class="q-ma-md"
        label="Search Bwitter"
        dense
        outlined
        rounded
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-list padding separator>
        <q-item-label header class="text-weight-bold"
          >What's Hapenninig</q-item-label
        >
        <q-item>
          <q-item-section class="q-pa-md">
            <q-item-label overline>Tech</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something Nice don sup</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="q-pa-md">
            <q-item-label overline>Tech</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something Nice don sup</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="q-pa-md">
            <q-item-label overline>Tech</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something Nice don sup</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
