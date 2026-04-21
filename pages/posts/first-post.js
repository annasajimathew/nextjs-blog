import Link from 'next/link';
import Layout from '../../components/layout';
import Head from 'next/head';
import Script from 'next/script';

 
export default function FirstPost() {
  return (
    <Layout>
      <Head>
         <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
        <title>First Post</title>
        
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}