export const getContentType = () => ({
	'Context-Type': 'application/json'
})

export const errorCatch = (error: any): string => {
	const message = error?.reponse?.data?.message

	return message
		? typeof error.reponse.data.message === 'object'
			? message[0]
			: message
		: [error.message]
}
