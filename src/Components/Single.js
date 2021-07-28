import React,{Component} from 'react';
class Single extends Component
{
    render()
    {
        console.log(this.props.match.params.id)
        return<div className="single-photo">



        </div>
    }

}

export default Single;