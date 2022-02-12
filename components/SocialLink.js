import Image from './Image'

const SocialLink = ({ title, text, imgSrc, href }) => (
  <div className="flex w-full cursor-pointer items-center border rounded-md border-primary-200 bg-primary-100 dark:bg-primary-900 mb-5">
    <Image alt={title} src={imgSrc} width={75} height={75} className="p10" href={href} />
    <div className="flex flex-grow justify-center float-left">
      <p className="items-center prose dark:prose-dark">{text}</p>
    </div>
  </div>
)

export default SocialLink
