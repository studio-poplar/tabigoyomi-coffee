"use client";

import { useState } from "react";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  return (
    <>
      <header>
        <div className="nav wrap">
          <div className="logo">
            旅暦珈琲 <span>TABIGOYOMI</span>
          </div>
          <ul className={`nav-links${navOpen ? " open" : ""}`} id="navLinks">
            <li>
              <a href="#concept" onClick={closeNav}>
                コンセプト
              </a>
            </li>
            <li>
              <a href="#calendar" onClick={closeNav}>
                産地暦
              </a>
            </li>
            <li>
              <a href="#menu" onClick={closeNav}>
                メニュー
              </a>
            </li>
            <li>
              <a href="#store" onClick={closeNav}>
                店舗情報
              </a>
            </li>
          </ul>
          <button
            className="nav-toggle"
            aria-expanded={navOpen}
            aria-controls="navLinks"
            onClick={() => setNavOpen((v) => !v)}
          >
            MENU
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-bg"></div>
          <div className="hero-map" aria-hidden="true">
            <svg viewBox="0 0 900 460" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeWidth="1"
                d="M301.1,422.2L299.6,424.6L284.3,422.7ZM337.1,417.2L341.7,422.1L323.8,424.6L315,422.6L328.4,417.2ZM278.9,399.4L278,402.5L264.5,403L274.4,394.3ZM0,433.8L0,433.8L0,433.8L25.1,431.8L54.8,435.5L78.7,436.1L92.8,433.5L66,431.3L67.8,427.2L83.1,421.9L61.7,419.7L57.6,415.3L71.7,415.6L89.2,410.9L112,407.8L150.7,408.3L165.1,406.3L181.1,410L198.4,410.3L190.8,403.6L209.2,406.1L228.9,404.6L259.4,407L281.6,403.3L280.7,390.4L292.5,383.7L294.7,387.5L286.2,391L296.2,399.8L295.1,408.2L273.5,413.6L256.9,413.8L261.6,422.7L300.8,428L304.4,430.1L325.6,426.4L343,427.3L378.6,422.9L375.8,420.2L360.9,420.7L360.6,417.9L377.8,413.7L393.9,412.3L411.3,406.5L424.3,400.2L449.4,401.1L473.8,397.1L498.1,396.8L506.4,398.8L522.9,397.6L534.7,393.3L550.1,394.8L571.8,391.4L590.9,387L606,392.1L622.2,391.9L619.9,401.7L627.6,402.3L634.7,396.7L644.1,395.7L656.9,390.1L670,387.6L676.6,390.1L699.3,390.2L707.1,386L715.5,389.4L734,386.7L752.2,390L786.9,387.6L793.7,389.4L813.7,389.3L816.6,391.8L835.7,393.5L856.7,398.9L878,401.3L873.2,406.2L860.6,410.7L858.7,414.7L867.5,418.9L854.4,420L849.5,424.4L862.3,428.9L883.1,433.1L895.7,433.2L900,433.8L900,447.1L450,447.1L0,447.1ZM280.6,356.7L287.4,358.8L272.5,359.7ZM813.5,324L820.7,324.2L815.1,330.9ZM882.5,324.4L885.6,326.5L873.3,338.7L867.6,334.8ZM886.5,312.4L896.3,316.3L890,325.3L884.6,320.8ZM900,263.4L898.4,264.1L898.5,263L900,262.2L900,263.4ZM0,262.2L0,262.2L0,263.4L0,263.4L0,263.4L0,262.2ZM575.1,255.9L576.2,260.1L567.7,284.4L560.1,284.5L558.1,277.2L561.1,262.6ZM808.9,256.5L816,269.5L832.1,285.2L832.2,301.2L825,315.6L815.8,319.6L801.6,317.1L778.3,300.8L765.4,302.6L759.1,306.8L745.1,309.7L737.6,307.5L739.5,302.6L733.5,283L735.4,276.4L752.1,271.3L757.5,263.1L767.7,256.6L770.9,259.2L780.9,249.9L792.4,252.9L788.6,258.8L802.2,265.5L806.3,248.7ZM721.6,239L726.9,238.2L736.4,243.9L713.4,239.2ZM785.4,224.9L788.6,230.5L795.8,226.3L811.5,231.7L821.8,244.8L811.9,241.1L806.6,245.4L796.7,240.4L794.8,235.5L776.3,224.4ZM763.1,218.5L750.5,221.5L757.9,235.4L746.9,229.1L752.2,218.8ZM714.5,236.7L706.5,232.6L696.5,217.5L688.5,209.6L693.7,208.9L709.6,221.8L715.3,229.7ZM744.7,217.5L740.4,232.1L725.6,229.4L722.7,223.2L742.8,204.7L748,208.5ZM765.9,201L763.5,208.1L759,202.5ZM753.3,175.8L754.3,186.2L750.2,184.6ZM268.6,172.4L279.2,175.5L270.7,176.9ZM250.8,165.1L264.6,171.3L255.6,172.4ZM802.4,129.2L800.6,134.2L777.5,137.3L789.2,133.2L798.6,126.5ZM809.8,111.6L804,115.4L804.9,108.2ZM309.7,95.3L318.4,103.2L301.8,103ZM809.1,95.2L805.2,107.1L806.5,87.7ZM433,91.4L425.1,92.5L425.8,87.4L435.8,85.7ZM442.5,75.5L451.2,89.7L451.4,95.1L435.6,96.7L440.9,85.5L434.6,80.1ZM413.7,55.9L416,59.2L403.4,63.3L389.2,58ZM572.8,118.9L573,128.1L584.6,129.6L582.3,119.9L586.8,119.7L575.8,110.5L582.6,108.9L578,104.4L566.7,110.5ZM900,59.6L900,59.6L898.4,64.6L875.8,72.4L858.9,72.4L855.3,84.9L842,94.5L838.6,83.6L859.2,69.2L841.8,68.5L835.5,72.7L805.5,74.5L787.8,85.2L803.4,89.3L800.2,100.9L787.2,113.6L780.7,113.8L768.8,122.7L773.6,130.1L766.2,136.1L760.7,122.2L754.1,119.7L743.8,125.2L752.8,130.4L747.9,134.8L755.2,147.5L746.6,160.7L739.7,165.1L721.3,167.8L714.2,174.4L722.2,183.9L723,192.9L712.7,197.3L700.2,188.5L697.9,197.1L708.5,209.9L708.8,219L703.5,215.2L695.4,201.2L696.9,193.5L692.9,179.7L685.5,182L685.8,176.5L678.5,165.1L667.4,168.3L650.8,182.3L649.6,196.2L643.8,202.1L633.8,182.1L631.6,168.7L626.2,169.9L615.9,158.5L603.7,159.4L578.8,152.4L569.9,147.1L579.5,162L591,159.7L599.5,166.3L594.5,174.4L571.7,187L558.7,190.5L556.6,180.1L537.8,151.9L531.8,150.3L542.2,167.1L548.2,182.3L560.3,195.9L577.8,192L573.6,205L566.4,214.9L550.7,228.5L547,238.2L551.9,258.8L537,271.5L537.6,283.3L520.5,304L499,309.1L488,289.8L485.6,277.3L479.1,263.7L484.1,252.2L479.8,234.7L472,224.8L474.5,214.4L460.8,206.4L445.1,210.3L431.2,211.2L417.6,202.6L408.5,191.6L407.3,169.6L413.9,156.4L426.1,147.2L428.4,139L435.2,132.7L444.6,134.1L453.7,130.5L473.8,128.7L477.8,138.8L497.7,146.4L502.1,140.3L522.3,144.9L535.7,144L540.4,132.5L519.1,130.4L515.4,123.4L523.1,119L537.9,117L545.9,119.7L553.6,115.4L541.7,108.9L547.8,103.9L534,107.4L526.9,105.6L519.2,115.6L522,119.4L507,120.9L510.1,126.5L504.2,129.9L498.8,117.8L482.9,107.7L481.5,111.8L495.9,121.2L490.3,127.1L488.5,121.9L472.2,111.1L457.8,114.4L444.6,130.4L427.8,129.9L426.5,114.5L445.2,113.5L447,107L438.5,100.3L446,100.4L472,87L471.4,79.3L477.3,87L485.3,87.7L503.2,84.1L508.4,74.1L502.6,65.5L513.5,59.3L505.5,57.7L494.6,65.2L497,71.9L489.7,81.8L482.4,83.7L475.9,73.4L464.2,75.6L462.5,67.1L476.3,60.8L486.9,52.5L498,47.5L520.4,44.1L525,46.6L550.7,52.2L546,57.1L534.8,55.2L537.4,61L558.7,54.8L584.3,49.9L601.4,47.4L621.3,51.8L616.7,44.5L624.8,39.5L634.2,51L632.8,43.4L649.1,41.3L651.3,37.9L667.1,37.2L667.9,34.3L701.9,31L705,28.8L727.7,30.3L734.7,33.7L723.5,36.6L758,39.6L771.5,39.5L780.6,42.5L799.7,43.3L801.2,39.9L823.8,41.6L832.4,45L847.5,44.9L852.4,48.5L876.1,46.8L896.5,48.6L900,49.6L900,59.6ZM0,49.6L0,49.6L0,49.6L25.3,57.1L15.3,61.4L0,59.6L0,59.6L0,49.6ZM900,44.1L900,45L896.8,44.3L900,43.3L900,44.1ZM0,43.3L0,43.3L0,43.3L0,44.1L0,43.3ZM223.6,48.3L231.6,54.1L236.2,47.4L246.8,49.2L246.5,54.3L235.6,55.7L223.9,62.6L214.4,69.8L219.3,79.3L244.3,84.2L246.5,91.7L253.5,90.7L250.4,85.4L258.6,80.7L253.7,75L254.7,66.3L265.4,65.9L276,69.4L280.9,76.5L288.5,71.2L295.5,81.2L306.7,85.5L310.8,91.7L299.9,96.5L284,96.5L288.8,106.5L300.5,107.3L286.6,113.2L274.7,112.8L275.1,118L267.8,119L260.7,127.2L260.7,133.2L246.3,145.2L249.9,154.9L247.1,159.1L240.7,147.2L213.3,148.4L206.6,153.6L205.3,165.9L213.9,176.7L232.4,168.2L227.7,182.3L242.1,184.6L240.4,193.6L246.4,200.1L257.9,200.5L270.6,191L271.5,194.6L295.3,195.3L294,197.2L307.1,207.1L317.8,208.5L328.4,222.6L350.1,229.2L361.9,235.7L362.2,244.5L352.6,256.5L350.6,271.1L345,279.5L333.8,282.3L327.8,293.7L312.7,309.4L303.8,308.1L308,314.3L294.2,319.1L291.4,328.5L281,337.8L285.9,340.1L277.2,348.9L279.6,352.9L272.5,356.6L262.6,352.7L260.9,338.7L271.4,303.1L274.8,275.5L274.1,267.9L260,258.7L246.5,233.9L249.8,220.1L257.2,212.4L252.2,199.6L250,203.2L235.5,196.7L230.8,189.8L213.3,181.6L208.6,182.9L191.3,176.3L184.9,165.1L169.4,149.7L163.3,146.7L176.5,163.6L163.8,154.2L156.8,139.4L149.1,135.9L140.7,124.7L138.6,101.1L128.1,88.7L114.8,76.7L82.2,69.8L66.8,74.9L53.9,82.1L37.6,85.6L55.7,78.1L34.7,68.3L48.1,60.1L37.6,60.9L29.7,57.9L38.8,55.6L36.5,51.9L45.2,46.2L58.5,43.7L91,46.7L108.7,49.8L129.7,45.8L165.3,51.1L184.6,50.1L189.2,52L213.3,51.9L212,42.3ZM164.6,39.3L186.5,40.4L197.6,47L166.7,50.7L151.5,43.2ZM233.6,39.2L244.2,37.7L248.1,41.9L255.4,40.2L278,45.7L278,50.3L295.4,54.9L290.2,59.6L283.2,56.1L287.5,65.4L277.8,66.2L255.3,58.8L265.1,58.4L266.7,51.9L252.6,46.6L228.3,46L224.5,41.5ZM199.1,37.4L206.6,37.7L204.1,43.9L193.8,40.8ZM148.9,43.6L135.2,42.4L137.7,36.3L161.2,38.4ZM812.7,33.1L797.4,35.5L793.8,32.2ZM203.8,30.3L204.6,34.6L193.6,31.2ZM179.5,31.6L184.2,34.5L155.7,34L161.5,30.9ZM593.8,45.3L579,43.4L589.1,34.4L620.4,29.7L604,33.9L588.6,41.1ZM213.3,29.3L227,33L247.2,32.8L245.1,36L218.9,35ZM712.7,26.3L698.6,27.3L703.2,24ZM495.6,22.8L492.8,30L476.1,22.9ZM513.6,21L514.8,23.3L493.4,21.3ZM699.8,24.9L678,21.2L689.8,18.9ZM232.5,22.9L217.8,26.2L208.2,21.7L219,18.9ZM278.8,14.3L295.3,16.2L275,20.8L261.5,25.7L248.6,31.6L226.3,30.9L237.3,23.7L221,17.3L251.7,14.2ZM382.3,13.3L397.9,15.2L370.2,16.6L392.1,19.2L410.6,17.3L419.5,18.8L400.7,25.2L401.6,36.3L389.3,40.6L394.1,46.7L370.6,51.8L350.5,58.4L342.9,65.3L341.6,71.8L329.3,69.9L315.1,54.1L313.2,40.6L303.5,33.3L278.7,31.9L267.1,26L285.7,23.6L279.9,21.8L307,16.6L362.3,12.9Z"
              />
            </svg>
          </div>
          <div className="grain live"></div>
          <div className="letterbox-top"></div>
          <div className="letterbox-bottom"></div>

          <div className="hero-main wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <span className="hero-tag">EST. 2019 — 焙煎所</span>
            <h1>
              毎月、
              <span className="line2">
                違う<span className="accent-outline">国</span>の朝が届く。
              </span>
            </h1>
            <p className="hero-lede">
              焙煎士が実際に農園まで足を運んだ産地だけを、月にひとつ。
            </p>
            <div className="hero-rule" aria-hidden="true"></div>
            <div className="hero-cta">
              <a className="btn btn-solid" href="#calendar">
                今月の産地を見る
              </a>
              <a className="btn btn-outline" href="#store">
                店舗へ行く
              </a>
            </div>
          </div>
        </section>

        <div className="filmstrip">
          <div className="wrap" style={{ padding: 0 }}>
            <div className="filmstrip-track">
              <div className="film-frame">
                <div className="fc">DEPARTURE</div>
                <div className="fn">YOKOHAMA</div>
                <div className="ff">焙煎所</div>
              </div>
              <div className="film-frame">
                <div className="fc">2026.06</div>
                <div className="fn">YIRGACHEFFE</div>
                <div className="ff">エチオピア</div>
              </div>
              <div className="film-frame">
                <div className="fc">2026.07</div>
                <div className="fn">HUILA</div>
                <div className="ff">コロンビア</div>
              </div>
              <div className="film-frame">
                <div className="fc">2026.08 — NOW</div>
                <div className="fn">ACEH</div>
                <div className="ff">インドネシア</div>
              </div>
            </div>
          </div>
        </div>

        <section id="concept">
          <div className="wrap">
            <div className="concept-grid">
              <div>
                <p className="eyebrow">CONCEPT</p>
                <h2 style={{ marginTop: 14 }}>
                  在庫を増やさず、<br />
                  物語を削らない。
                </h2>
                <div className="pullquote" style={{ marginTop: 34 }}>
                  渡すのは豆じゃない。誰が、どんな土地で、どう育てたかという暦だ。
                </div>
                <div className="concept-copy">
                  <p>
                    棚に常時十数種類の豆を並べる焙煎所が多いなかで、旅暦珈琲は月にひとつの産地しか扱いません。理由は単純で、焙煎士がその年に実際に足を運べる農園の数がそれくらいだからです。
                  </p>
                  <p>お客様のカップには、いつも先月とは違う旅の記憶が注がれます。</p>
                </div>
              </div>
              <div className="ticket">
                <div className="ticket-row">
                  <span>Boarding Pass</span>
                  <span>No. 0842</span>
                </div>
                <div className="ticket-body">
                  <div>
                    FROM &nbsp;<b>YOKOHAMA, JP</b>
                  </div>
                  <div>
                    TO &nbsp;&nbsp;&nbsp;&nbsp;<b>ACEH, IDN</b>
                  </div>
                  <div>
                    ROAST &nbsp;<b>MEDIUM-LIGHT</b>
                  </div>
                  <div>
                    NOTE &nbsp;&nbsp;<b>スパイス・カカオ・杉</b>
                  </div>
                  <div>
                    FARMER&nbsp;<b>Pak Rahman 農園</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="calendar">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">ORIGIN CALENDAR</p>
              <h2>直近の産地暦</h2>
              <p>
                毎月15日、次の産地が発表されます。前月の豆は数量がなくなり次第、静かに棚を去ります。
              </p>
            </div>
            <div className="stamps-grid">
              <div className="stamp-card c1">
                <div className="grain"></div>
                <span className="stamp-photo-label">PHOTO 03 — ACEH, IDN</span>
                <div className="stamp-badge">
                  IDN
                  <br />
                  ACEH
                </div>
                <p className="stamp-month">2026.08 — 今月</p>
                <h3>アチェ、インドネシア</h3>
                <p className="stamp-origin">Pak Rahman 農園 / ウォッシュド</p>
                <p className="stamp-notes">
                  スパイス、カカオ、杉の香り。標高1,300mの湿った土壌が生む厚みのある口当たり。
                </p>
              </div>
              <div className="stamp-card c2">
                <div className="grain"></div>
                <span className="stamp-photo-label">PHOTO 02 — HUILA, COL</span>
                <div className="stamp-badge">
                  COL
                  <br />
                  HUILA
                </div>
                <p className="stamp-month">2026.07</p>
                <h3>ウイラ、コロンビア</h3>
                <p className="stamp-origin">La Esperanza 農園 / ナチュラル</p>
                <p className="stamp-notes">
                  完熟ベリーのような甘さと、乾いた赤土を思わせる余韻。
                </p>
              </div>
              <div className="stamp-card c3">
                <div className="grain"></div>
                <span className="stamp-photo-label">
                  PHOTO 01 — YIRGACHEFFE, ETH
                </span>
                <div className="stamp-badge">
                  ETH
                  <br />
                  YIRGA
                </div>
                <p className="stamp-month">2026.06</p>
                <h3>イルガチェフェ、エチオピア</h3>
                <p className="stamp-origin">Konga 集落 / ウォッシュド</p>
                <p className="stamp-notes">
                  ジャスミンと柑橘。標高2,000m級の朝霧が育てる澄んだ酸。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="menu" id="menu">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">STAND MENU</p>
              <h2>店頭メニュー</h2>
              <p>今月の産地を、3つの淹れ方でお楽しみいただけます。</p>
            </div>
            <div className="menu-list">
              <div className="menu-row">
                <div className="idx">01</div>
                <div style={{ flex: 1 }}>
                  <div className="name">今月のハンドドリップ</div>
                  <div className="desc">
                    産地暦に沿った一杯。豆の切り替わりごとに味の設計をゼロから組み直しています。
                  </div>
                </div>
                <div className="price">¥680</div>
              </div>
              <div className="menu-row">
                <div className="idx">02</div>
                <div style={{ flex: 1 }}>
                  <div className="name">旅暦ブレンド</div>
                  <div className="desc">
                    過去1年の産地から、季節に合わせて3か国分をブレンド。通年で味が変わる定番。
                  </div>
                </div>
                <div className="price">¥600</div>
              </div>
              <div className="menu-row">
                <div className="idx">03</div>
                <div style={{ flex: 1 }}>
                  <div className="name">水出しアイス(今月産地)</div>
                  <div className="desc">
                    12時間かけてゆっくり抽出。夏場の店頭で最も出る一杯。
                  </div>
                </div>
                <div className="price">¥650</div>
              </div>
              <div className="menu-row">
                <div className="idx">04</div>
                <div style={{ flex: 1 }}>
                  <div className="name">豆・粉 100g(お持ち帰り)</div>
                  <div className="desc">
                    今月分のみの数量限定。売り切れ次第、次の産地まで再販はありません。
                  </div>
                </div>
                <div className="price">¥1,200</div>
              </div>
            </div>
          </div>
        </section>

        <section className="store" id="store">
          <div className="store-bg"></div>
          <div className="grain"></div>
          <div className="wrap store-grid">
            <dl className="store-block">
              <p className="eyebrow">STORE</p>
              <h2 style={{ marginTop: 12 }}>店舗情報</h2>
              <dt>ADDRESS</dt>
              <dd>
                神奈川県横浜市中区海岸通3-9
                <br />
                旧倉庫ビル1F
              </dd>
              <dt>HOURS</dt>
              <dd>8:00 – 18:00(火曜定休)</dd>
              <dt>ACCESS</dt>
              <dd>みなとみらい線・日本大通り駅より徒歩6分</dd>
              <dt>CONTACT</dt>
              <dd>
                045-000-0000
                <br />
                hello@tabigoyomi-coffee.jp
              </dd>
            </dl>
            <div className="spec-frame">
              <div className="contours">
                <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none">
                  <ellipse cx="212" cy="140" rx="70" ry="52" stroke="#f1ece0" strokeWidth="0.6" />
                  <ellipse cx="212" cy="140" rx="115" ry="86" stroke="#f1ece0" strokeWidth="0.6" />
                  <ellipse cx="212" cy="140" rx="160" ry="120" stroke="#f1ece0" strokeWidth="0.6" />
                  <ellipse cx="212" cy="140" rx="205" ry="154" stroke="#f1ece0" strokeWidth="0.5" />
                  <path
                    d="M0 210 C 90 180, 150 230, 260 190 S 400 150, 400 150"
                    stroke="#f1ece0"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
              <span className="locname">
                Yokohama
                <br />
                Bay Area
              </span>
              <div className="marker"></div>
              <span className="coord">
                35.4437° N
                <br />
                139.6380° E
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="footer-top">
            <h2>
              次の産地は、
              <br />
              まだ焙煎士の<span>旅</span>の途中です。
            </h2>
            <a className="btn btn-outline" href="#">
              暦の通知を受け取る
            </a>
          </div>
          <div className="footer-bottom">
            <span>© 2026 TABIGOYOMI COFFEE, YOKOHAMA</span>
            <span>本サイトはWeb制作事例として作成された架空企業のサンプルです</span>
          </div>
        </div>
      </footer>
    </>
  );
}
