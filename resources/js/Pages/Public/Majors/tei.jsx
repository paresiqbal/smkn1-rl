import React, { useState } from "react";

const major = {
    id: "teknik electronika industri",
    name: "Teknik Electronika Industri",
    department: "School of Engineering",
    degreeType: "Bachelor of Science",
    duration: "4 years",
    credits: 120,
    accreditation: "Accredited by the Computing Accreditation Commission",
    description:
        "The Computer Science program prepares students for careers in software development, data science, artificial intelligence, and more. Our curriculum combines theoretical foundations with practical applications, ensuring graduates are ready for the ever-evolving tech industry.",
    overview:
        "Computer Science is the study of computers and computational systems. Unlike electrical and computer engineers, computer scientists deal mostly with software and software systems; this includes their theory, design, development, and application...",
    careerOpportunities: [
        "Software Developer",
        "Data Scientist",
        "Machine Learning Engineer",
        "Systems Analyst",
        "Database Administrator",
        "Web Developer",
        "Information Security Analyst",
        "Cloud Computing Engineer",
    ],
    requirements: {
        gpa: 3.0,
        prerequisites: [
            "Introduction to Programming",
            "Calculus I & II",
            "Discrete Mathematics",
        ],
        coreClasses: [
            "Data Structures and Algorithms",
            "Computer Architecture",
            "Operating Systems",
            "Database Systems",
            "Software Engineering",
            "Computer Networks",
            "Theory of Computation",
            "Artificial Intelligence",
        ],
        electives: [
            "Machine Learning",
            "Computer Graphics",
            "Cybersecurity",
            "Mobile App Development",
            "Cloud Computing",
            "Human-Computer Interaction",
            "Bioinformatics",
            "Quantum Computing",
        ],
    },
    statistics: {
        enrollmentRate: 85,
        graduationRate: 78,
        employmentRate: 92,
        averageSalary: "$85,000",
    },
    faculty: [
        {
            name: "Dr. Sarah Johnson",
            title: "Department Chair",
            specialization: "Artificial Intelligence",
            image: "https://picsum.photos/200/300",
        },
        {
            name: "Dr. Michael Chen",
            title: "Professor",
            specialization: "Computer Networks",
            image: "https://picsum.photos/200/300",
        },
        {
            name: "Dr. Emily Rodriguez",
            title: "Associate Professor",
            specialization: "Software Engineering",
            image: "https://picsum.photos/200/300",
        },
        {
            name: "Dr. James Wilson",
            title: "Assistant Professor",
            specialization: "Data Science",
            image: "https://picsum.photos/200/300",
        },
    ],
    relatedPrograms: [
        "Information Technology",
        "Data Science",
        "Software Engineering",
        "Cybersecurity",
    ],
};

const tabs = [
    { id: 1, name: "Overview" },
    { id: 2, name: "Requirements" },
    { id: 3, name: "Careers" },
    { id: 4, name: "Faculty" },
];

export default function Tei() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="mx-auto max-w-screen-md px-4 pt-8 pb-16 md:pt-16">
            <h1 className="mb-2 text-3xl font-bold">{major.name}</h1>

            {/* Tabs */}
            <div className="mb-4 flex border-b">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 text-xs font-medium ${
                            activeTab === tab.id
                                ? "border-b-2 border-red-400 text-red-500"
                                : "hover:text-red-400"
                        }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="shadow-dark dark:shadow-light border-2 border-black bg-white p-4 dark:border-white dark:bg-zinc-900">
                {activeTab === 1 && (
                    <>
                        <p className="mb-2">{major.overview}</p>
                    </>
                )}

                {activeTab === 2 && (
                    <>
                        <div className="mb-4">
                            <p className="font-bold">Program Requirements</p>
                            <h2>
                                Students must maintain a minimum GPA of{" "}
                                {major.requirements.gpa} and complete all
                                required coursework to graduate.
                            </h2>
                        </div>

                        <div className="mb-4">
                            <h3 className="font-bold">Prerequisites</h3>
                            <ul className="list-inside list-disc">
                                {major.requirements.prerequisites.map(
                                    (item) => (
                                        <li key={item}>{item}</li>
                                    ),
                                )}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-bold">Core Classes</h3>
                            <div className="flex flex-wrap gap-2">
                                {major.requirements.coreClasses.map((item) => (
                                    <button
                                        key={item}
                                        className="dark:shadow-input-light shadow-input-dark border border-black bg-emerald-600 px-3 py-1 text-black transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus:outline-none"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-bold">Electives</h3>
                            <div className="flex flex-wrap gap-2">
                                {major.requirements.electives.map((item) => (
                                    <button
                                        key={item}
                                        className="dark:shadow-input-light shadow-input-dark border border-black bg-red-400 px-3 py-1 text-black transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus:outline-none"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 3 && (
                    <>
                        <h2 className="mb-2 font-semibold">
                            Career Opportunities
                        </h2>
                        <ul className="list-inside list-disc">
                            {major.careerOpportunities.map((career) => (
                                <li key={career}>{career}</li>
                            ))}
                        </ul>
                    </>
                )}

                {activeTab === 4 && (
                    <>
                        <h2 className="mb-4 font-semibold">Faculty Members</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {major.faculty.map((professor) => (
                                <div
                                    key={professor.name}
                                    className="flex items-center space-x-4"
                                >
                                    <img
                                        src={professor.image}
                                        alt={professor.name}
                                        className="h-16 w-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold">
                                            {professor.name}
                                        </p>
                                        <p className="text-sm">
                                            {professor.title}
                                        </p>
                                        <p className="text-sm">
                                            {professor.specialization}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
