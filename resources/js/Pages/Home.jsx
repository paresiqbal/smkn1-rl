import React from "react";
import Hero from "@/components/Hero";
import QuickLinks from "../components/QuickLinks";

export default function Home() {
    return (
        <div>
            <div className="m-0 p-0">
                <Hero />
            </div>
            <div>
                <QuickLinks />
            </div>
        </div>
    );
}
