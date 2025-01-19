import styles from './RecipeDescription.module.scss';

const RecipeDescription = ({
  image,
  alt,
  title,
  description,
}: {
  image: string;
  alt: string;
  title: string;
  description: string;
}) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={alt} />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default RecipeDescription;
