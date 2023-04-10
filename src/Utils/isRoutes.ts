
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
        console.log('test');
        const url: any = new URL(link)
        window.location.href = url

        return true
    }
}

export default isRoutes;