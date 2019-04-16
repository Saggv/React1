import React, { Component } from 'react';

class Tabledatarow extends Component {
      hgjfgf =()=>{
          if(this.props.Permisson ===1){
              return "Adimin";
          }
          else if(this.props.Permisson ===2){
              return "Mordater";
          }
          else{
              return "Normal";
          }
      }

      Clickedit=()=>{
        this.props.Editfuntablerow();
        this.props.Changeeditt();
      }
     Clickdete=(user)=>{
        this.props.Getidedit(user);
     }
      
    render() {
       
        return (
            <tr>
            <td >{this.props.stt}</td>
            <td>{this.props.name}</td>
            <td>{this.props.tell}</td>
            <td>{this.hgjfgf()}</td>
            <td>
              <div className="btn-group">
                <div className="btn btn-warning sua"><i className="fa fa-edit    " onClick={()=>this.Clickedit()}>Sửa</i></div>
                <div className="btn btn-danger xoa"><i className="fa fa-delete   " onClick={(user)=>this.Clickdete(this.props.id)}>Xóa</i></div>
              </div>
            </td>
          </tr>
        );
    }
}

export default Tabledatarow;