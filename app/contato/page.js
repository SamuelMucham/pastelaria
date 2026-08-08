
export const metadata = {
  title: "Contato | Pastel & Cana",
};

export default function Contato() {
  return (
    <section className="container contact-wrap">
      <div className="contact-block">
        <span className="eyebrow">Fala com a gente</span>
        <h1 className="display">Contato</h1>
        <p>Chama no WhatsApp pra pedir, tirar dúvida ou combinar retirada no balcão.</p>

        <div className="info-row">
          <span className="icon">📍</span>
          <div>
            <h4>Endereço</h4>
            <p>R. Marcos Bertoldi, 869 - Campo de Santana, Curitiba - PR</p>
          </div>
        </div>
        <div className="info-row">
          <span className="icon">📞</span>
          <div>
            <h4>WhatsApp</h4>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
              (41) 99826-1509
            </a>
          </div>
        </div>
        <div className="info-row">
          <span className="icon">🕒</span>
          <div>
            <h4>Horário</h4>
            <p>Todos os dias menos nas Quartas</p>
          </div>
        </div>

        <form className="contact-form" action="#" method="post">
          <div>
            <label htmlFor="nome">Nome</label>
            <input id="nome" name="nome" type="text" placeholder="Seu nome" />
          </div>
          <div>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows={4} placeholder="Escreva sua mensagem" />
          </div>
          <button type="submit" className="cta-button">Enviar Mensagem</button>
        </form>
      </div>
<iframe
  className="map-panel"
  src="https://www.google.com/maps?cid=3287877817043217377&output=embed"
  title="Localização da Pastel & Cana"
  width="100%"
  height="320"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
/>
    </section>
  );
}