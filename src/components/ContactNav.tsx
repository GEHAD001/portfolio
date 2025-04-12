import { FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import CopyButton from "./CopyButton";
import { GrGithub } from "react-icons/gr";

function ContactNav() {
  return (
    <div className="grid grid-flow-col gap-4 p-2">
      <CopyButton value="+218922478039">
        <FaTelegram size={30} />
      </CopyButton>
      <CopyButton value="+218922478039">
        <FaWhatsapp size={30} />
      </CopyButton>

      <CopyButton value="eng.jihadjadallah@gmail.com">
        <MdEmail size={30} />
      </CopyButton>
      <CopyButton value="https://github.com/GEHAD001">
        <GrGithub size={30} />
      </CopyButton>
    </div>
  );
}

export default ContactNav;
