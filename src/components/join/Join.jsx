import Image from "next/image";
const Join = () => {
  return (
    <div className="w-full">
      <div className="pageTitle">
        <h1>
          <span>Join</span> For Monetization
        </h1>
        <p>Want to monetize your voice? we can help</p>
      </div>

      {/* for small screens  */}

      <div className="lg:hidden">
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
              />
            </div>
            <div className="flex gap-[30px]  items-center justify-end">
              <div className="w-full">
                <button className="actionBtn actionBtn_secondary">Reset</button>
              </div>
              <div>
                <button className="actionBtn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for large screens  */}

      <div className="hidden lg:flex  mt-[16px] mb-[20px]">
        <div className="w-[570px] h-[774px]">
          <Image src="/img/unsplash.png" width={570} height={774} />
        </div>
        <div className="w-[calc(100%-570px)] border border-solid border-t-[1px] border-r-[1px] border-b-[1px] border-l-0 rounded-r-md border-[#23afb7] py-[30px] px-[60px]">
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
              />
            </div>
            <div className="flex gap-[30px]  items-center justify-end">
              <div className="w-[160px]">
                <button className="actionBtn actionBtn_secondary">Reset</button>
              </div>
              <div>
                <button className="actionBtn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
