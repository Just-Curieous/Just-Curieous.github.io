'use client';

import { useState } from 'react';
import { BlogPostMetadata } from '../../types/blog';
import BlogCard from '../../components/BlogCard';

interface BlogPageClientProps {
  posts: BlogPostMetadata[];
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {

  return (
    <div>
      <div className='text-center'>
        <h1 className="text-4xl font-bold text-white sm:text-5xl mb-8">
            Blog
        </h1>
      </div>


      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}