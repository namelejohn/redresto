import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {filterData} from '../data/data.ts';
import COLORS from '../styles/colors.ts';
import {BORDER_RADIUS, FONT_WEIGHT} from '../styles/constants.ts';

const Filter = ({
  activeFilter,
  onSelect,
}: {
  activeFilter: any;
  onSelect: (filter: any) => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.gradientBackground}>
        {filterData.map((filter, index) => (
          <View key={filter.id} style={styles.filterContainer}>
            <Pressable
              onPress={() => onSelect(filter)}
              style={[
                styles.filterButton,
                activeFilter.name === filter.name && styles.activeFilterButton,
              ]}>
              <Text
                style={[
                  styles.filterText,
                  activeFilter.name === filter.name && styles.activeFilterText,
                ]}>
                {filter.name}
              </Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 6,
  },
  gradientBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
    borderRadius: 32,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterButton: {
    paddingVertical: 12,
    borderRadius: 32,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: width * 0.2,
  },
  activeFilterButton: {
    backgroundColor: COLORS.red,
  },
  activeFilter: {
    backgroundColor: COLORS.red,
  },
  filterText: {
    color: '#872929',
    fontSize: 15,
    fontWeight: 600,
  },
  activeFilterText: {
    color: COLORS.white,
  },
});

export default Filter;
