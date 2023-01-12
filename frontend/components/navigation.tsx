import Link from "next/link";
 
export default function Navigation() {
	return (
		<header className="header">
			<div className="header-inner">
				<Link href="/" className="site-name">
					Next Drf Blog
				</Link>
				<nav className="nav">
					<Link href="/">
						Top
					</Link>
					<Link href="/about">
						About
					</Link>
				</nav>
			</div>
		</header>
	)
}