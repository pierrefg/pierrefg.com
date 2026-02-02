"use client";

import "./style.css";

import React, { Suspense } from "react";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Loader from "@/components/loader/Loader";
import MenuLayout from "@/components/menu/MenuLayout";

import { usePathname } from "next/navigation";
import useStore from "@/store/useStore";

export default function MainLayout({ children }) {
  const { darkMode } = useStore();
  const pathname = usePathname();

  const noMenuRoutes = ["/", "/xp"];
  const hasMenu = !noMenuRoutes.includes(pathname);

  return (
    <>
      <Analytics />
      <SpeedInsights />

      <Suspense fallback={<Loader />}>
        <div
          id="main-container"
          className={[
            !darkMode ? "light" : "",
            hasMenu ? "scroll-padding" : "nothing",
          ].join(" ")}
        >
          {hasMenu ? (
            <MenuLayout>{children}</MenuLayout>
          ) : (
            children
          )}
        </div>
      </Suspense>
    </>
  );
}