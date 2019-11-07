import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'

class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            code: '',
            name: '',
            coordinates: {
                latitude: '',
                longitude: ''
            },
            address:''
        };
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        //Prevents the user from submitting an empty listing
        e.preventDefault();
        if (!(this.state.name.length && this.state.code.length)) {
            alert("Please enter a name and length, as these are required fields.");
        } else {
            const { addBuilding } = this.props;
            let value = {
                id: this.props.data.length+1,
                name: this.state.name,
                code: this.state.code,
                address: this.state.address.length,
                coordinates: {
                    latitude: this.state.coordinates.latitude.length,
                    longitude: this.state.coordinates.longitude.length
                }
            };
            addBuilding(value);
            this.setState({
                id: 0,
                code: '',
                name: '',
                address: '',
                coordinates: {
                    latitude: '',
                    longitude: ''
                }
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <Table variant="dark">
                        <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input
                                    name="name"
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Code:</td>
                            <td>
                                <input
                                    name="code"
                                    type="text"
                                    value={this.state.code}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>
                                <input
                                    name="address"
                                    type="text"
                                    value={this.state.address}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </td>

                        </tr>
                        <tr>
                            <td>Latitude:</td>
                            <td>
                                <input
                                    name="latitude"
                                    type="text"
                                    value={this.state.latitude}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Longitude:</td>
                            <td>
                                <input
                                    name="longitude"
                                    type="text"
                                    value={this.state.longitude}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </form>
                <Button
                    onClick={this.handleSubmit.bind(this)}
                    variant="dark"
                    className="custombutton"
                >
                    Add this listing to the list
                </Button>
            </React.Fragment>
        );

    }
}

export default AddBuilding;