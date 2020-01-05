//your code here
// class Comment extends React.Component {
//     render () {
//         return (
//         <div className="comment">
//             {this.props.commentText}
//         </div>
        
//         )
//     }
// }




import React, { Component } from 'react';

export default class Comment extends Component {
	render() {
		return <div className="comment">{this.props.commentText}</div>;
	}
}