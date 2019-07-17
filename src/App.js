import React from "react";
import { Pagination, PageLink } from "./components/Pagination";
import "./pagination.css";
class App extends React.Component {
  componentDidMount() {
    var pag = document.getElementsByClassName("pag")[0];
    var pageLinks = pag.getElementsByTagName("button");
    console.log("pag: ", pag);
    console.log("pageLinks: ", pageLinks);
    for (var i = 0; i < pageLinks.length; i++) {
      pageLinks[i].addEventListener("click", function() {
        pag.getElementsByClassName("active")[0].classList.remove("active");
        this.classList.add("active");
        console.log("added", this);
        console.log("all page links:", pageLinks);
      });
    }
  }

  render() {
    return (
      <div>
        <Pagination className="pag">
          <PageLink>First</PageLink>
          <PageLink>1</PageLink>
          <PageLink>2</PageLink>
          <PageLink className="active">3</PageLink>
          <PageLink>4</PageLink>
          <PageLink>5</PageLink>
          <PageLink>Last</PageLink>
        </Pagination>
      </div>
    );
  }
}

export default App;
