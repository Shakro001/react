

import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";

export default function Layout() {

    return (
        <>
        <Header/>
            <main className="page-home">
                <Outlet></Outlet>
            </main>
        </>
    )
}