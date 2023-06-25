export default function GetStarted() {
  return (
    <div className="lg:w-[1200px] h-fit flex flex-col bg-no-repeat bg-cover bg-left mx-auto my-10 lg:my-[100px] justify-start bg-[url(/img/get-started/get-explore.png)]">
      <div className="lg:w-[43%] lg:px-[72px]  py-12 lg:py-[100px]">
        <div className="flex flex-col items-start px-5">
          <h1 className="not-italic font-bold text-[28px] leading-8 text-white mb-4">
            Get started
          </h1>
          <p className="not-italic font-normal text-lg lg:leading-[140%] text-white mb-8">
            Join the growing list of creatives who get their visions heard today
          </p>
          <button className="mainBtn">
            <span>Explore now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
