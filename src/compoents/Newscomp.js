import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class Newscomp extends Component {
  static defaultProps={
    country: "us",
    Pagesize : 12
  }
  static propTypes={
    country:propTypes.string,
    Pagesize: propTypes.number
  }
  constructor(props){
    super(props);
    
    this.state = {
      articles :[],
      loading: false,
      page:1,
      totalResults:0
    }
    document.title=this.props.category;
  }
  async componentDidMount(){
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d1c9023f66694dbd959387eea1663b17&pageSize=${this.props.Pagesize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedata= await data.json()
    this.setState({articles: parsedata.articles,totalResults:parsedata.totalResults,loading:false})
  }
  fetchMoreData =async()=>{
    this.setState({page: this.state.page +1})
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d1c9023f66694dbd959387eea1663b17&pageSize=${this.props.Pagesize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedata=await data.json()
    this.setState({articles:this.state.articles.concat(parsedata.articles),totalResults:parsedata.totalResults,loading:false})
  };
  // handleNextClick= async()=>{
  //        console.log("next");
  //        if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.Pagesize))){
  //         this.setState({loading:true});
  //        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d1c9023f66694dbd959387eea1663b17&page=${this.state.page + 1}&pageSize=${this.props.Pagesize}`;
  //        let data= await fetch(url);
  //        let parsedata= await data.json()
  //        console.log(parsedata);
  //       //  this.setState({articles: parsedata.articles})
  //        this.setState({
  //         page: this.state.page+1,
  //         articles: parsedata.articles,
  //         loading: false
  //        })
  // }}
  //  handlePreviousClick = async()=>{
  //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d1c9023f66694dbd959387eea1663b17&page=${this.state.page - 1}&pageSize=${this.props.Pagesize}`;
  //   this.setState({loading:true});
  //   let data= await fetch(url);
  //   let parsedata= await data.json()
  //   console.log(parsedata);
  //  //  this.setState({articles: parsedata.articles})
  //   this.setState({
  //    page: this.state.page-1,
  //    articles: parsedata.articles,
  //    loading :false
  //   })
  // }
  render() {
    return (
      <div className="container">
      <h2 className="text-center" style={{margin:'26px 0px'}}>NewsMonkey-Top Headlines</h2>
       {/* <div className="text-center">{this.state.loading && <Spinner/>}</div> */}
       <InfiniteScroll
       dataLength={this.state.articles?.length||0}
       next={this.fetchMoreData}
       hasMore={this.state.articles?.length||0!==this.state.totalResults}
       loader={<Spinner/>}
       >
      <div className="row md-3">
      {this.state.articles.map((element)=>{
          return <div className="col md-4" key={element.url}>
          <Newsitem title= {element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage}
          newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
      })}
      </div>
      </InfiniteScroll>
      {/* <div className="d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>previous</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.Pagesize)} type="button" className="btn btn-dark"onClick={this.handleNextClick} >next</button>
      </div> */}
      </div>
    )
  }
}

export default Newscomp