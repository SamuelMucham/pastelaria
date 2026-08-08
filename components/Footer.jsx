import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h5>Pastel & Cana</h5>
            <p>Pastel frito na hora, caldo de cana moído na hora e o resto do balcão pra completar o pedido.</p>
          </div>
          <div>
            <h5>Navegação</h5>
            <ul>
              <li><Link href="/">Início</Link></li>
              <li><Link href="/cardapio">Cardápio</Link></li>
              <li><Link href="/sobre">Sobre Nós</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h5>Horário</h5>
            <p>Terça a domingo</p>
            <p>11h às 21h</p>
            <p>Segunda: fechado</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Pastel & Cana</span>
          <span>Feito com massa fina e caldo geladinho</span>
        </div>
      </div>
    </footer>
  );
}