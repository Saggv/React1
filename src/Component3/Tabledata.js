import React, { Component } from 'react';
import Tabledatarow from './Tabledatarow';

class Tabledata extends Component {
    
       Getdelete=(user)=>{
             this.props.Getidfromdata(user);
       }

      Showdata3=()=>
            this.props.Dataaa.map((value,key)=>{
                 return(
                      <Tabledatarow Getidedit={(user)=>this.Getdelete(user)} Changeeditt={()=>this.props.Changeeidit()} Editfuntablerow={(user)=>this.props.Editfuntable(value)} 
                      id={value.Id} stt={key+1} name={value.Name} tell={value.Tell} Permisson={value.Premisson} />
                 );
              
            })

    render() {
        return (      
      <div className="col">
        <table className="table table-striped table-hover ">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Họ Tên</th>
              <th> Điện Thoại</th>
              <th>Quyền</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
               {this.Showdata3()}
          </tbody>
        </table>
      </div>
        );
    }
}

export default Tabledata;