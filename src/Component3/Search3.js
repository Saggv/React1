import React, { Component } from 'react';
import Edituser from './Edituser';

class Search3 extends Component {

   hienthinut=()=>{
      if(this.props.trangthai ===false){
          return(
            <div className="btn btn-block btn-outline-info mt-2" onClick={()=>this.props.Ketnoi()}>New add</div>
          )
      }
      else{
        return(
          <div className="btn btn-block btn-outline-secondary mt-2" onClick={()=>this.props.Ketnoi()} >Close</div>
        )
      }
   }
   constructor(props) {
    super(props);
    this.state={
         temp:"",
         Editinfo:{}
    }
  }

    Nhandulieu=(even)=>{
        console.log(even.target.value)
        this.setState({
               temp:even.target.value
        });
        this.props.Laygiatri(this.state.temp)
    }
    Getinfoedit=(ojt)=>{
          this.setState({
              Editinfo:ojt
          })
          this.props.Getinfosearch(ojt);
    }

    Clickshowedit =()=>{
       if(this.props.Showedit() === true){
         return (<Edituser Getinfo={(ojt)=>this.Getinfoedit(ojt)} Changestatusedit={()=>this.props.Changeeidit()} Edituserss={this.props.Editusers}></Edituser>)
       }
    }
     
    render() {
        return (
      <div className="col-12">
       <div className="row">
            {
              this.Clickshowedit()
           }
         </div>
        <div className="group-form mb-3 mt-2">
          <div className="btn-group">
            <input type="text" className="form-control "  placeholder="Nhập từ khóa" onChange={(even)=>this.Nhandulieu(even)} />
            <div className="btn btn-info" onClick={(gf) => this.props.Laygiatri(this.state.temp)}>Tìm</div>
          </div>
           <div className="btn-group1">
           {
             this.hienthinut()
           }
           </div>
        </div>
        <hr/>
      </div>
      
        );
    }
}

export default Search3;