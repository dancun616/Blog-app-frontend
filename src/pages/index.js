import Link from 'next/link'

export default function Home() {
  return (
    <div className='home'>
      <h1 className='title'>Blog-post</h1>
        <Link href="/login">Login</Link>
        <br/>
        <br/>
        <Link href="/registration">SignUp</Link>

    </div>
  )
}
