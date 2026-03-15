import Image from "next/image";

type HeroSectionProps = {
  backgroundImage: string;
  doctorImage?: string;
  ornamentImage?: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function HeroSection({
  backgroundImage,
  doctorImage,
  ornamentImage,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative mt-20 w-full overflow-hidden bg-[#8b5d3f] min-h-120 sm:min-h-140 md:min-h-160 lg:min-h-0 lg:aspect-16/7"
      aria-label="Destaque principal"
    >
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#6b4027]/82 via-[#936b4e]/58 to-[#ddc8b6]/18" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_45%,rgba(110,63,34,0.38),transparent_58%)]" />
      <div className="absolute inset-0 bg-linear-to-t from-[#6b4027]/38 via-transparent to-transparent lg:hidden" />

      <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl grid-cols-1 px-5 py-10 sm:px-8 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-14 lg:py-0">
        <div className="self-center max-w-xl pr-24 text-[#f3e4d3] sm:pr-28 md:pr-40 lg:pr-0 lg:pt-3">
          <h1 className="font-serif text-4xl font-semibold leading-[0.98] sm:text-5xl md:text-6xl lg:text-[5.4rem]">
            {title}
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#f6e9db]/88 sm:mt-6 sm:text-lg md:text-xl lg:mt-8 lg:max-w-xl lg:text-2xl">
            {subtitle}
          </p>

          <a
            href={ctaHref}
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#f2e2d2] px-5 py-2.5 text-base font-semibold text-[#7b3f18] shadow-md transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-6 sm:text-lg md:px-7 md:text-xl lg:mt-10 lg:px-4 lg:py-3 lg:text-xl"
          >
            {ctaLabel}
          </a>
        </div>

        <div className="relative hidden h-full lg:block" aria-hidden="true" />
      </div>

            {ornamentImage ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden lg:block" aria-hidden="true">
          <Image
            src={ornamentImage}
            alt=""
            width={1920}
            height={180}
            className="h-auto w-full"
            unoptimized
          />
        </div>
      ) : null}

      {doctorImage ? (
        <>
          <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-[68%] w-[52%] sm:h-[72%] sm:w-[48%] md:h-[78%] md:w-[44%] lg:hidden">
            <Image
              src={doctorImage}
              alt=""
              fill
              priority
              className="object-contain object-bottom opacity-95"
            />
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-[3.5%] z-10 hidden w-[45%] lg:block">
            <Image
              src={doctorImage}
              alt=""
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>
        </>
      ) : null}

      {ornamentImage ? (
        <div className="pointer-events-none absolute bottom-0 right-0 z-20 w-[42%] sm:w-[34%] md:w-[30%] lg:hidden" aria-hidden="true">
          <Image
            src={ornamentImage}
            alt=""
            width={820}
            height={180}
            className="h-auto w-full"
            unoptimized
          />
        </div>
      ) : null}
    </section>
  );
}