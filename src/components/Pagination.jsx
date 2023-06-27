import axios from "axios";
const Pagination = (props) => {
  const HandlePage = (url) => {
    axios
      .get(url)
      .then(function ({ data }) {
        props.setData(data.data);
        props.setAll(data.links);
        props.setCurrent(data.current_page);
        props.setNext(data.next_page_url);
        props.setPrevious(data.prev_page_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {props.page &&
            props.page.map((link, index) => (
              <li
                key={link.label}
                className={`page-item ${
                  props.currentPage == index ? "active" : ""
                }`}
              >
                <button
                  className="page-link "
                  onClick={() => HandlePage(link.url)}
                >
                  {link.label}
                </button>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
