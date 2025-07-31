
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { JSDOM } from 'jsdom';
import hljs from 'highlight.js';
import 'highlight.js/lib/languages/python';
import 'highlight.js/lib/languages/latex';
import 'highlight.js/styles/vs2015.css';
import { getPostBySlug } from '../../../lib/blog';
import { getAllPosts } from '../../../lib/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

async function highlightSyntax({ htmlContent }: { htmlContent: string | Promise<string> }) {
  const resolvedContent = await Promise.resolve(htmlContent);
  
  let dom, document;
  
  if (typeof window === 'undefined') {
    // Server-side: use jsdom
    dom = new JSDOM(resolvedContent);
    document = dom.window.document;
  } else {
    // Client-side: use browser document
    document = window.document;
  }
  
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = resolvedContent;
  
  const codeBlocks = tempDiv.querySelectorAll('pre code');
  codeBlocks.forEach((block) => {
    hljs.highlightElement(block as HTMLElement);
  });
  
  return tempDiv.innerHTML;
}

export async function generateStaticParams() {
  // Replace this with your actual logic to get all blog post slugs
  const posts = await getAllPosts(); // Your function to get posts
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };


  // Parse markdown content to HTML
  const htmlContent  = marked(post.content);

  const highlightedContent = await highlightSyntax({htmlContent});

  return (
    <article className="min-h-screen bg-stone-600">
      {/* Header */}
      <header className="bg-stone-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="mb-6">
            <Link 
              href="/" 
              className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-300 mb-6">
            <time dateTime={post.publishedAt} className="text-sm">
              {formatDate(post.publishedAt)}
            </time>
          </div>
          
          {post.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-orange-400/20 text-orange-300 border border-orange-400/30 hover:bg-orange-400/30 text-sm rounded-full transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div 
            className="prose prose-lg prose-invert max-w-none markdown-content"
            dangerouslySetInnerHTML={{ __html: highlightedContent }} 
          />
        </div>
      </div>
    </article>
  );
}