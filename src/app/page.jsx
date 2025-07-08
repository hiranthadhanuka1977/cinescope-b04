import Image from "next/image";

export default function Home() {
  return (
    <>
      <Post title="React JS" />
      <Post body="React JS with Next" />
    </>
  );
}

function Post({ title, body}) {
  return (
    <>
      <PostTitle title={title} />
      <PostBody body={body} />
    </>
  );
}

function PostTitle({title}) {
  return <h1 className="text-4xl font-bold">{title}</h1>
}

function PostBody({body}) {
  return (
    <article>
      {body}
    </article>
  );
}