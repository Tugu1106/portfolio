import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Tugu1106",
    Icon: SiGithub,
  },
  {
    label: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&to=togoldor8995@gmail.com",
    Icon: SiGmail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/toogii-toogii-694031399/?skipRedirect=true",
    Icon: FaLinkedin,
  },
];

export default function SocialLinks() {
  return (
    <div className="fixed bottom-0 left-6 lg:left-10 hidden md:flex flex-col items-center gap-5">
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-secondary hover:text-accent hover:-translate-y-1 transition-all duration-200"
        >
          <Icon size={24} />
        </a>
      ))}
      <div className="w-px h-24 bg-secondary/50 mt-1" />
    </div>
  );
}
