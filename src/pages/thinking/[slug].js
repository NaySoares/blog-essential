import { RichText } from "prismic-dom";

import { SubTitle } from "../../components/SubTitle";
import { getPrismicClient } from "../../services/Prismic";

import styles from "./thinking.module.scss";
import Head from "next/head";
import Navbar from "../../components/Heading/Navbar";

const ThinkingPost = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Navbar/>

      <main className={styles.container}>
      <SubTitle path="Thinking" truePath="thinking">
        {post.title}
      </SubTitle>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>

          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  )
}

export default ThinkingPost;

export const getServerSideProps = async ({ req, params }) => {
  const { slug } = params;
  const prismic = getPrismicClient(req);
  const response = await prismic.getByUID("essential", String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: {
      post,
    },
    redirect: 60 * 120, // 2 hours
  };
};
