const whyCardArr = [
  {
    title: "Automated Efficiency",
    text: "Save hours of manual dialing with AI-powered calls that reach your customers instantly, reducing workload and increasing productivity.",
  },
  {
    title: "Real-Time Monitoring",
    text: "Listen to live calls, view instant transcriptions, and track progress in real time, giving you full control over every conversation.",
  },
  {
    title: "Data-Driven Insights",
    text: "Gain valuable analytics on call performance, customer responses, and campaign success to refine your outreach strategy effortlessly.",
  },
]

export default function WhySection() {
  return (
    <section
      className="flex w-full flex-col items-center justify-center gap-10 p-8"
      aria-labelledby="why-choose-us"
    >
      <div className="flex max-w-[757px] flex-col gap-6">
        <h2
          id="why-choose-us"
          className="text-center text-3xl leading-10 font-extrabold md:text-[2.5rem] md:leading-12"
        >
          Why Choose Our AI-Powered Outbound Calling Solution?
        </h2>
        <p className="text-center text-sm leading-6 text-[#53686A] md:text-base">
          We&apos;re more than just an AI calling system — we&apos;re your
          growth partner. Experience seamless automation, real-time insights,
          and smarter that helps you connect with customers effortlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 justify-between gap-x-7 gap-y-8 p-4 md:gap-y-10 lg:grid-cols-3 lg:grid-rows-2">
        {whyCardArr.map((card) => (
          <article
            key={card.title}
            className="bg-secondary-variant flex flex-col items-center gap-4 rounded-3xl p-8 md:items-start md:gap-8"
          >
            <h3 className="text-center text-2xl font-bold md:text-start md:text-[2rem]">
              {card.title}
            </h3>
            <p className="text-secondary text-center text-sm leading-6 md:text-start md:text-base">
              {card.text}
            </p>
          </article>
        ))}
        <div className="col-span-full flex flex-col items-start justify-between gap-x-7 gap-y-8 lg:flex-row">
          <article className="bg-secondary-variant flex flex-col items-center gap-4 rounded-3xl p-8 md:items-start md:gap-8">
            <h3 className="text-center text-2xl font-bold md:text-start md:text-[2rem]">
              Seamless Integration
            </h3>
            <p className="text-secondary text-center text-sm leading-6 md:text-start md:text-base">
              Easily upload contact lists, customize scripts, and adjust
              settings to fit your business needs—no technical expertise
              required
            </p>
          </article>
          <article className="bg-secondary-variant flex flex-col items-center gap-4 rounded-3xl p-8 md:items-start md:gap-8">
            <h3 className="text-center text-2xl font-bold md:text-start md:text-[2rem]">
              Scalable & Reliable
            </h3>
            <p className="text-secondary text-center text-sm leading-6 md:text-start md:text-base">
              Whether you&apos;re making a few calls or thousands, our AI system
              scales with your business, ensuring consistent and professional
              communication.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
