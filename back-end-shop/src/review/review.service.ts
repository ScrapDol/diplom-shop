import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { returnReviewObject } from './return-review.object'
import { ReviewDto } from './review.dto'

@Injectable()
export class ReviewService {
	constructor(private prisma: PrismaService) {}

	// async byId(id: number) {
	// 	const category = await this.prisma.category.findUnique({
	// 		where: { id },
	// 		select: returnReviewObject
	// 	})

	// 	if (!category) {
	// 		throw new Error('Review not found')
	// 	}

	// 	return category
	// }

	async getAll() {
		return this.prisma.review.findMany({
			orderBy: {
				createdAt: 'desc'
			},
			select: returnReviewObject
		})
	}

	async create(userId: number, dto: ReviewDto, productId: number) {
		return this.prisma.review.create({
			data: {
				...dto,
				product: {
					connect: {
						id: productId
					}
				},
				user: {
					connect: {
						id: userId
					}
				}
			}
		})
	}

	// async update(id: number, dto: ReviewDto) {
	// 	return this.prisma.category.update({
	// 		where: { id },
	// 		data: {
	// 			name: dto.name,
	// 			slug: generateSlug(dto.name)
	// 		}
	// 	})
	// }

	async getAverageValueByProductId(productId: number) {
		return this.prisma.review
			.aggregate({
				where: { productId },
				_avg: { rating: true }
			})
			.then(data => data._avg)
	}
}
