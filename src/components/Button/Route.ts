// import React from "react"

// const Route = ( path:string, children:React.ReactNode ) => {
//     return window.location.pathname === path ? children : null
// }

export function isValidHttpUrl(link: any): boolean {
    let url: any;
    try {
        url = new URL(link);
    } catch (_) {
        return link;
    }
    window.location.href = url;

    return true;
}

export function isPath(link: string, element: any): boolean {
    let url: any;
    try {
        url = new URL(link);
    } catch (_) {
        return element;
    }
    window.location.href = url;

    return true;
}
