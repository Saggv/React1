import React, { Component } from 'react';

class Edituser extends Component {
      
       constructor(props) {
           super(props);
           this.state={
                Id:this.props.Edituserss.Id,
                Name:this.props.Edituserss.Name,
                Tell:this.props.Edituserss.Tell,
                Premisson:this.props.Edituserss.Premisson
           }
       }
       
       Ischange=(event)=>{
              const name = event.target.name;
              const value = event.target.value;
              this.setState({
                    [name]:value
              })
       }
         
       Savebuttom=()=>{
             var info={};
             info.Id=this.state.Id;
             info.Name=this.state.Name;
             info.Tell=this.state.Tell;
             info.Premisson=this.state.Premisson;
             this.props.Getinfo(info);
             this.props.Changestatusedit();
       }
       
    render() {

        return (
            <div className="col-12">
                    <form>
                    <div className="card" style={{backgroundColor:'black' ,color:'white', borderColor: 'darkblue'}}>
                        <div className="card-body">
                            <h4 className="card-title text-center"> Edit USER</h4>
                            <div className="form-group">
                                <input onChange={(event)=>this.Ischange(event)} defaultValue={this.props.Edituserss.Name} type="text" name="Name" className="form-control" placeholder="Enter user name"  />
                            </div>
                            <div className="form-group">
                                <input onChange={(event)=>this.Ischange(event)} defaultValue={this.props.Edituserss.Tell} type="text" name="Tell" className="form-control" placeholder="Enter user phone" />
                            </div>
                            <div className="form-group" >
                                <select onChange={(event)=>this.Ischange(event)} defaultValue={this.props.Edituserss.Premisson} className="custom-select" name="Premisson"   >
                                    <option >Your select</option>
                                    <option value={1}>Adimin</option>
                                    <option value={2}>Mordater</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="buttom" className="btn btn-block btn-danger" onClick={()=>this.Savebuttom()} value="Save" />
                            </div>
                        </div>
                   </div>
                </form>
            </div>
        );
    }
}

export default Edituser;