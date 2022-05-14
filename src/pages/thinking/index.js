import { LinkBox } from '@chakra-ui/react';
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

import { Article } from '../../components/Article/Article';
import ArticleLayout from '../../components/Layout/Article';
import { getPrismicClient } from "../../services/Prismic";


const ThinkingPage = ({ posts }) => {
  return (
    <ArticleLayout>
      {posts.map((post) => {
        return (
          <LinkBox key={post.id} cursor="pointer" w='100%'>
            <Article
              title={post.title}
              description={post.description}
              fakeIndex={post.index}
              href={`/thinking/${post.slug}`}
            />
          </LinkBox>
        )
      })}
    </ArticleLayout>
  )
}

export default ThinkingPage;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "essential")],
    {
      fetch: ["essential.title", "essential.description", "essential.index" ],
      pageSize: 100,
    }
  );
  
  let posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      description: RichText.asText(post.data.description),
      index: RichText.asText(post.data.index),
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  posts = posts.slice(0).reverse();
  
  return {
    props: {
      posts,
    },
    redirect: 60 * 120, // 2 horas
  };
};
