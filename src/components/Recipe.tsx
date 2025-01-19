import styles from './Recipe.module.scss';
import type { Recipe } from '../../types/recipe';
import RecipeDescription from './RecipeDescription';

const Recipe = ({ recipe }: { recipe: Recipe }) => {
  const [firstWord, ...restWords] = recipe.title.split(' ');
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={recipe?.image} alt="Products" />
      </div>
      <div className={styles.title}>
        <span className={styles.firstWord}>{firstWord}</span>{' '}
        <span className={styles.restWords}>{restWords.join(' ')}</span>
      </div>
      <div className={styles.footer}>
        <div className={styles.score}>
          <img src="/imgs/ic_star.svg" alt="Star" />
          <p className={styles.scoreNumber}>{recipe.spoonacularScore}</p>
        </div>
        <img src="/imgs/ic_heart.svg" alt="Heart" />
      </div>
      <div className={styles.description}>
        <RecipeDescription
          image="/imgs/cutlery.png"
          alt="cutlery"
          title="Tamaño de la porción"
          description="4 raciones"
        />
        <RecipeDescription
          image="/imgs/clock.png"
          alt="cutlery"
          title="Tiempo de preparación"
          description="10 minutos"
        />
        <RecipeDescription
          image="/imgs/chefs_hat.png"
          alt="hat"
          title="Dificultad"
          description="fácil"
        />
      </div>
    </div>
  );
};

export default Recipe;
