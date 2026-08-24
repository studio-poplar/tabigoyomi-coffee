"use client";

import { useState } from "react";

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <h2>
            次の産地は、
            <br />
            まだ焙煎士の<span>旅</span>の途中です。
          </h2>

          {submitted ? (
            <p className="newsletter-done">
              登録ありがとうございます。次の産地暦が発表され次第、お届けします。
            </p>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <label className="newsletter-label" htmlFor="newsletter-email">
                メルマガ登録 — 産地暦をメールで受け取る
              </label>
              <div className="newsletter-row">
                <input
                  id="newsletter-email"
                  className="newsletter-input"
                  type="email"
                  required
                  placeholder="mail@example.com"
                  autoComplete="email"
                />
                <button className="btn btn-outline" type="submit">
                  登録する
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="footer-bottom">
          <span>© 2026 TABIGOYOMI COFFEE, YOKOHAMA</span>
          <span>本サイトはWeb制作事例として作成された架空企業のサンプルです</span>
        </div>
      </div>
    </footer>
  );
}
