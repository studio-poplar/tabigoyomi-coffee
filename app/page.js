import Header from "./components/Header";
import Hero from "./components/Hero";
import OriginCalendar from "./components/OriginCalendar";
import Footer from "./components/Footer";
import { origins, currentOrigin } from "./data/originData";
import { menuItems } from "./data/menuData";
import {
  STORE_MAP_VIEWBOX,
  STORE_MAP_ROADS_PATH,
  STORE_MAP_WATER_PATH,
  STORE_MARKER_POSITION,
} from "./data/storeMapPath";

const philosophy = [
  {
    label: "ONE ORIGIN, ONE MONTH",
    text: "棚に並べる産地を、常に一つだけに絞っています。焙煎士が実際に足を運べる農園の数は、多くても年に十数か所。だから量より、一つの土地を深く知ることを選びました。",
  },
  {
    label: "SMALL BATCH ROAST",
    text: "一度に焙煎する量は、常に数日分だけ。豆の状態やその日の気温・湿度に合わせて、プロファイルを毎回微調整しています。",
  },
  {
    label: "ZERO STOCK",
    text: "売れ残りの豆を抱えないための「在庫を持たない」設計。前月の産地はなくなり次第静かに棚を去り、次の旅へと引き継がれます。",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <div className="filmstrip">
          <div className="wrap" style={{ padding: 0 }}>
            <div className="filmstrip-track">
              <div className="film-frame">
                <div className="fc">DEPARTURE</div>
                <div className="fn">YOKOHAMA</div>
                <div className="ff">焙煎所</div>
              </div>
              {[...origins].reverse().map((o) => (
                <div className={`film-frame${o.isCurrent ? " now" : ""}`} key={o.id}>
                  <div className="fc">
                    {o.monthEn}
                    {o.isCurrent ? " — NOW" : ""}
                  </div>
                  <div className="fn">{o.placeEn}</div>
                  <div className="ff">{o.countryJa}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section id="concept">
          <div className="wrap">
            <div className="concept-grid">
              <div>
                <p className="eyebrow">CONCEPT</p>
                <h2 style={{ marginTop: 14 }}>
                  在庫は、持たない。<br />
                  物語は、削らない。
                </h2>
                <div className="pullquote" style={{ marginTop: 34 }}>
                  渡すのは豆じゃない。誰が、どんな土地で、どう育てたかという暦。
                </div>
                <div className="concept-copy">
                  <p>
                    棚に常時十数種類の豆を並べる焙煎所が多いなかで、旅暦珈琲は月にひとつの産地しか扱いません。理由は単純で、焙煎士がその年に実際に足を運べる農園の数がそれくらいだからです。
                  </p>
                  <p>お客様のカップには、いつも先月とは違う旅の記憶が注がれます。</p>
                </div>

                <div className="philosophy-list">
                  {philosophy.map((p) => (
                    <div className="philo-item" key={p.label}>
                      <p className="philo-label">{p.label}</p>
                      <p className="philo-text">{p.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
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
                      TO &nbsp;&nbsp;&nbsp;&nbsp;
                      <b>
                        {currentOrigin.placeEn}, {currentOrigin.countryCode}
                      </b>
                    </div>
                    <div>
                      ROAST &nbsp;<b>{currentOrigin.roastProfile}</b>
                    </div>
                    <div>
                      NOTE &nbsp;&nbsp;<b>{currentOrigin.flavorTagsJa.join("・")}</b>
                    </div>
                    <div>
                      FARMER&nbsp;<b>{currentOrigin.farm}</b>
                    </div>
                  </div>
                </div>

                <div className="quality-detail">
                  <p className="qd-heading">QUALITY DETAIL — {currentOrigin.monthNum}</p>
                  <div className="qd-grid">
                    <div className="qd-item">
                      <span className="qd-label">ROAST PROFILE</span>
                      <span className="qd-value">{currentOrigin.roastProfile}</span>
                    </div>
                    <div className="qd-item">
                      <span className="qd-label">ALTITUDE</span>
                      <span className="qd-value">{currentOrigin.altitude}</span>
                    </div>
                    <div className="qd-item">
                      <span className="qd-label">PROCESS</span>
                      <span className="qd-value">{currentOrigin.processEn}</span>
                    </div>
                    <div className="qd-item">
                      <span className="qd-label">CUP SCORE</span>
                      <span className="qd-value">{currentOrigin.cupScore}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OriginCalendar />

        <section id="journal">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">ROASTING JOURNAL</p>
              <h2>焙煎日誌</h2>
              <p>産地暦の裏側にある、その月ごとの小さな記録。</p>
            </div>
            <div className="journal-list">
              {[...origins].reverse().map((o) => (
                <article className="journal-entry" key={o.id}>
                  <div className="journal-meta">
                    <span className="journal-month">
                      {o.monthEn}
                      {o.isCurrent ? " — NOW" : ""}
                    </span>
                    <span className="journal-place">
                      {o.placeEn}, {o.countryCode}
                    </span>
                  </div>
                  <p className="journal-text">{o.journal}</p>
                </article>
              ))}
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
              {menuItems.map((item) => (
                <div className="menu-row" key={item.idx}>
                  <div className="idx">{item.idx}</div>
                  <div style={{ flex: 1 }}>
                    <div className="name">
                      {item.name}
                      {item.label && <span className="menu-label">{item.label}</span>}
                    </div>
                    <div className="desc">{item.desc}</div>
                  </div>
                  <div className="price">{item.price}</div>
                </div>
              ))}
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
              <div className="map-lines">
                <svg viewBox={STORE_MAP_VIEWBOX} preserveAspectRatio="xMidYMid slice" fill="none">
                  <path className="map-water" d={STORE_MAP_WATER_PATH} strokeWidth="1" />
                  <path className="map-roads" d={STORE_MAP_ROADS_PATH} strokeWidth="0.8" />
                </svg>
              </div>
              <span className="locname">
                Yokohama
                <br />
                Bay Area
              </span>
              <div className="marker" style={STORE_MARKER_POSITION}></div>
              <span className="coord">
                35.4437° N
                <br />
                139.6380° E
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
