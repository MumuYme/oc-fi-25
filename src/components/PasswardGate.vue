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
import bcrypt from 'bcryptjs';

export default {
  data() {
    return {
      password: '',
      error: '',
      isAuthenticated: false,
    }
  },
  mounted() {
    const auth = localStorage.getItem('authenticated');
    if (auth === 'true') {
      this.isAuthenticated = true;
    }
  },
  methods: {
    checkPassword() {
      const hashedPassword = '$2b$10$E5MhoK/dwhd/yw/cbafl9eA1u8oufe5aL46aHH2cU84ovmDcZXFGO'; // ← さっき作ったハッシュ

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
