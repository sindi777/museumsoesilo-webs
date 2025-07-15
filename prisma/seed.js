const { PrismaClient } = require('../src/generated/prisma');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10); // Ganti 'admin123' dengan password lain jika perlu

  const admin = await prisma.admin.upsert({
    where: { name: 'admin' },
    update: {},
    create: {
      name: 'admin',
      email: 'admin@example.com',
      password: hashedPassword,
    },
  });

  console.log('Seeder berhasil. Admin:', admin);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error('Seeder error:', e);
    prisma.$disconnect();
    process.exit(1);
  });
