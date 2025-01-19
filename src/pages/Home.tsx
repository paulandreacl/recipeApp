//import { useQuery } from '@tanstack/react-query';
import styles from './Home.module.scss';
//import { fetchRecipes } from '../api/spoonacular';
import Recipe from '../components/Recipe';
import type { Recipe as RecipeInterface } from '../../types/recipe';

const Home = () => {
  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ['recipes'],
  //   queryFn: fetchRecipes,
  // });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error: {error.message}</div>;
  // }
  const data2 = [
    {
      id: 715415,
      title: 'Red Lentil Soup with Chicken and Turnips',
      image: 'https://img.spoonacular.com/recipes/715415-312x231.jpg',
      imageType: 'jpg',
      spoonacularScore: 4.6,
    },
    {
      id: 716406,
      title: 'Asparagus and Pea Soup: Real Convenience Food',
      image: 'https://img.spoonacular.com/recipes/716406-312x231.jpg',
      imageType: 'jpg',
      spoonacularScore: 4.6,
    },
    {
      id: 644387,
      title: 'Garlicky Kale',
      image: 'https://img.spoonacular.com/recipes/644387-312x231.jpg',
      imageType: 'jpg',
      spoonacularScore: 4.6,
    },
    {
      id: 715446,
      title: 'Slow Cooker Beef Stew',
      image: 'https://img.spoonacular.com/recipes/715446-312x231.jpg',
      imageType: 'jpg',
      spoonacularScore: 4.6,
    },
    {
      id: 782601,
      title: 'Red Kidney Bean Jambalaya',
      image: 'https://img.spoonacular.com/recipes/782601-312x231.jpg',
      imageType: 'jpg',
      spoonacularScore: 4.6,
    },
    {
      id: 716426,
      title: 'Cauliflower, Brown Rice, and Vegetable Fried Rice',
      image: 'https://img.spoonacular.com/recipes/716426-312x231.jpg',
      imageType: 'jpg',
      spoonacularScore: 4.6,
    },
    {
      id: 716004,
      title:
        'Quinoa and Chickpea Salad with Sun-Dried Tomatoes and Dried Cherries',
      image: 'https://img.spoonacular.com/recipes/716004-312x231.jpg',
      imageType: 'jpg',
      spoonacularScore: 4.6,
    },
    {
      id: 716627,
      title: 'Easy Homemade Rice and Beans',
      image: 'https://img.spoonacular.com/recipes/716627-312x231.jpg',
      imageType: 'jpg',
      spoonacularScore: 4.6,
    },
  ];
  return (
    <div className={styles.home}>
      <div className={styles.bannerContainer}>
        <img src="/imgs/banner.png" alt="Banner" />
        <div className={styles.bannerText}>
          <div>Recetas</div>
          <div>para todos</div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Nuevas Recetas</div>
          <div className={styles.recipesContainer}>
            {data2 &&
              data2?.map((recipe: RecipeInterface) => (
                <Recipe key={recipe.id} recipe={recipe} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
