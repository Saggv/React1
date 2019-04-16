import React, { Component } from 'react';

class Addd extends Component {
    constructor(props) {
        super(props);
        this.state={
            Id:"",
            Name:'',
            Tell:'',
            Permisson:''
        }
    }
     
     Ischange=(event)=>{
        const name= event.target.name;
        const value= event.target.value;
           this.setState({
               [name]:value
           });
        //    var item={};
        //    item.id=this.state.Id;
        //    item.name=this.state.Name;
        //    item.tell=this.state.Tell;
        //    item.permisson=this.state.Premisson;
        //    console.log(item);
     }

      Hienthi =()=>{
          if(this.props.hienthi=== true){
              return(
                <div className="col">
                 <form>
                <div className="card" style={{backgroundColor: 'cadetblue', borderColor: 'darkblue'}}>
                <div className="card-body">
                <h4 className="card-title text-center">Thêm USER</h4>
                <div className="form-group">
                    <input type="text"name="Name" className="form-control" placeholder="Enter user name" onChange={(event)=>this.Ischange(event)} />
                </div>
                <div className="form-group">
                    <input type="text" name="Tell" className="form-control" placeholder="Enter user phone" onChange={(event)=>this.Ischange(event)}/>
                </div>
                <div className="form-group" >
                    <select className="custom-select" name="Premisson" onChange={(event)=>this.Ischange(event)} >
                    <option >Your select</option>
                    <option value={1}>Adimin</option>
                    <option value={2}>Mordater</option>
                    <option value={3}>Normal</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="reset" className="btn btn-block btn-primary" onClick={(Name,Tell,Permisson)=>this.props.Add(this.state.Name,this.state.Tell,this.state.Premisson)} value="Add" />
                </div>
                
                </div>
            </div>
            </form>
            </div>
         
              )
          }
      }


       

    render() {
        return (
            <div>
                 {this.Hienthi()}
             </div>
        );
    }
}

export default Addd;