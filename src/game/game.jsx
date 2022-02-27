import * as R from 'ramda';

const AS = 'a';

const is_over_21 = hand => {
  const is_as = card => R.equals(card.card, AS);
  const [as_cards, non_as_cards] = R.partition(is_as, hand);

  const fpluck_values = R.flatten(R.pluck('value'));
  const non_as_sum = R.reduce(R.sum, fpluck_values(non_as_cards));
  const p_max_total = 21 - non_as_sum;

  if (p_max_total < 1) return true;
  if ((11 + R.length(as_cards) - 1) > p_max_total) return ()

};

is_over_21();
