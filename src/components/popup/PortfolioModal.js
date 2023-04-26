import Modal from "./Modal";
import store from "../../store";

const PortfolioModal = ({ item, close, open }) => {
  const portfolioItem = store.portfolio[item];
  return (
    <Modal close={close} open={open}>
      <div className="portfolio_popup_details">
        <div className="top_image">
          <img src={"img/portfolio/"+ portfolioItem.img +"/1.jpg"} alt="" />
          <div className="main" data-img-url={"img/portfolio/"+ portfolioItem.img +"/1.jpg"} />
        </div>
        <div className="portfolio_main_title">
          <h3>{portfolioItem.tit}</h3>
          <span>
            <a href={portfolioItem.url}>{portfolioItem.url}</a>
          </span>
          <div />
        </div>

        <div className="text">
          <p>{ portfolioItem.des }</p>
          <p> Built By: &nbsp;
            {
              portfolioItem.laf.map((ele, i)=>
                <span>{ ele+ ", " }</span>
              )
            }
          </p>
        </div>
        <div className="additional_images">
          <ul className="gallery_zoom">
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src={"img/portfolio/"+ portfolioItem.img +"/1.jpg"} alt="" />
                  <div className="main" data-img-url={"img/portfolio/"+ portfolioItem.img +"/1.jpg"} />
                  <a
                    className="edrea_tm_full_link zoom"
                    href={"img/portfolio/"+ portfolioItem.img +"/1.jpg"}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src={"img/portfolio/"+ portfolioItem.img +"/2.jpg"} alt="" />
                  <div className="main" data-img-url={"img/portfolio/"+ portfolioItem.img +"/2.jpg"} />
                  <a
                    className="edrea_tm_full_link zoom"
                    href={"img/portfolio/"+ portfolioItem.img +"/2.jpg"}
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src={"img/portfolio/"+ portfolioItem.img +"/3.jpg"} alt="" />
                  <div className="main" data-img-url={"img/portfolio/"+ portfolioItem.img +"/3.jpg"} />
                  <a
                    className="edrea_tm_full_link zoom"
                    href={"img/portfolio/"+ portfolioItem.img +"/3.jpg"}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};
export default PortfolioModal;
