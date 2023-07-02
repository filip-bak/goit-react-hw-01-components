import PropTypes from 'prop-types';
import { setColor } from './component';
import './Statistics.css';

const Statistics = ({ title = '', stats }) => {
  // styles when more than 4 stats
  const statsListStyles = itemsCount => {
    let style = '';
    if (itemsCount > 4) {
      style = 'statistics__stat-list--nested';
    }
    return style;
  };

  return (
    <section className="statistics">
      {title && <h2 className="statistics__title">{title}</h2>}

      <ul className={`statistics__stat-list ${statsListStyles(stats.length)}`}>
        {stats &&
          typeof stats === 'object' &&
          stats.map((el, idx) => (
            <li
              key={el.id}
              className="statistics__stat-item"
              style={{ backgroundColor: setColor(idx) }}
            >
              <span className="statistics__label">{el.label}</span>
              <span className="statistics__percentage">{el.percentage}%</span>
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
