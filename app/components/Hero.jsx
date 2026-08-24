import { WORLD_MAP_PATH, WORLD_MAP_VIEWBOX } from "../data/worldMapPath";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-map" aria-hidden="true">
        <svg
          viewBox={WORLD_MAP_VIEWBOX}
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeWidth="1" d={WORLD_MAP_PATH} />
        </svg>
      </div>
      <div className="grain live"></div>
      <div className="letterbox-top"></div>
      <div className="letterbox-bottom"></div>

      <div className="hero-main">
        <span className="hero-tag">EST. 2019 — 焙煎所</span>
        <h1>
          毎月、
          <span className="line2">
            違う<span className="accent-outline">国</span>の朝が
          </span>
          <span className="line3">届く。</span>
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
        <p className="hero-brandline">SPECIALTY ROASTERY — BASED IN YOKOHAMA</p>
      </div>
    </section>
  );
}
