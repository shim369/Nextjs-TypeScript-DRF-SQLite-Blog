import type { InferGetStaticPropsType } from "next";
import Layout from '../layouts/layout'
import Post from "../components/post/post";
import { getAllPostsData } from "../lib/posts";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export async function getStaticProps() {
	const posts = await getAllPostsData();
  
	return {
	  props: { posts },
	  revalidate: 3,
	};
}

export default function Home({ posts }: Props) {
	return (
		<Layout title="" description="" >
			<div className="post">
				{posts && posts.map((post: any) => <Post key={post.id} post={post} />)}
			</div>
		</Layout>
	)
}

