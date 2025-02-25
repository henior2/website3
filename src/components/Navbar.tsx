import { useEffect, useRef, useState } from 'preact/hooks'

// warning: this is probably the worst Preact code you'll ever see in your life

function Navbar(props: any) {
	const root = useRef(document.querySelector(':root')!)

	const toggleTheme = (updateSaved = false) => {
		const rootElement = root.current
		rootElement.classList.toggle('dark')

		if (updateSaved) {
			localStorage.setItem('theme', rootElement.classList.contains('dark') ? 'dark' : 'light')
		}
	}

	useEffect(() => {
		// dark mode looks better, light mode was added just for accessibility
		let browserTheme = 'dark'
		// let browserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
		// 	? 'dark'
		// 	: 'light'

		const savedTheme = localStorage.getItem('theme')

		if (!savedTheme) {
			localStorage.setItem('theme', browserTheme)
		} else {
			browserTheme = savedTheme
		}

		if (browserTheme == 'light') {
			root.current.classList.remove('dark')
		}
	}, [])

	const [collapsed, setCollapsed] = useState(true)

	return (
		<nav class="custom-responsive dark:bg-background-900 bg-text-50 sticky top-0 m-auto flex items-end gap-6 p-4 font-mono text-xl">
			<a class="me-4 text-4xl font-bold" href="/">
				henior
			</a>
			<div
				class={
					'dark:bg-background-900 bg-text-50 absolute top-full left-0 flex w-full flex-col items-center gap-6 pb-6 md:visible md:relative md:translate-0 md:flex-row md:items-end md:pb-0' +
					(collapsed ? ' invisible' : '')
				}
			>
				<a href="#about">About me</a>
				<a href="#contact">Contact</a>
			</div>
			<div class="grow"></div>
			<button
				class="text-primary cursor-pointer self-center text-2xl"
				type="button"
				onClick={() => toggleTheme(true)}
			>
				{props.themeIcon}
			</button>
			<button
				class="text-primary cursor-pointer self-center text-2xl md:hidden"
				type="button"
				onClick={() => setCollapsed(!collapsed)}
			>
				{props.navbarIcon}
			</button>
		</nav>
	)
}

export default Navbar
