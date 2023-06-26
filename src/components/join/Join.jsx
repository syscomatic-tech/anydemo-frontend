"use client";
import useAos from "@/src/hooks/useAos";
import Image from "next/image";
const Join = () => {
  useAos();
  return (
    <div className="w-full">
      <div className="pageTitle">
        <h1 data-aos="fade-up" data-aos-delay={200}>
          <span>Join</span> For Monetization
        </h1>
        <p data-aos="fade-up" data-aos-delay={300}>
          Want to monetize your voice? we can help
        </p>
      </div>

      {/* for small screens  */}

      <div className="lg:hidden" data-aos="fade-up" data-aos-delay={500}>
        <div className=" py-[30px] px-[6px]">
          <div className="form">
            <div className="formControl">
              <label htmlFor="name">Artist’s Name</label>
              <input type="text" id="name" placeholder="Enter Your Name" />
            </div>
            <div className="formControl">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter Your Email" />
            </div>
            <div className="formControl">
              <label htmlFor="phone">Mobile Number</label>
              <input type="tel" id="phone" placeholder="Enter Your Number" />
            </div>
            <div className="formControl">
              <label htmlFor="FB_link">Artist’s Facebook Link</label>
              <input
                type="url"
                id="FB_link"
                placeholder="Enter Your Facebook Link"
              />
            </div>
            <div className="formControl">
              <label htmlFor="message">Message</label>
              <textarea
                style={{ maxHeight: "80px" }}
                type="text"
                id="message"
                placeholder="Your Message here..."
              />
            </div>
            <div className="flex gap-[15px]  items-center justify-center">
              <button className="btnTransparent w-1/2">
                <span>Reset</span>
              </button>
              <button className="mainBtn w-1/2">
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* for large screens  */}

      <div className="hidden lg:flex  mt-[16px] mb-[20px]">
        <div
          className="w-[570px] h-[774px]"
          data-aos="fade-right"
          data-aos-delay={400}
        >
          <Image src="/img/unsplash.png" width={570} height={774} />
        </div>
        <div
          className="w-[calc(100%-570px)] border border-solid border-t-[1px] border-r-[1px] border-b-[1px] border-l-0 rounded-r-md border-[#23afb7] py-[30px] px-[60px]"
          data-aos="fade-left"
          data-aos-delay={500}
        >
          <div className="form">
            <div className="formControl">
              <label htmlFor="name">Artist’s Name</label>
              <input type="text" id="name" placeholder="Enter Your Name" />
            </div>
            <div className="formControl">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter Your Email" />
            </div>
            <div className="formControl">
              <label htmlFor="phone">Mobile Number</label>
              <input type="tel" id="phone" placeholder="Enter Your Number" />
            </div>
            <div className="formControl">
              <label htmlFor="FB_link">Artist’s Facebook Link</label>
              <input
                type="url"
                id="FB_link"
                placeholder="Enter Your Facebook Link"
              />
            </div>
            <div className="formControl">
              <label htmlFor="message">Message</label>
              <textarea
                style={{ maxHeight: "80px" }}
                type="text"
                id="message"
                placeholder="Your message here..."
              />
            </div>
            <div className="flex gap-[15px]  items-center justify-end">
              <button className="btnTransparent">
                <span>Reset</span>
              </button>

              <div>
                <button className="mainBtn">
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
