import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          Pastel<span>&</span>Cana
        </Link>
        <nav className="main-nav">
          <Link href="/">Início</Link>
          <Link href="/cardapio">Cardápio</Link>
          <Link href="/sobre">Sobre Nós</Link>
          <Link href="/contato">Contato</Link>
        </nav>

       <a>
          Peça no WhatsApp
        </a>
      </div>
    </header>
  );
}