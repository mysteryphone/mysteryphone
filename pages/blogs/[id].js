import MetaTags from '../../components/MetaTags'
import Layout from '../../components/Layout'
import Title from '../../components/Title'

export default function Post(props) {
  const { url, image, title } = props.blog
  return (
    <>
      <MetaTags title={title} desc={title} image={image} url={`https://mysteryphone.com/${url}`} />
      <Layout>
        <Title h2={title} />
        <div className="blogPage">
          <img alt={title} className="imgShadow" src={image} />
        </div>

        <style jsx>
          {`
            .blogPage {
              margin 0 auto;
              max-width: 1360px;
            }
            h1 {
              line-height: 1;
              margin: 40px 0;
            }
            .btn {
              margin-top: 28px;
            }
            img {
              height: auto;
              margin-bottom: 28px;
              max-width: 100%;
            }
          `}
        </style>
      </Layout>
    </>
  )
}

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const siteData = require(`../../db/sitemap.json`)
  const blogs = siteData.map((entry) => entry)
  const blogsLength = blogs.length
  const urlNumber = id.replace(/blog-/, '')
  const currentPost = blogsLength - urlNumber
  const blog = blogs[currentPost]
  return {
    blog,
  }
}
