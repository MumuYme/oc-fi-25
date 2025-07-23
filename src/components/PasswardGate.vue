<template>
  <div v-if="!isAuthenticated" class="password-overlay">
    <h2>パスワードを入力</h2>
    <input v-model="password" type="password" placeholder="パスワード">
    <button @click="checkPassword">送信</button>
    <p v-if="error" class="error">{{ error }}</p>
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
      const hashedPassword = '$2b$10$E5MhoK/dwhd/yw/cbafl9eA1u8oufe5aL46aHH2cU84ovmDcZXFGO';

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

<style scoped>
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
</style>
