import React from "react";
import Hero from "@/components/Hero";
import QuickLinks from "@/components/QuickLinks";
import About from "@/components/About";
import AcademicProgram from "@/components/AcademicProgram";
import NewsSection from "../components/NewsSection";
import Testimonial from "../components/Testimonial";
import CallToAction from "../components/CallToAction";

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
            <div className="-mx-4 px-4 lg:-mx-24">
                <AcademicProgram />
            </div>
            <div className="p-4">
                <NewsSection />
            </div>
            <div className="p-4">
                <Testimonial />
            </div>
            <div className="-mx-4 p-4 lg:-mx-24">
                <CallToAction />
            </div>
        </div>
    );
}
