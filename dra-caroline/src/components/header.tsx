"use client"; // Obrigatório no Next.js quando usamos useState ou eventos de clique

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Lista de links para facilitar a manutenção
  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre mim", href: "#sobre" },
    { name: "Contato", href: "#contato" },
    { name: "Serviços", href: "#serviços" },
  ];

  return (
    <>
      {/* Header Fixo no Topo */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#inicio" className="flex items-center">
                <Image 
                  src="/logo.svg" 
                  alt="Dra. Caroline Tomas" 
                  width={330}
                  height={110}
                  className="h-20 w-auto"
                />
              </a>
            </div>

            {/* Menu Desktop (Escondido no Mobile) */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#273617] hover:text-[#5F6C37] font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              {/* Botão de WhatsApp no Header Desktop */}
              <a
                href="#contato" // Depois você troca pelo link do WhatsApp real
                className="bg-[#5F6C37] text-white px-6 py-2.5 rounded-[10px] font-semibold hover:bg-[#4a5429] transition shadow-md"
              >
                Agendar
              </a>
            </nav>

            {/* Botão Hambúrguer Mobile (Escondido no Desktop) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                className="text-slate-800 focus:outline-none p-2"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay Escuro (Fundo borrado quando o menu lateral abre) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Menu Lateral Mobile (Drawer) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-end border-b border-slate-100">
          <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-800 p-2">
            {/* Ícone de Fechar (X) */}
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-6 flex-grow">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Fecha o menu ao clicar no link
              className="text-lg font-medium text-slate-700 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botão de Agendar no fim do Menu Mobile */}
        <div className="p-6 border-t border-slate-100">
          <a
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="flex justify-center w-full bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </>
  );
}