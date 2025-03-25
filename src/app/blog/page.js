import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    description: 'Learn the basics of Next.js and start building your first app.',
    date: '2023-05-15',
    image: '/img/blog/blog-1.png', // Make sure the image exists in /public/img/blog/
    author: 'John Doe',
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    description: 'Dive deep into Tailwind CSS and create beautiful, responsive designs.',
    date: '2023-05-20',
    image: '/img/blog/blog-2.png',
    author: 'Jane Smith',
  },
  {
    id: 3,
    title: 'The Power of Server-Side Rendering',
    description: 'Explore the benefits of server-side rendering in modern web applications.',
    date: '2023-05-25',
    image: '/img/blog/blog-3.png',
    author: 'Alex Johnson',
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Our Blog | Next.js and Tailwind CSS Example</title>
        <meta name="description" content="Explore our latest articles on web development, design, and technology." />
        <meta property="og:title" content="Our Blog | Next.js and Tailwind CSS Example" />
        <meta property="og:description" content="Explore our latest articles on web development, design, and technology." />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:url" content="https://example.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://example.com/blog" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Our Blog</h1>
          <p className="text-xl text-gray-600">
            Welcome to our blog. Explore the latest articles on web development, design, and technology.
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="h-full" itemScope itemType="https://schema.org/BlogPosting">
                <div className="h-full flex flex-col border rounded-lg overflow-hidden shadow-lg">
                  <div className="h-48 w-full relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded-t-lg"
                      itemProp="image"
                    />
                  </div>
                  <div className="p-4 flex-grow">
                    <h2 className="text-xl font-semibold mb-2" itemProp="headline">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-2">
                      <time dateTime={post.date} itemProp="datePublished">
                        {post.date}
                      </time> | By <span itemProp="author">{post.author}</span>
                    </p>
                    <p className="text-gray-700" itemProp="description">{post.description}</p>
                  </div>
                  <div className="p-4">
                    <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline inline-flex items-center" itemProp="url">
                      Read More <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
