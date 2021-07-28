import react, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Link, Route } from 'react-router-dom'
import {removePost} from '../redux/action'
import Single from './Single';


class Main extends Component {

  constructor() {

    super();
    // this.state = {
    //   posts: [{

    //     id: "0",
    //     description: "beautiful landscape",
    //     imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
    //       "3919321_1443393332_n.jpg"
    //   }, {
    //     id: "1",
    //     description: "Aliens???",
    //     imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
    //   }, {
    //     id: "2",
    //     description: "On a vacation!",
    //     imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"

    //   }],
    //   screen: 'Photo'
    // }

    // this.removePhoto = this.removePhoto.bind(this)

  }

  // removePhoto(postRemoved) {
  //   console.log(postRemoved.description)
  //   this.setState((state) => ({
  //     posts: state.posts.filter(post => post !== postRemoved)
  //   }))
  // }

  // addPost(postSubmitted) {
  //   this.setState(state => ({
  //     posts: state.posts.concat([postSubmitted])
  //   }))
  // }


  // componentDidMount() {

  // }

  // componentWillUpdate(preProps, prevState) {
  //   console.log(prevState.posts)
  //   console.log(this.state)
  // }

  // componentDidMount(){
  //   this.props.removePost(1)
  // }



  render() {
    console.log(this.props)
    return (
      <div>
        <h1>
        <Link to='/'>PhotoWall</Link>
        </h1>
        <Route exact path="/" render={() => (
          <div>

            
            {/* <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} /> */}
            <PhotoWall {...this.props}/>
          </div>

        )} />

        <Route path="/AddPhoto" render={({history}) => (
          <AddPhoto {...this.props} onHistory={history}/>
        )} />

        <Route path="/single/:id" render={(params)=>(
          <Single{...params}/>
        )}/>
      </div>
        )
        }
  }






export default Main;