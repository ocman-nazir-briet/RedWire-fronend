import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCustomers } from "../../actions/adminActions";
import { Accordion, Icon, Button } from "semantic-ui-react";
import { getContrastRatio } from "@mui/material";
const Customers = () => {
  const dispatch = useDispatch();
  const [activeIndex, setactiveIndex] = useState(null);
  const customers = useSelector((state) => state.allCustomers);
  useEffect(() => {
    if (!customers.isSuccess && !customers.isError) {
      dispatch(getCustomers());
    } else {
      console.log("GET Customers", customers);
    }
  }, [customers]);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setactiveIndex(newIndex);
  };
  return (
    <div style={{ overflow: "scroll", maxHeight: "80vh" }}>
      <h2 style={{ textDecoration: "underline" }}>
        <i>All Customers</i>
      </h2>
      <br />
      <Accordion styled fluid>
        {customers &&
          customers.data &&
          customers.data.users &&
          customers.data.users.map((researcher, idx) => (
            <>
              <Accordion.Title
                key={researcher._id}
                active={activeIndex === idx}
                index={idx}
                onClick={handleClick}>
                <h2>
                  <Icon name="dropdown" />
                  {researcher.name.charAt(0).toUpperCase() +
                    researcher.name.slice(1)}
                </h2>
              </Accordion.Title>
              <Accordion.Content key={idx} active={activeIndex === idx}>
                <p>
                  <strong>EMAIL: </strong>
                  {researcher.email}
                </p>
                <p>
                  <strong>Programs Created: </strong>
                  {researcher.createdPrograms.length}
                </p>
                <Button color="red">Suspend</Button>
              </Accordion.Content>
            </>
          ))}
      </Accordion>
    </div>
  );
};

export default Customers;
