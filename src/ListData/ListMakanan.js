import React, {Component} from 'react';

class ListMakanan extends Component{
	constructor(props){
		super(props);
		this.state = {
			dataList: this.props.gambar
		};
	}
	render(){
		return(
			<div>
				<img src={this.state.dataList} alt="Produk Makanan" width="220" height="180"/>
			</div>
		);
	}
}

export default ListMakanan;