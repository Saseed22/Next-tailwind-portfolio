import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1140px]  m-auto mt-6 p-6 md:p-16">
      <div className="flex items-center py-10 px-8 gap-x-4">
        <h1 className="text-2xl md:text-4xl font-bold">Contact Us</h1>
        <div className="w-[40px] bg-black h-1 mt-2 " />
      </div>

      <form>
        <div className="grid md:grid-cols-2 gap-x-6">
          <input
            className="border-2 border-gray-400 rounded-md w-full my-4 p-2"
            type="text"
            placeholder="name"
          />
          <input
            className="border-2 border-gray-400 rounded-md w-full my-4 p-2"
            type="email"
            placeholder="email"
          />
        </div>
        <input
          className="border-2 border-gray-400 rounded-md w-full my-4 p-2"
          type="text"
          placeholder="subject"
        />
        <textarea
          className="border-2 border-gray-400 rounded-md w-full my-4 p-2"
          placeholder="massage"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className="text-white w-full md:w-2/12 md:mx-auto hover:scale-110 duration-300 px-6 py-3 bg-teal-400 rounded mt-8 font-bold">
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default Contact;
