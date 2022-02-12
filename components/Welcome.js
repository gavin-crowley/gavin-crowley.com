import siteMetadata from '@/data/siteMetadata'
import Icon from '@/components/icons'
import Image from 'next/image'
// import { RoughNotation } from 'react-rough-notation'
import Link from 'next/link'

export default function Welcome() {
  return (
    <>
      <div className="mb-10 items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8 space-x-2">
          <Image
            src={siteMetadata.image}
            alt="avatar"
            height={200}
            width={200}
            className="rounded-full"
          />
          <div className="flex pt-6 space-x-3 hover:text-primary-600 dark:hover:text-primary-400">
            <Icon kind="twitter" href={siteMetadata.twitter} />
            <Icon kind="linkedin" href={siteMetadata.linkedin} />
            <Icon kind="github" href={siteMetadata.github} />
          </div>
        </div>
        <div className=" prose dark:prose-dark pt-8 pb-8 xl:col-span-2">
          <h1>Hey, I'm Gavin</h1>
          <p>
          I'm a software engineer based in Cork who likes to build things with .NET and React. 
          </p>
          <p>
            I also experiment with digital products, life design and emerging technology. Feel free
            to learn more <Link href="/about">about me</Link>, ping me on{' '}
            <a href="https://twitter.com/sokirill">Twitter</a> or{' '}
          
              sign-up
            {' '}
            for my occasional essays on life and work.
          </p>
        </div>
      </div>
    </>
  )
}
