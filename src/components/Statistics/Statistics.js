import PropTypes from "prop-types";
import cssStatistics from './Statistics.module.css';

function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const color = "#" + ("000000" + randomColor).slice(-6);
    
    return color;
  }

const Statistics = ({title, stats}) => (
<section className={cssStatistics.statistics}>
  {title.length > 0 && (
    <h2 className="title">{title}</h2>
  )}

   <ul className={cssStatistics.statList}>
    {stats.map(stat => (
        <li key={stat.id} className={cssStatistics.item} style={{backgroundColor:getRandomColor()}}>
            <span className={cssStatistics.labelStats}>{stat.label}</span>
            <span className={cssStatistics.percentage}>{stat.percentage}</span>
        </li>
    ))}
    </ul> 
</section>
)

Statistics.propTypes = {
  stats: PropTypes.array,
};

export default Statistics;