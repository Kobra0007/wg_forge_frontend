import React from 'react';
import Reflux from "reflux";

import MyStore from "../store";


export default class UserDetails extends Reflux.Component {
	constructor(props) {
		super(props);
	}

	
	getTime(time) {
		let d = new Date(1000 * +time),
			dformat = [d.getMonth()+1,
							d.getDate(),
						 	d.getFullYear()].join('/');
		return(dformat);
	};
	
	
	render() {
		
		const { user_info, company_info } = this.props;
		
		return (
				<div className="user-details">
						{user_info && (
								<React.Fragment>
										<p>Birthday: {this.getTime(user_info.birthday)}</p>
										<p><img src={user_info.avatar} width="100px" /></p>
										<p>Company: <a href={company_info.url} target="_blank">{company_info.title}</a></p>
										<p>Industry: {company_info.industry} / {company_info.sector}</p>
								</React.Fragment>
				
				)}

				</div>								 		

		)
	}
}
