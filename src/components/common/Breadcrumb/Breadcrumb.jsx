function Breadcrumb({ items = [] }) {
  if (!items.length) return null

  return (
    <nav aria-label="Breadcrumb" className="text-xs text-white/85">
      <ol className="flex items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span className="text-white/55">/</span> : null}
              {isLast ? (
                <span className="text-lime-300">{item.label}</span>
              ) : (
                <a href={item.href || "#"} className="hover:text-lime-200 transition-colors">
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
