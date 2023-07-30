import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import moment from "moment";
import "./LearningNoteCard.css"; // Import the CSS file for the component

const LearningNoteCard = ({ learningNote }) => {
  const { user, created_at, title, content, updated_at } = learningNote;

  return (
    <Card className="learning-note-card">
      <CardBody>


        {updated_at && (
          <CardText>
            Date Updated: {moment(updated_at).format("MMMM Do YYYY, h:mm a")}
          </CardText>
        )}

        <CardTitle tag="h3">{title}</CardTitle>

        <CardText>{content}</CardText>

        <CardText>
          Date Created: {moment(created_at).format("MMMM Do YYYY, h:mm a")}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default LearningNoteCard;
