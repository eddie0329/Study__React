import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Hello First Post</h1>
      <Image src="/vercel.svg" height={100} width={100} alt="image" />
      <Link href="/"><a>Back To Home</a></Link>
    </>
  )
}