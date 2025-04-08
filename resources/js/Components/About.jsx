import React from "react";

export default function About() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <div>
                        <h2 className="mb-6 text-3xl font-bold">
                            About{" "}
                            <span className="font-bold text-[#EFBF04]">
                                SMK Negeri 1 Rejang Lebong
                            </span>
                        </h2>
                        <p className="text-muted-foreground mb-4 font-bold">
                            Founded in 1985,
                            <span className="font-bold text-[#EFBF04]">
                                SMK Negeri 1 Rejang Lebong
                            </span>{" "}
                            has been committed to providing exceptional
                            education for over 35 years. Our mission is to
                            nurture intellectual curiosity, creativity, and
                            personal growth in a supportive and challenging
                            environment.
                        </p>
                        <p className="text-muted-foreground mb-6">
                            With a student-teacher ratio of 12:1, we ensure
                            personalized attention for each student. Our
                            curriculum combines traditional academic rigor with
                            innovative teaching methods to prepare students for
                            success in college and beyond.
                        </p>
                        <div className="mb-6 grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                                <span>12:1 Student-Teacher Ratio</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                                <span>100% College Acceptance</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                                <span>25+ Advanced Placement Courses</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                                <span>40+ Extracurricular Activities</span>
                            </div>
                        </div>
                        <button className="bg-emerald-600 hover:bg-emerald-700">
                            Learn More About Us
                        </button>
                    </div>
                    <div className="relative h-[400px] overflow-hidden rounded-lg">
                        <img
                            src="/assets/school2.jpg"
                            alt="Students in classroom"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
