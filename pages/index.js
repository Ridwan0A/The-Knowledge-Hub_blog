import Head from 'next/head';

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
        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>

            </div>
        </div>
      </div>
    </div>
  );
}