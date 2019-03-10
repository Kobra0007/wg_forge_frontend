import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Table } from './components';

export default class Main extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div style = {{margin: "auto", width: "80%"}}>
					<header>
							<h1>Header</h1>
					</header>
						
					<h4>content</h4>
					<p>Vanya</p>
					<Table/>

					<footer>
						<p>Copyright© 2018 Your Company Name, All rights reserved</p>
					</footer>
				</div>
		)
	}
}