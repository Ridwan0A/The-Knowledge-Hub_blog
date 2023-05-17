import Head from 'next/head';
import {PostCard, Categories, PostWidget} from '../components';

const posts = [
  { title: 'Mastering the Art of Web Development: A Comprehensive Guide', excerpt: ' Welcome to Web-Dev' },
  { title: 'What is React?', excerpt: ' React?' },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>The Knowledge Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title}/>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget/>
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  );
}