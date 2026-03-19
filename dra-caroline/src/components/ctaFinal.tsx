import Image from "next/image";

type CtaSectionProps = {
  imageSrc: string;
  imageAlt: string;
  ctaLabel: string;
  title: string;
  paragraphs: string[];
};

export default function CTASection({
  imageSrc,
  imageAlt,
  title,
  paragraphs,
  ctaLabel
}: CtaSectionProps) {
  return (
    <section id="sobre" className="bg-[#E9DAC7] px-6 py-14 sm:px-8 lg:px-50 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[420px_1fr] lg:gap-14">
        <div className="relative min-h-75 overflow-hidden rounded-[30px] shadow-sm lg:min-h-130">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>

        <div className="max-w-xl text-[#7e3f16]">
          <h2 className="text-3xl font-semibold leading-tight lg:text-5xl">{title}</h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-[#8f5a36] lg:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-24 flex justify-center">
            <a
              href="#contato" // Depois você troca pelo link do WhatsApp real
              className="bg-[#783E19] text-white px-6 py-2.5 rounded-[10px] font-semibold hover:bg-[#b05e2a] transition shadow-md"
            >
              {ctaLabel}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
