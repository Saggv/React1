import React, { Component } from 'react';
import './App.css';
import Head3 from './Component3/Head3';
import Search3 from './Component3/Search3';
import Tabledata from './Component3/Tabledata';
import Addd from './Component3/Addd';
import Datauer from './Component3/Datauser.json';

const uuidv1 = require('uuid/v1');

class App extends Component {

       constructor(props) {
         super(props);
          this.state={
            trangthai1:false,
            DATA:[],
            textofsearch:'',
            Edituserstatus:false,
            Edituser:{}
          }
        }
     componentWillMount(){
           if(localStorage.getItem("Datauser") ===null){
               localStorage.setItem("Datauser",JSON.stringify(Datauer));
           }
           else{
               var TEMP = JSON.parse(localStorage.getItem("Datauser"));
               this.setState({
                    DATA:TEMP
               }); 
           }
     }


        Changstate=()=>{
          this.setState({
            trangthai1:!this.state.trangthai1
          })
        }
        Changestatusedit=()=>{
            this.setState({
                 Edituserstatus:!this.state.Edituserstatus
            })
        }
         Getvalue = (DL)=>{
                this.setState({
                   textofsearch:DL
                })
         }
         Addnewuser=(name,tell,permisson)=>{
            var item={};
            item.id=uuidv1();
            item.Name=name;
            item.Tell=tell;
            item.permisson=permisson;
            var items=this.state.DATA;
              items.push(item);
            this.setState({
                 DATA:items
            })
            localStorage.setItem("Datauser",JSON.stringify(items));
         }
        
         Editfun=(user)=>{
            console.log("ket noi thanh cong voi tabledatarow ");
            this.setState({
              Edituser:user
            })
         }

         Getinfoeditapp=(info)=>{
               this.state.DATA.forEach((value,key)=>{
                     if(value.Id===info.Id){
                         value.Name=info.Name;
                         value.Tell=info.Tell;
                         value.Premisson=info.Premisson;
                     }
               })
               localStorage.setItem("Datauser",JSON.stringify(this.state.DATA));
         }

          Getidfordelete=(user)=>{
               var tempdata = this.state.DATA.filter((item)=>item.Id !==user);
               this.setState({
                    DATA:tempdata
               })
               localStorage.setItem("Datauser",JSON.stringify(tempdata));
          }

  render() {
     var Ketqua=[];
     this.state.DATA.forEach((elem)=>{
          if(elem.Name.indexOf(this.state.textofsearch) !==-1){
            Ketqua.push(elem)
          }
     });
    return (
      <div >
        <Head3/>
         <div className="search">
          <div className="container">
              <div className="row">
                   <Search3 Ketnoi={()=>this.Changstate()} trangthai={this.state.trangthai1} 
                    Laygiatri={(DL)=>this.Getvalue(DL)} Showedit={()=>this.state.Edituserstatus} Changeeidit={()=>this.Changestatusedit()}
                    Editusers={this.state.Edituser}  Getinfosearch={(info)=>this.Getinfoeditapp(info)}></Search3>

                   <Tabledata Getidfromdata={(user)=>this.Getidfordelete(user)} Dataaa ={Ketqua} Editfuntable={(user)=>this.Editfun(user)} Changeeidit={()=>this.Changestatusedit()} />

                  <Addd hienthi={this.state.trangthai1}  Add={(name,tell,permisson)=>this.Addnewuser(name,tell,permisson)}/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
