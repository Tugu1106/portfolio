import { LuPhone } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { SiInstagram, SiFacebook, SiGmail, SiGithub } from "react-icons/si";
import { type IconType } from "react-icons";

type ContactLink = {
  Icon: IconType;
  label: string;
  display: string;
  href: string | null;
};

const contacts: ContactLink[] = [
  {
    Icon: LuPhone as IconType,
    label: "Phone",
    display: "+976 8995 0001",
    href: "tel:+97689950001",
  },
  {
    Icon: SiGmail,
    label: "Gmail",
    display: "togoldor8995@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=togoldor8995@gmail.com",
  },
  {
    Icon: SiGithub,
    label: "GitHub",
    display: "Tugu1106",
    href: "https://github.com/Tugu1106",
  },
  {
    Icon: SiInstagram,
    label: "Instagram",
    display: "@instagram",
    href: null,
  },
  {
    Icon: SiFacebook,
    label: "Facebook",
    display: "М.Төгөлдөр",
    href: "https://www.facebook.com/m.t.g.ld.r.346751/",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    display: "Toogii Toogii",
    href: "https://www.linkedin.com/in/toogii-toogii-694031399/?skipRedirect=true",
  },
];

function ContactCard({ Icon, label, display, href }: ContactLink) {
  const inner = (
    <>
      <Icon
        size={28}
        className="text-secondary group-hover:text-accent transition-colors duration-200"
      />
      <div className="text-center">
        <p className="font-mono text-xs text-accent mb-1">{label}</p>
        <p className="text-secondary text-xs leading-tight break-all">{display}</p>
      </div>
    </>
  );

  if (!href) {
    return (
      <div className="group flex flex-col items-center gap-3 p-6 rounded border border-secondary/10 hover:border-accent/30 hover:bg-navy-light transition-all duration-200 cursor-default">
        {inner}
      </div>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith("tel:") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3 p-6 rounded border border-secondary/10 hover:border-accent/30 hover:bg-navy-light transition-all duration-200"
    >
      {inner}
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 pb-32 scroll-mt-20">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-2xl font-bold text-primary whitespace-nowrap">
          <span className="font-mono text-accent mr-2">04.</span>What&apos;s Next?
        </h2>
        <div className="flex-1 h-px bg-secondary/20" />
      </div>

      <div className="flex flex-col items-center text-center max-w-lg mx-auto mb-16">
        <h3 className="text-4xl font-bold text-primary mb-6">Get In Touch</h3>
        <p className="text-secondary text-lg leading-relaxed mb-10">
          I&apos;m currently open to new opportunities. Whether you have a question,
          a project idea, or just want to say hi — my inbox is open.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&to=togoldor8995@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-accent border border-accent px-8 py-4 hover:bg-accent/10 transition-colors"
        >
          Say Hello
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {contacts.map((c) => (
          <ContactCard key={c.label} {...c} />
        ))}
      </div>
    </section>
  );
}
