import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding'
import data from "./data/data";
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      statedata: data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })

  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    });
  }

  addBuilding(listing_to_add) {
    //Get the length of data, make the ID one longer
    listing_to_add.id = this.props.data.length+1;
    //Put the data in the data state of the page.
    this.state.statedata.push(listing_to_add);
    //Reflect those changes
    this.setState({ data: this.state.data });
  }

  render() {
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
        filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
          </div>
          <div className="columnmycolumn">
              <ViewBuilding
                  data={this.props.data}
                  selectedBuilding={this.state.selectedBuilding}
                  onChange={this.selectedUpdate.bind(this)}
              />
          </div>
            <div>
              <AddBuilding
                  data={this.props.data}
                  addBuilding={this.addBuilding.bind(this)}
              />
            </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
