import React, {Fragment} from "react";
import ReactDatatable from '@ashvin27/react-datatable';
import {MDBContainer} from "mdbreact";

export default class FetchCarInfo extends React.Component{

    state = {
        loading: true,
        cars: null,
    };


    async componentDidMount() {
        const url = "https://pkowaleckicarsapi.herokuapp.com/allVechicles";
        const response = await fetch(url);
        const data = await response.json();
        const parseData = JSON.parse(JSON.stringify(data))
        this.setState({cars: parseData, loading: false});

    }

    async moreInfo(record, index) {
        const url = "https://pkowaleckicarsapi.herokuapp.com/getVechicleDetails/" + (index+1);
        const response = await fetch(url);
        const data = await response.json();
        const parseData = JSON.parse(JSON.stringify(data))
        alert(JSON.stringify("Typ: "+parseData.body + "  Paliwo: " + parseData.fuelType+ "  Poj.Silnika: " + parseData.engineCapacity+ "  Konie mechniczne: " + parseData.enginePower+
            " Rok produkcji: " + parseData.prodYear+ "  Kraj produkcji: " + parseData.countryProd+ "  Kolor: " + parseData.colour+ "  Vin: " + parseData.vin+ "  Zużycie: " + parseData.fuelUsage+
            "  Skrzynia biegów: " + parseData.gearBoxType+ "  Ilość biegów: " + parseData.gearBoxLevel))
    }
    doATable = () => {

        this.columns = [
            {
                key: "model",
                text: "Model"
            },
            {
                key: "mark",
                text: "Marka"
            },
            {
                key: "action",
                text: "Więcej informacji",
                cell: (record, index) => {
                    return (
                        <Fragment>
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={this.moreInfo.bind(this, record, index)}
                                style={{marginRight: '5px'}}>
                                Kliknij tutaj
                            </button>
                        </Fragment>
                    );
                }
            }
        ];



        this.config = {
            page_size: 10,
            length_menu: [10, 20, 50],
            show_filter: true,
            show_pagination: false,
            button: {
                excel: false,
                print: false
            }
        }
        return(
            <MDBContainer>
            <ReactDatatable
                config={this.config}
                records={this.state.cars}
                columns={this.columns}/>
            </MDBContainer>
        )
    }


    render() {
        return <div style={{marginBottom: 30}}>
            <div class="text-center"><h1>Nasze samochody w aktualnej ofercie</h1></div>
            <br/>
            {this.state.loading || !this.state.cars ? (<div class="text-center"><h2>Prosimy poczekać ładuje informacje...</h2></div>) :
                (this.doATable())
             }
        </div>
    }

}
