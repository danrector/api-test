import React, {Component} from 'react';
import {debounce} from 'throttle-debounce';

class App extends Component {
  constructor() {
    super();
    this.handleScroll = debounce(500, this.handleScroll);
    this.state = {
      assets: [],
      isFetchingAssets: false,
      lightboxAsset: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }
  
  //when component mounts, call to import first pictures

  componentWillMount() {
    this.fetchAssets()
  }

  //after componet mounts, start listening for when the app scrolls to the bottom of page

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);


// APP TEST 1
//
//


    console.log(this, 'THIS IS THE API TEST');
  }

  //if component unmounts, stop listening

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  //method to listen for app reaching end of page

  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight && !this.state.isFetchingAssets) {
      this.fetchAssets();
    } 
  }



  //method to fetch assets

  fetchAssets() {

    // Set a flag so that we know if we are loading assets
    // in the render function. Use this to show a loading spinner
    // or 'Loading...' text.

    this.setState({isFetchingAssets: true});


    // Fetch the assets, then cache the assets in state
    // Set the loading flag to false
    
    fetch('http://localhost:8081/album/123/assets')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          assets: this.state.assets.concat(responseJson.FAKE_DATA),
          isFetchingAssets: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  //clicking functionality

// ON CLICK TEST
//
//


  handleClick(asset) {
    this.setState({lightboxAsset: asset});

    console.log(this.state.lightboxAsset.id, this.state.lightboxAsset.url, 'THIS IS THE CLICK AN ASSET TEST');
  }


  //render methods

  render() {
    return (
      <div>
        <h1 className='HomepageHeader'>Fake-Instagram</h1>
        {this.renderAssets()}
        {this.state.lightboxAsset && this.renderLightBox()}
        {this.state.isFetchingAssets && this.renderLoadingState()}
      </div>
    );
  }
  
  //loading screen

  renderLoadingState() {
    return <span>Loading...</span>
  }

  //main app screen

  renderAssets() {
    return (
      <ul className="grid">
        {this.state.assets.map(asset => (
          <li>
            <img 
              className='pics' 
              src={asset.url} 
              onClick={
                this.handleClick.bind(null, asset)
              }  
            />
          </li>
        ))}
      </ul>
    )
  }


  //lightbox

  //add day counter

  renderLightBox() {
    return (
      <div className='lightBoxContainer'>
        <div className='lightBoxDiv'>
          <img
            className='lightBoxImage' 
            src={this.state.lightboxAsset.url}
          />
          <div className='lightBoxText'>
            <img
              className='avatarPic' 
              src={this.state.lightboxAsset.user.avatar}
            />
            <h1>{this.state.lightboxAsset.username}</h1>
            <p>{this.state.lightboxAsset.hearts} hearts</p>
            <p className='lightBoxComments'>
              <span className='LightBoxUserName'>{this.state.lightboxAsset.username + ' '}</span>
              {this.state.lightboxAsset.caption}
            </p>

          </div>
        </div>
      </div>
    )
  }
}

export default App;