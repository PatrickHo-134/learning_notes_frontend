import React, { useState } from "react";
import { Button, Modal, Box, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddLearningNoteModal = ({ onAddNote }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleAddNote = async () => {
    const currentUser = 1; // TODO: to be replaced with the currently logged in user
    const newNote = {
      title,
      content,
      created_at: new Date().toISOString(),
      user: currentUser,
    };

    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      console.error("Authentication token not found");
      return;
    }

    try {
      console.log(newNote);
      const response = await fetch(
        "http://localhost:8000/api/learning_notes/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${authToken}`,
          },
          body: JSON.stringify(newNote),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add learning note");
      }

      const data = await response.json();
      onAddNote(data); // Update the local state with the new note data
      toggleModal();
    } catch (error) {
      console.error("Error adding learning note:", error);
    }
  };

  return (
    <div>
      <Button
        color="success"
        variant="contained"
        aria-label="Add new note"
        endicon={<AddIcon />}
        onClick={toggleModal}
      >
        <AddIcon />
      </Button>
      <Modal open={modalOpen} onClose={toggleModal}>
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
          }}
        >
          <Typography variant="h5">Add New Learning Note</Typography>
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Content"
            multiline
            rows={4}
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddNote}
            sx={{ mt: 2 }}
          >
            Add Note
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddLearningNoteModal;
