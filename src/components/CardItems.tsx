import { useNavigate } from 'react-router-dom';
import styles from './CardItems.module.scss';

const CardItems = ({
  img,
  name,
  path,
}: {
  img: string;
  name: string;
  path: string;
}) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(path)}>
      <div className={styles.card}>
        <img src={img} alt={name} />
        <div className={styles.title}>{name}</div>
      </div>
    </button>
  );
};

export default CardItems;
