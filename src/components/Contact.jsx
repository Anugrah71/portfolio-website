
import {
  GithubIcon,
  LinkedInIcon,
  LocationIcon,
  PhoneIcon,
  EmailIcon,
} from "../assets/icons";

const contactData = [
  {
    icon: <EmailIcon className="w-6 h-6  " />,
    title: "Email",
    value: "anugrahk2025@gmail.com",
  },
  {
    icon: <PhoneIcon className="w-6 h-6 text-blue-500" />,
    title: "Phone",
    value: "+91 8136942178",
  },
  {
    icon: <LocationIcon className="w-8 h-8" />,
    title: "Location",
    value: "Kerala, India",
  },
  {
    icon: <LinkedInIcon className="w-6 h-6" />,
    title: "LinkedIn",
    value: "linkedin.com/in/anugrah-k78",
    href: "https://www.linkedin.com/in/anugrah-k78/",
  },
  {
    icon: <GithubIcon className="w-6 h-6" />,
    title: "GitHub",
    value: "github.com/Anugrah71",
    href: "https://github.com/Anugrah71",
  },
];

const Contact = () => {
  return (
    <>
      <section className="bg-[#f8f8f8]" id="contact">
        <h2 className="section-title">
          Get in <span>Touch</span>
        </h2>
        <div className="max-w-3xl mx-auto bg-[#fff] p-12 rounded-[10px] shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
          <p className="text-center mb-12 text-[#666]">
            Let's connect! Here's how you can reach me.
          </p>

          <div className="flex flex-col gap-[1.5rem]">
            {contactData.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 p-4 border-b border-[#eee]"
              >
                <div className="text-2xl w-10">{item.icon}</div>
                <div className="text-sm text-[#666] font-medium">
                  <h3>{item.title}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-[#333]">{item.value}</p>
                    </a>
                  ) : (
                    <p className="text-[#333]">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;
