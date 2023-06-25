import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div>
      <div className={"mt-[30px] pageTitle"}>
        <h1>Get In Touch</h1>
        <p>
          lputate Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </p>
      </div>
      <div className="w-full h-[677px] flex items-center justify-center text-[#fffffd] mt-[100px] mb-[150px] mx-0 p-3.5 bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)]">
        <div className="relative z-[1] overflow-hidden w-[491px] min-h-full flex flex-col justify-between p-10 rounded-[10px] bg-[linear-gradient(90deg,#206983_24.29%,#2f5377_79.78%)]">
          <div>
            <h3 className="font-bold text-[28px] leading-8 text-[#fffffd]">
              Contact Information
            </h3>
            <p className="font-normal text-lg leading-[21px] mt-4">
              Say something to start a live chat!
            </p>
          </div>
          <ul className="flex flex-col gap-y-12">
            <li className="flex gap-x-6 items-center">
              <Image src="/svg/phone.svg" width={20} height={20} alt="phone" />
              <span>+1012 3456 789</span>
            </li>
            <li className="flex gap-x-6 items-center">
              <Image src="/svg/mail.svg" width={20} height={20} alt="mail" />
              <span>demo@gmail.com</span>
            </li>
            <li className="flex gap-x-6 items-center">
              <Image
                src="/svg/location.svg"
                width={20}
                height={20}
                alt="location"
              />
              <span>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </span>
            </li>
          </ul>
          <div className="flex gap-x-6 items-center">
            <Link
              href="#"
              className="flex items-center justify-center w-[30px] h-[30px] rounded-[50%] bg-[#1d1f27]"
            >
              <Image
                src="/svg/twitter.svg"
                width={15}
                height={12}
                alt="twitter"
              />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-[30px] h-[30px] rounded-[50%] bg-[#fffffd]"
            >
              <Image
                src="/svg/instagram.svg"
                width={15}
                height={15}
                alt="instagram"
              />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-[30px] h-[30px] rounded-[50%] bg-[#1d1f27]"
            >
              <Image
                src="/svg/discord.svg"
                width={15}
                height={10}
                alt="discord"
              />
            </Link>
          </div>
          <div className="absolute w-[138px] h-[138px] opacity-40 rounded-[50%] right-[11%] bottom-[6%] bg-[linear-gradient(179.92deg,#3b343f_0.07%,#1d1f27_82.76%)]"></div>
          <div className="absolute right-[-20%] bottom-[-20%] w-[269px] h-[269px] z-[-1] rounded-[50%] bg-[linear-gradient(47.36deg,#2df1e6_12.24%,#3694b0_37.45%,#468db3_39.38%,#6f79ba_44.93%,#8d6bbf_49.97%,#9f63c2_54.29%,#a660c3_57.37%)]"></div>
        </div>
        <div className="w-[calc(100%_-_491px)] min-h-full pl-[45px] pr-[31px] py-10">
          <div className={"form"}>
            <div className={" mb-16 text-2xl"}>
              <h3>Send Us a Message</h3>
            </div>
            <div className="flex gap-x-11">
              <div className="formControl w-1/2">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" />
              </div>
              <div className="formControl">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" />
              </div>
            </div>
            <div className="flex gap-x-11">
              <div className="formControl w-1/2">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className="formControl">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" />
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
              <button className="actionBtn">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
