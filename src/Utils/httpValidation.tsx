export function Route (path: string, children: any): void {
  window.history.pushState({}, '', path) // update pathname
  console.log(window.location.pathname)
  // kasih tau routenya udh keubah
  const navEvent = new PopStateEvent('popstate')
  window.dispatchEvent(navEvent)

  console.log(children)
}

export function isValidHttpUrl (link: string): boolean {
  if (link.includes('http')) {
    const url: any = new URL(link)
    window.location.href = url
  }
  // add link to wiindow.location.href
  window.location.href = window.location.href + link

  return true
}
