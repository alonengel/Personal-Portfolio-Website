export const blogs = [
    {
        path: 'building-my-portfolio-website',     // used as route param
        title: 'Building My Portfolio Website: Experimenting with Free Tools',
        description: 'A personal journey of building and hosting a portfolio website using free tools like Google Cloud, Cloudflare, Tailwind CSS, and more.',
        tags: ["portfolio", "web development", "free tools", "google cloud", "react", "tailwind"],
        date: new Date('2025-03-25'),
        readingTime: '5 min read',
        fileName: 'building-my-portfolio-website.mdx',  // the actual file is in /public/blogs/${fileName}
    },
    // {
    //     path: 'example-post',
    //     title: 'My Example Post',
    //     description: 'lorem ipsum',
    //     date: new Date('2025-03-26'),
    //     readingTime: '7 min read',
    //     fileName: 'example-post.mdx',
    // },
].sort((a, b) => b.date - a.date);
