import { origins } from "../data/originData";

export default function OriginCalendar() {
  const newestFirst = [...origins].reverse();

  return (
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
          {newestFirst.map((o, i) => (
            <div className={`stamp-card ${o.theme}`} key={o.id}>
              <div className="grain"></div>
              <span className="stamp-photo-label">
                PHOTO {String(newestFirst.length - i).padStart(2, "0")} —{" "}
                {o.placeEn}, {o.countryCode}
              </span>
              <div className="stamp-badge">
                {o.badgeTop}
                <br />
                {o.badgeBottom}
              </div>
              <p className="stamp-month">
                {o.monthNum}
                {o.isCurrent ? " — 今月" : ""}
              </p>
              <h3>
                {o.placeJa}、{o.countryJa}
              </h3>
              <p className="stamp-origin">
                {o.farm} / {o.processJa}
              </p>
              <p className="stamp-specs">
                ALT {o.altitude} ・ {o.processEn} ・{" "}
                {o.flavorTagsEn.join(" / ")}
              </p>
              <p className="stamp-notes">{o.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
