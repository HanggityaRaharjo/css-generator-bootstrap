import Layout from "../Layout";
import Section from "../components/Section";
import SubHeader from "../components/SubHeader";
import Card from "../components/Card";
import Table from "../components/table/Table";
import THead from "../components/table/THead";
import TBody from "../components/table/TBody";
import TRow from "../components/table/TRow";

const Dashboard = () => {
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
          <Table>
            <THead>
              <TRow>
                <th>No</th>
                <th>Theme</th>
                <th>Template</th>
                <th>Company</th>
                <th width="300px" className="text-center">
                  Action
                </th>
              </TRow>
            </THead>
            <TBody>
              <TRow>
                <td>1</td>
                <td>0001</td>
                <td>
                  <div className="template-image">
                    <img
                      src="template/sbadmin.png"
                      alt="smartadmin"
                      className="template-image"
                      style={{}}
                    />
                    <p>SBAdmin</p>
                  </div>
                </td>
                <td>PT TRIKLIN REKATAMA</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-primary"
                      style={{ width: "100px" }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-primary"
                      style={{ width: "100px" }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </TRow>
              <TRow>
                <td>2</td>
                <td>0002</td>
                <td>
                  <div className="template-image">
                    <img
                      src="template/smartadmin.png"
                      alt="smartadmin"
                      className="template-image"
                      style={{}}
                    />
                    <p>Smart Admin</p>
                  </div>
                </td>
                <td>PT TRIKLIN REKATAMA</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-primary"
                      style={{ width: "100px" }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-primary"
                      style={{ width: "100px" }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </TRow>
            </TBody>
          </Table>
        </Card>
      </Section>
    </Layout>
  );
};

export default Dashboard;
