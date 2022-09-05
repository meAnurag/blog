import { useNextSanityImage } from "next-sanity-image";
import { PortableText } from "@portabletext/react";
import Head from "next/head";
import Image from "next/image";
import hljs from "highlight.js";
import client from "../../sanityClient";

import styles from "../../styles/post.module.scss";
import { portableTextComponents } from "../../config/PortableTextConfig";
import { GrStatusPlaceholderSmall } from "react-icons/gr";

const Post = ({ post }) => {
  const image = useNextSanityImage(client, post.cover);

  const authorImage = useNextSanityImage(client, post.author.image);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const time = new Date(post._updatedAt).toLocaleDateString("en-US", options);

  return (
    <article className={styles.container}>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1 className={styles.title}>{post.title}</h1>

      <div className={styles.subtitle}>
        <p>{post.categories.map((category) => category.title).join(", ")}</p>
        <p>{time}</p>
      </div>
      <hr className={styles.divider} />

      <Image {...image} alt="cover" height={800} style={{ zIndex: "-1" }} />

      <PortableText value={post.body} components={portableTextComponents} />

      <hr className={styles.divider} />

      <div className={styles.creditSection}>
        <div>Author</div>
        <div className={styles.author}>
          <Image
            {...authorImage}
            layout="fixed"
            width={30}
            height={30}
            alt={post.author.image}
          />
          {post.author.name}
        </div>
      </div>
    </article>
  );
};

export default Post;

export const getServerSideProps = async (context) => {
  const { slug } = context.params;

  try {
    let post = await client.fetch(
      `*[_type == "post" && slug.current ==  $slug]{ 
        title, cover, body, _updatedAt,
        "author": author -> {name,image},
        categories[]->{title,image}
      }`,
      {
        slug,
      }
    );

    if (!post.length)
      return {
        notFound: true,
      };

    post = post[0];

    const codeIndexs = [];

    post.body.forEach((block, i) => {
      if (block._type === "code") codeIndexs.push(i);
    });

    codeIndexs.forEach((i) => {
      post.body[i].code = hljs.highlight(post.body[i].code, {
        language: post.body[i].language,
      }).value;
    });

    return {
      props: { post },
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};
