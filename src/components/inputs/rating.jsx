import React, { useState } from 'react';
import { View } from 'react-native';
import StarRating from 'react-native-star-rating';

export const StarRatings = () => {
  const [starCount, setStarCount] = useState(0);

  const onStarRatingPress = (rating) => {
    setStarCount(rating);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={starCount} 
        selectedStar={onStarRatingPress} 
        starSize={15}
        fullStarColor="gold"
        emptyStarColor="gray"
        starStyle={{ marginRight: 2 }}
      />
    </View>
  );
};
