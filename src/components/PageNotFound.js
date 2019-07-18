import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Button, Card, CardHeader, CardBody, CardText } from 'reactstrap';


const PageNotFound = () => (
  <div>
  	<Col sm="12" md={{ size: 6, offset: 3 }}>
  		<Card>
	    	<CardHeader>404 Page Not Found</CardHeader>
	    	<CardBody>
	    	<CardText>I'm Sorry The Page You're Looking For Is Not Available</CardText>
			<Link to='/'><Button>Go Back Home</Button></Link>
	    	</CardBody>
    	</Card>
   	</Col>
  </div>
)



export default (PageNotFound)