import Head from 'next/head'
// import Link from 'next/link'
import Navigation from "../components/navigation";
 
type Props = {
	children?: React.ReactNode
	title?: string
	description?: string
}
 
export default function Layout({ children, title, description }: Props) {
	const pageTitle = title || 'Next Drf Blog'
	return (
		<div className="wrap">
			<Head>
				<title>{ pageTitle }</title>
				<meta name="description" content={ description || 'xxx' } />
			</Head>
			<Navigation />
			<main>{ children }</main>
			<footer>
				©2023 { pageTitle }
			</footer>
		</div>
	)
}