import React from 'react';
import './weekly.css';

const Weekly = (props) => {
    return(
        <div className="container marginTop">
            <h2>
                Weekly Report
            </h2>
            <div className ="container">
	        	<table className = "weeklyT">
	        	<tr className="days">
	        		<th> Sunday </th>
	        		<th> Monday </th>
	        		<th> Tuesday </th>
	        		<th> Wednsday </th>
	        		<th> Thursday </th>
	        		<th> Friday </th>
	        		<th> Saturday </th>
	        		<th> Totals </th>
	        	</tr>
	        	<tr> 
	        		<th>Walmart</th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        	</tr>
	        	<tr> 
	        		<th>Target</th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        	</tr>
	        	<tr> 
	        		<th>Aldis</th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        	</tr>
	        	<tr> 
	        		<th>PriceChopper</th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        	</tr>
	        	<tr> 
	        		<th>Other</th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        	</tr>
	        	<tr> 
	        		<th>Daily Totals</th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        		<th>  </th>
	        	</tr>
	        	</table>
        	</div>
        </div>
        
    );
}

export default Weekly;