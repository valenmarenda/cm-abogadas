

export default function ServicePricingCard({ title, price, currency = '€', badge = 'Desde', features = [] }) {
  return (
    <article className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="absolute right-4 top-4 rounded-full bg-carbon px-3 py-1 text-xs font-semibold text-white">
        {badge}
      </div>
      <header>
        <h3 className="tracking-widest text-xs text-gray-500">SERVICIO</h3>
        <h2 className="mt-1 font-display text-xl text-carbon">{title}</h2>
        <div className="mt-4 text-3xl font-semibold text-carbon">
          {currency}{price}
        </div>
      </header>
      <ul className="mt-6 space-y-3 text-sm text-gray-700">
        {features.map((f, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gold" style={{ backgroundColor: "rgb(138, 37, 37)" }} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </article>
  )}
