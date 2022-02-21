import React, {Component} from "react";
import 'whatwg-fetch';

class Series extends Component {
    state = {
        series: []
      }
      
    componentDidMount() {
        fetch('http://api.tvmaze.com/search/shows?q=Vikings')
          .then(res => res.json())
          .then(json => this.setState({series: json}))
    }
    
    render() {
        return (
            <div>
                The length of the series array is { this.state.series.length }.
            </div>
        )
    }
}

export default Series;