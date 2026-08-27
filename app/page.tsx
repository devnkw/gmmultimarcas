const instagram = 'https://www.instagram.com/goiania.multimarcasgm/';

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#inicio" aria-label="Goiânia Multimarcas — início"><img src="/logo-gm.jpeg" alt="Goiânia Multimarcas" /></a>
        <nav aria-label="Navegação principal"><a href="#como-funciona">Como funciona</a><a href="#vantagens">Por que a GM</a></nav>
        <a className="button button-small" href={instagram} target="_blank" rel="noreferrer">Ver peças no Instagram</a>
      </header>
      <section className="hero" id="inicio"><div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Atacado multimarcas • Goiânia → todo o Brasil</p>
          <h1>O jeans que gira.<br /><em>O atacado que entende.</em></h1>
          <p className="lead">Curadoria multimarcas e peças de marca própria para lojistas que buscam variedade, qualidade e novidades que vendem de verdade.</p>
          <div className="hero-actions"><a className="button" href={instagram} target="_blank" rel="noreferrer">Conhecer o atacado <span>↗</span></a><a className="text-link" href="#como-funciona">Entenda como funciona ↓</a></div>
          <div className="trust-row" aria-label="Diferenciais"><span>Curadoria especializada</span><span>Marca própria</span><span>Atendimento próximo</span></div>
        </div>
        <div className="hero-art" aria-label="Seleção de jeans da Goiânia Multimarcas"><div className="fabric fabric-one" /><div className="fabric fabric-two" /><div className="gold-stamp"><strong>GM</strong><small>ATACADO</small></div><p>Seu estoque com mais<br />variedade e personalidade.</p></div>
      </div></section>
      <section className="video-intro shell" id="como-funciona"><p className="eyebrow">A Layanne explica</p><h2>Veja como comprar no atacado com a GM.</h2><div className="video-placeholder" aria-label="Espaço reservado para o vídeo da Layanne"><button type="button" aria-label="Vídeo em breve"><span>▶</span></button><p>VSL DA LAYANNE</p><small>O vídeo será inserido aqui</small></div></section>

      <section className="steps" id="vantagens"><div className="shell">
        <div className="section-head"><div><p className="eyebrow">Simples para começar</p><h2>Da escolha das peças<br />à chegada na sua loja.</h2></div><p>A gente facilita o processo para você dedicar energia ao que importa: vender bem e ver o estoque girar.</p></div>
        <div className="step-grid">
          <article><span>01</span><h3>Conheça as novidades</h3><p>Acompanhe lançamentos, modelagens e seleções pelo nosso Instagram.</p></article>
          <article><span>02</span><h3>Fale com a equipe</h3><p>Chame no direct para consultar o catálogo, condições e tirar suas dúvidas.</p></article>
          <article><span>03</span><h3>Monte seu pedido</h3><p>Escolha um mix pensado para o perfil das suas clientes e para o seu momento.</p></article>
          <article><span>04</span><h3>Receba e venda</h3><p>Com o pedido definido, nossa equipe orienta você sobre pagamento e envio.</p></article>
        </div>
      </div></section>

      <section className="curation shell">
        <div className="curation-art"><div className="jeans-card card-a">MULTIMARCAS</div><div className="jeans-card card-b">MARCA PRÓPRIA</div><div className="curation-seal">GM<br/><small>CURADORIA</small></div></div>
        <div className="curation-copy"><p className="eyebrow">Mais possibilidades para sua loja</p><h2>Curadoria multimarcas + identidade própria.</h2><p>Na GM, você encontra peças de diferentes marcas reunidas em uma seleção comercial, além de novidades da nossa marca própria. Um mix com personalidade, variedade e foco no que realmente faz sentido para a revenda.</p>
          <ul><li>Jeans para diferentes estilos e públicos</li><li>Novidades selecionadas com olhar comercial</li><li>Variedade para montar um estoque mais completo</li><li>Atendimento humano para apoiar suas escolhas</li></ul>
          <a className="button" href={instagram} target="_blank" rel="noreferrer">Ver novidades no Instagram ↗</a>
        </div>
      </section>

      <section className="audience"><div className="shell audience-grid"><div><p className="eyebrow">Feito para quem vende moda</p><h2>Seu negócio pode começar pequeno. Sua visão, não.</h2></div><div className="audience-list"><p><strong>Lojistas</strong><span>que querem renovar o mix e aumentar o giro.</span></p><p><strong>Revendedoras</strong><span>que buscam variedade e confiança para começar.</span></p><p><strong>Boutiques multimarcas</strong><span>que valorizam uma curadoria com personalidade.</span></p></div></div></section>

      <section className="faq shell"><p className="eyebrow">Dúvidas frequentes</p><h2>Antes de chamar a gente.</h2><div className="faq-list">
        <details><summary>Como faço para comprar no atacado?<span>+</span></summary><p>O primeiro passo é acessar nosso Instagram e chamar a equipe pelo direct. Por lá, você recebe as orientações e conhece as peças disponíveis.</p></details>
        <details><summary>A GM trabalha apenas com jeans?<span>+</span></summary><p>O jeans é protagonista da nossa curadoria. A disponibilidade de outras peças e categorias pode variar conforme os lançamentos apresentados no Instagram.</p></details>
        <details><summary>Vocês trabalham com marca própria?<span>+</span></summary><p>Sim. Nosso mix reúne peças multimarcas e também produtos de marca própria, ampliando as possibilidades para a sua loja.</p></details>
        <details><summary>Como vejo preços, pedido mínimo e opções de envio?<span>+</span></summary><p>Essas condições são confirmadas diretamente com nossa equipe, pois podem variar. Chame no Instagram para receber as informações atualizadas.</p></details>
      </div></section>

      <section className="final-cta"><div className="shell"><p className="eyebrow">Goiânia Multimarcas</p><h2>Seu próximo estoque<br />começa com uma conversa.</h2><p>Entre no Instagram, conheça nossas novidades e fale com a equipe.</p><a className="button" href={instagram} target="_blank" rel="noreferrer">Ir para @goiania.multimarcasgm ↗</a></div></section>
      <footer className="shell"><img src="/logo-gm.jpeg" alt="Goiânia Multimarcas" /><p>Jeans no atacado • Goiânia, Goiás</p><a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a><small>© {new Date().getFullYear()} Goiânia Multimarcas. Todos os direitos reservados.</small></footer>
    </main>
  );
}
