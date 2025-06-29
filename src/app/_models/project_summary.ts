export interface ProjectSummary {
  title: string;
  description: string;
  technologies: string[];
  githubRepositories?: GithubRepository[];
  liveDemoUrl?: string;
  imgUrl? :string;
}

export interface GithubRepository {
  name: string;
  url: string;
}
