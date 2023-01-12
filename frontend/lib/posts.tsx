import fetch from "node-fetch";

const SERVERURL = "http://127.0.0.1:8000/";

export async function getAllPostsData() {
  const res = await fetch(new URL(`${SERVERURL}api/post/`));
  const posts = await res.json();
  return posts;
}

export async function getAllPostIds() {
  const res = await fetch(new URL(`${SERVERURL}api/post/`));
  const posts = await res.json();
  return posts.map((post: any) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getPostData(id: any) {
  const res = await fetch(new URL(`${SERVERURL}api/post/${id}/`));
  const post = await res.json();
  return post;
}