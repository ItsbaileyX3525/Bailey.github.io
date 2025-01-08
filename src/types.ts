export interface Game {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  releaseDate: string;
  platform: string;
  genre: string;
  projectUrl: string;
}

export interface Skill {
  name: string;
  imageUrl: string;
  description: string;
}