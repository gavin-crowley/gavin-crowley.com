import siteMetadata from '@/data/siteMetadata'
import socialLinkData from '@/data/socialLinkData'
import { PageSeo } from '@/components/SEO'
import SocialLink from '@/components/SocialLink'
import Image from '@/components/Image'

export default function SocialLinks() {
  return (
    <>
      <PageSeo
        title={`Social Links - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-3">
        <div className="prose dark:prose-dark text-center pt-6 pb-8 space-y-2 md:space-y-5">
          <Image
            src={siteMetadata.image}
            alt="avatar"
            height={150}
            width={150}
            className="rounded-full"
          />
          <h1>Kirill So</h1>

          <p>Helping people</p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap">
            {socialLinkData.map((d) => (
              <SocialLink key={d.title} text={d.text} imgSrc={d.imgSrc} href={d.href} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
