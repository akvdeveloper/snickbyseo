"use client";
import Image from "next/image";
function BlogSection() {
  // Placeholder function for read more button click
  const handleReadMore = () => {
    console.log('Read more clicked!');
  };

  const blogPosts = [
    {
      id: 1,
      date: 'Jan 01, 2023',
      title: 'Clever ways to invest in product to organize your portfolio',
      description: 'Discover smart investment strategies to streamline and organize your portfolio.',
      imgUrl: '/img/blog/blog-1.png',
    },
    {
      id: 2,
      date: 'Feb 01, 2023',
      title: 'How to grow your profit through systematic investment with us',
      description: 'Unlock the power of systematic investment with us and watch your profits soar.',
      imgUrl: '/img/blog/blog-2.png',
    },
    {
      id: 3,
      date: 'Mar 01, 2023',
      title: 'How to analyze every holdings of your portfolio',
      description: 'Our comprehensive guide will equip you with the tools and insights needed to analyze your portfolio.',
      imgUrl: '/img/blog/blog-3.png',
    },
  ];

  return (
    <section className="py-24 bg-blue-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">
          Our Latest Blog
        </h2>
        <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
              <div className="flex items-center">
                <Image
                  src={post.imgUrl}
                  alt={post.title}
                  className="rounded-t-2xl w-full object-cover"
                  width={600}
                  height={400}
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                <span className="text-indigo-600 font-medium mb-3 block">
                  {post.date}
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  {post.title}
                </h4>
                <p className="text-gray-500 leading-6 mb-10">
                  {post.description}
                </p>
                <button
                  onClick={handleReadMore}
                  className="cursor-pointer text-lg text-indigo-600 font-semibold focus:outline-none"
                >
                  Read more..
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
