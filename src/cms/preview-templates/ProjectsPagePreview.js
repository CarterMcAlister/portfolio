import React from 'react'
import PropTypes from 'prop-types'
import { ProjectsPageTempate } from '../../templates/projects-page'

const ProjectsPagePreview = ({ entry }) => {
  return (
    <ProjectsPageTempate
      title={entry.getIn(['data', 'title'])}
    />
  )
}

ProjectsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProjectsPagePreview
