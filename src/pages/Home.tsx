import styles from './Home.module.scss';
import { fetchRecipes } from '../api/spoonacular';
import Recipe from '../components/Recipe';
import type { Recipe as RecipeInterface } from '../../types/recipe';
import CardItems from '../components/CardItems';
import { menuItemsMobile } from '../constants/menuConstantsMobile';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['recipes'],
    queryFn: fetchRecipes,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.home}>
      <div className={styles.bannerContainer}>
        <img className={styles.bannerImg} src="/imgs/banner.png" alt="Banner" />
        <div className={styles.bannerText}>
          <div>Recetas</div>
          <div>para todos</div>
        </div>
        <div className={styles.menuItems}>
          {menuItemsMobile.map((item) => (
            <CardItems
              key={item.name}
              img={item.img}
              name={item.name}
              path={item.path}
            />
          ))}
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Nuevas Recetas</div>
          <div className={styles.recipesContainer}>
            {data &&
              data?.results?.map((recipe: RecipeInterface) => (
                <Recipe key={recipe.id} recipe={recipe} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
