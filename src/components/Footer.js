import React from "react";
import "./Footer.css"
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
	 Back to Top
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Get to Know Us</Heading>
			<FooterLink href="#">About Us</FooterLink>
			<FooterLink href="#">Careers</FooterLink>
			<FooterLink href="#">Press Releases</FooterLink>
		</Column>
		<Column>
			<Heading>Connect With Us</Heading>
			<FooterLink href="#">Facebook</FooterLink>
			<FooterLink href="#">Instagram</FooterLink>
			<FooterLink href="#">Twitter</FooterLink>
					</Column>
		<Column>
			<Heading>MAke MOney With Us</Heading>
			<FooterLink href="#">Sell Under Amazon Acclerator</FooterLink>
			<FooterLink href="#">Amazon Global Selling</FooterLink>
			<FooterLink href="#">Become an Affiliate</FooterLink>
			<FooterLink href="#">Fulfilment by Amazon</FooterLink>
		</Column>
		<Column>
			<Heading>Let Us help you</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				COVID-19 and Amazon
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
			  Your Account
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Return Centre
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Help
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
