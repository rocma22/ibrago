import { useEffect } from 'react'

/**
 * Adds the "in" class to any ".reveal" element once it scrolls into view,
 * matching the fade/slide-up animation defined in index.css.
 */
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
          }
        })
      },
      { threshold: 0.15 }
    )

    const els = document.querySelectorAll('.reveal:not(.in)')
    els.forEach((el) => io.observe(el))

    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
