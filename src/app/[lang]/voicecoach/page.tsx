import Image from "next/image";
import styles from "./page.module.css";

export default function Voicecoach() {
  return (
    <div>
      <h2 className="title d-flex align-items-center m-0">Voice coach</h2>
      <div className="container1 row text-center align-items-center">
        <div className="col-md-8 p-5">
          <h2 className="mt-2 fs-3">Why Chameleon?</h2>
          <p className="mt-4 bio ">about about about</p>
        </div>
        <Image
          className="img-fluid col-md-4 h-md-100 d-block mx-auto pe-5"
          src="/logo.png"
          alt="logo"
          width={400}
          height={400}
        />
      </div>
      <div className="p-0 m-0">
        <div className="row container2 px-md-5 d-flex align-items-center flex-wrap">
          <div className="col-md-4">
            <Image
              src="/freebird.png"
              alt="vocal freedom"
              className={`img-fluid p-4 d-block mx-auto ${styles.voicecoachImg}`}
              width={400}
              height={400}
            />
          </div>
          <div className="col-md-8">
            <div>
              <div>
                <h2 className="text-center px-4 px-md-0 pt-md-5">case 1</h2>
                <p className="text-md-center px-5 px-md-2 pb-4 fs-lg-5">
                  <br />
                  testimonial 1
                  <br /> <br />
                  testimonial 2
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-md-5 container1 d-flex align-items-center flex-wrap">
          <div className="col-md-8 order-2 order-md-1">
            <div>
              <h2 className="text-center px-4 px-md-0 pt-md-5">case 2</h2>
              <p className="text-md-center px-5 px-md-2">
                <br />
                testimonial 3
                <br />
                <br />
                testimonial 4
                <br />
              </p>
              <br />
            </div>
          </div>
          <div className="col-md-4 order-1 order-md-2">
            <Image
              src="/branchout.png"
              alt="rainbow chameleon"
              className={`img-fluid p-4 d-block mx-auto ${styles.voicecoachImg}`}
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="row px-md-5 container2 d-flex align-items-center flex-wrap">
          <div className="col-md-4">
            <Image
              src="/unicorn.png"
              alt="show off your singing"
              className={`img-fluid p-4 d-block mx-auto ${styles.voicecoachImg}`}
              width={400}
              height={400}
            />
          </div>
          <div className="col-md-8">
            <div>
              <h2 className="text-center px-4 px-md-0 pt-md-5">case 3</h2>
              <p className="text-md-center px-5 px-md-2 pb-5">
                <br />
                testimonial 5
                <br />
                <br />
                <br />
                testimonial 6
              </p>
            </div>
          </div>
        </div>
        <div className={`row ${styles.pricing} d-flex align-items-center`}>
          <div className="col-xl-9">
            <div>
              <h2 className="text-center pt-5 text-decoration-underline">
                pricing
              </h2>
              <ul className="ps-0 py-3 px-md-5 mx-5 prices">
                <li className="mainList">
                  price 1
                  <ul className="subList">
                    <li>menu 1</li>
                    <li>menu 2</li>
                  </ul>
                  <br />
                </li>
                <li className="mainList">price2</li>
                <ul className="subList">
                  <li>menu 3</li>
                  <li>
                    <small>
                      menu 4a
                      <a
                        href="https://wise.com/gb/currency-converter/jpy-to-usd-rate?amount=4500"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#6347ff",
                        }}
                      >
                        {" "}
                        menu4link
                      </a>
                      menu4b
                    </small>
                  </li>
                </ul>{" "}
                <br />
                <li className="mainList">
                  price3
                  <ul className="subList">
                    <li>menu5</li>
                    <li>menu6</li>
                  </ul>{" "}
                  <br />
                </li>
                <li className="mainList">
                  price4
                  <ul className="subList">
                    <li>menu7</li>
                  </ul>
                </li>
              </ul>
              <p className="text-start text-xl-center ms-md-5 ps-5 pe-2 me-5 px-md-5 pb-3 fw-bold">
                cta1
                <br className="d-lg-none" />
                cta2
              </p>
            </div>
          </div>
          <div className="col-md-3 d-none d-xl-block"></div>
        </div>
      </div>
    </div>
  );
}
