import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { useStaticQuery, graphql } from 'gatsby';
import Logo from '../images/logo_jobboard.png';
import AniLink from "gatsby-plugin-transition-link/AniLink"



const Header = () => { 
    
  const {

      menu :  {
          edges: [{ node: menu }],
      } ,

  } = useStaticQuery(graphql`


  query HeaderQuery {

      
      menu: allWordpressMenusMenusItems(
        filter: { wordpress_id: { eq: 3 } }
      ) {
        totalCount
        edges {
          node {
            items {
              title
              url
              slug
            }
            name
          }
        }
      }
  }

`);


return( 

  <div className="navbar-fixed-top" id="navbar-fixed-top">
  <div className="container">
    <div className="row">
      
      <div className="col-sm-6">
        <div id="logo"><AniLink fade  to="/" className="navbar-brand" type="logo"><img type="logo" src={Logo} alt="Logo by Patrick Logo" /></AniLink></div>
      </div>
        
      <div className="col-sm-6">

      <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
               <AniLink fade  className="nav-link" to="/" ><b className="text-dark">Home</b></AniLink> 
             {menu.items.map((item, i) => (
               <AniLink fade  key={i} className="nav-link" to={item.slug} ><b className="text-dark">{item.title}</b></AniLink> 
             ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>  
    </div>
  </div>
  </div>
)

}

export default Header