import PropTypes from 'prop-types';
import './Statistics.css';

function Statistics({ title = '', stats }) {
  return (
    <section className="statistics">
      {title ? <h2 className="statistics__title">{title}</h2> : null}

      <ul className="statistics__stat-list list">
        {stats.map(el => (
          <li key={el.id} className="statistics__stat-item">
            <span className="statistics__label">{el.label}</span>
            <span className="statistics__percentage">{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

export default Statistics;
