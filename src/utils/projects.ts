import {generatePath} from "react-router";
import {projectCards} from "../config/projectCards.ts";
import {ROUTES} from "../config/routes.ts";
import {PROJECT_FILE_EXTENSION} from "../config/caseStudy.ts";

export const getProjectPath = (slug: string) => generatePath(ROUTES.PROJECT, {slug});

export const getProjectFileName = (slug: string) => `${slug}${PROJECT_FILE_EXTENSION}`;

export const findProject = (slug?: string) => projectCards.find((project) => project.slug === slug);

export const getNextProject = (slug: string) => {
    const index = projectCards.findIndex((project) => project.slug === slug);
    return projectCards[(index + 1) % projectCards.length];
};
