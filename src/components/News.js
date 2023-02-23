import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
//import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  
  const [articles,setarticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);

  const capitalizeFirstLetter=(string)=>{
     return string.charAt(0).toUpperCase()+string.slice(1);
  }
  

  const  updateNews=async ()=>
  {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=9563bf8cae8740bc8a4b8f6b6f25de9e&page=${
      page
    }&pageSize=${props.pageSize}`;
    
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    //console.log(parseData);
    props.setProgress(70);
    setarticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
    
    
  }
  useEffect(()=>{
    updateNews();
  },[])
  

  
  const handlePrev = async () => {
    console.log("prev");
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   props.country
    // }&category=${
    //   props.category
    // }&apiKey=9563bf8cae8740bc8a4b8f6b6f25de9e&page=${this.state.page - 1}${
    //   this.state.page - 1
    // }&pageSize=${props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState(
    //   { page: this.state.page - 1,
    //     articles: parseData.articles,
    //     loading:false
    //    });
    setPage(page-1);
    updateNews();
  };
  const handleNext = async () => {
    // if (
    //   this.state.page + 1 >
    //   Math.ceil(this.state.totalResults / props.pageSize)
    // ) {
    // } else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     props.country
    //   }&category=${
    //     props.category
    //   }&apiKey=9563bf8cae8740bc8a4b8f6b6f25de9e&page=${this.state.page - 1}${
    //     this.state.page + 1
    //   }&pageSize=${props.pageSize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parseData = await data.json();
      
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parseData.articles,
    //     loading:false
    //   });
    //}
    setPage(page+1);
    updateNews();
  };
  const fetchMoreData=async ()=>{
    
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=9563bf8cae8740bc8a4b8f6b6f25de9e&page=${
      page+1
    }&pageSize=${props.pageSize}`;
    //this.setState({loading:true});
    setPage(page+1);
    let data = await fetch(url);
    let parseData = await data.json();
    setarticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);

    //console.log(parseData);
    
  }

 

  
    return (
      <div className="container my-3" >
        <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px',color: props.mode==='dark'?'white':'black'}}>NewsMafia - Top HeadLines from {capitalizeFirstLetter(props.category)}</h1>
        {/*{this.state.loading &&<Spinner/>}*/}
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length!==totalResults}
        loader={<Spinner/>}>
        <div className="row" >
          { articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}  >
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url} author={element.autor} date={element.publishedAt} source={element.source.name} mode={props.mode}
                />
                
              </div>
              
              
            );
          })}
          
        </div>
        </InfiniteScroll>
       
      </div>
    );
  }


News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
//  News.PropTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };
export default News;
