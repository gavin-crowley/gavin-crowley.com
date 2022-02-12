import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Welcome from '@/components/Welcome'
import Subscribe from '@/components/Subscribe'
import Work from '@/components/Work'
import Clients from '@/components/Clients'
// import { RoughNotation } from 'react-rough-notation'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="prose dark:prose-dark pt-6 pb-6 space-y-2 md:space-y-5">
          <Welcome />
        </div>
        <div className="prose dark:prose-dark text-center pt-6 pb-8 space-y-2 md:space-y-5">
          <h1>Projects</h1>
          <p>A list of projects I have been working on</p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
