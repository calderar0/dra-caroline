import type { FooterContactItem as FooterContactItemType } from "@/components/footerData";

type FooterContactItemProps = {
  item: FooterContactItemType;
};

function FooterIcon({ kind }: { kind: FooterContactItemType["kind"] }) {
  if (kind === "phone") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (kind === "email") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <rect x="2.5" y="5" width="19" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="m3.5 6 8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M12 22s7-6.64 7-12a7 7 0 1 0-14 0c0 5.36 7 12 7 12Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10" r="2.8" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function FooterContactItem({ item }: FooterContactItemProps) {
  const content = (
    <>
      <span className="text-[#f2dfcb]">
        <FooterIcon kind={item.kind} />
      </span>
      <span>{item.label}</span>
    </>
  );

  if (item.href) {
    return (
      <a href={item.href} className="inline-flex items-center gap-2 text-[0.95rem] transition hover:text-white">
        {content}
      </a>
    );
  }

  return <p className="inline-flex items-center gap-2 text-[0.95rem]">{content}</p>;
}
