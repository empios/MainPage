import React from "react";
import { ReactBingmaps } from 'react-bingmaps';
import {Container} from "react-bootstrap";


export default class FetchLocInfo extends React.Component {


    state = {
        loading: true,
        locations: null,
    };



    async componentDidMount() {
        const url = "https://placowki.herokuapp.com/places/all";
        const response = await fetch(url);
        const data = await response.json();
        const parseData = JSON.parse(JSON.stringify(data))
        this.setState({locations: parseData, loading: false});
    }


    drawAMap = () => {
        let tempArray = []
        for (let i = 0; i<this.state.locations.length; i++) {

            tempArray.push({
                "location": [this.state.locations[i].latitude, this.state.locations[i].longitude],
                "option": {color: 'red', title: this.state.locations[i].name, description: this.state.locations[i].owner}
            },)
        }

        return (
            <Container style={{height: 500, width: 1500}}>
            <ReactBingmaps
                bingmapKey = ""
                infoboxes = {tempArray}
            />
            </Container>


        )

    }

    render() {
        return <div style={{marginBottom: 30, marginTop: 30}}>
            <div class="text-center"><h1>Obecne placówki</h1></div>
            <br/>
            {this.state.loading || !this.state.locations ? (<div class="text-center"><h2>Prosimy poczekać ładuje informacje...</h2></div>) :
                (this.drawAMap())
            }
        </div>
    }
}
