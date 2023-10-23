import React, { useState } from 'react';
import { View } from 'react-native';
import StarRating from 'react-native-star-rating';

export const StarRatings = () => {
  const [starCount, setStarCount] = useState(0);

  const onStarRatingPress = (rating) => {
    setStarCount(rating);
    // You can perform additional actions with the selected rating if needed
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={starCount} // Use the state variable for the rating
        selectedStar={onStarRatingPress} // Call the function when a star is pressed
        starSize={15}
        fullStarColor="gold"
        emptyStarColor="gray"
        starStyle={{ margin: 0, padding: 0 }}
      />
    </View>
  );
};
