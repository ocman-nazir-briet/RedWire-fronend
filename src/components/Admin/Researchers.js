import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getResearchers } from "../../actions/adminActions";
import { Accordion, Icon, Button } from "semantic-ui-react";
import { getContrastRatio } from "@mui/material";
const Researchers = () => {
  const dispatch = useDispatch();
  const [activeIndex, setactiveIndex] = useState(null);
  const researchers = useSelector((state) => state.allResearchers);
  useEffect(() => {
    if (!researchers.isSuccess && !researchers.isError) {
      dispatch(getResearchers());
    } else {
      console.log("GET RESEARCHERS", researchers);
    }
  }, [researchers]);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setactiveIndex(newIndex);
  };
  return (
    <>
      <h2 style={{ textDecoration: "underline" }}>
        <i>All Security Researchers</i>
      </h2>
      <br />
      <Accordion styled fluid>
        {researchers &&
          researchers.data &&
          researchers.data.users &&
          researchers.data.users.map((researcher, idx) => (
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
                  <strong>Programs Enrolled: </strong>
                  {researcher.programsEnrolled.length}
                </p>
                <p>
                  <strong>Programs Submitted: </strong>
                  {researcher.programsSubmitted.length}
                </p>
                <Button color="red">Suspend</Button>
              </Accordion.Content>
            </>
          ))}
      </Accordion>
    </>
  );
};

export default Researchers;
