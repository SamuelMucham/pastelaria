import Link from "next/link";
import { categories } from "@/lib/menu-data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Fritos na hora</span>
            <h1 className="display">
              Pastel <em>quentinho</em>,<br />sabor de esquina
            </h1>
            <p className="hero-sub">
              Massa fina, recheio generoso e caldo de cana moído na hora. Do salgado
              ao doce, do sorvete ao caldo — tudo pronto pra você levar pra casa.
            </p>
            <div className="hero-actions">
              <Link href="/cardapio" className="cta-button">Ver Cardápio Completo</Link>
              
              <Link href="https://web.whatsapp.com/" className="cta-button">Peça no WhastApp</Link>
            </div>
          </div>
          <div className="hero-tag ticket">
            <span className="eyebrow">Ficha do dia</span>
            <strong>6 categorias</strong>
            <p>Salgados, doces, bebidas, sorvetes e caldo de cana num só balcão.</p>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <div className="section-head">
            <h2 className="display">O que tem no balcão</h2>
          </div>
          <div className="category-grid">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/cardapio#${cat.slug}`}
                className="category-card ticket"
              >
                <span className="icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <span className="see-more">Ver itens →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="perks">
        <div className="container perks-grid">
          <div>
            <span className="num">01</span>
            <h4 className="display">Feito na hora</h4>
            <p>Pastel só vai pra fritadeira depois que você pede.</p>
          </div>
          <div>
            <span className="num">02</span>
            <h4 className="display">Ingredientes frescos</h4>
            <p>Recheios preparados todos os dias no balcão.</p>
          </div>
          <div>
            <span className="num">03</span>
            <h4 className="display">Entrega rápida</h4>
            <p>Peça pelo WhatsApp e receba quentinho em casa.</p>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container">
          <h2 className="display">Fome bateu?</h2>
          <p>Dá uma olhada no cardápio completo e escolhe o combo perfeito pra hoje.</p>
          <Link href="/cardapio" className="cta-button">Ver Cardápio</Link>
        </div>
      </section>
    </>
  );
}