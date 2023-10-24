import React from 'react'
import { View , StyleSheet} from 'react-native'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { ArticleCard } from '../components'
import { dimen } from '../../theme'
import { article } from '../utils/weeklyArticles'

const WeeklyGrowth = () => {
  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <ScrollView>
            <View style={styles.cardConatainer}>
               {
                  article && article.map((item,index)=>{
                     return(
                        <View key={index}>
                           <ArticleCard
                           title={item.title}
                           content={item.content}
                           imageUrl={item.imageUrl}
                           />
                           <View style={styles.articleGap}/>
                        </View>
                     )
                  })
               }
            </View>
        </ScrollView>
      </GestureHandlerRootView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        height: '100%',
      },
      cardConatainer:{
        padding: dimen.default,
    },
    articleGap:{
        marginBottom:dimen.default,
    }
})

export default WeeklyGrowth
