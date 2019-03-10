import React from "react";
import Reflux from "reflux";
import Actions from "./actions"

import users_data from '../data/users.json';
import companies_data from '../data/companies.json';
import orders_data from '../data/orders.json';


export default class MyStore extends Reflux.Store {
	constructor(props){
		super(props);
		
		this.state = {
			users: null,
			orders: null,
			companies: null,
			sorted: [
				name : true
			]			
		}
		this.listenables = Actions;
	}
	
//	onGetUserInfo(company_id){
//		const { users, companies } = this.state;
//		
//		let info = {};
//
////		let { first_name, last_name, gender, birthday, avatar, company_id } = users[user_id - 1];
//		if( !!company_id ) {
//				let { industry, url, title, sector } = companies[ company_id - 1 ];
////					info.first_name = first_name; 
////					info.last_name = last_name; 
////					info.gender = gender; 
////					info.birthday = birthday; 
////					info.avatar = avatar; 
////					info.company_id = company_id; 
//					info.industry = industry; 
//					info.url = url; 
//					info.title = title; 
//					info.sector = sector;
//		}
//		
//		this.setState({company_info: info})		
//	}
	
	onInitialState(){
			this.setState({
				users: users_data,
				orders: orders_data,
				companies: companies_data
			})
	}
	
	
//	onSortByName(type){
//		const isSorted = this.state.sorted[type];
//		let direction = isSorted ? 1 : -1;
//		console.log(this.state.users);
//		const sorted = this.state.users.concat([]).sort((a, b) => {
//    // чтобы сортировка всегда была одинаковой учтём все условия
//    // функция может вернуть 0, 1 или -1, в зависимости от возвращаемого
//    // значения метод массивов sort сделает свой выбор
//			if (a.name.first === b.name.first) { return 0; }
//			return a.name.first < b.name.first ? direction : direction * -1;
//  	});
//
//  // меняем порядок сортировки
//		this.state.sorted[type] = !isSorted;
//		this.setState({users:sorted});
//	}
//	
//	onReset(){
//		this.setState({users: this.initialData});
//	}
	
	onSwitch(){
		this.setState({is_user_info_show: !this.state.is_user_info_show});
	}


}