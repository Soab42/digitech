"use client";
import { Mic } from "lucide-react";
import { Send } from "lucide-react";
import { EarIcon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="px-24 shadow-lg w-full">
      <h2 className="text-xl font-bold mb-4 uppercase text-emerald-600">
        Let,s Chat
      </h2>
      <h1 className="text-4xl font-bold">Send us a message</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 space-y-10 text-sm"
      >
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            id="name"
            placeholder="Name"
            {...register("name")}
            className="mt-1 block w-full rounded-full h-12 bg-transparent border shadow-sm py-2 px-3 border-gray-800 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />

          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
            className="mt-1 block w-full rounded-full h-12 bg-transparent border shadow-sm py-2 px-3 border-gray-800 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <input
          type="text"
          id="subject"
          placeholder="Subject"
          {...register("subject")}
          className="mt-1 block w-full rounded-full h-12 bg-transparent border shadow-sm py-2 px-3 border-gray-800 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />

        <textarea
          id="message"
          {...register("message")}
          placeholder="Message"
          rows={6}
          className="mt-1 block w-full rounded-xl bg-transparent border shadow-sm py-2 px-3 border-gray-800 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        ></textarea>

        <button
          type="submit"
          className=" border border-gray-800 text-white py-3 transition-all duration-300 px-4 rounded-full justify-center hover:bg-blue-600 mt-8 flex items-center gap-2 w-full "
        >
          Lets Talk <Send size={20} />
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
