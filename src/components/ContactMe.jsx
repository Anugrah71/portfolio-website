import React from "react";


const ContactMe = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "664c69f8-13b9-4345-935d-736d85f8b618");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
<section className="relative z-0 bg-white bg-[#f8f8f8] text-black text-center px-4 sm:px-10 md:px-20 pt-20 sm:pt-24 mt-12 sm:mt-0">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-center mb-4 mt-2 font-bold">
          Contact <span className="text-[#333]">Me</span>
        </h2>

        <p className="text-center mb-12 text-gray-600">
          I'd love to hear from you! If you have any questions, comments, or<br/>
          feedback, please use the form below.
        </p>

        <form onSubmit={onSubmit} className="flex items-center justify-center">
          <div className="flex flex-col w-full max-w-lg gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter Your Name"
                name='name'
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-400"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                name='email'
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-300"
              />
            </div>

            <textarea
              placeholder="Enter Your Message"
              name='message'
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-300"
              rows="5"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-600 transition"
            >
             Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactMe;
