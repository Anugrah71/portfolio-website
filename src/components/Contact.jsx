import React from "react";


const contactData = [
  {
    icon: "📧",
    title: "Email",
    value: "anugrahk2025@gmail.com",
  },
  {
    icon: "📱",
    title: "Phone",
    value: "+91 8136942178",
  },
  {
    icon: "📍",
    title: "Location",
    value: "Kerala, India",
  },
  {
    icon: "💼",
    title: "LinkedIn",
    value: "linkedin.com/in/anugrah-k78",
    href: "https://www.linkedin.com/in/anugrah-k78/",
  },
  {
    icon: "⚙️",
    title: "GitHub",
    value: "github.com/Anugrah71",
    href: "https://github.com/Anugrah71",
  },
];

const Contact = () => {
  return (
    <>
      <section className="contact bg-[##f8f8f8]" id="contact">
        <h2 className="section-title">
          Get in <span>Touch</span>
        </h2>
        <div className="max-w-3xl mx-auto bg-[#fff] p-12 rounded-[10px] shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
          <p className=" text-center mb-12 text-[#666]">
            Let's connect! Here's how you can reach me.
          </p>

          <div
            className=" flex flex-col gap-[1.5rem]
"
          >
            {contactData.map((item) => (
        <div className="flex items-center gap-4 p-4 border-b  border-[#eee]"
            >
                 <div className="text-2xl w-10 ">{item.icon}</div> 
              <div className="text-sm text-[#666] font-medium
">
                
                <h3>{item.title}</h3>
                {item.href ? (<a href={item.href} target="_blank" ><p className="text-[#333]">{item.value}</p></a>) : (<p className="color-[#333]">{item.value}</p>)}
                
               
              </div>
            </div>
))}
           
          </div> 

          <div className="mt-16 pt-12 border-t  border-[#eee] text-center">
            <h3 className="text-[2rem] mb-4">Let's Build Something Great</h3>
            <p className="text-[#666] mb-8">
              I'm currently in my final year of BTech, and I'm open to
              collaboration, freelance work, or full-time opportunities. Let's
              build something awesome together.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
