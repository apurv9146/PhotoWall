import { Component } from "react";
import react from 'react';

class AddPhoto extends Component {

constructor(){
    super()
    this.handleSubmit=this.handleSubmit.bind(this)
}
handleSubmit(event){
    event.preventDefault();
    const imageLink  = event.target.elements.link.value
    const Description = event.target.elements.description.value

    const post ={
        id:Number(new Date()),
        description:Description,
        imageLink:imageLink
    }

    if(imageLink && Description){
        this.props.addPost(post)
        this.props.onHistory.push('/')
    }
}

    render() {
        return (
            <div>
                <h1>PhotoWall</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Description" name ="description" />
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )

    }

}

export default AddPhoto;