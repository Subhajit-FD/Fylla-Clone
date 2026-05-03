import Button from "../components/Button";
import Client from "../components/Client";
import Container from "../components/Container";

const Home = () => {
  return (
    <div>
      <Container className="flex w-full flex-col md:flex-row">
        <div className="flex flex-col gap-6 md:w-1/2 md:flex-col-reverse md:justify-end">
          <div>icon</div>
          <div className="flex flex-col gap-6">
            <h2 className="font-primary text-5xl md:text-7xl">
              We are a <br /> digital agency <br /> from Lisbon.
            </h2>
            <p className="mb-6 max-w-60 text-xl md:mb-0 md:max-w-100 md:text-2xl">
              Elevating brands through creative digital solutions, proudly
              representing Lisbon's vibrant innovation.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center md:w-1/2">
          <div className="h-xl w-xl overflow-hidden rounded-lg md:aspect-square">
            <video
              src="https://framerusercontent.com/assets/rXAszXcrH4ELEBbdilxkxdbfmrE.mp4"
              muted
              autoPlay
              loop
              className="h-full w-full object-cover"
            ></video>
          </div>
        </div>
      </Container>
      <Client />
      {/* SERVICES */}
      <Container className="flex justify-between border-b">
        <div className="hidden md:inline-flex">
          <h3 className="font-accent uppercase">What we do</h3>
        </div>
        <div className="md:w-2/3 md:border-l-2 md:pl-6">
          <div className="flex flex-col pb-6 md:flex-row">
            <div className="flex flex-1 flex-col gap-4 py-6 md:p-4">
              <h2 className="font-primary text-4xl uppercase">Branding</h2>
              <p>
                We craft compelling brand identities that leave a lasting
                impression.
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-4 border-t py-6 md:border-t-0 md:border-l md:p-4">
              <h2 className="font-primary text-4xl uppercase">Design</h2>
              <p>
                Innovative and aesthetic designs that bring your ideas to life.
              </p>
            </div>
          </div>

          <div className="flex flex-col border-t pt-4 md:flex-row md:pt-6">
            <div className="flex flex-1 flex-col gap-4 py-6 md:p-4">
              <h2 className="font-primary text-4xl uppercase">Branding</h2>
              <p>
                Captivating visual storytelling that engages and resonates with
                your audience.
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-4 border-t py-6 md:border-t-0 md:border-l md:p-4">
              <h2 className="font-primary text-4xl uppercase">Design</h2>
              <p>
                Engaging and persuasive content that captures attention and
                sparks meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </Container>
      {/* FEATURED WORK */}
      <Container className="mt-6 flex flex-col justify-between border-b md:mt-0 md:flex-row">
        <div className="mb-6 flex max-w-80 flex-col gap-6 md:mb-0 md:sticky md:top-10 self-start">
          <h2 className="font-primary text-6xl uppercase">Featured Work</h2>
          <p className="text-xl">
            Showcasing our standout projects that blend creativity, strategy,
            and cutting-edge design.
          </p>
          <Button className="font-accent w-fit text-lg uppercase">
            See all work
          </Button>
        </div>

        <div className="border-t md:border-t-0 pt-6 md:w-2/3 md:border-l-2 md:pt-0 md:pl-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Large featured image — spans full width */}
            <div className="md:col-span-2">
              <img
                className="w-full object-cover"
                src="https://framerusercontent.com/images/k5mnF05cnHOmE3fhp1gkKHmLGc.webp"
                alt="img1"
              />
              <div className="mt-2 flex items-center justify-between">
                <h3 className="font-primary text-2xl">Dancing Stars</h3>
                <p className="font-accent text-sm">2023</p>
              </div>
            </div>

            {/* Row 2 */}
            <div>
              <img
                className="w-full object-cover"
                src="https://framerusercontent.com/images/1wdNE1kRFSX3dITLwUiw1YAEYsw.webp?scale-down-to=1024"
                alt="img2"
              />
              <div className="mt-2 flex items-center justify-between">
                <h3 className="font-primary text-2xl">Enjoy Silence</h3>
                <p className="font-accent text-sm">2023</p>
              </div>
            </div>
            <div>
              <img
                className="w-full object-cover"
                src="https://framerusercontent.com/images/9AwBmX967QwTRybsSzV72Ldoys.webp?scale-down-to=1024"
                alt="img3"
              />
              <div className="mt-2 flex items-center justify-between">
                <h3 className="font-primary text-2xl">Pure Vision</h3>
                <p className="font-accent text-sm">2023</p>
              </div>
            </div>

            {/* Row 3 */}
            <div>
              <img
                className="w-full object-cover"
                src="https://framerusercontent.com/images/B2vbH7ephcfzpD771EuVAnfDS2w.webp?scale-down-to=1024"
                alt="img4"
              />
              <div className="mt-2 flex items-center justify-between">
                <h3 className="font-primary text-2xl">Boring Brand</h3>
                <p className="font-accent text-sm">2023</p>
              </div>
            </div>
            <div>
              <img
                className="w-full object-cover"
                src="https://framerusercontent.com/images/QYy31ajrF9Pa85Ya3BY5C5Tys0.webp?scale-down-to=1024"
                alt="img5"
              />
              <div className="mt-2 flex items-center justify-between">
                <h3 className="font-primary text-2xl">New Culture</h3>
                <p className="font-accent text-sm">2023</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* HOW WE WORK */}
      <Container className="mt-6 flex flex-col justify-between md:mt-0 md:h-[90vh] md:flex-row border-b pb-6">
        <div className="flex w-2/3 flex-col-reverse items-start justify-between md:h-full md:flex-col">
          <div className="flex max-w-200 flex-col gap-2">
            <h2 className="font-accent uppercase">How We Work</h2>
            <h3 className="font-primary text-4xl md:text-6xl">
              We help our clients succeed with innovative strategies.
            </h3>
          </div>
          <div>
            <p>icon</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-start justify-between gap-6 md:mt-0 md:h-full md:w-1/3 md:gap-0 md:border-l-2 md:pl-6">
          <div>
            <p>
              Through careful analysis, creative thinking, and a deep
              understanding of their goals, we empower businesses to surpass
              expectations and thrive in today's dynamic and competitive
              landscape.
            </p>
          </div>
          <div>
            <Button className="uppercase">our services</Button>
          </div>
        </div>
      </Container>
      {/* OUR VALUES */}
      <Container className="mt-6 border-b">
        {/* Header Section */}
        <div className="mb-8 w-full md:mb-12">
          <h2 className="font-primary mb-6 text-center text-3xl tracking-wide text-gray-900 uppercase md:text-4xl">
            Our Values
          </h2>
          <hr className="w-full border-t" />
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col items-start gap-8 md:flex-row md:gap-12">
          {/* Left Column: Image */}
          <div className="w-full shrink-0 md:w-1/2">
            <img
              src="https://framerusercontent.com/images/dbPPgNBvteyJTwf4izKJFQuFGJ8.jpg?scale-down-to=1024&width=4096&height=2731"
              alt="Our Values"
              className="h-full w-full rounded-2xl object-cover md:rounded-3xl"
            />
          </div>

          {/* Right Column: Values List */}
          <div className="flex w-full flex-col md:w-1/2 md:border-l  md:pl-10">
            {/* Value 01 */}
            <div className="mb-8 flex gap-5 border-b pb-8">
              <div className="mt-1 shrink-0">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border text-[10px] font-medium text-gray-500 md:h-8 md:w-8 md:text-xs">
                  01
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-primary text-xl tracking-wider text-gray-900 uppercase md:text-2xl">
                  Vision
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 md:text-[15px]">
                  Our relentless pursuit of a shared vision fuels our creativity
                  and propels us forward. With clarity and foresight, we craft
                  strategies that align with our clients' goals and aspirations,
                  transforming their dreams into reality and shaping a future
                  worth embracing.
                </p>
              </div>
            </div>

            {/* Value 02 */}
            <div className="mb-8 flex gap-5 border-b pb-8">
              <div className="mt-1 shrink-0">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border text-[10px] font-medium text-gray-500 md:h-8 md:w-8 md:text-xs">
                  02
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-primary text-xl tracking-wider text-gray-900 uppercase md:text-2xl">
                  Innovation
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 md:text-[15px]">
                  Innovation is at the core of everything we do. We embrace
                  curiosity, explore uncharted territories, and challenge the
                  status quo. By pushing boundaries and thinking outside the
                  box, we create groundbreaking solutions that disrupt
                  industries and inspire audiences.
                </p>
              </div>
            </div>

            {/* Value 03 */}
            {/* Note: Kept the bottom border for mobile to match Image 2, removed for desktop via md:border-none */}
            <div className="flex gap-5 pb-8 md:mb-0 md:pb-0">
              <div className="mt-1 shrink-0">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border text-[10px] font-medium text-gray-500 md:h-8 md:w-8 md:text-xs">
                  03
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-primary text-xl tracking-wider text-gray-900 uppercase md:text-2xl">
                  Connection
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 md:text-[15px]">
                  We believe in the power of connection. We strive to build
                  bridges between brands and their audiences, fostering genuine
                  and lasting relationships. Through compelling storytelling and
                  meaningful interactions, we create experiences that evoke
                  emotions, strengthen bonds, and cultivate trust, ultimately
                  turning customers into brand advocates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* CONTACT */}
      <Container className="mt-12 mb-10 flex flex-col justify-between border-b pb-10 md:mt-24 md:h-[65vh] md:flex-row">
        {/* Left Column */}
        <div className="flex w-full flex-col-reverse items-start justify-between gap-16 pr-0 md:h-full md:w-[60%] md:flex-col md:gap-0 md:pr-8">
          <div className="flex max-w-3xl flex-col gap-4">
            <h2 className="font-accent text-xs font-semibold tracking-widest uppercase md:text-sm">
              Contact
            </h2>
            <h3 className="font-primary text-5xl leading-[1.05] tracking-tight text-[#1a1a1a] md:text-6xl lg:text-[5rem]">
              LET’S BRING <br className="hidden md:block" />
              YOUR BRAND TO <br className="hidden md:block" />
              THE NEXT LEVEL
            </h3>
          </div>
          <div>
            {/* Text Icon Replacement */}
            <p>icon</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="mt-10 flex w-full flex-col items-start justify-between gap-10  md:mt-0 md:h-full md:w-[40%] md:gap-0 md:border-l md:pl-12 lg:pl-16">
          <div className="max-w-100">
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              Together, let's elevate your brand to new heights by unleashing
              its full potential and captivating your target audience.
            </p>
          </div>
          <div>
            <Button className="font-accent uppercase">Get in touch</Button>
          </div>
        </div>
      </Container>
      {/* LATEST NEWS */}
      <Container className="mt-12 mb-16 flex flex-col md:mt-20 md:mb-24">
        {/* Header Section */}
        <div className="mb-8 flex w-full flex-col md:mb-12">
          <div className="flex flex-col items-center justify-center border-b border-gray-400 pb-4 md:flex-row md:items-end md:justify-between md:pb-6">
            <h2 className="font-primary text-4xl tracking-wide text-[#1a1a1a] uppercase md:text-[2.75rem]">
              Latest News
            </h2>
            <button className="hidden rounded-sm border border-gray-400 px-5 py-1.5 text-[11px] font-semibold tracking-widest text-[#1a1a1a] uppercase transition-colors hover:bg-gray-100 md:block">
              See All
            </button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="flex flex-col gap-4">
            <div className="w-full overflow-hidden rounded-[1.25rem]">
              <img
                src="https://framerusercontent.com/images/rfHJDPb098V15ZhNZ4hNnXc28jA.webp?scale-down-to=1024&width=1800&height=1000"
                alt="Things to Look for When Comparing Branding Alternatives"
                className="aspect-[1.6] h-auto w-full object-cover hover:scale-[1.2] transition-all duration-150"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-semibold tracking-widest text-gray-500 uppercase">
                Branding
              </p>
              <h3 className="font-primary pr-4 text-xl leading-snug text-[#1a1a1a] md:text-2xl">
                Things to Look for When Comparing Branding Alternatives
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4">
            <div className="w-full overflow-hidden rounded-[1.25rem]">
              <img
                src="https://framerusercontent.com/images/SHvefLN3asL08Ym9HA0kTgk.webp?scale-down-to=1024&width=1800&height=1000"
                alt="5 Stand-out Features of Branding You Should Know"
                className="aspect-[1.6] h-auto w-full object-cover hover:scale-[1.2] transition-all duration-150"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-semibold tracking-widest text-gray-500 uppercase">
                Branding
              </p>
              <h3 className="font-primary pr-4 text-xl leading-snug text-[#1a1a1a] md:text-2xl">
                5 Stand-out Features of Branding You Should Know
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-4">
            <div className="w-full overflow-hidden rounded-[1.25rem]">
              <img
                src="https://framerusercontent.com/images/f7pOHOgqMmCVM8ga1asI4DcH8.webp?scale-down-to=1024&width=1800&height=1000"
                alt="Branding: What Real Customers Have to Say"
                className="aspect-[1.6] h-auto w-full object-cover hover:scale-[1.2] transition-all duration-150"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-semibold tracking-widest text-gray-500 uppercase">
                Branding
              </p>
              <h3 className="font-primary pr-4 text-xl leading-snug text-[#1a1a1a] md:text-2xl">
                Branding: What Real Customers Have to Say
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
