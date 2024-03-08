import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../src/styles/produit.css';
import Logo from '../../src/images/pokemon_article.png';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Pokemon(){

    return (
        <div className="Test">
        <div class="sticky" >
        </div>
      <div class="container"><label>Pokédex</label></div> 
      <div class="search_bar"><Button variant="info" id ="search-btn"> Rechercher </Button></div> 
     <Row xs={1} md={4} className="g-4">
       {Array.from({ length: 4 }).map((_, idx) => (
         <Col key={idx}>
           <Card>
             <Card.Img variant="top" src={Logo} />
             <Card.Body>
             <div class="card_footer">
               <Card.Title>Pikatchu</Card.Title>
               <svg
                   fill="currentColor"
                   viewBox="0 0 16 16"
                   height="1em"
                   width="1em"
               >
                 <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z" />
               </svg>
              </div>
               <div class="card_footer">
               <div  class="badge_"> 
                <Badge bg="warning" text="white" > electric </Badge></div> 
               <div  class="badge_"> 
               <Badge bg="warning" text="white"> electric </Badge></div> 
               </div>
             </Card.Body>
            
           </Card>
         </Col>
       ))}
     </Row>
 
       </div>
    );
}

export default Pokemon;
