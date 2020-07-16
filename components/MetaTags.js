import Head from 'next/head'

function MetaTags(props) {
  const { title, desc, url, image } = props
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta
        name="google-site-verification"
        //This is mine. Put in yours.
        content="nFRXY4CTh-0qNxGDi7Gc7RbsgAIv5hQnhKBInl_zOkk"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="description" content={title} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="og:description" property="og:description" content={`This blog post is about ${title}`} />
      <meta property="og:site_name" content="Mystery Phone" />
      <meta property="og:url" content={url ? `https://mysteryphone.com/${url}` : 'https://mysteryphone.com'} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={title} />
      <meta
        name="twitter:site"
        //This is mine. Put in yours.
        content="@mysteryphone"
      />
      <meta
        name="twitter:creator"
        //This is mine. Put in yours.
        content="@mysteryphone"
      />
      <link rel="icon" href="/favicon-32.png" sizes="32x32" />
      <link rel="icon" href="/favicon-57.png" sizes="57x57" />
      <link rel="icon" href="/favicon-76.png" sizes="76x76" />
      <link rel="icon" href="/favicon-96.png" sizes="96x96" />
      <link rel="icon" href="/favicon-128.png" sizes="128x128" />
      <link rel="icon" href="/favicon-192.png" sizes="192x192" />
      <link rel="icon" href="/favicon-228.png" sizes="228x228" />
      <link rel="shortcut icon" sizes="196x196" href="/favicon-196.png" />
      <link rel="apple-touch-icon" href="/favicon-120.png" sizes="120x120" />
      <link rel="apple-touch-icon" href="/favicon-152.png" sizes="152x152" />
      <link rel="apple-touch-icon" href="/favicon-180.png" sizes="180x180" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="/favicon-144.png" />

      {image ? <meta property="og:image" content={`${image}`} /> : <meta property="og:image" content="https://mysteryphone.com/palm_springs.jpeg" />}
      {image && <meta name="twitter:image" content={`${image}`} />}
      <link rel="canonical" href={url ? `https://mysteryphone.com/${url}` : 'https://mysteryphone.com'} />
    </Head>
  )
}
export default MetaTags
