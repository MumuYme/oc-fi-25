
<template>
  <img :src="imageUrl" alt="説明" class="w-screen h-auto">
</template>

<script>
// @ は /src フォルダを指すエイリアス(別名)です
import imageFromFile from '../assets/mainvisual.jpeg';

export default {
  name: 'Mainvisual',
  data() {
    return {
      imageUrl: imageFromFile
    }
  }
}
</script>