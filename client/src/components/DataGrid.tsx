import React, { Component } from "react";
import HeaderItem from './HeaderItem'; 
import RowItem from './RowItem'; 

interface DataGridProps { 
  name: string;
  url: string; 
}

interface DataGridState {
  datas: any[],
  loading: boolean,
  page: number,
  orderCol: string,
  orderWay: string
}

class DataGrid extends Component <DataGridProps, DataGridState> {
  api: string;
  header: string[];
  ordCol = '';
  ordDir = 'asc';
  pageL = 1;
  myscroll: any; //HTMLDivElement | null = null

  constructor(props: DataGridProps) {
    super(props);

    this.state = {
    datas: [],
      loading: false,
      page: 1,
      orderCol: '',
      orderWay: 'desc'
    }
    this.api = 'http://localhost:4000/users';
    this.header = [];
  }

  //Fetch the API
  getDatas() {
    this.setState({ loading: true });
    var urlB = this.props.url +'?limit=25&page='+ this.pageL +'&ordercol='+ this.ordCol +'&orderway='+ this.ordDir;
    fetch(urlB,
    {
      method: 'GET',
      headers : { 
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body:null
    })
    .then((response) => response.json())
    .then((response) => {
      this.setState({ datas: [...this.state.datas, ...response] });   
      this.loadHeader();
      this.pageL++;
      this.setState({ loading: false });
    })
    .catch(error => {
      alert('error'+ error.statusText );
      this.setState({ loading: false });
    });
  }

  loadHeader() {
    //do only one's
    if(this.header && this.header.length < 1) {
      this.header = Object.keys( this.state.datas[0] );
    }
  }

  componentDidMount() {
    //init the grid with data
    this.getDatas();

    //event detect for infinit scrolling
    this.myscroll.addEventListener("scroll", () => {
      if (
        this.myscroll.scrollTop + this.myscroll.clientHeight >=
        this.myscroll.scrollHeight
      ) {
        this.getDatas();
      }
    });
  }
    
  componentWillUnmount() {
  }

  //catch child order event
  updateOrder = (name: string):void => {
    //reset elements
    this.setState({ datas: [] });
    this.setState({ page: 1 });
    this.pageL = 1;

    //pickup and save the column and way to order
    if( this.ordCol === name ) {
      this.ordDir = this.ordDir === 'asc'?'desc':'asc';
    } else {
      this.ordDir = 'asc';
    }
    this.ordCol = name;

    //than display the new set
    this.getDatas();
  }

  render() {
    return (
      <div
        className="App"
        ref={myscroll => (this.myscroll = myscroll)}
        style={{ height: "420px", overflow: "auto" }}>
          
        <h1 className="App-title">{ this.props.name } Datas</h1>
        <table id="thegrids">
          <thead>
            <tr>
              {this.header.map((h) => {
                return <HeaderItem name={h} updateOrder={this.updateOrder} />;
              })} 
            </tr>
          </thead>
          <tbody>
            {this.state.datas.map(roow => 
              <tr>
                { this.header.map((val, ) => {
                  return  <RowItem key={ val } item={ roow[val] } />  ;
                })}
              </tr> 
            )}
          </tbody>
        </table>

        {this.state.loading
          ? <p className="App-intro">
            loading ...
            </p>
          : ""
        }
      </div>
    );
  }
}
    
    export default DataGrid;