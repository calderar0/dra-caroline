import Image from "next/image";
import FooterContactItem from "@/components/footerContactItem";
import { footerContacts, footerMeta } from "@/components/footerData";

export default function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-30 right-0 z-1000 hidden opacity-70 lg:block" aria-hidden="true">
        <Image src="/arvoreelinha.svg" alt="" width={280} height={200} className="h-auto w-[280px]" />
      </div>

      <div className="relative z-20 bg-[#7d4420] px-6 py-5 text-[#f4e7da] sm:px-8 lg:px-14">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-x-40 gap-y-3">
          {footerContacts.map((item) => (
            <FooterContactItem key={`${item.kind}-${item.label}`} item={item} />
          ))}
        </div>
      </div>

      <div className="border-t border-[#c79c7a] bg-[#e9dac7] px-6 py-3 text-[#9f6c45] sm:px-8 lg:px-14">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
          <p>{footerMeta.copyright}</p>
          <p>{footerMeta.credit}</p>
        </div>
      </div>
    </footer>
  );
}
