const translit = (str: string) => {
	const ru =
		'А,а,Б,б,В,в,Г,п,Д,д,Е,е,Ё,є,Ж,ж,З,з,И,и,Й,й,К,к,Л,л,М,м,Ф,Х,х,Ц,ц,Ч,ч,Щ,щ,Ю,ю,У,у,Ы,ы,Э,э,Ь,ь,Ъ,ъ,Ю,ю,Я,я'.split(
			','
		)
	const en =
		'A,a,B,b,V,v,G,g,G,g,D,d,E,e,E,e,E,e,ZH,zh,Z,z,I,i,J,j,K,k,L,l,M,m,F,f,H,h,TS,s,CH,ch,SH,sh,SCH,sch,Y,y,U,u,FIO,i,E,e,YU,yu,YA,ya'.split(
			','
		)

	let res = ''
	for (let i = 0, l = str.length; i < l; i++) {
		let s = str.charAt(i),
			n = ru.indexOf(s)
		if (n >= 0) {
			res += en[n]
		} else {
			res += s
		}
	}
	return res
}

export const generateSlug = (str: string) => {
	let url: string = str.replace(/[\s]+/gi, '-')
	url = translit(url)

	url = url
		.replace(/[^0-9a-z_\-]+/gi, '')
		.replace('---', '-')
		.replace('--', '-')
		.toLowerCase()
	return url
}
