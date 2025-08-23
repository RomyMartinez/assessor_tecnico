import {
  View,
  Text,
  Image,
  type ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

export interface Item {
  id: string;
  src: ImageSourcePropType;
  description: string;
  backgroundImage?: ImageSourcePropType;
}

export function Carousel({ items }: { items: Item[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }

  function handlePrev() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  }

  return (
    <View style={styles.container}>
      <Item
        item={items[currentIndex]}
        first={currentIndex === 0 || currentIndex !== items.length - 1}
        last={currentIndex === items.length - 1 || currentIndex !== 0}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <View style={styles.dots}>
        {items.map((item, index) => (
          <Text
            key={item.id}
            style={[styles.dot, index === currentIndex && styles.dotActive]}
          ></Text>
        ))}
      </View>
    </View>
  );
}

function Item({
  item,
  first,
  last,
  handleNext,
  handlePrev,
}: {
  item: Item;
  first: boolean;
  last: boolean;
  handleNext: () => void;
  handlePrev: () => void;
}) {
  return (
    <View style={styles.containerItem}>
      <Image
        source={item.src}
        style={styles.image}
        resizeMode="cover"
        height={250}
        width={380}
      />

      <View style={styles.ImageOverlay} />

      <View
        style={[
          styles.buttonContainer,
          first && last && { justifyContent: 'space-between' },
          first && !last && { justifyContent: 'flex-end' },
          !first && last && { justifyContent: 'flex-start' },
        ]}
      >
        {last && (
          <TouchableOpacity style={styles.buttonLeft} onPress={handlePrev}>
            <MaterialIcons name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
        )}
        {first && (
          <TouchableOpacity style={styles.buttonRight} onPress={handleNext}>
            <MaterialIcons name="chevron-right" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.textOverlay}>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.linkText}>Saiba mais</Text>
      </View>
    </View>
  );
}
