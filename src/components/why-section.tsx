export default function whySection() {
  return (
    <section
      className="px-4 py-20 md:px-20 md:py-40 xl:py-48 xl:pb-[188px]"
      aria-labelledby="why-choose-us"
    >
      <div className="flex flex-col gap-20">
        <header className="mx-auto flex w-full flex-col items-center gap-3 md:gap-4 md:px-20 xl:gap-[23px]">
          <h2
            id="why-choose-us"
            className="text-primary font-bolder w-[364px] max-w-[580px] text-center text-xl break-words whitespace-normal sm:w-[380px] sm:px-0 md:w-[380px] md:px-0 md:text-2xl xl:w-full xl:px-0 xl:text-[40px] xl:leading-12"
          >
            Why Choose Our AI-Powered Outbound Calling Solution?
          </h2>
          <p className="text-secondary max-w-[350px] text-center text-sm font-normal sm:max-w-[550px] md:max-w-[556px] md:text-xs xl:max-w-[757px] xl:text-base">
            We&apos;re more than just an AI calling system — we&apos;re your
            growth partner. Experience seamless automation, real-time insights,
            and smarter that helps you connect with customers effortlessly.
          </p>
        </header>
        <ul className="flex flex-col place-content-center gap-[23px] md:gap-10 xl:pb-2.5">
          <li>
            <article className="bg-color-secondary flex flex-col gap-4 rounded-3xl px-6 py-10 md:h-[216px] md:w-[32%] md:gap-6 xl:h-full xl:flex-1 xl:gap-8 xl:py-18 xl:pr-13 xl:pl-14">
              <h3 className="text-primary text-2xl leading-6 font-bold break-words md:max-w-[130px] md:text-xl xl:max-w-[293px] xl:text-[32px] xl:leading-[38px]">
                Automated Efficiency
              </h3>
              <p className="text-secondary text-xs font-normal xl:max-w-[302px] xl:text-base">
                Save hours of manual dialing with AI-powered calls that reach
                your customers instantly, reducing workload and increasing
                productivity.
              </p>
            </article>
            <article className="bg-color-secondary flex flex-col gap-4 rounded-3xl px-6 py-10 md:h-[216px] md:w-[32%] md:gap-6 xl:h-full xl:flex-1 xl:gap-12 xl:py-17 xl:pr-13">
              <h3 className="text-primary text-2xl leading-6 font-bold break-words whitespace-normal md:max-w-[130px] md:text-xl xl:max-w-[293px] xl:text-3xl xl:leading-9">
                Real-Time Monitoring
              </h3>
              <p className="text-secondary text-xs font-normal xl:max-w-[302px] xl:text-base">
                Listen to live calls, view instant transcriptions, and track
                progress in real time, giving you full control over every
                conversation.
              </p>
            </article>
            <article className="bg-color-secondary flex flex-col gap-3 rounded-3xl px-6 py-10 md:h-[216px] md:w-[32.5%] md:gap-6 xl:h-full xl:flex-1 xl:gap-10 xl:py-18 xl:pr-14">
              <h3 className="text-primary xl: text-2xl leading-6 font-bold break-words whitespace-normal md:max-w-[130px] md:text-xl xl:w-full xl:max-w-[210px] xl:text-3xl xl:leading-9">
                Data-Driven Insights
              </h3>
              <p className="text-secondary text-xs font-normal md:max-w-[227px] xl:max-w-[302px] xl:text-base">
                Gain valuable analytics on call performance, customer responses,
                and campaign success to refine your outreach strategy
                effortlessly.
              </p>
            </article>
          </li>
          <li>
            <article className="bg-color-secondary flex w-full flex-col items-start gap-4 rounded-3xl px-6 py-10 md:gap-4 md:py-8 md:pr-[20px] md:pl-5 xl:w-full xl:justify-center xl:gap-8 xl:py-20 xl:pr-[84px] xl:pb-14 xl:pl-[56px]">
              <h3 className="text-primary text-2xl leading-6 font-bold break-words whitespace-normal md:w-full xl:text-[32px] xl:leading-[38px]">
                Seamless Integration
              </h3>
              <p className="text-secondary text-xs font-normal md:max-w-[318px] xl:max-w-[400px] xl:text-base">
                Easily upload contact lists, customize scripts, and adjust
                settings to fit your business needs—no technical expertise
                required.
              </p>
            </article>
            <article className="bg-color-secondary flex flex-col items-start gap-4 rounded-3xl px-6 py-10 md:w-full md:gap-4 md:py-8 md:pr-[20px] md:pl-5 xl:justify-center xl:gap-10 xl:pt-20 xl:pr-[84px] xl:pb-[48px] xl:pl-[56px]">
              <h3 className="text-primary text-2xl leading-6 font-bold break-words whitespace-normal md:w-full xl:text-[32px] xl:leading-[38px]">
                Scalable & Reliable
              </h3>
              <p className="text-secondary text-xs font-normal md:max-w-[349px] xl:text-base">
                Whether you&apos;re making a few calls or thousands, our AI
                system scales with your business, ensuring consistent and
                professional communication.
              </p>
            </article>
          </li>
        </ul>
      </div>
    </section>
  )
}
