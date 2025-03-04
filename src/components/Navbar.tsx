import { useEffect, useState } from 'preact/hooks'

// warning: this is probably the worst React code you'll ever see in your life

function Navbar(props: any) {

	const [collapsed, setCollapsed] = useState(true)
	const [themeLight, setThemeLight] = useState(false)

	const toggleTheme = () => {
		document.documentElement.classList.toggle('dark')

		localStorage.setItem('theme', !themeLight ? 'light' : 'dark')

		setThemeLight(!themeLight)
	}

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme')

		// dark mode looks better, light mode was added just for accessibility
		const browserTheme = savedTheme || 'dark'

		if (!savedTheme) {
			localStorage.setItem('theme', browserTheme)
		}

		if (browserTheme === 'light') {
			setThemeLight(true)
		}
	}, [])

	return (
		<nav class="fixed top-0 w-full">
			<div class="dark:bg-background-900 bg-text-50 custom-responsive mx-auto flex items-end gap-6 p-4 font-mono text-xl">
				<a class="me-4 text-4xl font-bold" href="/#">
					henior
				</a>
				<div
					class={
						'dark:bg-background-900 bg-text-50 time absolute top-full left-0 -z-10 flex w-full flex-col items-center gap-6 pb-6 md:visible md:relative md:top-auto md:z-0 md:translate-0 md:flex-row md:items-end md:pb-0 md:transition-none' +
						(collapsed && ' invisible')
					}
				>
					<a class="hover:text-accent dark:hover:text-secondary" href="/#about">
						About me
					</a>
					<a class="hover:text-accent dark:hover:text-secondary" href="/#contact">
						Contact
					</a>
					<a class="hover:text-accent dark:hover:text-secondary" href="/#friends">
						Friends
					</a>
				</div>
				<div class="grow"></div>
				<button class="hover:text-primary cursor-pointer self-center text-2xl" type="button" onClick={toggleTheme}>
					{themeLight ? props.themeIconOn : props.themeIconOff}
				</button>
				<button
					class="hover:text-primary cursor-pointer self-center text-2xl md:hidden"
					type="button"
					onClick={() => setCollapsed(!collapsed)}
				>
					{collapsed ? props.navbarIconOn : props.navbarIconOff}
				</button>
			</div>
		</nav>
	)
}

export default Navbar
