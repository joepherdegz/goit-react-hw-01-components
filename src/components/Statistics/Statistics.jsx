import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
    //Generate random color
  const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  };

    return(
        <section className={css.statistics}>
         {title ? <h2 className={css.title}>{title}</h2> : null}
            <ul className={css.statList}>
                {stats.map(stat => (
                    <li key={stat.id} className={css.item} style={{ backgroundColor: generateRandomColor() }}>
                        <span className={css.label}>{stat.label}</span>
                        <span className={css.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
}