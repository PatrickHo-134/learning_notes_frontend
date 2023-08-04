import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import moment from "moment";
import { archiveLearningNote } from "../actions/learningNoteActions";

const LearningNoteCard = ({ learningNote }) => {
  const { user, created_at, title, content, updated_at } = learningNote;
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleArchive = () => {
    dispatch(archiveLearningNote(learningNote.id));
    handleMenuClose();
  };

  return (
    <Card variant="outlined" sx={{marginBottom:"1rem"}} gutterBottom>
      <CardContent>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold" }}
              color="text.primary"
              gutterBottom
            >
              {title}
            </Typography>
          }
          sx={{ padding: "0" }}
        />

        <Typography variant="body1" component="pre" style={{ whiteSpace: 'pre-line' }} gutterBottom>
          {content}
        </Typography>

        <Typography variant="caption" gutterBottom>
          Date Created: {moment(created_at).format("MMMM Do YYYY, h:mm a")}
        </Typography>

        {updated_at && (
          <Typography variant="caption" gutterBottom>
            Date Updated: {moment(updated_at).format("MMMM Do YYYY, h:mm a")}
          </Typography>
        )}
      </CardContent>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem>Edit</MenuItem>
        <MenuItem onClick={handleArchive}>Archive</MenuItem>
        {/* You can add more menu items here for other actions */}
      </Menu>
    </Card>
  );
};

export default LearningNoteCard;
