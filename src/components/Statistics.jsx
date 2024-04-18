import PropTypes from 'prop-types';

export const Statistics = ({ data }) => {
    return(
        <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
                {data.map(item => (
                    <li key={item.id} className="item">
                        <span className="label">{item.label}</span>
                        <span className="percentage">{item.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
Statistics.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
}