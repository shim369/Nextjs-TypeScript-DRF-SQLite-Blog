import { useRouter } from "next/router";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from '../../layouts/layout'
import Image from 'next/image'

type Props = {
	post?: any
	params?: any
}

export default function PostData({ post }: Props): JSX.Element {
  const router = useRouter();

  if (router.isFallback || !post) {
    return <div>Loading...</div>;
  }

  return (
	<Layout title="" description="" >
    <div className="">
      <div className="">
        <h1 className="">{post.title}</h1>
        <p className="">{post.created_at}</p>
        <p className="">{post.updated_at}</p>
        <div className="">
			<Image alt="post" priority={true} className="" src={post.image} width={223} height={154} style={{ width: '100%', height: 'auto' }} />
		</div>
      </div>
      <p className="">{post.content}</p>
    </div>
	</Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: Props) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
    revalidate: 3,
  };
}