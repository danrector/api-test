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
          assets: responseJson.data,
          isFetchingAssets: false,
        });
        console.log(responseJson, '111111');
      })
      .catch((error) => {
        console.error(error);
      });

      console.log(fetch('http://localhost:8081/album/123/assets'), '22222');
      console.log(this, '333333');
  }

  render() {
    return (
      <div>
        {this.state.isFetchingAssets ? this.renderLoadingState() : this.renderAssets()}
      </div>
    );
  }
  
  renderLoadingState() {
    return <span>Loading...</span>
  }
  
  renderAssets() {
    return (
      <ul>
        {this.state.assets.map(asset => (
          <li>
            <img src={asset.url} />
          </li>
        ))}
      </ul>
    )
  }
}

export default App;