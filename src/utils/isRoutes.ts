const isRoutes = {
    Route(path: string): void {
        window.history.pushState({}, '', path); // update pathname
        console.log(window.location.pathname);
        // make changes to the routes using the children parameter
        // ...
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
