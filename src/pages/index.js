import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import {  useStaticQuery, graphql } from 'gatsby';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import ReactHtmlParser from 'react-html-parser';
import Gallery from 'react-photo-gallery';



const IndexPage = () => { 

  const {

    slider :  {
      nodes: [{ acf: slider }],         
    } ,

    contentpage :  {
      nodes: [{ content: contentpage }],         
    } ,

    image :  {
      nodes: [{ acf: image }],         
    } ,
    
  } = useStaticQuery(graphql`

  query homeSliderRowQuery {

    slider: allWordpressAcfPages(filter: {wordpress_id: {eq: 2}}) {
      nodes {
        acf {
          home_gallery {
            button
            description
            title
            image {
              source_url
            }
          }
        }
      }
    }

    contentpage : allWordpressPage(filter: {wordpress_id: {eq: 2}}) {
      nodes {
        content
      }
    }

    image: allWordpressAcfPages(filter: {wordpress_id: {eq: 2}}) {
      nodes {
        acf {
          image {
            image {
              source_url
            }
          }
        }
      }
    }
    

  }
  
  `);

  var i = 0;
  
  var dataResult = [];

  for(i = 0; i < image.image.length; i++){

      dataResult.push({ 'src': image.image[i].image.source_url, 'width': 2, 'height': 2 });

  };

  console.log(dataResult);

return( 

  <PrimaryLayout>

    
  <Slider classNames={horizontalCss} autoplay={5000}>
   {slider.home_gallery.map((item, index) => (
      <div
        key={index}
        style={{ background: `url('${item.image.source_url}') no-repeat center center` }}
      >
        <div className="center">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button className="buttonclass">{item.button}</button>
        </div>
      </div>
    ))}
  </Slider>

  <div className="topcontainer home-container">


      { ReactHtmlParser(contentpage) }

      <div className="container">
      <div className="row">
        <div className="col-12">
        
          <Gallery photos={dataResult} />       
       
        </div>
      </div>  
    </div>
    <br/><br/>
         

  </div>

  </PrimaryLayout>

)

}


export default IndexPage

