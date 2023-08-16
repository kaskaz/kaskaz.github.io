import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (project) => `/projects/${project._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'src/projects', documentTypes: [Project] })
