import React from 'react'
import { Document, Page, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import LeftSection from './LeftSection'
import { RightSection } from './RightSection'
import styles from '../styles'

const Preview = ({ profile }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <PDFViewer
        showToolbar={false}
        style={{
          width: '100%',
          height: '95%',
        }}
      >
        <Template profile={profile} />
      </PDFViewer>
      <PDFDownloadLink
        document={<Template profile={profile} />}
        fileName='somename.pdf'
      >
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  )
}

const Template = ({ profile }) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <LeftSection profile={profile} />
        <RightSection about={profile.about} />
      </Page>
    </Document>
  )
}

export default Preview
