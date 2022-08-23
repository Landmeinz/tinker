import React from "react";

// --- Components --- //
import ProjectCard from "../ProjectCard/CardProject";
import ProjectDescription from "../ProjectDescription/ProjectDescription";

// --- MUI --- //
import {
  // Typography,
  // CardMedia,
  Box,
} from "@mui/material";

import { sxProjectContainer, sxCardProjectGallery } from "../sxStyles";

function Project({ project }) {

  return (
    <Box id="sxProjectContainerSwing" sx={sxProjectContainer}>
      <ProjectDescription
        id="ProjectDescriptionSwing"
        title={project.title}
        body={project.body}
        details={project.details}
      />
      <Box id="sxCardProjectGallerySwing" sx={sxCardProjectGallery}>
        {project.content.map((content) => (
          <ProjectCard
            key={content.id}
            image={content.image}
            imageCaption={content.caption}
            alt={content.caption}
          />
        ))}
      </Box>
    </Box>
  );
}
export default Project;
