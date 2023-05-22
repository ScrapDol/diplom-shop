import { IsEmail, IsOptional, IsString } from 'class-validator'

export class UserDto {
	@IsEmail()
	email: string

	@IsOptional()
	@IsString()
	password?: string

	@IsOptional()
	@IsString()
	nama: string

	@IsOptional()
	@IsString()
	avatarPath: string

	@IsOptional()
	@IsString()
	phone?: string
}
