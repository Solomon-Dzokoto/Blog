export default function Home() {
  return (
    <main>
      <section className="flex flex-col bg-[#F6F8FA] gap-10 items-center justify-center p-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <h4 className="font-[900] leading-12 text-center text-[40px] max-w-[580px]">
            What Business Owners Are Saying About Us
          </h4>
          <p className="text-base text-center leading-6 max-w-[707px]">
            Join business owners who have improved customer engagement and
            streamlined outreach with our AI-powered outbound calling. Hear
            their success stories and see the impact.
          </p>
        </div>
        {/* Carousel Section */}
        <div className="flex gap-4 relative"></div>

        <button
          type="button"
          className="cursor-pointer py-3 px-6 text-center align-middle rounded-xl border"
        >
          See more
        </button>
      </section>
    </main>
  );
}
