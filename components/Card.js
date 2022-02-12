import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
    <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center lg:h-48 md:h-36"
            width={544}
            height={306}
            objectFit="contain"
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center lg:h-48 md:h-36"
          width={544}
          height={306}
          objectFit="contain"
        />
      )}
      <div className="p-6">
        <h2 className="mb-3 font-serif text-3xl font-bold">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="mb-3 prose dark:prose-dark max-w-none">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-lg font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card

// /* CARD START */
// const newCard = ({ title, description, imgSrc, href }) => (
//   <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
//     <div className="container">
//       <div className="flex flex-wrap -mx-4">
//         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
//           <div className="bg-white rounded-lg overflow-hidden mb-10">
//             <Link href={href} aria-label={`Link to ${title}`}>
//               <Image
//                 alt={title}
//                 src={imgSrc}
//                 className="object-cover object-center lg:h-48 md:h-36"
//                 width={544}
//                 height={306}
//                 objectFit="contain"
//                 className="w-full"
//               />
//             </Link>
//             <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
//               <h3>
//                 <a
//                   href="javascript:void(0)"
//                   className="
//                         font-semibold
//                         text-dark text-xl
//                         sm:text-[22px]
//                         md:text-xl
//                         lg:text-[22px]
//                         xl:text-xl
//                         2xl:text-[22px]
//                         mb-4
//                         block
//                         hover:text-primary
//                         "

//                   50+ Best creative website themes & templates
//                 </a>
//               </h3>
//               <p className="text-base text-body-color leading-relaxed mb-7">
//                 Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur
//                 adipiscing elit.
//               </p>
//               <a
//                 href="javascript:void(0)"
//                 className="
//                      inline-block
//                      py-2
//                      px-7
//                      border border-[#E5E7EB]
//                      rounded-full
//                      text-base text-body-color
//                      font-medium
//                      hover:border-primary hover:bg-primary hover:text-white
//                      transition
//                      "
//               >
//                 View Details
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
//           <div className="bg-white rounded-lg overflow-hidden mb-10">
//             <img
//               src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
//               alt="image"
//               className="w-full"
//             />
//             <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
//               <h3>
//                 <a
//                   href="javascript:void(0)"
//                   className="
//                         font-semibold
//                         text-dark text-xl
//                         sm:text-[22px]
//                         md:text-xl
//                         lg:text-[22px]
//                         xl:text-xl
//                         2xl:text-[22px]
//                         mb-4
//                         block
//                         hover:text-primary
//                         "
//                 >
//                   The ultimate UX and UI guide to card design
//                 </a>
//               </h3>
//               <p className="text-base text-body-color leading-relaxed mb-7">
//                 Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur
//                 adipiscing elit.
//               </p>
//               <a
//                 href="javascript:void(0)"
//                 className="
//                      inline-block
//                      py-2
//                      px-7
//                      border border-[#E5E7EB]
//                      rounded-full
//                      text-base text-body-color
//                      font-medium
//                      hover:border-primary hover:bg-primary hover:text-white
//                      transition
//                      "
//               >
//                 View Details
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
//           <div className="bg-white rounded-lg overflow-hidden mb-10">
//             <img
//               src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
//               alt="image"
//               className="w-full"
//             />
//             <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
//               <h3>
//                 <a
//                   href="javascript:void(0)"
//                   className="
//                         font-semibold
//                         text-dark text-xl
//                         sm:text-[22px]
//                         md:text-xl
//                         lg:text-[22px]
//                         xl:text-xl
//                         2xl:text-[22px]
//                         mb-4
//                         block
//                         hover:text-primary
//                         "
//                 >
//                   Creative Card Component designs graphic elements
//                 </a>
//               </h3>
//               <p className="text-base text-body-color leading-relaxed mb-7">
//                 Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur
//                 adipiscing elit.
//               </p>
//               <a
//                 href="javascript:void(0)"
//                 className="
//                      inline-block
//                      py-2
//                      px-7
//                      border border-[#E5E7EB]
//                      rounded-full
//                      text-base text-body-color
//                      font-medium
//                      hover:border-primary hover:bg-primary hover:text-white
//                      transition
//                      "
//               >
//                 View Details
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// )
