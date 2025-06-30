export interface Work {
    jobRoles: JobRole[];
    company: string;
    duration: string;
    bullets: string[];
    skills: string[];
}

export interface JobRole {
    title: string;
    duration: string;
}