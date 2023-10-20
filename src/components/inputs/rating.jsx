import React from 'react'
import { View } from 'react-native'
import StarRating from 'react-native-star-rating'

export const StarRatings = () => {
    const [starCount, setStarCount] = React.useState(0);
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <StarRating
        disabled={false} // Change to true if you want a read-only rating
        maxStars={5}
        rating={starCount}
        selectedStar={(rating) => setStarCount(rating)}
        starSize={15}
        fullStarColor="gold"
        emptyStarColor="gray" 
        starStyle={{ margin: 0, padding: 0 }}
        />
    </View>
  )
}

