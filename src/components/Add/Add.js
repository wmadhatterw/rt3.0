import React from 'react';
import './add.css';


const Add = (props) => {
    return(
        <div className="container marginTop">
            <p>
               Add Receipts to be Itemized.
            </p>
            <form id="contact-form" onSubmit={this.onSubmit} >
                    <div className="form-group">
                        Receipt Image: <input onChange={this.fileSelectedHandler} type="file" className="form-control" name="file" />
                    </div>
                   
                        <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          
        
        </div>
    );
}

export default Add;