import { personalData } from '@/utils/data/personal-data';
import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
        if (res.ok) {
          const data = await res.json();
          const filtered = data.filter((item) => item?.cover_image || item?.social_image);
          setBlogs(filtered);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div id='blogs' className="relative z-10 border-t my-12 lg:my-24 border-[var(--card-border)] transition-colors">
      <div className="w-[100px] h-[100px] bg-cyan-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[var(--card-border)]"></span>
          <span className="bg-[var(--card-bg)] w-fit text-[var(--text-primary)] p-2 px-5 text-xl rounded-md border border-[var(--card-border)] transition-colors">
            Blogs
          </span>
          <span className="w-24 h-[2px] bg-[var(--card-border)]"></span>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-white/5 animate-pulse rounded-xl border border-white/10" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          {
            blogs.slice(0, 6).map((blog, i) => (
              <BlogCard blog={blog} key={i} />
            ))
          }
        </div>
      )}

      {blogs.length > 0 && !isLoading && (
        <div className="flex justify-center  mt-5 lg:mt-12">
          <a
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            role="button"
            href="/blog"
          >
            <span>View More</span>
            <FaArrowRight size={16} />
          </a>
        </div>
      )}
    </div>
  );
};

export default Blog;