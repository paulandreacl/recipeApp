export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType?: string;
  spoonacularScore?: number;
  readyInMinutes?: number;
}
