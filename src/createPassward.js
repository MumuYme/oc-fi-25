import bcrypt from 'bcryptjs';

const password = 'tdufioc2508';
const hashed = bcrypt.hashSync(password, 10);
console.log('生成されたハッシュ:', hashed);
