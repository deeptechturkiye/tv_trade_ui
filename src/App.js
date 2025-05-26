import React, { useEffect, useState, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./Login";

const TradingViewChart = () => {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.onload = () => {
      new window.TradingView.widget({
        symbol: "BINANCE:BTCUSDT",
        interval: "D",
        theme: "dark",
        container_id: containerRef.current.id,
        allow_symbol_change: true,
        autosize: true,
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div id="tv_chart_container" ref={containerRef} style={{ height: "600px" }} />;
};

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <Login onLogin={() => {}} />;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">📈 BTC/USDT Canlı Grafik</h1>
      <TradingViewChart />
    </div>
  );
}
