import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      assets: [],
      isFetchingAssets: false,
      isAtBottom: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    
    
    //conole log test to make sure scroll is working

    console.log(this.state.isAtBottom);
  

  }
  
  //when component mounts, call to import first pictures

  componentWillMount() {
    this.fetchAssets()
  }

  //after componet mounts, start listening for when the app scrolls to the bottom of page

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
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
    
    if (windowBottom >= docHeight) {
      this.setState({
        isAtBottom: true,
      });

      //second console log to verify scroll listening works properly

      console.log(this.state.isAtBottom);

      this.fetchAssets();


    } else {
      this.setState({
        isAtBottom: false,
      });


      //third console log to make sure state gets changed back if app is no loger at the bottom of page

      console.log(this.state.isAtBottom);


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


  //render methods

  // render() {
  //   return (
  //     <div>
  //       <h1 className='HomepageHeader'>F-nstagram</h1>
  //       {this.state.isFetchingAssets ? this.renderLoadingState() : this.renderAssets()}
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        <h1 className='HomepageHeader'>F-nstagram</h1>
        {this.renderAssets()}
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
            <img className='pics' src={asset.image} />
          </li>
        ))}
      </ul>
    )
  }
}

export default App;