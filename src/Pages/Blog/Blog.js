import React from 'react';
import {Link} from 'react-router-dom';
import {blogs} from '../../content/blogs';
import {Helmet} from 'react-helmet-async';

function Blog() {
    return (
        <>
            <Helmet>
                <title>Alon's Blog</title>
                <meta
                    name="description"
                    content="Check out Alon's latest blog posts on tech, coding, and more."
                />
            </Helmet>
            <div className="px-4 py-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold inline-block border-b-4 border-blue-600 mb-6">Blog</h1>

                {blogs.map((blog, index) => (
                    <Link key={index} to={`/blog/${blog.path}`} className="block mb-8 p-4 bg-gray-200 rounded-md group">
                        <h2 className="text-xl font-bold mb-1 dark:text-black group-hover:underline">
                            {blog.title}
                        </h2>
                        <p className="text-sm text-gray-500 mb-2">
                            {blog.date.toDateString()} • {blog.readingTime}
                        </p>
                        <p className="text-gray-700 mb-2">{blog.description}</p>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Blog;
