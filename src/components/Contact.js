import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-[#393E46] text-gray-300 flex justify-center items-center px-4 mt-60 md:mt-30"
    >
      <form
        method="post"
        action="https://formsubmit.co/studiozeman@icloud.com"
        className="flex flex-col justify-center max-w-[600px] w-full 2xl:h-screen"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#FFD369]">
            Kontaktuj mně
          </p>
          <p className="py-4">
            Kontaktuj mne pomocí formuláře níže, nebo na email{" "}
            <span className="font-bold border-b-2 border-[#FFD369]">
              studiozeman@icloud.com
            </span>
          </p>
        </div>
        <input className="p-2 text-black" type="text" placeholder="Jméno" name="name" />
        <input
          className=" my-4 p-2 text-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 text-black"
          name="message"
          rows="8"
          placeholder="Zpráva"
        ></textarea>
        <button className="border-2 hover:bg-[#FFD369] hover:border-[#FFD369] px-4 py-3 my-8 mx-auto flex items-center hover:font-bold hover:text-black ">
          Odešli
        </button>
      </form>
    </div>
  );
};

export default Contact;
