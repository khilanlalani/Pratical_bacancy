import React from "react";

import { shipments } from "../data";


// function searchingFor(term) {
//   return function(x) {
//     return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
//   }
// }

class Shipments extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      prev: 0,
      next: 5,
      term: '',
      // dataArray: [],
      // id:[],
    }
    this.handlePaginate = this.handlePaginate.bind(this);
    // this.searchHandler = this.searchHandler.bind(this);
  }

  // componentDidMount = () => {
  //   if(shipments !== 0){
  //     this.setState({
  //       dataArray:shipments
  //     })
  //   }
  // }

  // renderInfo = () => {
  //   return this.state.dataArray.length !== 0 ? (
  //     this.state.dataArray.map((e) => {
  //       return (
  //         <>
  //         <tbody>
  //           {this.state.dataArray.map((value, key) =>
  //             <tr key={key}>
  //               <td>{value.id}</td>
  //               <td>{value.name}</td>
  //               {value.cargo.map((val, num) =>
  //                 <td>
  //                   <ul>
  //                     <li>Type : {val.type}</li>
  //                     <li>Description : {val.description}</li>
  //                     <li>Volume: {val.volume}</li>
  //                   </ul>
  //                 </td>
  //               )}
  //               {value.cargo.length < 2 ? <td></td> : ('')}
  //               <td>{value.mode}</td>
  //               <td>{value.type}</td>
  //               <td>{value.destination}</td>
  //               <td>{value.origin}</td>
  //               {value.services.map((val, num) =>
  //                 <td>
  //                   <ul>
  //                     <li>Type : {val.type}</li>
  //                     <li>Value : {val.value ? val.value : ""}</li>
  //                   </ul>
  //                 </td>
  //               )}
  //               {value.services.length < 2 ? <td></td> : ('')}
  //               <td>{value.status}</td>
  //               <td>{value.userId}</td>
  //             </tr>
  //           )}
  //         </tbody>

  //         </>
  //           );
  //         })

  //       ) : null
  // }



  handlePaginate(e, prev, next, i) {
    e.preventDefault();
    // console.log(i)
    this.setState({
      prev: prev,
      next: next
    })
  }

  // searchHandler(event) {
  //   // debugger
  //   this.setState({ term: event.target.value })
  // }


  render() {

    const pagination = () => {
      let page = Math.ceil(shipments.length / 5);
      let link = [];
      for (var i = 1; i <= page; i++) {
        let num = i;
        let prev = (i * 5) - 5
        let next = prev + 5
        link.push(<li className="page-item"><a className="page-link" href={() => false} onClick={(e) => this.handlePaginate(e, prev, next, num)}>{i}</a></li>)
      }
      return link;
    }
    console.log(this.state.prev, this.state.next)
    const data = shipments.slice(this.state.prev, this.state.next)
    const {term } = this.state;

    return (
      <React.Fragment>

        {/* <div className="searchArea">
          <input type="text" placeholder="Search..." name="info" onChange={this.searchHandler} value={this.state.search} />

        </div> */}
        <table className="table" border="0" cellSpacing="0" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Id </th>
              <th>Name</th>
              <th colspan="2">Cargo</th>s
              <th>Mode</th>
              <th>Type</th>
              <th>Destination</th>
              <th>Origin</th>
              <th colspan="2">Services</th>
              <th>Status</th>
              <th>User Id</th>
            </tr>
          </thead>
          {/* {this.renderInfo()} */}
          <tbody>
            {data.map((value, key) =>
              <tr key={key}>
                <td>{value['id']}</td>
                <td>{value['name']}</td>
                {value['cargo'].map((val, num) =>
                  <td>
                    <ul>
                      <li>Type : {val['type']}</li>
                      <li>Description : {val['description']}</li>
                      <li>Volume: {val['volume']}</li>
                    </ul>
                  </td>
                )}
                {value['cargo'].length < 2 ? <td></td> : ('')}
                <td>{value['mode']}</td>
                <td>{value['type']}</td>
                <td>{value['destination']}</td>
                <td>{value['origin']}</td>
                {value['services'].map((val, num) =>
                  <td>
                    <ul>
                      <li>Type : {val['type']}</li>
                      <li>Value : {val['value'] ? val['value'] : ""}</li>
                    </ul>
                  </td>
                )}
                {value['services'].length < 2 ? <td></td> : ('')}
                <td>{value['status']}</td>
                <td>{value['userId']}</td>
              </tr>
            )}
          </tbody>
        </table>
        <nav>
          <ul className="pagination">
            {pagination()}
          </ul>
        </nav>
      </React.Fragment>
    )
  }
}

export default Shipments;