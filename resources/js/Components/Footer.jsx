import { Link } from "@inertiajs/react";
import {
    Facebook,
    GraduationCap,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Twitter,
    Youtube,
} from "lucide-react";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 px-16 text-white">
            <div className="container py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand & Description */}
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <GraduationCap className="h-8 w-8 text-yellow-400" />
                            <span className="text-xl font-bold text-yellow-400">
                                SMK Negeri 1 Rejang Lebong
                            </span>
                        </div>
                        <p className="mb-6 text-sm leading-relaxed">
                            Memelihara pikiran, menginspirasi masa depan, dan
                            membangun pemimpin masa depan hari ini.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Youtube].map(
                                (Icon, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="hover:text-yellow-400"
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span className="sr-only">
                                            {Icon.name}
                                        </span>
                                    </a>
                                ),
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm">
                            {[
                                "Home",
                                "About Us",
                                "Academics",
                                "Admissions",
                                "Campus Life",
                                "News & Events",
                            ].map((text, idx) => (
                                <li key={idx}>
                                    <Link href="#" className="hover:text-white">
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-white">
                            Resources
                        </h4>
                        <ul className="space-y-2 text-sm">
                            {[
                                "Student Portal",
                                "Parent Portal",
                                "Faculty & Staff",
                                "Calendar",
                                "Library",
                                "Career Opportunities",
                            ].map((text, idx) => (
                                <li key={idx}>
                                    <Link href="#" className="hover:text-white">
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-white">
                            Contact Us
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-1 h-5 w-5 text-yellow-400" />
                                <span>
                                    Jl. Pelajar No. 123
                                    <br />
                                    Rejang Lebong, Bengkulu
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-yellow-400" />
                                <span>(0732) 123456</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-yellow-400" />
                                <span>info@smkn1rl.sch.id</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs">
                    <p>
                        &copy; {new Date().getFullYear()} SMK Negeri 1 Rejang
                        Lebong. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
