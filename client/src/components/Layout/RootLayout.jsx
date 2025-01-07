import React from "react";
import { Outlet } from "react-router";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
