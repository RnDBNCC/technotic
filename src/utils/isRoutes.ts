const isRoutes = {
    Route(path: string, children: unknown): void {
        window.history.pushState({}, '', path); // update pathname
        console.log(window.location.pathname);
        // kasih tau routenya udh keubah
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    },

    isValidHttpUrl(link: string): boolean {
        const url: any = new URL(link);
        window.location.href = url;

        return true;
    },
};

export default isRoutes;
