export type FooterContactItem = {
  kind: "phone" | "instagram" | "email" | "address";
  label: string;
  href?: string;
};

export const footerContacts: FooterContactItem[] = [
  {
    kind: "phone",
    label: "(12)99999-9999",
    href: "tel:+5512999999999",
  },
  {
    kind: "instagram",
    label: "@dracarolinegastro",
    href: "https://instagram.com/dracarolinegastro",
  },
  {
    kind: "email",
    label: "caroline.gastro@gmail.com",
    href: "mailto:caroline.gastro@gmail.com",
  },
  {
    kind: "address",
    label: "avenida bla bla, n 234, Sao Paulo, Brasil",
  },
];

export const footerMeta = {
  copyright: "Dra. Caroline Tomas - Copyright © 2026 Todos os direitos reservados",
  credit: "Feito por Be For You Digital Solutions",
};
