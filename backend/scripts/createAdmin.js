const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('Admin123@', 10);

  await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@a4events.com',
      password: hashedPassword,
      role: 'admin'
    }
  });

  console.log('Admin created');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());