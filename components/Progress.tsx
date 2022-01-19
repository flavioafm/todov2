import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Progress({ value = 0, color} ) {
    return (
        <div className="w-8">
            <CircularProgressbar 
                value={value}
                strokeWidth={25}
                styles={buildStyles({
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                
                    // Colors
                    pathColor: color,
                    trailColor: '#191A1C',
                  })}
            />
        </div>
    )
}

export default Progress
