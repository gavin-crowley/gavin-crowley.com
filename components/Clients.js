import Image from 'next/image'
import { RoughNotation } from 'react-rough-notation'

export default function Work() {
  return (
    <>
      <div className="py-6">
        <h1 className="text-center ">
          <RoughNotation
            animate="true"
            animationDelay="1000"
            animationDuration="4000"
            type="box"
            color="#0ea4e9"
            show={true}
            strokeWidth="3"
          >
            Clients I worked with{' '}
          </RoughNotation>
        </h1>
      </div>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-center justify-center">
        <div>
          <Image
            src="/static/img/work/skyscanner.svg"
            alt="skyscanner"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/work/king.svg"
            alt="king"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>

        <div className="py-2 max-w-none">
          <Image
            src="/static/img/work/spotify.svg"
            alt="spotify"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/work/grab.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="hidden dark:block">
          <Image
            src="/static/img/work/carousell.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="dark:hidden">
          <Image
            src="/static/img/work/carousell-dark.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>

        <div>
          <Image
            src="/static/img/work/line.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="hidden dark:block">
          <Image
            src="/static/img/work/amazon.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="dark:hidden">
          <Image
            src="/static/img/work/amazon-dark.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="hidden dark:block">
          <Image
            src="/static/img/work/cbs.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="dark:hidden">
          <Image
            src="/static/img/work/cbs-dark.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/work/playrix.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="hidden dark:block">
          <Image
            src="/static/img/work/rocket-internet.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="dark:hidden">
          <Image
            src="/static/img/work/rocket-internet-dark.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/work/twitter.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/work/delivery-hero.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/static/img/work/bytedance.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="hidden dark:block">
          <Image
            src="/static/img/work/moonton.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="dark:hidden">
          <Image
            src="/static/img/work/moonton-dark.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="hidden dark:block">
          <Image
            src="/static/img/work/nexon.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="dark:block">
          <Image
            src="/static/img/work/nexon-dark.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="hidden dark:block">
          <Image
            src="/static/img/work/global-fashion-group.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
        <div className="dark:block">
          <Image
            src="/static/img/work/global-fashion-group-dark.svg"
            alt="grab"
            height={100}
            width={300}
            className="object-contain"
          />
        </div>
      </div>
    </>
  )
}
