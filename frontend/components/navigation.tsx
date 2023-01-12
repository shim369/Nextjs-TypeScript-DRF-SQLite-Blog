import Link from "next/link";
 
export default function Navigation() {
	return (
		<header className="">
			<Link href="/">
				Next Drf Blog
			</Link>
		  <nav className="">
			<Link href="/">
				Top
			</Link>
			<Link href="/about">
				About
			</Link>
		  </nav>
		</header>
	)
}