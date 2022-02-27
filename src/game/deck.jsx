import * as R from 'ramda';

const SUITS = [
  'clubs',
  'diamonds',
  'hearts',
  'spades'
];

const CARDS = [
  { card: 'k', value: [10] },
  { card: 'q', value: [10] },
  { card: 'j', value: [10] },
  { card: '10', value: [10] },
  { card: '9', value: [9] },
  { card: '8', value: [8] },
  { card: '7', value: [7] },
  { card: '6', value: [6] },
  { card: '5', value: [5] },
  { card: '4', value: [4] },
  { card: '3', value: [3] },
  { card: '2', value: [2] },
  { card: 'a', value: [1, 11] }
];

const build_suit = suit =>
  R.reduce(
    (cards_suit, card) =>
      R.append(R.assoc('suit', suit, card), cards_suit),
    [], CARDS
  );

const build_deck = () =>
  R.reduce(
    (deck, suit) => R.concat(deck, build_suit(suit)),
    [], SUITS
  );

export const build_shoe = (shoe_size = 4, sorted = false) => {
  const shuffle = (_, _) => Math.random() - 0.5;

  const shoe = R.reduce(
    shoe => R.concat(shoe, build_deck()),
    [], R.range(0, shoe_size)
  );

  return sorted ? shoe : shoe.sort(shuffle);
};

const count_tens = shoe =>
  R.count(card => R.includes(10, card.value), shoe);

export const get_ten_count_ratio = shoe => {
  const tens = count_tens(shoe);
  const other = R.length(shoe) - tens;
  return other / tens;
};
