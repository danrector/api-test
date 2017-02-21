import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      assets: [],
      isFetchingAssets: false
    };
  }
  
  componentWillMount() {
    this.fetchAssets()
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