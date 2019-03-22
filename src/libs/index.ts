export const animatePointer = (e: any, duration: number) => {
  const offset = e.currentTarget.getBoundingClientRect()
  const scaleLevel =
    offset.width - offset.height > 0 ? offset.width * 2 : offset.height * 2

  const left = e.clientX - offset.left - 10
  const top = e.clientY - offset.top - 10

  const Anim = document.createElement('div')

  Anim.style.top = top.toString()
  Anim.style.left = left.toString()
  Anim.style.position = 'absolute'
  Anim.style.borderRadius = '50%'
  Anim.style.opacity = '0.6'
  Anim.style.width = '20'
  Anim.style.height = '20'
  Anim.style.transition = 'all ' + duration / 1000 + 's'
  Anim.style.webkitBorderRadius = '50%'
  Anim.style.background = 'whitesmoke'
  Anim.style.transformOrigin = '50% 50%'
  e.currentTarget.appendChild(Anim)

  window.requestAnimationFrame(() => {
    setTimeout(() => {
      Anim.style.opacity = '0'
      Anim.style.transform = 'scale(' + scaleLevel / 10 + ')'
      setTimeout(() => {
        Anim.remove()
      }, duration * 2)
    })
  })
}
