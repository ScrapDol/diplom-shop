import { faker } from '@faker-js/faker'
import { PrismaClient, Product } from '@prisma/client'
import * as datenv from 'dotenv'
import { generateSlug } from '../src/utils/generate-slug'
import { getRandomNumber } from '../src/utils/randome-number'

datenv.config()

const prisma = new PrismaClient()

const createProducts = async (quantity: number) => {
	const products: Product[] = []
	for (let i = 0; i < quantity; i++) {
		const proudctName = faker.commerce.productName()
		const categoryName = faker.commerce.department()

		const product = await prisma.product.create({
			data: {
				name: proudctName,
				slug: generateSlug(proudctName),
				description: faker.commerce.productDescription(),
				price: +faker.commerce.price(10, 10000, 0),
				images: Array.from({ length: getRandomNumber(2, 6) }).map(() =>
					faker.image.imageUrl()
				),
				category: {
					create: {
						name: categoryName,
						slug: generateSlug(categoryName)
					}
				},
				reviews: {
					create: [
						{
							rating: faker.datatype.number({ min: 1, max: 5 }),
							text: faker.lorem.paragraph(),
							user: {
								connect: {
									id: 1
								}
							}
						},
						{
							rating: faker.datatype.number({ min: 1, max: 5 }),
							text: faker.lorem.paragraph(),
							user: {
								connect: {
									id: 1
								}
							}
						}
					]
				}
			}
		})
		products.push(product)
	}
	console.log(`Created ${products.length} products`)
}

async function main() {
	console.log('Start seeding ...')
	await createProducts(10)
	console.log('Seeding finished.')
}

main()
	.catch(e => console.error(e))
	.finally(async () => {
		await prisma.$disconnect()
		process.exit(0)
	})
