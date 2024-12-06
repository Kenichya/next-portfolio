// app/blog/page.js

import Link from 'next/link'
import Image from 'next/image'

import { getAllBlogs } from '../util/mdQueries'

const Blog = async() => {
  const { blogs } = await getAllBlogs()
  console.log(blogs)
  return (
    <>
    <h1>Blog</h1>
    <p>エンジニアの日常生活をお届けします</p>
    {blogs.map((blog, index) =>
      <div key={index}>
        <div>
          <h2>{blog.frontmatter.title}</h2>
          <p>{blog.frontmatter.excerpt}</p>
          <p>{blog.frontmatter.date}</p>
          <Link href={`/blog/${blog.slug}`}>Read More</Link>
        </div>
        <div>
          <Image src={blog.frontmatter.image} alt="card-image" height={300} width={1000} quality={90} priority={true} />
        </div>
      </div>
    )}
    </>
  )
}

export default Blog