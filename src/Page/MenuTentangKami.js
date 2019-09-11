import React, {Component} from 'react';
class MenuTentangKami extends Component{
	constructor(props){
		super(props);
		this.state = {
			text: "Warung Nusantara adalah Restoran yang Bernuansa Nusantara, Kami ada untuk Membuat Anda Makanan khas dari Nusantara"
		};
	}
	render(){
		return(
			<div>
				<center>
					<p>Tentang Kami</p>
					<p>{this.state.text}</p>
				</center>
			</div>
		);
	}
}

export default MenuTentangKami;