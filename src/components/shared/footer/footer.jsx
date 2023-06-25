import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div class="w-full h-fit-content">
      <div className="container">
        <div class="py-[72px] px-0 w-full min-h-[365px]">
          <div class="flex justify-between flex-wrap gap-[64px]">
            <div class="w-fit-content">
              <h4 className="font-ubuntu font-normal  text-[28px] leading-[32px] text-white mb-[24px]">
                Product
              </h4>
              <ul>
                <li className="mt-4">
                  <a
                    href="#"
                    className="font-ubuntu font-normal  text-[18px] leading-[21px] text-white"
                  >
                    Features
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="#"
                    className="font-ubuntu font-normal  text-[18px] leading-[21px] text-white"
                  >
                    Integrations
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="#"
                    className="font-ubuntu font-normal  text-[18px] leading-[21px] text-white"
                  >
                    Pricing plans
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="#"
                    className="font-ubuntu font-normal  text-[18px] leading-[21px] text-white"
                  >
                    Product updates
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-fit-content">
              <h4 className="font-ubuntu font-normal  text-[28px] leading-[32px] text-white mb-[24px]">
                Resources
              </h4>
              <ul>
                <li className="mt-4">
                  <a
                    href="#"
                    className="font-ubuntu font-normal  text-[18px] leading-[21px] text-white"
                  >
                    Blog
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="#"
                    className="font-ubuntu font-normal  text-[18px] leading-[21px] text-white"
                  >
                    User guides
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="#"
                    className="font-ubuntu font-normal  text-[18px] leading-[21px] text-white"
                  >
                    Community
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="#"
                    className="font-ubuntu font-normal  text-[18px] leading-[21px] text-white"
                  >
                    Developers
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="#"
                    className="font-ubuntu font-normal  text-[18px] leading-[21px] text-white"
                  >
                    Legal
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="#"
                    className="font-ubuntu font-normal  text-[18px] leading-[21px] text-white"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-fit-content">
              <h4 className="font-ubuntu font-normal  text-[28px] leading-[32px] text-white mb-[24px]">
                Company
              </h4>
              <ul>
                <li className="mt-4">
                  <a
                    href="#"
                    className="font-ubuntu font-normal  text-[18px] leading-[21px] text-white"
                  >
                    About us
                  </a>
                </li>
                <li className="mt-4">
                  <a
                    href="#"
                    className="font-ubuntu font-normal  text-[18px] leading-[21px] text-white"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-fit-content">
              <h4 className="font-ubuntu font-normal  text-[28px] leading-[32px] text-white mb-[24px]">
                Subscribe to our newsletter
              </h4>
              <ul>
                <li className="mt-4">
                  <form action="#" className="subscribeForm">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                    <button type="submit">Subscribe now</button>
                    <div className="gradientBorder"></div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-[.5px] bg-gray-600 mt-[32px]"></div>
          <div className="mt-[32px] flex flex-wrap gap-[32px] items-center justify-between">
            <p className="font-ubuntu font-normal text-[14px] leading-[16px] text-white">
              ©️ 2023 AnyDemo, Inc . Privacy . Terms . Sitemap
            </p>
            <ul className="flex items-center gap-[16px]">
              <li className="mt-4 flex items-center gap-x-2">
                <span className=" text-white ">Follow us on</span>
                <a href="https://twitter.com/any_demo" target="_blank">
                  <Image
                    src="/img/footer/twitter.png"
                    width={32}
                    height={32}
                    alt="twitter"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
