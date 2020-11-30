import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';
import randomColor from './randomColor';

function Statistics({ title, stats }) {
  // console.log(stats);
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={s.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}> {stat.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
