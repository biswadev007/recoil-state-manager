import Link from 'next/link'

export default function Home() {
  return (
    <Link href={'/characters'}>
      <h2 className='text-2xl font-bold text-blue-500 hover:text-blue-700 cursor-pointer'>Lets Study recoil</h2>
    </Link>
  )
}
