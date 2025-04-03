import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

function Breadcrumb({ items }) {
    return (
        <div className="flex items-center space-x-2 pb-6 text-sm">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="hover:text-yellow-300"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span>{item.label}</span>
                    )}
                    {index < items.length - 1 && (
                        <span>
                            <ChevronRight size="16" />
                        </span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Breadcrumb;
