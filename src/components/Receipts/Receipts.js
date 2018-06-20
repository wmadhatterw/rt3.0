import React from 'react';
import './receipts.css';

const Receipts = (props) => {
    return(
        <div className="container marginTop">
            <p>
                Please Itemize these receipts
            </p>
            <div className="col-sm-3 card">
	            <a href="http://gdurl.com/ubBh" target="_blank" rel="noopener noreferrer" className="col-md-3">
	  				<img className="small" src="http://gdurl.com/ubBh" alt="one" />
				</a>
				<form id="contact-form" onSubmit={this.onSubmit} >
                    <div className="form-group">
                        Date: <input onChange={this.onChange} type="date" className="form-control" name="date" />
                    </div>
                    <div className="form-group">
                    Amount: <input onChange={this.onChange} type="number" min= "0.01" step="0.01" max ="25000" className="form-control" name="number" />
                    </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-sm-3 card">
	            <a href="http://gdurl.com/mvbd" target="_blank" rel="noopener noreferrer" className="col-md-3">
	  				<img className="small" src="http://gdurl.com/mvbd" alt="two" />
				</a>
				<form id="contact-form" onSubmit={this.onSubmit} >
                    <div className="form-group">
                        Date: <input onChange={this.onChange} type="date" className="form-control" name="date" />
                    </div>
                    <div className="form-group">
                    Amount: <input onChange={this.onChange} type="number" min= "0.01" step="0.01" max ="25000" className="form-control" name="number" />
                    </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-md-3 card">
	            <a href="http://gdurl.com/tBqP" target="_blank" rel="noopener noreferrer" className="col-md-3">
	  				<img className="small" src="http://gdurl.com/tBqP" alt="three" />
				</a>
				<form id="contact-form" onSubmit={this.onSubmit} >
                    <div className="form-group">
                        Date: <input onChange={this.onChange} type="date" className="form-control" name="date" />
                    </div>
                    <div className="form-group">
                    Amount: <input onChange={this.onChange} type="number" min= "0.01" step="0.01" max ="25000" className="form-control" name="number" />
                    </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-md-3 card">
	            <a href="http://gdurl.com/h4Ss" target="_blank" rel="noopener noreferrer" className="col-md-3">
	  				<img className="small" src="http://gdurl.com/h4Ss" alt="four" />
				</a>
				<form id="contact-form" onSubmit={this.onSubmit} >
                    <div className="form-group">
                        Date: <input onChange={this.onChange} type="date" className="form-control" name="date" />
                    </div>
                    <div className="form-group">
                    Amount: <input onChange={this.onChange} type="number" min= "0.01" step="0.01" max ="25000" className="form-control" name="number" />
                    </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>


            </div>
        </div>
    );
}

export default Receipts;