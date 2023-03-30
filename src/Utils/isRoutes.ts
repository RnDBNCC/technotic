
const isRoutes = {
    Route(path: string, children: unknown): void {
        window.history.pushState({}, '', path) // update pathname
        console.log(window.location.pathname)
        // kasih tau routenya udh keubah
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)

        console.log(children)
    },

    isValidHttpUrl(link: string): boolean {
        if (link.includes('http')) {
            const url: any = new URL(link)
            window.location.href = url
        }
        // add link to window.location.href
        window.location.href = window.location.href + link

        return true
    }
}

export default isRoutes;