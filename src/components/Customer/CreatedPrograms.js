import React, { useEffect, useState } from "react";
import {
  Container,
  Loader,
  Table,
  Dropdown,
  Button,
  Icon,
} from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadCreatedPrograms,
  deleteProgram,
  clearDeletedProgram,
  updateProgram,
  getSecurityResearchers,
} from "../../actions/customerActions";
import MyModal from "../MyModal";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const CreatedPrograms = () => {
  const programs = useSelector((state) => state.createdPrograms);
  const deletedProgram = useSelector((state) => state.deleteProgram);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(loadCreatedPrograms());
  }, [
    programs.data && programs.data.data && programs.data.data.results,
    deletedProgram.isSuccess,
  ]);
  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do delete this program?",
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(deleteProgram(id)),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };
  if (programs.isLoading) return <Loader active />;
  if (programs.isError) return <h3>{programs.errorMessage}</h3>;
  return (
    <Container>
      <h4>All Created Programs</h4>
      {!programs.isSuccess === true ? <Loader active /> : null}
      {programs.isSuccess && (
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Sr #.</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Creation Date</Table.HeaderCell>
              <Table.HeaderCell>Approval Status</Table.HeaderCell>
              <Table.HeaderCell>Visiblity</Table.HeaderCell>
              <Table.HeaderCell>Enrolled Researchers</Table.HeaderCell>
              <Table.HeaderCell>Invited Researchers</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {programs.data.program.reverse().map((program, index) => {
              return (
                <Table.Row
                  key={program._id}
                  onClick={() =>
                    history.push({
                      pathname: "/customer/createProgram",
                      program,
                    })
                  }>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{program.title}</Table.Cell>
                  <Table.Cell>{program.date}</Table.Cell>
                  <Table.Cell>
                    {program.isApproved ? "Yes" : "Pending"}
                  </Table.Cell>
                  <Table.Cell>
                    {program.ispublic ? "Public" : "Private"}
                  </Table.Cell>
                  <Table.Cell>{program.enrolled.length}</Table.Cell>
                  <Table.Cell>{program.invited.length}</Table.Cell>
                  <Table.Cell>
                    <Dropdown text="Actions">
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() =>
                            history.push({
                              pathname: "/customer/createProgram",
                              program,
                            })
                          }>
                          {" "}
                          <Icon name="add" color="green" />
                          Update Program
                        </Dropdown.Item>

                        <Dropdown.Item
                          disabled={deletedProgram.isLoading}
                          onClick={() => handleDelete(program._id)}>
                          <Icon name="delete" color="red" />
                          Delete program
                        </Dropdown.Item>
                        <Dropdown.Item disabled={!program.isApproved}>
                          <MyModal
                            component="invite-researchers"
                            header="Invite Researchers"
                            programId={program._id}>
                            <Dropdown.Item>
                              <Icon name="mail" />
                              Invite Researchers
                            </Dropdown.Item>
                          </MyModal>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      )}
    </Container>
  );
};

export default CreatedPrograms;
