// [slug]/page.js

import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

const SingleBlog = async (props) => {
  const { singleDocument } = await getSingleBlog(props)
  return (
    <>
      <div>
        <Image src={singleDocument.data.image} alt="blog-image" height={500} width={1000} quality={90} priority={true} />
      </div>
      <div>
        <div>
          <h1>{singleDocument.data.title}</h1>
          <p>{singleDocument.data.date}</p>
          <ReactMarkdown>{singleDocument.content}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export default SingleBlog

export async function generateStaticParams() {
  const { blogs } = await getAllBlogs()
  const paths = blogs.map((blog)=>`/${blog.slug}`)
  return paths
}