import bcrypt from 'bcryptjs';

const password = 'tdufi08';
const hashed = bcrypt.hashSync(password, 10);
console.log('生成されたハッシュ:', hashed);

// node createPassward.jsをコマンドで一度だけ実行。
// それをsrc\components\PasswardGate.vueへ

