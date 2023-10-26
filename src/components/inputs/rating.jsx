import { View } from 'react-native';
import StarRating from 'react-native-star-rating';

export const StarRatings = ({ rating, onStarRatingPress }) => {

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={parseInt(rating)} 
        selectedStar={onStarRatingPress} 
        starSize={15}
        fullStarColor="gold"
        emptyStarColor="gray"
        starStyle={{ marginRight: 2 }}
      />
    </View>
  );
};
