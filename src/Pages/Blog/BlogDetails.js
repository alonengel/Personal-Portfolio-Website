import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Helmet} from 'react-helmet-async';


import {MDXProvider} from '@mdx-js/react'
import {evaluate} from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'

import rehypeHighlight from "rehype-highlight";
import './BlogDetailsHighlight.css';

import {blogs} from '../../content/blogs'

export default function BlogDetails() {
    const {path} = useParams()
    const blog = blogs.find((b) => b.path === path)

    const [MDXContent, setMDXContent] = useState(null)
    const [error, setError] = useState(null)
    const [forceLoading, setForceLoading] = useState(true)

    //Using timer for fixed loading time (in case its fast loading time).
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setForceLoading(false)
        }, 500)
        return () => clearTimeout(timeoutId)
    }, [])

    useEffect(() => {
        if (!blog) return;
        (async () => {
            try {
                const rawMdx = await (await fetch(`/blogs/${blog.fileName}`)).text()

                const {default: EvaluatedMDX} = await evaluate(
                    rawMdx,
                    {
                        ...runtime,
                        useDynamicImport: false,
                        rehypePlugins: [rehypeHighlight],
                    }
                )

                setMDXContent(() => EvaluatedMDX)
            } catch (err) {
                console.error('Error during MDX evaluation:', err)
                setError(err.message)
            }
        })()
    }, [blog])


    //Order: not found, error, and then loading!
    if (!blog) {
        return (
            <div className="flex items-center justify-center min-h-screen ">
                <div className="max-w-sm p-6 bg-white rounded shadow text-center">
                    <h2 className="text-2xl font-bold mb-4 text-black">Blog Not Found</h2>
                    <p className="text-gray-700">
                        We couldn't find the blog you were looking for. Please check
                        the URL or go back to the homepage.
                    </p>
                </div>
            </div>
        )
    }

    // 2. Error
    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="max-w-sm p-6 bg-white rounded shadow text-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Error Occurred</h2>
                    <p className="text-red-500">{error}</p>
                </div>
            </div>
        )
    }

    // 3. Loading
    if (!MDXContent || forceLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded shadow">
                    {/* Simple spinner SVG */}
                    <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    <p className="text-gray-700">Loading blog content...</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <Helmet>
                <title>{blog.title} | Alon's Blog</title>
                <meta
                    name="description"
                    content={blog.description || "Read the latest blog post."}
                />
            </Helmet>
            <div className="blog-details p-4 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                    {blog.date.toDateString()} • {blog.readingTime}
                </p>
                <div className="prose prose-xl dark:prose-invert max-w-none">
                    <MDXProvider>
                        <MDXContent/>
                    </MDXProvider>
                </div>
            </div>
        </>
    )
}
