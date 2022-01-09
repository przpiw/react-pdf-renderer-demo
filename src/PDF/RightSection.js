import styles from '../styles'
import { View, Text } from '@react-pdf/renderer'

export const RightSection = ({ about }) => {
  return (
    <View style={styles.section_right}>
      <Text>{about}</Text>
    </View>
  )
}
