import { IUser } from '@/types/user.interface'

export interface IUserState {
	email: string
	isAdmin: boolean
}

export interface IToken {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IEmailPassword {
	email: string
	password: string
}

export interface IAuthResponse extends IToken {
	user: IUser
}
