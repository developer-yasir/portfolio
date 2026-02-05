// @flow strict
import { personalData } from '../../../utils/data/personal-data';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-[var(--text-primary)] transition-colors">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[var(--card-bg)] w-fit text-[var(--text-primary)] rotate-90 p-2 px-5 text-xl rounded-md border border-[var(--card-border)]">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[var(--card-border)]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#db4437]/10 p-2 rounded-full hover:bg-[#db4437]/20 hover:text-white hover:scale-110 transition-all duration-300 text-[#db4437] cursor-pointer"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-[#00c853]/10 p-2 rounded-full hover:bg-[#00c853]/20 hover:text-white hover:scale-110 transition-all duration-300 text-[#00c853] cursor-pointer"
                size={36}
              />
              <span>
                {personalData.phone}
              </span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-[#f44336]/10 p-2 rounded-full hover:bg-[#f44336]/20 hover:text-white hover:scale-110 transition-all duration-300 text-[#f44336] cursor-pointer"
                size={36}
              />
              <span>
                {personalData.address}
              </span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <a target="_blank" rel="noreferrer" href={personalData.github}>
              <IoLogoGithub
                className="bg-[#333]/10 p-3 rounded-full hover:bg-[#333]/20 hover:text-white hover:scale-110 transition-all duration-300 text-[#333] cursor-pointer"
                size={48}
              />
            </a>
            <a target="_blank" rel="noreferrer" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#0077b5]/10 p-3 rounded-full hover:bg-[#0077b5]/20 hover:text-white hover:scale-110 transition-all duration-300 text-[#0077b5] cursor-pointer"
                size={48}
              />
            </a>
            <a target="_blank" rel="noreferrer" href={personalData.twitter}>
              <FaXTwitter
                className="bg-[#000]/10 p-3 rounded-full hover:bg-[#000]/20 hover:text-white hover:scale-110 transition-all duration-300 text-[#000] cursor-pointer"
                size={48}
              />
            </a>
            <a target="_blank" rel="noreferrer" href={personalData.stackOverflow}>
              <FaStackOverflow
                className="bg-[#f48024]/10 p-3 rounded-full hover:bg-[#f48024]/20 hover:text-white hover:scale-110 transition-all duration-300 text-[#f48024] cursor-pointer"
                size={48}
              />
            </a>
            <a target="_blank" rel="noreferrer" href={personalData.facebook}>
              <FaFacebook
                className="bg-[#1877f2]/10 p-3 rounded-full hover:bg-[#1877f2]/20 hover:text-white hover:scale-110 transition-all duration-300 text-[#1877f2] cursor-pointer"
                size={48}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;