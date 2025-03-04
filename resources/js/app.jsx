import "./bootstrap";
import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

import MainLayout from "./Layouts/MainLayout";
import { setThemeOnLoad } from "./theme";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        const page = pages[`./Pages/${name}.jsx`];
        page.default.layout =
            page.default.layout || ((page) => <MainLayout>{page}</MainLayout>);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});

setThemeOnLoad();
