import React from "react";
import Hero from "@/components/Hero";
import QuickLinks from "@/components/QuickLinks";
import About from "@/components/About";
import AcademicProgram from "@/components/AcademicProgram";

export default function Home() {
    return (
        <div>
            <div className="-mx-4 lg:-mx-24">
                <Hero />
            </div>
            <div className="container mx-auto px-4 lg:px-24">
                <QuickLinks />
            </div>
            <About />
            <div className="">
                <AcademicProgram />
            </div>
        </div>
    );
}
