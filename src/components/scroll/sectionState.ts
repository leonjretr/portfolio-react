export type SectionState = {
    section: string;
};

export const isSectionState = (state: unknown): state is SectionState =>
    typeof state === "object" &&
    state !== null &&
    "section" in state &&
    typeof state.section === "string";
