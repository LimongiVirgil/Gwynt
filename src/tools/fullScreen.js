export const fullScreen = () => {
	var fullScreen = document.querySelector('html')
	fullScreen.requestFullscreen()
}

export const exitFullScren = () => {
	document.exitFullscreen()
}
