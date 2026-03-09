import CoinBaseVideo from "../assets/videos/coinbaseVideo.webm"
import NormalButton from "../common/NormalButton"
export default function HeroSection() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-2 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-10 lg:pb-48 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            <h1 className="mt-24 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:mt-10 sm:text-7xl">
              Hello, UK! Meet Coinbase 🇬🇧
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-900 sm:text-xl/8">
              Coinbase is the most trusted platform in the UK for buying, selling and trading crypto.
              Deposit GBP into your account for free to get started today
            </p>
            <div className="mt-2">
             <NormalButton text={"Sign up"} text_color={"text-white"} color={"bg-blue-600 px-6 py-2"}/>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <video
            alt=""
            src={CoinBaseVideo}
            loop={true}
            autoPlay={true}
            className="aspect-3/2 w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full scale-75"
          />
        </div>
      </div>
    </div>
  )
}
