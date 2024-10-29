import React from "react";

const MainSection1 = () => {
  const dotCount = 64;

  return (
    <div className=" w-full border">
      <div className="max-w-7xl mx-auto py-20">
        <div className="flex flex-col lg:flex-row flex-1">
          <div className="flex-1 pl-4 relative">
            <div className="flex gap-10 items-center absolute top-[40%] left-52 transform -translate-x-1/2 -translate-y-1/2 z-0">
              <div className=" w-20 h-20 grid grid-cols-[repeat(auto-fill,_10px)] grid-rows-[repeat(auto-fill,_10px)] overflow-hidden opacity-50">
                {Array.from({ length: dotCount }).map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full border-2 border-[#701A75]"
                  />
                ))}
              </div>

              <div className="w-40 h-60 rounded-t-xl rounded-br-3xl rounded-bl-xl bg-[#4EC7E1]"></div>
            </div>

            <div className="flex flex-1 z-10 h-full">
              <div className="flex-1 flex flex-col justify-evenly items-center space-y-5">
                <div className="shadow-lg bg-white z-10 rounded-lg p-3 space-y-1">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 text-sm rounded-md">
                    Popular
                  </span>

                  <h2 className="text-xl font-semibold">Heading</h2>
                  <p className="text-gray-600 text-sm font-medium">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Maxime hic quod perspiciatis laborum magnam facere!
                  </p>
                </div>
                <div className="z-10 w-[90%] bg-white h-72 mx-auto rounded-md overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/3617/74c9/5fdc9558b810dda4c553c8483e4475bf?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jkJIzDbmHpdhrtbOaxPKa685E7EnM2X~zs0ZVQ~Ce0XF4Lf1T6pKc49nK-yLNfA~xgfxk4nETWF-Neioqq0~J3OVsk-cJo89Hrs3-mK7a~7oHyNytBxqiFDXFtmh~-AwdflCdr0qZ0JSPAQ-hOjsshCtTL~vk73N-4EHmO7e0g-yXW1h8xrb~JsFGtshvjYL910pr0v0pKoivTWsK379ZLLMdy-VSKNxnKqYeCbYw9es6QhWiegsPspZ8hkhuAdN5qBtIJtV925XgmC-DRvviiaLMJK-QSoc0rMqBrLrC-bBpFDSGOOAMHb1njFF7Avij-10DqQzd9NFZ57qjDc6XA__"
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="flex-1 px-4 justify-center items-center flex flex-col space-y-4">
                <div className="z-10 h-96 mx-auto rounded-md overflow-hidden border-4 border-white bg-white shadow-lg">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/3617/74c9/5fdc9558b810dda4c553c8483e4475bf?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jkJIzDbmHpdhrtbOaxPKa685E7EnM2X~zs0ZVQ~Ce0XF4Lf1T6pKc49nK-yLNfA~xgfxk4nETWF-Neioqq0~J3OVsk-cJo89Hrs3-mK7a~7oHyNytBxqiFDXFtmh~-AwdflCdr0qZ0JSPAQ-hOjsshCtTL~vk73N-4EHmO7e0g-yXW1h8xrb~JsFGtshvjYL910pr0v0pKoivTWsK379ZLLMdy-VSKNxnKqYeCbYw9es6QhWiegsPspZ8hkhuAdN5qBtIJtV925XgmC-DRvviiaLMJK-QSoc0rMqBrLrC-bBpFDSGOOAMHb1njFF7Avij-10DqQzd9NFZ57qjDc6XA__"
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex justify-start items-center w-full relative pt-5">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-black bg-black overflow-hidden absolute"
                      style={{ left: `${i * 1.5}rem` }}
                    >
                      <img
                        src="https://s3-alpha-sig.figma.com/img/6b69/09bb/354ab03ff2cf3004469f21f6d869adf1?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLU~fg8kBIaRZvUc9lWY~tmR2hRiD-oxHwPBR~8-0TZYe7-pqlzLnG22lcDCYnAF5TJOaai7FbRkIvKPbL7aKdQVG8TUti76awiAyYOHToKHSyOiEDFHq2lien7Jqzl0C8S1SRFxgptROtv9YX~RZGd2jJVG~szk9awppihhXBSBRc5l-wob38XTdiTGdo~Up93FWwgDUXgCd73Y5~3vvt-5tYuow1bL6~-2MFJfKBiD27ycB7CB2BsiwCSZWILGvEDtL~NcGH0L9WIXOxrFKZZ06qQLXBQXPZ0VjghM6L1D1R~9HhQa~w6qkoTef5k-HFSKsYlktPnRW9Qb9PV7Bg__"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 px-4 py-5 space-y-10 flex flex-col justify-center items-center">
            <div className="">
              <p className="text-[#475569] font-semibold tracking-widest text-base ">
                The Process
              </p>
              <h2 className="text-3xl font-semibold w-[80%]">
                <span className="text-[#4EC7E1]">Business Users </span> Post
                their Requirements:
              </h2>
            </div>
            {Array.from({ length: 2 }).map((_, i) => (
              <div className=" flex gap-x-4 items-center pl-4">
                <div>
                  <div className="border-2 border-[#4EC7E1] rounded-full w-16 h-16 relative">
                    <p className="text-6xl text-[#4EC7E1] font-black absolute -left-6">
                      {i + 1}
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="text-[#0E162AED]">
                    Sign up as a Business User and share your brand's message,
                    logo, and design preferences
                  </p>
                </div>
              </div>
            ))}

            <div className=" w-full ml-48">
              <button className="mt-8 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection1;
