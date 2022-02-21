import React, {Component} from "react";
import 'whatwg-fetch';
import SeriesList from "../../components/SeriesList";

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
                <SeriesList list = {this.state.series} />
            </div>
        )
    }
}

export default Series;