'use client';

import { useState } from 'react';
import { BlogPostMetadata } from '../../types/blog';
import BlogCard from '../../components/BlogCard';

interface BlogPageClientProps {
  posts: BlogPostMetadata[];
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {

  return (
    <div className="py-16">
      <div className='text-center mb-12'>
        <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Blog
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Insights, research updates, and technical deep-dives from the Curie team
        </p>
      </div>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}