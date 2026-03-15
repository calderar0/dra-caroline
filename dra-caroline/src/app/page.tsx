export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-slate-50">
      
      {/* Container Principal */}
      <div className="max-w-4xl text-center flex flex-col items-center">
        
        {/* Título (Headline) */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Transforme sua ideia em uma <span className="text-blue-600">realidade digital</span>
        </h1>
        
        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl">
          Uma descrição clara e direta sobre o problema que você resolve ou o valor que você entrega para o seu cliente logo nos primeiros segundos.
        </p>
        
        {/* Call to Action (CTA) */}
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
            Agendar Consultoria
          </button>
          <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition">
            Saiba Mais
          </button>
        </div>

      </div>
      
    </main>
  );
}