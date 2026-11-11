// Seção "Conheça também": lista os outros empreendimentos da Anna Carla.
// Para incluir um novo empreendimento, acrescente um item em EMPREENDIMENTOS.
// Uso na página: <div id="outros-empreendimentos" data-atual="slug-da-pagina"></div>
//                <script src="/assets/outros-empreendimentos.js" defer></script>
// Cores: a página pode definir --oe-bg, --oe-text, --oe-muted, --oe-accent e --oe-line.
(function () {
  const EMPREENDIMENTOS = [
    {
      slug: 'fazenda-lumiar',
      nome: 'Fazenda Lumiar Estates',
      img: '/fazenda-lumiar/img/hero.jpg',
      logo: '/fazenda-lumiar/img/logo-claro.png',
      texto: 'Um novo jeito de viver a natureza, a poucos minutos de Goiânia.',
      specs: 'Lotes de 600 a 1.250 m² · GO-020',
      tint: '24,26,28'
    },
    {
      slug: 'oasis-laguna',
      nome: 'Oásis Laguna',
      img: '/oasis-laguna/img/hero-aerea.jpg',
      logo: '/oasis-laguna/img/logo-oasis.png',
      texto: 'O 1º resort particular de Goiânia, com clube completo e pronto.',
      specs: 'Lotes de 250 a 675 m² · GO-020',
      selo: '10% de sinal + 24 meses de carência',
      logoAltura: 120,
      tint: '15,47,41'
    },
    {
      slug: 'solaris-laguna',
      nome: 'Solaris Laguna',
      img: '/solaris-laguna/img/piscina-aerea.jpg',
      logo: '/solaris-laguna/img/logo-solaris.png',
      texto: 'Condomínio resort ao lado do Sunset Wake Park, com mirante e piscinas orgânicas.',
      specs: 'Lotes de 254 a 644 m² · GO-020',
      selo: '10% de sinal + 24 meses de carência',
      logoAltura: 110,
      tint: '15,47,41'
    },
    {
      slug: 'sobrado-jardins-lyon',
      nome: 'Sobrado no Jardins Lyon',
      img: '/sobrado-jardins-lyon/img/fachada.jpg',
      texto: 'Sobrado pronto para morar: 3 suítes, 166 m² e vista livre e permanente.',
      specs: 'Ágio · Aparecida de Goiânia',
      selo: 'De R$ 1.268.000 por R$ 1.245.000',
      tint: '28,30,32'
    }
  ];

  const alvo = document.getElementById('outros-empreendimentos');
  if (!alvo) return;
  const outros = EMPREENDIMENTOS.filter(e => e.slug !== alvo.dataset.atual);
  if (!outros.length) return;

  const css = `
  .oe{background:var(--oe-bg,#F7F4EF);color:var(--oe-text,#2A2B2C);padding:110px 0}
  .oe-wrap{max-width:1200px;margin:0 auto;padding:0 28px}
  .oe-head{display:flex;justify-content:space-between;align-items:flex-end;gap:30px;margin-bottom:40px;flex-wrap:wrap}
  .oe-eyebrow{display:inline-flex;align-items:center;gap:14px;font-size:11px;letter-spacing:.32em;text-transform:uppercase;color:var(--oe-accent,#9A8B66)}
  .oe-eyebrow::before{content:"";width:34px;height:1px;background:currentColor;opacity:.7}
  .oe-head h2{font-family:'Cormorant Garamond',Georgia,serif;font-weight:300;font-size:clamp(34px,4.2vw,54px);line-height:1.1;margin-top:18px}
  .oe-head h2 em{font-style:italic;color:var(--oe-accent,#9A8B66)}
  .oe-all{font-size:11.5px;letter-spacing:.22em;text-transform:uppercase;color:var(--oe-text,#2A2B2C);padding-bottom:8px;border-bottom:1px solid var(--oe-accent,#9A8B66);text-decoration:none}
  .oe-grid{display:grid;grid-template-columns:repeat(${Math.min(outros.length, 3)},1fr);gap:20px}
  .oe-card{position:relative;display:block;overflow:hidden;min-height:440px;color:#fff;text-decoration:none}
  .oe-card>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 1.4s cubic-bezier(.22,.61,.36,1)}
  .oe-card:hover>img{transform:scale(1.04)}
  .oe-body{position:relative;z-index:2;min-height:440px;padding:48px 44px;display:flex;flex-direction:column;justify-content:flex-end;max-width:560px}
  .oe-body .oe-logo{height:96px;width:auto;align-self:flex-start;margin-bottom:22px}
  .oe-title{font-family:'Cormorant Garamond',Georgia,serif;font-weight:300;font-size:38px;line-height:1.05;margin-bottom:16px}
  .oe-body p{font-size:16px;margin-bottom:10px;color:rgba(255,255,255,.88)}
  .oe-specs{font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-bottom:24px}
  .oe-selo{align-self:flex-start;background:#D4673F;color:#fff;font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;padding:8px 14px;margin:-8px 0 24px}
  .oe-more{align-self:flex-start;font-size:11.5px;letter-spacing:.24em;text-transform:uppercase;padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.6)}
  .oe-more span{display:inline-block;transition:transform .4s}
  .oe-card:hover .oe-more span{transform:translateX(6px)}
  @media (max-width:720px){
    .oe{padding:80px 0}.oe-wrap{padding:0 20px}
    .oe-grid{grid-template-columns:1fr}
    .oe-card,.oe-body{min-height:400px}.oe-body{padding:36px 24px}
    .oe-body .oe-logo{height:76px}
  }`;

  const card = e => `
    <a class="oe-card" href="/${e.slug}/">
      <img src="${e.img}" alt="${e.nome}" loading="lazy">
      <span style="position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(${e.tint},.8) 0%,rgba(${e.tint},.35) 45%,rgba(${e.tint},0) 75%),linear-gradient(180deg,rgba(${e.tint},.05) 0%,rgba(${e.tint},.35) 45%,rgba(${e.tint},.9) 100%)"></span>
      <div class="oe-body">
        ${e.logo ? `<img class="oe-logo" src="${e.logo}" alt="${e.nome}"${e.logoAltura ? ` style="height:${e.logoAltura}px"` : ''}>` : `<h3 class="oe-title">${e.nome}</h3>`}
        <p>${e.texto}</p>
        <div class="oe-specs">${e.specs}</div>
        ${e.selo ? `<div class="oe-selo">${e.selo}</div>` : ''}
        <span class="oe-more">Conhecer o empreendimento <span>→</span></span>
      </div>
    </a>`;

  alvo.outerHTML = `
  <style>${css}</style>
  <section class="oe" aria-label="Outros empreendimentos">
    <div class="oe-wrap">
      <div class="oe-head">
        <div>
          <div class="oe-eyebrow">Conheça também</div>
          <h2>Outros empreendimentos <em>com a Anna Carla</em></h2>
        </div>
        <a class="oe-all" href="/">Ver todos</a>
      </div>
      <div class="oe-grid">${outros.map(card).join('')}</div>
    </div>
  </section>`;
})();
