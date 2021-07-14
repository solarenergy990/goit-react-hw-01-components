import s from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title.trim() && <h2 className={s.title}>{title.toUpperCase()}</h2>}

      <ul className={s.statList}>
        {stats.map((stat) => {
          const { id, label, percentage } = stat;

          return (
            <li
              className={s.item}
              key={id}
              style={{
                backgroundColor: `rgb(${getRandom(0, 255)}, ${getRandom(
                  0,
                  255
                )}, ${getRandom(0, 255)})`,
              }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const getRandom = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
