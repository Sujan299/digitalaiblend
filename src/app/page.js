import Image from 'next/image'
import HomeThumbnail from '../../public/assets/thumbnails/home.png'
export default function Home() {
  return (
    <div className='mx-9 md:mx-28 sm:mx-18 flex flex-wrap lg:justify-between justify-center mt-14'>
      <div className='mx-3'>
        <h2>Why to choose us.</h2>
        <button>Visit me</button>
      </div>
      <div className=''>
        <Image
          src={HomeThumbnail}
          width={600}
          height={600}
          objectFit='cover'
          alt="Picture of the author"
          className='rounded-md'
        />
      </div>
    </div>
  )
}