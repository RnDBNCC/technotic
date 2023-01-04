// import { useEffect, useState } from "react"

// const Route = ( path:string, children:React.ReactNode ) => {
//     return window.location.pathname === path ? children : null
// }
// import { useState, useEffect  } from 'react';

export function Route(path: string, children: any): void {
    window.history.pushState({}, '', path); // update pathname

    // kasih tau routenya udh keubah
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);

    console.log(children);
}

export function isValidHttpUrl(link: string): boolean {
    const url: any = new URL(link);
    window.location.href = url;

    return true;
}
