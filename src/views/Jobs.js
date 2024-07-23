/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Button,
  Col,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import NormalHeader from "components/Headers/NormalHeader";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import Select from "react-select";
import Jobcard from "ui/Jobcard.js";
import JobModal from "ui/JobModal";
import { getJobs } from "helper/job_helper";
import { deleteJob } from "helper/job_helper";

const Jobs = () => {
  const [modalShow, setModalShow] = useState(false);
  const [allJobs, setAllJobs] = useState([]);
  const [toggler, setToggler] = useState(true);
  useEffect(() => {
    const fetchAllJobs = async () => {
      const response = await getJobs();
      setAllJobs(response.result);
    }
    console.log("called")
    fetchAllJobs()
  }, [modalShow, toggler])

  const deleteHandler = async (id) => {
 
    const response = await deleteJob(id);
    console.log(response);
    setToggler(prev => !prev)

  }
  const ALLJOBS = allJobs.map((item, index) => {

    return <tr key={index}>
      <td>{index + 1}</td>
      <td>{`Job ${index + 1}`}</td>
      <td>{item.templateName}</td>
      <td>{"Not Assigned"}</td>
      <td>{item.imageType ? item.imageType : "Disabled"}</td>
      <td className="text-right">
        <UncontrolledDropdown>
          <DropdownToggle
            className="btn-icon-only text-light"
            href="#pablo"
            role="button"
            size="sm"
            color=""
            onClick={(e) => e.preventDefault()}
          >
            <i className="fas fa-ellipsis-v" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-arrow" right>
            <DropdownItem >Assign</DropdownItem>
            <DropdownItem >Edit</DropdownItem>
            <DropdownItem style={{ color: "red" }} onClick={() => deleteHandler(item.id)}>Delete</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </td>
    </tr>
  })
  return (
    <>
      <NormalHeader />
      {/* Page content */}

      <Container className="mt--7" fluid >

        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <div className="d-flex justify-content-between">
                  <h3 className="mt-2">All Jobs</h3>
                  <Button className="" color="primary" type="button" onClick={() => { setModalShow(true) }} >
                    Add Job
                  </Button>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush mb-5" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Sno.</th>
                    <th scope="col">Job Name</th>
                    <th scope="col">Template</th>
                    <th scope="col">Operator </th>
                    <th scope="col">Image</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody style={{ minHeight: "100rem" }}>

                  {ALLJOBS}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>

      <JobModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Jobs;
