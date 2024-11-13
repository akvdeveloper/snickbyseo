import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    content: 'Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications. In this article, we\'ll explore the basics of Next.js and guide you through creating your first app...',
    date: '2023-05-15',
    image: '/img/blog/blog-1.png',
    author: 'John Doe',
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    content: 'Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. In this deep dive, we\'ll explore advanced techniques for creating beautiful, responsive designs using Tailwind CSS...',
    date: '2023-05-20',
    image: '/img/blog/blog-2.png',
    author: 'Jane Smith',
  },
  {
    id: 3,
    title: 'The Power of Server-Side Rendering',
    content: 'Server-side rendering (SSR) is a technique that allows web applications to render content on the server before sending it to the client. This approach offers numerous benefits, including improved performance and SEO. In this article, we\'ll explore the advantages of SSR and how to implement it in modern web applications...',
    date: '2023-05-25',
    image: '/img/blog/blog-3.png',
    author: 'Alex Johnson',
  },
];

// Function to generate static parameters for dynamic routes
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

// Function to generate metadata for SEO
export async function generateMetadata({ params }) {
  const post = blogPosts.find((post) => post.id === parseInt(params.id));

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      images: [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((post) => post.id === parseInt(params.id));

  if (!post) {
    notFound(); // If post is not found, return 404
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/blog" className="text-blue-500 hover:underline mb-4 inline-flex items-center">
        ← Back to Blog
      </Link>
      <div className="border rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-4">
            {post.date} | By {post.author}
          </p>
          <p className="text-lg leading-relaxed">{post.content}</p>
        </div>
      </div>
    </div>
  );
}
