<template>
  <div v-if="!isAuthenticated" class="password-overlay">
    <div class=" bg-[url(/bg/passwordBg.jpeg)] bg-cover w-screen  h-screen">
      <div class="bg-white/30 backdrop-blur-xs w-full h-full flex flex-col justify-center items-center space-y-4">
        <div class="mx-2">
          <input id="default-input" v-model="password" type="password" placeholder="パスワード" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <button @click="checkPassword" type="button" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">     
          特設サイトへ
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg> 
        </button>
        <p v-if="error" class="error">{{ error }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script>
// PasswardGate.vue の <script> 部分

import bcrypt from 'bcryptjs';

export default {
  data() {
    return {
      password: '',
      error: '',
      // ★ 変更点: mountedからここに移動
      // コンポーネント作成時にlocalStorageの値で初期化する
      isAuthenticated: localStorage.getItem('authenticated') === 'true', 
    }
  },
  mounted() {
    // ★ 変更点: このフックは不要になるので削除してもOK
  },
  methods: {
    checkPassword() {
      const hashedPassword = '$2b$10$3EanKmPZSnFKmMvf.dMk4uhDxrJgQJX0ik9X5WDVMsaRqr0EIapXi';

      if (bcrypt.compareSync(this.password, hashedPassword)) {
        localStorage.setItem('authenticated', 'true');
        this.isAuthenticated = true;
      } else {
        this.error = 'パスワードが間違っています';
      }
    }
  }
}
</script>

<!-- <style scoped>
.password-overlay {
  position: fixed;
  inset: 0;
  background: rgba(255,255,255,0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
}
.error {
  color: red;
}
</style> -->
