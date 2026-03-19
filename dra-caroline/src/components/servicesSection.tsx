import Image from "next/image";
import ServiceCard from "@/components/serviceCard";
import { servicesCards } from "@/components/servicesCardsData";

export default function ServicesSection() {
  return (
    <section id="serviços" className="relative overflow-hidden bg-[#E9DAC7] px-6 pb-18 pt-4 sm:px-8 lg:px-14 lg:pb-24">
      <div className="pointer-events-none absolute -left-24 top-0 hidden opacity-30 lg:block" aria-hidden="true">
        <Image src="/v2 simbolo sem fundo 5.svg" alt="Icone Dra Caroline" width={350} height={350} className="h-[650px] w-[650px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <h2 className="font-serif text-5xl font-semibold text-[#7e3f16]">O que trato?</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 z-10 relative">
          {servicesCards.map((item, index) => (
            <ServiceCard key={`${item.title}-${index}`} item={item}/>
          ))}
        </div>
      </div>
    </section>
  );
}
