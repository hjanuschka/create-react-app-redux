import React, {
    Component
} from 'react'

class Ressort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ressortPage: {layout: []}
    }
  }
  loadData() {
    var self = this;
    fetch("http://api.krone.at/v1/ressorts/page/xs/" + this.props.slug +  "?cors=true&domain=internal")
      .then(result => result.json())
      .then(function(d) {
        for(var i=0; i<30; i++) {
          d.layout.push(i);
        }
        self.setState({
          ressortPage: d
        })
      })
  }
  componentDidMount() {
    this.loadData();
  }
  render() {
        return (
          <div>
          <h1>Ressort {this.props.slug}</h1>

           {this.state.ressortPage.layout.map(article => (
            <img src="http://imgl.krone.at/scaled/1561241/v6b937c/630x356" data-src="http://imgl.krone.at/scaled/1561241/v6b937c/630x356" alt="(Bild: Privat, krone.tv, krone.at-Grafik)" style={{width: 320, height: 181}} className="img-responsive lazyloaded" />
           ))}
          </div>
        )

    }
}

export default Ressort;
