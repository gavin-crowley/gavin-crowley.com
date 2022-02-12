import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSeo } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSeo title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-3">
        <div className="prose dark:prose-dark text-center pt-6 pb-8 space-y-2 md:space-y-5">
          <h1>Resume</h1>
          <p>Under Construction</p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
           
          </div>
        </div>
      </div>
    </>
  )
}
