import Link from "next/link";
import Image from 'next/image'

type Props = {
	post?: any
}

export default function Post({ post }: Props) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="">
        <Image alt="post" priority={true} className="" src={post.image} width={223} height={154} style={{ width: '100%', height: 'auto' }} />
        <div className="">
          <p>{ post.title }</p>
        </div>
      </div>
    </Link>
  );
}