import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import Image from 'next/image'

export default function Projects() {
  return (
    <>
      <PageSeo title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-3">
        <div className="prose dark:prose-dark text-center pt-6 pb-8 space-y-2 md:space-y-5">
          <h1>Resume</h1>
        </div>
        <div className="container py-6">
          <div className="flex flex-wrap m-12 justify-center">
            <a
              href="https://drive.google.com/file/d/1KS5oaaK6jvyUPadPzTLLwedD4mMJ4PBs/view?usp=sharing"
              download
              target="_blank"
              className="resume-link"
            >
              Download a PDF of my Resume here
            </a>

            <Image src={siteMetadata.resumeImage} alt="avatar" width={620} height={875} />
          </div>
        </div>
      </div>
    </>
  )
}
