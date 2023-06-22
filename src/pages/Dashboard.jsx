import Layout from "../Layout";
import Section from "../components/Section";
import SubHeader from "../components/SubHeader";
import Card from "../components/Card";
import Table from "../components/table/Table";
import THead from "../components/table/THead";
import TBody from "../components/table/TBody";
import TRow from "../components/table/TRow";
import FilterSelect from "../components/table/FilterSelect";
import ModalConfirmationDelete from "../components/table/ModalConfirmationDelete";
import Flex from "../components/layout/Flex";
import { useEffect, useState } from "react";
import CreateModal from "../components/table/CreateModal";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const Dashboard = () => {
  const [dataTemplate, setDataTemplate] = useState([]);
  const [allPage, setAllPage] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const GetAllDataTemplate = () => {
    axios
      .get("http://localhost:8000/api/get-all-company-template?page=2")
      .then(function ({ data }) {
        console.log(data);
        setDataTemplate(data.data);
        setAllPage(data.links);
        setCurrentPage(data.current_page);
        setNextPage(data.next_page_url);
        setPreviousPage(data.prev_page_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    GetAllDataTemplate();
  }, []);

  // console.log(allPage, "ini all page");

  return (
    <Layout>
      <SubHeader
        height="100px"
        rounded="8px"
        image="dashboard-md-icon.svg"
        title="Dashboard"
        content="Welcome to Cube-x CSS Generator"
      />

      <Section>
        <Card>
          <Flex className="mb-30 justify-content-between align-items-center">
            <Flex items={"center"} className="gap-5">
              <FilterSelect setData={setDataTemplate} />
            </Flex>
            <CreateModal setData={setDataTemplate} />
          </Flex>
          <Table>
            <THead>
              <TRow>
                <th>
                  <button>
                    <div className="d-flex gap-5 align-items-center">
                      <span>No</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    </div>
                  </button>
                </th>
                <th>
                  <button>
                    <div className="d-flex gap-5 align-items-center">
                      <span>Code</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    </div>
                  </button>
                </th>
                <th>
                  <button>
                    <div className="d-flex gap-5 align-items-center">
                      <span>Template</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    </div>
                  </button>
                </th>
                <th>
                  <button>
                    <div className="d-flex gap-5 align-items-center">
                      <span>Company</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    </div>
                  </button>
                </th>
                <th width="300px" className="text-center">
                  Action
                </th>
              </TRow>
            </THead>
            <TBody>
              {dataTemplate.length != 0 ? (
                dataTemplate.map((data, index) => (
                  <TRow key={index}>
                    <td>{index + 1}</td>
                    <td>{data.code}</td>
                    <td>
                      <div className="template-image">
                        <img
                          src={`template/${data.template}.png`}
                          alt="smartadmin"
                          className="template-image"
                        />
                        <p>{data.template}</p>
                      </div>
                    </td>
                    <td>{data.company_name}</td>
                    <td>
                      <div className="d-flex justify-content-center gap-5">
                        <button
                          className="btn btn-primary"
                          style={{ width: "100px" }}
                        >
                          Edit
                        </button>
                        <ModalConfirmationDelete
                          company={data.company}
                          code={data.code}
                          templateName={data.template.name}
                          templateImage={data.template.image}
                        />
                      </div>
                    </td>
                  </TRow>
                ))
              ) : (
                <TRow>
                  <td colSpan="5">
                    <div className="d-flex justify-content-center">
                      {/* <Spinner
                        animation="border"
                        variant="dark"
                        style={{ width: "100px", height: "100px" }}
                      /> */}
                      <div className="spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </td>
                </TRow>
              )}
            </TBody>
          </Table>
          <Flex className="justify-content-between">
            <div>Show 5 of 5</div>
            <Pagination
              page={allPage}
              setData={setDataTemplate}
              setCurrent={setCurrentPage}
              setAll={setAllPage}
              setNext={setNextPage}
              setPrevious={setPreviousPage}
              currentPage={currentPage}
            />
          </Flex>
        </Card>
      </Section>
    </Layout>
  );
};

export default Dashboard;

const Pagination = (props) => {
  console.log("ini current page", props.currentPage);
  console.log("ini all page", props.page);
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
