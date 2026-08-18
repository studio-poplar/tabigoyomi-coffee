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
