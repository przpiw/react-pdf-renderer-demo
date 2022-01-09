import { StyleSheet } from '@react-pdf/renderer'

export default StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
  },
  section_right: {
    margin: 10,
    padding: 10,
    paddingTop: 20,
    width: '75%',
  },
  section_left: {
    width: '25%',
    height: '100%',
    backgroundColor: '#084c41',
  },
  profile_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20',
    marginBottom: '20px',
    height: '150',
    fontFamily: 'Helvetica-Bold',
  },
  name_text: {
    paddingTop: '10px',
    paddingBottom: '5px',
    fontSize: '14px',
    fontWeight: '900',
    color: 'white',
  },
  profession_text: {
    color: '#d1d5db',
    fontSize: '11px',
  },
  profile_img: {
    width: '60px',
    height: '60px',
    borderRadius: '90',
  },
  profile_line: {
    marginTop: '10px',
    width: '10%',
    height: '1px',
    backgroundColor: '#FFF',
    textAlign: 'center',
  },
})
