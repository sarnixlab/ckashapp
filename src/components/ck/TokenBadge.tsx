type Token = "USDT" | "USDC" | "ETH" | "SOL";

const tokens: Record<Token, { color: string; label: string; sub: string }> = {
  USDT: { color: "#26A17B", label: "₮", sub: "Tether" },
  USDC: { color: "#2775CA", label: "$", sub: "USD Coin" },
  ETH: { color: "#627EEA", label: "Ξ", sub: "Ethereum" },
  SOL: { color: "#9945FF", label: "◎", sub: "Solana" },
};

export default function TokenBadge({ token, size = 32, showLabel = false }: { token: Token; size?: number; showLabel?: boolean }) {
  const t = tokens[token];
  return (
    <div className="inline-flex items-center gap-2.5">
      <div
        style={{ width: size, height: size, background: `radial-gradient(circle at 30% 25%, ${t.color}, ${t.color}cc 60%, ${t.color}99)` }}
        className="flex items-center justify-center rounded-full text-white font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
      >
        <span style={{ fontSize: size * 0.5, lineHeight: 1 }}>{t.label}</span>
      </div>
      {showLabel && (
        <div className="leading-tight">
          <div className="text-sm font-medium text-bone">{token}</div>
          <div className="text-[11px] text-ash">{t.sub}</div>
        </div>
      )}
    </div>
  );
}
