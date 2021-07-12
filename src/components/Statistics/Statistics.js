import s from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title.toUpperCase()}</h2>

      <ul className={s.statList}>
        {stats.map((stat) => (
          <li
            className={s.item}
            key={stat.id}
            style={{
              backgroundColor: `rgb(${getRandom(0, 255)}, ${getRandom(
                0,
                255
              )}, ${getRandom(0, 255)})`,
            }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const getRandom = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

export default Statistics;
