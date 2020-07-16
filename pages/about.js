import Layout from '../components/Layout'
import MetaTags from '../components/MetaTags'
import Title from '../components/Title'

export default function About() {
  return (
    <>
      <MetaTags title="Mystery Phone | About" desc="A blog about stuff." image="https://mysteryphone.com/blog_01.jpeg" url="about" />
      <Layout>
        <Title h1={'About this stupid Blog'} h2={'Tell your mom about this blog and thanks for visiting.'} />

        <style jsx>
          {`
            li {
              margin: 4px 0;
            }
            ul {
              margin-left: 16px;
            }
          `}
        </style>
      </Layout>
    </>
  )
}
