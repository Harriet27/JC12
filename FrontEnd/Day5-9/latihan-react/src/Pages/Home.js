import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import BiodataCard from '../Components/BiodataCard';
import Jumbo from '../Components/Jumbo';
import { connect } from 'react-redux';
import AlertCustom from '../Components/AlertCustom';

class Home extends Component {
  state = {
    data: [
      {
        nama: 'lian',
        usia: 24,
        pekerjaan: 'coder',
        color: 'primary'
      },
      {
        nama: 'andi',
        usia: 43,
        pekerjaan: 'guru',
        color: 'secondary'
      },
      {
        nama: 'susilo',
        usia: 53,
        pekerjaan: 'PNS',
        color: 'danger'
      }
    ],
    boolean: true,
    show: true
  }

  // renderBioData = () => {
  //   let {data} = this.state
  //   return data.map((val) => {
  //     return(
  //       <div style={{ border: '1px solid black'}}>
  //         <div>
  //           {val.nama}
  //         </div>
  //         <div>
  //           {val.usia}
  //         </div>
  //         <div>
  //           {val.pekerjaan}
  //         </div>
  //         <div><input type="text" ref={`item${index}`}></input></div>
  //         <div><input type="button" value="Ganti Nama" onClick={() => this.onClickChangeName(index)}></input></div>
  //       </div>
  //     )
  //   })
  // }

  // onClickChangeName = (index) => {
  //   let {data} = this.state;
  //   console.log(this.refs);
  //   data[index].nama = this.refs[`item${index}`].value;
  //   this.setState({data});
  // }

  // render() {
  //   return(
  //     <div>
  //       {this.renderBioData()}
  //     </div>
  //   );
  // }

  renderBioDataCard = () => {
    let {data} = this.state;
    return data.map((val) => {
      return(
        <div>
          <BiodataCard
            namaCth={val.nama}
            usiaCth={val.usia}
            pekerjaanCth={val.pekerjaan}
            color={val.color}
            show={() => this.setState({show: false})}
            alert={() => window.alert('ini dari parent App.js')}
          />
        </div>
      )
    })
  }

  onBtnLogin = () => {
    console.log(this.refs);
    console.log(this.refs.username.value);
    console.log(this.refs.password.value);
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    window.alert(username);
    window.alert(password);
  }

  // render() {
  //   return(
  //     <div className='container' style={{display: 'flex', justifyContent: 'center'}}>
  //       <div>
  //         <input type='text' ref='username'></input>
  //       </div>
  //       <div>
  //         <input type='password' ref='password'></input>
  //       </div>
  //       <div>
  //         <Button color='success' outline={true} onClick={this.onBtnLogin}>
  //           Click Me
  //         </Button>
  //         <input type='button' value='login' onCLick={this.onBtnLogin}></input>
  //       </div>
  //       {this.state.show ? this.renderBioDataCard() : null}
  //     </div>
  //   )
  // }

  render(){
    // let {show} = this.state;
    return(
      <div className='container'>
        {this.props.count}
        <div>
          {
            this.props.username
            ?
            <AlertCustom color='primary' content={this.props.username}/>
            :
            null
          }
        </div>
        <Jumbo
          mainHeader='TokoKu'
          desc='Toko paling lengkap di bekasi timur'
          slogan='Ayo belanja'
          isiButton='Login'
          onClickBtn={() => window.alert('Belanja Sini!')}
        ></Jumbo>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {this.state.show ? this.renderBioDataCard() : null}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return{
    username : state.contoh.username,
    count : state.count.hitung
  }
}

export default connect(mapStateToProps)(Home);