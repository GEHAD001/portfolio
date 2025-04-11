import { FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function ContactNav() {
  return (
    <div className="grid grid-cols-3 gap-4 p-2">
      <div className="transition-opacity duration-[2000ms] hover:opacity-100 cursor-copy">
        <FaWhatsapp size={30} />
      </div>
      <div className="transition-opacity duration-[2000ms] hover:opacity-100 cursor-copy">
        <FaTelegram size={30} />
      </div>
      <div className="transition-opacity duration-[2000ms] hover:opacity-100 cursor-copy ">
        <MdEmail size={30} />
      </div>
    </div>
  );
}

export default ContactNav;
