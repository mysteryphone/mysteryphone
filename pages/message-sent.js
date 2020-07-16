import Layout from '../components/Layout'
import MetaTags from '../components/MetaTags'
import Title from '../components/Title'

export default function MessageSent() {
  return (
    <>
      <MetaTags title="Mystery Phone | Message Sent" desc="Personal website for Mystery Phone. A software engineer in San Francisco." image="https://mysteryphone.com/palm_springs.jpg" url="mesaage-sent" />
      <Layout>
        <Title h2={'Your messages was sent'} />
        <div className="center">
          <p>I'll respond when I get back.</p>
          <img alt="Bubba Sparks" src="https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/2f62ec78-d104-481b-a85c-21134bc0e001/790389BC-0890-48D6-B774-B5C6661B9BFB_1_105_c.jpeg" />
        </div>
        <style jsx>
          {`
            img {
              margin: 10px;
            }
          `}
        </style>
      </Layout>
    </>
  )
}
