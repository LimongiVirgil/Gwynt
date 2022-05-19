export const fullScreen = () => {
	var fullScreen = document.querySelector('html')
	fullScreen.requestFullscreen()
}

export const exitFullScreen = () => {
	document.exitFullscreen()
}
