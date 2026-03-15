import HeroSection from "@/components/heroSection";
import DigestiveSection from "@/components/digestiveSection";

export default function Home() {
  return (
    <main>
      <HeroSection
        backgroundImage="/fundo.png"
        doctorImage="/Clip path group.png"
        ornamentImage="/arvoreelinha.svg"
        title="We boost growth for your startup business"
        subtitle="Our goal is top at the heart of creativity services industry as a digital creator. In has a after comment"
        ctaLabel="Agende!"
        ctaHref="#contato"
      />

      <DigestiveSection
        imageSrc="/hero.png"
        imageAlt="Paciente durante avaliacao clinica"
        title="Sua saude digestiva e a base do seu bem-estar."
        paragraphs={[
          "Voce sente que o seu corpo esta dando sinais de alerta que voce tem ignorado?",
          "Cansaco persistente, alteracoes no ritmo intestinal, desconfortos apos as refeicoes ou mudancas frequentes no humor muitas vezes sao reflexos de uma saude digestiva em desequilibrio.",
          "Com a Dra. Caroline, unimos o rigor cientifico da gastroenterologia e hepatologia a um atendimento humanizado, focado na elegancia do cuidado e na seguranca do diagnostico preciso.",
          "Nao normalize o desconforto. Se voce busca equilibrio, clareza e um plano terapeutico personalizado para retomar a sua qualidade de vida, voce esta no lugar certo.",
        ]}
      />

      <a
        href="#contato"
        aria-label="Agendar atendimento pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#2e5d3f] text-white shadow-lg transition hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .08 5.36.08 11.96c0 2.1.55 4.15 1.59 5.96L0 24l6.28-1.64a11.9 11.9 0 0 0 5.78 1.48h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.24-6.2-3.52-8.4ZM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.22-3.72.97.99-3.62-.24-.37a9.84 9.84 0 0 1-1.52-5.24c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.95 2.88a9.76 9.76 0 0 1 2.9 6.95c0 5.44-4.42 9.87-9.82 9.88Zm5.4-7.38c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.14-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.58-.9-2.16-.24-.58-.47-.5-.66-.5h-.57c-.2 0-.53.08-.8.38-.27.3-1.03 1-1.03 2.42 0 1.43 1.05 2.8 1.2 3 .15.2 2.05 3.13 4.97 4.4.7.3 1.26.49 1.69.63.71.23 1.35.2 1.86.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </main>
  );
}