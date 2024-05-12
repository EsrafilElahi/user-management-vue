<template>
  <div class="user-box">
    <h3>
      <span class="font-bold">userName : </span>{{ item.userName }}
    </h3>
    <h3>
      <span class="font-bold">job : </span>{{ item.job }}
    </h3>
    <h3>
      <span class="font-bold">role : </span>{{ item.role }}
    </h3>
    <h3>
      <span class="font-bold">city : </span>{{ item.city }}
    </h3>

    <button class="btn mt-5" @click="handleClickDelete">delete</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  item: Object
})

const handleClickDelete = () => {
  emit('delete', item.id)
  emit('refetch')
}

const emit = defineEmits(['delete', 'refetch'])
// eslint-disable-next-line vue/no-setup-props-destructure
const { item } = props;
</script>
