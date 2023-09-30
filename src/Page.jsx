import { Banner } from "./Banner";
import { Heading } from "./Heading";
import { Navbar } from "./Navbar";
import { AddSubject } from "./AddSubject";
import { DisplaySubject } from "./DisplaySubject";

export const Page = ({ children }) => {
  function removeContainerFluid() {
    var width = window.innerWidth;
    var mainContainer = document.getElementById("main-container");

    if (width <= 576) {
      mainContainer.classList.remove("container-fluid");
    } else {
      mainContainer.classList.add("container-fluid");
    }
  }

  window.addEventListener("load", removeContainerFluid);
  window.addEventListener("resize", removeContainerFluid);

  return (
    <>
      <Banner />
      <div className="container-fluid" id="main-container">
        <section className="main-section py-4 mb-5">
          <Heading />
          <Navbar />
          <AddSubject />
          <DisplaySubject />
          <AddSubject />
          <DisplaySubject />
        </section>
      </div>
    </>
  );
};
