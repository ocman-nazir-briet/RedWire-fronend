import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import InviteResearchers from "./Customer/InviteResearchers";
function MyModal(props) {
  const {
    component,
    header,
    data,
    color,
    type,
    name,
    size,
    action,
    programId,
  } = props;
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <Modal
      closeOnDimmerClick={false}
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
        props.children ? (
          props.children
        ) : (
          <Button color={color} size={size} fluid>
            <Icon name="add" />
            {header}
          </Button>
        )
      }
      open={open}
      size="tiny">
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>
        {console.log("COMPONENT", component)}
        {component === "invite-researchers" && (
          <InviteResearchers programId={programId} toggleModal={toggleModal} />
        )}
      </Modal.Content>
    </Modal>
  );
}

export default MyModal;
