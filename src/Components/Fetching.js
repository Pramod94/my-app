import React from 'react';

class Fetching extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading : true,
            person : null
        }
    }

    async componentDidMount(){
        

    //    const response = await fetch('https://randomuser.me/api/');

    //    const data = await response.json();

    //    console.log(data.results[0]);

    //    this.setState(
    //     {
    //         data : data.results[0]
    //     }
    //    );

       console.log("Loaded");
    }

    getDetails = async() => {
        this.setState(
            { isLoading : true}
        )
       const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();

        this.setState(
            {
                person : data.results[0],
                isLoading : false
            }
        )
    }

    render(){
        return(
            <div>
                <h3>Fetching JSON</h3>
                <label>Person information</label> <br />
                <button onClick={this.getDetails}>Details</button>

            <div>
                
                {
                       (this.state.isLoading) ?
                        <div><strong>Loading ... Please wait ...</strong></div> :  
                       <div>
                           <h4>Gender : {this.state.person.gender}</h4>
                       <h4>Email : {this.state.person.email}</h4>
                       <h4>City : {this.state.person.location.city}</h4>
                       <img src={this.state.person.picture.large} /> 
                       </div> 
                }

                
            </div>

                 
            </div>
        );
    }
}

export default Fetching;