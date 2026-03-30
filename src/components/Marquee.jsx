export default function Marquee({ text = "INTELLITHON '26", speed = 20, className = '' }) {
  const items = Array.from({ length: 10 }, (_, i) => (
    <span key={i} className="font-orbitron text-[0.65rem] tracking-[4px] text-cyan-dim mx-5">
      {text} <span className="text-cyan-DEFAULT/40">·</span>
    </span>
  ))

  return (
    <div
      className={`w-full overflow-hidden border-t border-b border-cyan-DEFAULT/10 py-2.5 bg-cyan-DEFAULT/[0.015] ${className}`}
    >
      <div
        className="flex whitespace-nowrap w-max"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {items}{items}
      </div>
    </div>
  )
}
