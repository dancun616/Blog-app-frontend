import Link from 'next/link'

export default function Home() {
  return (
    <div className='home'>
      <h1 className='title'>Blog-post</h1>
      
        <Link href="/login" className='login'>Login</Link>
        
        <Link href="/registration" className='signup' >SignUp</Link>

    </div>
  )
}
