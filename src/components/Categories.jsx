import { useState } from 'react';
import styles from './Categories.module.scss';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categoryNames = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className={styles.categories}>
      <ul>
        {categoryNames.map((category, index) => {
          return (
            <li
              key={category}
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? styles.active : null}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
