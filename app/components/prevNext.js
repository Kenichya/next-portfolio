// prevNext.js

import Link from 'next/link'

//const { default: Link } = require("next/link")

const prevNext = (props) => {
  return (
    <div className="pnWrapper">
    { 0 < props.prev.length &&
      <Link href={`/blog/${props.prev[0].slug}`}>
        <img src="/images/arow-left.svg" alt="arrow-left" />
        <h3>{props.prev[0].frontmatter.title}</h3>
      </Link>
    }
    { 0 < props.prev.length &&
      <Link href={`/blog/${props.next[0].slug}`}>
        <h3>{props.next[0].frontmatter.title}</h3>
      </Link>
    }
    </div>
  )
}

export default prevNext