<template>
  <div v-if="!isAuthenticated" class="password-overlay">
    <div class=" bg-[url(/bg/passwordBg.jpeg)] bg-cover w-screen  h-screen -z-10">
      <div class="bg-white/30 backdrop-blur-xs w-full h-full flex flex-col justify-starat items-center space-y-4">
        <img src="/logo.svg" class="h-60 pb-5 mt-24" alt="Logo" />
        <div class="inline-flex mt-12 rounded-md shadow-xl w-3/5">
            <input id="default-input" v-model="password" type="password" placeholder="パスワード" class="bg-white/20 border backdrop-blur-xl border-white text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          <button @click="checkPassword" type="button" class="inline-flex justify-center p-2 items-center rounded-r-lg text-sm font-medium text-center text-white bg-blue-700 ">     
            
            <!-- <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>  -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
            </svg>

          </button>
        </div>
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
