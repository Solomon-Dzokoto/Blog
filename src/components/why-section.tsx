




const whyCardArr = [
  {
    title: "Automated Efficiency",
    text: "Save hours of manual dialing with AI-powered calls that reach your customers instantly, reducing workload and increasing productivity.",
  }, {
    title: "Real-Time Monitoring",
    text: "Listen to live calls, view instant transcriptions, and track progress in real time, giving you full control over every conversation.",
  }, {
    title: "Data-Driven Insights",
    text: "Gain valuable analytics on call performance, customer responses, and campaign success to refine your outreach strategy effortlessly."
  },
]





export default function WhySection() {
  return (
    <section
      className="p-8 w-full flex flex-col gap-10 items-center justify-center"
      aria-labelledby="why-choose-us"
    >
        <div className="flex-col gap-6 max-w-[757px] flex">
          <h2
            id="why-choose-us"
            className="font-extrabold text-[2.5rem] leading-12 text-center"
          >
            Why Choose Our AI-Powered Outbound Calling Solution?
          </h2>
          <p className="text-base leading-6 text-center text-[#53686A]">
            We&apos;re more than just an AI calling system — we&apos;re your
            growth partner. Experience seamless automation, real-time insights,
            and smarter that helps you connect with customers effortlessly.
          </p>
          </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 justify-between gap-x-7 gap-y-8 md:gap-y-10 p-4">
              {
                whyCardArr.map(card => (
                  <article key={card.title} className="flex flex-col items-start
                  rounded-3xl bg-secondary-variant p-8 gap-8">
                    <h3 className="font-bold text-[2rem]  ">
                      {card.title}
                    </h3>
                   <p className="text-base leading-6 text-secondary">
                    {
                      card.text
                    }
                   </p>
                  
                  </article>
                ))
              }
              <div className="flex flex-col lg:flex-row col-span-full justify-between items-start gap-x-7 gap-y-8">
                  <article  className="flex flex-col items-start
                  rounded-3xl bg-secondary-variant p-8 gap-8">
                    <h3 className="font-bold text-[2rem]  ">
                     Seamless Integration
                    </h3>
                   <p className="text-base leading-6 text-secondary">
                      Easily upload contact lists, customize scripts, and adjust settings to fit your business needs—no technical expertise required

                   </p>
                  
                  </article>
                        <article  className="flex flex-col items-start
                  rounded-3xl bg-secondary-variant p-8 gap-8">
                    <h3 className="font-bold text-[2rem]  ">
              Scalable & Reliable
                    </h3>
                   <p className="text-base leading-6 text-secondary">
                Whether you're making a few calls or thousands, our AI system scales with your business, ensuring consistent and professional communication.
                   </p>
                  
                  </article>
              </div>
           </div>
        
  
    </section>
  )
}
