export const metadata = {
  title: "Sobre Nós | Pastel & Cana",
};

export default function Sobre() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <span className="eyebrow">Quem tá no balcão</span>
          <h1 className="display">Sobre a pastelaria</h1>
        </div>
      </section>

      <section className="diff-list">
        <div className="container">
          <div className="diff-item">
            <span className="num">01</span>
            <div>
              <h3 className="display">Massa fina, sem exagero</h3>
              <p>A massa é aberta na hora, fina o suficiente pra ficar crocante sem ficar oleosa.</p>
            </div>
          </div>
          <div className="diff-item">
            <span className="num">02</span>
            <div>
              <h3 className="display">Recheio generoso</h3>
              <p>Nada de pastel vazio: cada unidade leva recheio de verdade, do primeiro ao último bocado.</p>
            </div>
          </div>
          <div className="diff-item">
            <span className="num">03</span>
            <div>
              <h3 className="display">Tudo num só lugar</h3>
              <p>Do salgado ao doce, do sorvete ao caldo de cana — sem precisar ir a outro lugar pra completar o pedido.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}