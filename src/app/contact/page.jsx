"use client";
import MainLayout from "@/src/components/layouts/MainLayout";
import useAos from "@/src/hooks/useAos";
import Image from "next/image";

export const metadata = {
  title: "Anydemo.ai - Contact Us",
  description: "",
};
const contact = () => {
  const contactInfos = [
    { title: "phone", value: "+1012 3456 789", icon: "/svg/phone.svg" },
    { title: "email", value: "demo@gmail.com", icon: "/svg/mail.svg" },
    {
      title: "address",
      value: "132 Dartmouth Street Boston, Massachusetts 02156, United States.",
      icon: "/svg/location.svg",
    },
  ];
  useAos();
  return (
    <MainLayout>
      <div className="container">
        <div>
          <div className={"mt-[30px] pageTitle"}>
            <h1 data-aos="fade-up" data-aos-delay={200}>
              Get In Touch
            </h1>
            <p data-aos="fade-up" data-aos-delay={300}>
              lputate Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </p>
          </div>

          {/* for small devices */}

          <div className="lg:hidden" data-aos="fade-up" data-aos-delay={500}>
            <div className="mt-9">
              <h3
                className="font-bold text-[28px]  text-[#fffffd]"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Contact Information
              </h3>
              <p
                className="font-normal text-lg  my-4 text-[#C9C9C9]"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                Say something to start a live chat!
              </p>
            </div>
            <ul className="flex flex-col gap-y-6 mt-4">
              {contactInfos.map((item, index) => (
                <li
                  className="flex gap-x-6 items-center text-[#fffffd]"
                  key={index}
                >
                  <Image src={item.icon} width={20} height={20} alt="phone" />
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-x-6 items-center my-6">
              <a
                href="https://twitter.com/any_demo"
                target="_blank"
                className="flex items-center justify-center w-[30px] h-[30px] rounded-[50%] bg-[#1d1f27]"
              >
                <Image
                  src="/svg/twitter.svg"
                  width={15}
                  height={12}
                  alt="twitter"
                />
              </a>
            </div>
            <div className=" py-6">
              <div className={"form"}>
                <h3 className={" mb-6 text-white font-semibold text-2xl"}>
                  Send Us a Message
                </h3>

                <div className="">
                  <div className="formControl ">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Your First Name"
                    />
                  </div>
                </div>
                <div className="formControl">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Your Last Name"
                  />
                </div>
                <div className="">
                  <div className="formControl ">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email Address"
                    />
                  </div>
                </div>
                <div className="formControl">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="formControl">
                  <label htmlFor="message">Message</label>
                  <textarea
                    rows="4"
                    type="text"
                    id="message"
                    placeholder="Write your message..."
                  />
                </div>
                <div className=" ml-auto">
                  <button className="mainBtn w-full">
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* For Large screens */}
          <div
            className="hidden  w-full h-full lg:flex items-stretch justify-center text-[#fffffd] mt-[100px] mb-[150px] mx-0 p-3.5 bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)]"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <div className="relative z-[1] overflow-hidden w-2/5 min-h-full flex flex-col justify-between p-10 rounded-[10px] bg-[linear-gradient(90deg,#206983_24.29%,#2f5377_79.78%)]">
              <div>
                <h3 className="font-bold text-[28px]  text-[#fffffd]">
                  Contact Information
                </h3>
                <p className="font-normal text-lg  mt-4">
                  Say something to start a live chat!
                </p>
              </div>
              <ul className="flex flex-col gap-y-12">
                {contactInfos.map((item, index) => (
                  <li className="flex gap-x-6 items-center" key={index}>
                    <Image src={item.icon} width={20} height={20} alt="phone" />
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-x-6 items-center">
                <a
                  href="https://twitter.com/any_demo"
                  target="_blank"
                  className="flex items-center justify-center w-[30px] h-[30px] rounded-[50%] bg-[#1d1f27]"
                >
                  <Image
                    src="/svg/twitter.svg"
                    width={15}
                    height={12}
                    alt="twitter"
                  />
                </a>
              </div>
              <div className="absolute w-[138px] h-[138px] opacity-40 rounded-[50%] right-[11%] bottom-[6%] bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)]"></div>
              <div className="absolute right-[-20%] bottom-[-20%] w-[269px] h-[269px] z-[-1] rounded-[50%] bg-[linear-gradient(47.36deg,#2df1e6_12.24%,#3694b0_37.45%,#468db3_39.38%,#6f79ba_44.93%,#8d6bbf_49.97%,#9f63c2_54.29%,#a660c3_57.37%)]"></div>
            </div>
            <div className="w-[3/5 min-h-full pl-[45px] pr-[31px] py-10">
              <div className={"form"}>
                <h3 className={" mb-16 font-semibold text-2xl"}>
                  Send Us a Message
                </h3>

                <div className="flex gap-x-11">
                  <div className="formControl w-1/2">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Your First Name"
                    />
                  </div>
                  <div className="formControl">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Your Last Name"
                    />
                  </div>
                </div>
                <div className="flex gap-x-11">
                  <div className="formControl w-1/2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email Address"
                    />
                  </div>
                  <div className="formControl">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>
                <div className="formControl">
                  <label htmlFor="message">Message</label>
                  <textarea
                    rows="4"
                    type="text"
                    id="message"
                    placeholder="Write your message..."
                  />
                </div>
                <div className="w-[220px] ml-auto">
                  <button className="mainBtn">
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default contact;
