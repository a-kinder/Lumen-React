import * as React from "react";
import {API} from '../scaffolding/API';
export class Root extends React.Component<undefined, undefined> {

	render() {
		return <div className="root">
	  	{API.getRoot( ()=>{
            console.log('this is callbak');
        })}
	  </div>
	}
}
export default Root;