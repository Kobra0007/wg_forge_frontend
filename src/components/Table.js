import React from "react";
import Reflux from "reflux";

import MyStore from "../store";
import Actions from "../actions";

import Info from './Info';


export default class Item extends Reflux.Component {
	constructor(props) {
		super(props);

		this.store = MyStore;
		

	}
	
	componentDidMount(){
		Actions.initialState();
	}
	
	getTime(time) {
		let d = new Date(1000 * +time),
			dformat = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
		return(dformat);
	};
	
	getNumberCard(number) {
			return number.split('').map((item, index, arr) => (
				(index === 0 || index === 1 || index === 2 || index === 3 || index === arr.length-1 || index === arr.length-2 || index === arr.length-3 || index === arr.length-4 ) ? item : '*' 
			)).join('');
	};
	
	render() {
		const { orders, users } = this.state;
		const head = ['Transaction ID', 'User Info', 'Order Date', 'Order Amount', 'Card Number', 'Card Type', 'Location'];
		return (
			<div>
			
				<table className="user-list table table-striped">
				
					<thead>
						<tr>
							{head.map(item => (
									<th>{item}</th>								
							))}
						</tr>
					</thead>
					
					<tbody>
						{!!orders && orders.map(item => (
							<tr
								key={item.id}
								id={`order_${item.id}`}
							>
								<td>{item.transaction_id}</td>
								<td className="user-data">
									<Info 
										user_id={item.user_id}
										user={users[item.user_id-1]}
									/>
								</td>
								<td>{this.getTime(item.created_at)}</td>
								<td>&#36;{item.total}</td>
								<td>{this.getNumberCard(item.card_number)}</td>
								<td>{item.card_type}</td>
								<td>{item.order_country} ({item.order_ip})</td>
							</tr>
						))}
					</tbody>
					
    		</table>
					
			</div>
			 															 		

			
		)
	}
}
