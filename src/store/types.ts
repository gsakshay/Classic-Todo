
export interface Link {
    icon: string,
    text: string,
    route: string,
}

export interface Team {
    name: string,
    role: string
}

export interface Project {
    title: string,
    person: string,
    due: string,
    status: string,
    content: string,
}

export interface TodoState {
    links: Link[],
    projects: Project[],
    team: Team[]
}