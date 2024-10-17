import React, {useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  
  const [articles, setArticles] = useState([])
  const [loading,setloading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)
  // News.defaultProps = {
  //   category: PropTypes.string,
  // }
  News.propTypes = {
    category: PropTypes.string,
  }
 const capitalize = (str) => {
    return str.charAt(0).toUpperCase()+str.slice(1) ;
 }
  const updateNews = async() =>{
     props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=4760e465a2714319abe8129809743b56&page=1&pageSize=${props.pageSize}`;
     //setState({Spinner:true});
     setloading(true);
    let data = await fetch(url);
     props.setProgress(30)
    let parsedData = await data.json();
     props.setProgress(60)
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    //setPage(nextPage) 
    props.setProgress(100);
    setloading(false) 
  }
  useEffect(() => {
    document.title = `${capitalize(props.category)} - diviffairs`;
    updateNews();
  },[])
  // async componentDidMount(){
  //    updateNews();
  // }
   
   const fetchMoreData = async () => { 
    setloading(true)   
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${ props.category}&apiKey=4760e465a2714319abe8129809743b56&page=${nextPage}&pageSize=${ props.pageSize}`;
  
    let data = await fetch(url);
    let parsedData = await data.json();
  
    // Add the new articles to the existing ones
    setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      setPage(nextPage) 
      setloading(false)
  };

    return (
      <>
      <div className='container my-3'>
        <center><h3 className='text-center' style = {{marginBlock:'90px 25px', fontStyle:'bold'}}>Top Headlines - { capitalize(props.category)}</h3></center>
        <center>{ loading && <Spinner/>}</center>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
        <div className='row'>
          { articles.map((ele)=>{ return <div className="col-md-4" key = {ele.url}>
          <NewsItem title = {ele.title?ele.title.slice(0,45):""} desc = {ele.description?ele.description.slice(0,134):""} imgurl ={ele.urlToImage}
          newsUrl = {ele.url} author={ele.author} date = {ele.publishedAt} source = {ele.source.name}/>
          </div>
        })}
          </div></div>
          </InfiniteScroll>
          </div>
          </>
    )
  
}

export default News

/* code for prev and next buttons-instead of infinite scrolling
 <div className="container zd-flex justify-content-between" >
  <button disabled={ state.page<=1} type="button" className="btn btn-primary" onClick={ handlePrev}>&larr; Previous</button>
  <button disabled= { state.page+1>Math.ceil( state.totalResults/ props.pageSize)} type="button" className="btn btn-primary" onClick={ handleNext}>Next &rarr;</button>
  </div>
</div> 
handlePrev = async () => {
        console.log("Previous");
     setState({
        page:  state.page - 1
    });
      updateNews()
  }
   handleNext = async () => {
        console.log("Next");
     setState({
        page:  state.page + 1,
    });
     updateNews()
  }
*/
