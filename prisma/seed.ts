import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create categories
  const categories = [
    { name: 'Romantike', nameEn: 'Romantic', slug: 'romantic' },
    { name: 'Dasma', nameEn: 'Wedding', slug: 'wedding' },
    { name: 'Ditëlindje', nameEn: 'Birthday', slug: 'birthday' },
    { name: 'Ngushëllime', nameEn: 'Sympathy', slug: 'sympathy' },
    { name: 'Sezonale', nameEn: 'Seasonal', slug: 'seasonal' },
  ]

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    })
  }

  console.log('Categories seeded successfully')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })