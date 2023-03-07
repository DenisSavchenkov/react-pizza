import { useState } from 'react';
import styles from './Sort.module.scss';

function Sort() {
  const [popupVisible, setPopapVisible] = useState(false);
  const [activeSort, setActiveSort] = useState(0);

  const sortNames = ['популярности', 'цене', 'алфавиту'];

  function toChoiceSortName(index) {
    setActiveSort(index);
    setPopapVisible(false);
  }

  return (
    <div>
      <div className={styles.sort}>
        <img src="img/arrow-top.svg" />
        <p>Сортировка по:</p>
        <span onClick={() => setPopapVisible(!popupVisible)}>
          {sortNames[activeSort]}
        </span>
      </div>
      {popupVisible && (
        <div className={styles.popup}>
          <ul>
            {sortNames.map((name, index) => {
              return (
                <li
                  key={name}
                  onClick={() => toChoiceSortName(index)}
                  className={activeSort === index ? styles.active : null}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
