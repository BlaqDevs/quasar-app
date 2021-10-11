<template>
  <q-page class="flex flex-center">
    <q-btn color="primary" icon="check" label="OK" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  methods: {
    onclick: ()=>{
      return alert('i have been clicked')
    }
  }
})
</script>
