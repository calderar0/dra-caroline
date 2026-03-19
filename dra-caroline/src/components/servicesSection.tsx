import Image from "next/image";
import ServiceCard from "@/components/serviceCard";
import { servicesCards } from "@/components/servicesCardsData";

export default function ServicesSection() {
  return (
    <section id="serviços" className="relative overflow-hidden bg-[#E9DAC7] px-6 pb-18 pt-4 sm:px-8 lg:px-14 lg:pb-24">
      <div className="pointer-events-none absolute -left-24 top-38 hidden opacity-30 lg:block" aria-hidden="true">
        <Image src="/arvoreelinha.svg" alt="" width={320} height={320} className="h-auto w-[320px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <h2 className="font-serif text-5xl font-semibold text-[#7e3f16]">O que trato?</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {servicesCards.map((item, index) => (
            <ServiceCard key={`${item.title}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
