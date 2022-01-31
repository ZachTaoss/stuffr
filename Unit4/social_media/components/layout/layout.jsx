import { Container } from "semantic-ui-react";
import HeadTag from "./HeadTag";
import Navbar from "./navbar";
import nprogress from "nprogress"
import Router from "next/router"

const Layout = ({children}) => {

    Router.onRouteChangeStart = () => nprogress.start();
    Router.onRouteChangeComplete = () => nprogress.done();
    Router.onRouteChangeError = () => nprogress.done();
  return <>
  <HeadTag></HeadTag>
  <Navbar></Navbar>
  <Container text style = {{ paddingTop:"1rem" }}>{children}</Container>
  </>;
};

export default Layout;
