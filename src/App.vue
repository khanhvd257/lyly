<script setup>
import { getInfoUser } from "@/api"

const token = localStorage.getItem('access_token')
if (token) {
  getInfoUser().then(res => {
    console.log(res.data.info.name)
    const objectJSON = JSON.stringify(res.data.info)
    localStorage.setItem('infoUser', objectJSON)
  })
}
</script>

<template>
  <VApp>
    <RouterView/>
  </VApp>
</template>
