import axios from 'axios';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import Body from '../components/Body';
import Title from '../components/Title';
import MainLayout from '../layouts';
import { WPPost } from '../libs/wpapi/interfaces';

export type Props = {
  posts: WPPost[];
};

const Home: FC<Props> = ({ posts }) => {
  return (
    <MainLayout>
      <div>
        <Head>
          <title>Next.jsとWordpressを使ったHeadlessCMS</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='py-12 bg-white'>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <Title text='記事一覧' />
            <Body posts={posts} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts: WPPost[] = await axios.get(process.env.WP_URL!).then((response) => response.data);
  return { props: { posts } };
};

export default Home;
