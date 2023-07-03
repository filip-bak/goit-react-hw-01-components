import PropTypes from 'prop-types';
import { setColor } from './component';
import styles from './Statistics.module.css';

const Statistics = ({ title = '', stats }) => {
  // styles when more than 4 stats
  const statsListStyles = itemsCount => {
    return itemsCount > 4 ? styles['list--nested'] : '';
  };

  return (
    <section className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={`${styles.list}  ${statsListStyles(stats.length)}`}>
        {stats &&
          typeof stats === 'object' &&
          stats.map((el, idx) => (
            <li
              key={el.id}
              className={styles.item}
              style={{ backgroundColor: setColor(idx) }}
            >
              <span className={styles.label}>{el.label}</span>
              <span className={styles.percentage}>{el.percentage}%</span>
            </li>
          ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistics;
