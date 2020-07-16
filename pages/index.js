import React, { useState } from 'react'
import Link from 'next/link'
import MetaTags from '../components/MetaTags'
import Layout from '../components/Layout'
import Title from '../components/Title'
import useInfiniteScroll from '../components/useInfiniteScroll'
import CircularProgress from '@material-ui/core/CircularProgress'
const homePage = require('../db/sitemap.json')
const homePageData = homePage
const blogs = homePageData.map((entry) => entry)

export default function Index(props) {
  const [sliceIndex, setSliceIndex] = useState(2)
  const sliceOfBlogs = blogs.slice(0, sliceIndex)

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems)

  function fetchMoreListItems() {
    setTimeout(() => {
      setSliceIndex(sliceIndex + 1)
      setIsFetching(false)
    }, 1000)
  }

  return (
    <>
      <MetaTags title="Mystery Phone" desc="Nothing to see here." image="https://mysteryphone.com/blog_01.jpeg" />
      <Layout>
        <Title />
        <div>
          <ul>
            {sliceOfBlogs.map((x) => (
              <li key={x.url}>
                <div className="blogTop">
                  <div>
                    <Link href={`blogs/${x.url}`}>
                      <a className="name">{x.title}</a>
                    </Link>
                    <br />
                    <span>Posted on {x.date}</span>
                  </div>
                </div>
                <div>
                  <Link href={`blogs/${x.url}`}>
                    <a>
                      <img src={x.image} className="imgShadow" alt={x.title} />
                    </a>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {isFetching && (
          <div className="center">
            <CircularProgress />
            <br />
            <span>Loading more. Hold your horses!</span>
          </div>
        )}
        <style jsx>
          {`
          .blogTop {
            color: #000;
            display: flex;
            margin-bottom: 10px;
          }
          h4 {
            margin: 20px 0 0;
          }
          img {
            margin: 20px 0 0;
            height: auto;
            max-width: 100%;
          }
          ul {
            list-style: none;
            padding: 0;
            margin: 0 auto;
            max-width: 960px;
            width: 100%;
          }
          li {
            border-top: 1px solid #f2f2f2;
            margin: 44px 0;
            padding: 40px 0 0;
          }
          li p {
            color: #666
            margin: 0 0 4px;
          }
          .name {
            font-weight: bold;
            font-size: 1.2em;
          }

            img {
              height: auto;
              max-width: 100%;
            }
            .btn {
              margin: 20px 0 0;
            }
          `}
        </style>
      </Layout>
    </>
  )
}
