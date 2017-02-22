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
    console.log(this.state.isAtBottom);
  }
  
  componentWillMount() {
    this.fetchAssets()
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

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
      console.log(this.state.isAtBottom);
    } else {
      this.setState({
        isAtBottom: false,
      });
      console.log(this.state.isAtBottom);
    }
  }

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
          assets: responseJson.FAKE_DATA,
          isFetchingAssets: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h1 className='HomepageHeader'>F-nstagram</h1>
        {this.state.isFetchingAssets ? this.renderLoadingState() : this.renderAssets()}
      </div>
    );
  }
  
  renderLoadingState() {
    return <span>Loading...</span>
  }
  
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