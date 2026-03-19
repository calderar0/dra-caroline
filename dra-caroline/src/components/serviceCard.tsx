import type { ServiceItem } from "@/components/servicesCardsData";

type ServiceCardProps = {
  item: ServiceItem;
};

export default function ServiceCard({ item }: ServiceCardProps) {
  return (
    <article className="rounded-[14px] border border-[#d8c6b4] bg-[#FFF9FD]/60 p-6 shadow-[0_8px_22px_rgba(80,52,35,0.12)]">
      <h3 className="text-[2rem] font-semibold leading-tight text-[#8a4a21]">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[#8f5a36]">{item.description}</p>
    </article>
  );
}
