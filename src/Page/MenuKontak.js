import React, {Component} from 'react';

class MenuKontak extends Component{
	constructor(props){
		super(props);
		this.state = {
			alamat: "Jl.Swadaya IV,Pd.Ranggon,Cipayung,Kota Jakarta Timur,Daerah Khusus Ibukota Jakarta 13860",
			telepon: "08123456789"
		};
	}
	render(){
		return(
			<div>
				<center>
					<h4> {this.state.alamat} </h4>
					<h4>Kontak Kami : {this.state.telepon} </h4>
				</center>
			</div>
		);
	}
}

export default MenuKontak;