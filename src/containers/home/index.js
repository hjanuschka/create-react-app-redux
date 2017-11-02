import React, {
    Component
} from 'react'
import SwipeableViews from 'react-swipeable-views';
import Ressort from '../../components/Ressort'

class Home extends Component {
    render() {
        return (
            <SwipeableViews>
            <SwipeableViews style={{height: 500}}>
                <Ressort slug="nachrichten" style={{height: 100}} />
            </SwipeableViews>
            <SwipeableViews  style={{height: 500}}>
                <Ressort slug="welt"/>
            </SwipeableViews>
            <SwipeableViews style={{height: 500}}>
                <Ressort slug="stars-society"  style={{minHeight: 100}}  />
            </SwipeableViews>
            </SwipeableViews>


        )

    }
}

export default Home;
