import React from "react";

import "../../styles.css";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto flex justify-between px-4 py-5">
      <div className="flex-col flex justify-center items-center mx-auto">
        <div class=" py-10 flex">
          <div class=" mx-auto flex-1 lg:mx-0">
            <h1 class="heading">
              Collaborate for Growth <br /> Join Forces with Our Expert{" "}
              <span class="highlight"> Skill Exchange Community</span>
            </h1>
            <p class="subheading">
              Partner with our thriving TalentTrade community to exchange
              valuable skills and knowledge. We bring together passionate
              learners and teachers to create an ecosystem where growth is
              mutual. Understanding your unique abilities, we deliver
              opportunities to both teach and learn. Let's collaborate to craft
              a standout experience in skill-sharing.
            </p>

            <form class="mt-16">
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    for="first-name"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Full name
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="text"
                      id="full-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      name="full-name"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="email"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div class="mt-2.5">
                    <input
                      id="email"
                      type="email"
                      autocomplete="email"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      name="email"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <div class="flex justify-between text-sm leading-6">
                    <label
                      for="phone"
                      class="block font-semibold text-gray-900"
                    >
                      Company
                    </label>
                    <p id="phone-description" class="text-gray-400">
                      Optional
                    </p>
                  </div>
                  <div class="mt-2.5">
                    <input
                      type="text"
                      id="company"
                      autocomplete="company"
                      aria-describedby="company-description"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      name="company"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <div class="flex justify-between text-sm leading-6">
                    <label
                      for="phone"
                      class="block font-semibold text-gray-900"
                    >
                      Phone
                    </label>
                    <p id="phone-description" class="text-gray-400">
                      Optional
                    </p>
                  </div>
                  <div class="mt-2.5">
                    <input
                      type="tel"
                      id="phone"
                      autocomplete="tel"
                      aria-describedby="phone-description"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      name="phone"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <div class="flex justify-between text-sm leading-6">
                    <label
                      for="message"
                      class="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      How can we help you?
                    </label>
                    <p id="message-description" class="text-gray-400">
                      Max 500 characters
                    </p>
                  </div>
                  <div class="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      aria-describedby="message-description"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              </div>

              <small class="mt-3 block text-gray-500">
                Your information will be kept private. We won't ever sell it and
                we won't ever spam you. We hate that sort of BS as much as you
                do.
              </small>
              <div class="mt-3 flex justify-center border-t border-gray-900/10 pt-8">
                <button
                  type="button"
                  class="rounded-md bg-primary px-3.5 py-2.5 text-center flex gap-2 items-center text-sm font-semibold text-white shadow-sm bg-[#9951DB] hover:bg-[#9951DB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    ></path>
                  </svg>
                  Send message
                </button>
              </div>
            </form>
          </div>

          <div className="hidden md:flex md:flex-1 border border-gray-200 rounded-lg overflow-hidden ml-4">
            <img
              src="./contact.jpg"
              alt="Contact img"
              className=" object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
