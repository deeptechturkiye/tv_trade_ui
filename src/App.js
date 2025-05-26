import React, { useEffect, useRef } from "react";

const TradingViewChart = () => {
  const containerRef = useRef();

  useEffect(() => {
    if (window.TradingView) {
      new window.TradingView.widget({
        autosize: true,
        symbol: "BINANCE:BTCUSDT",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: containerRef.current.id,
      });
    } else {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = () => {
        new window.TradingView.widget({
          autosize: true,
          symbol: "BINANCE:BTCUSDT",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: containerRef.current.id,
        });
      };
      document.body.appendChild(script);
    }
  }, []);

  return <div id="tv_chart_container" ref={containerRef} style={{ height: "600px" }} />;
};

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">📊 BTC/USDT Canlı Grafik</h1>
      <TradingViewChart />
    </div>
  );
}
