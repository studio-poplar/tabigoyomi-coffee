"use client";

import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = () => setNavOpen(false);

  return (
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
            <a href="#journal" onClick={closeNav}>
              ジャーナル
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
  );
}
