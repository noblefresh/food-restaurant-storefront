import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const FooterCTA = () => {
  return (
    <div className="bg-gray-800 w-full">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div>
          <h3 className="text-3xl-semi text-white">Flavourful Flame</h3>
          <h3 className="text-2xl text-white">Grilled Chicken</h3>
          <p className="text-white">Marinated for 24 hours in our herb-infused traditional marinade, the perfectly grilled chicken on your plate is the healthiest and tastiest in town!</p>
          <div className="mt-6 text-white">
            <UnderlineLink href="/store">Order Now</UnderlineLink>
          </div>
        </div>

        <div className="relative w-full aspect-square small:w-[35%] small:aspect-[28/36]">
          <Image
            src="/more.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
