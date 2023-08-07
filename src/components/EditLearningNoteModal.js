import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Box, TextField, Button } from "@mui/material";
import { updateLearningNote } from "../actions/learningNoteActions";

const EditLearningNoteModal = ({ learningNote, onClose }) => {
  const [title, setTitle] = useState(learningNote.title);
  const [content, setContent] = useState(learningNote.content);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(updateLearningNote(learningNote.id, { title, content }));
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 8,
          minWidth: "70%",
          minHeight: "70%",
        }}
      >
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          multiline
          rows={20}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditLearningNoteModal;
