import React from "react";
import Reflux from "reflux";

import MyStore from "../store";
import Actions from "../actions";

import UserDetails from './UserDetails';

class Info extends Reflux.Component {
	constructor(props) {
		super(props);
		this.store = MyStore;

		this.state = {
			is_user_info_show: false
		};

	}
	
	
	btnClick(id){
			this.setState({is_user_info_show: !this.state.is_user_info_show});
	}
	
	getUserName( user ) {
//		console.log(user)
	 return user.gender == 'Male' ?
		 `Mr. ${user.first_name} ${user.last_name}` : 
		user.gender == 'Female' ?
		 `Ms. ${user.first_name} ${user.last_name}`	: null
	}

	render() {
		
		const { user_id, user } = this.props;
		const { is_user_info_show, companies } = this.state;
		
		return (
			<React.Fragment>
					{user && (
							<React.Fragment>


									<a href="#" onClick={(user_id) => this.btnClick(user_id)} style={{cursor: 'pointer'}}>
											{this.getUserName(user)}
									</a>
									{is_user_info_show && 
										<UserDetails 
												user_info={user}
												company_info={companies[user.company_id -1 ]}
										/>		
									}
											
							</React.Fragment>

					)}

			</React.Fragment>
		
		)
	}
};

export default Info;