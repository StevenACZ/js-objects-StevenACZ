const boredom = ( staff ) => {
  sum = 0;
  
  for (let key in staff) {
    switch(staff[key]) {
      case 'accounts':
        sum += 1
        break;
      case 'finance':
        sum += 2
        break;
      case 'canteen':
        sum += 10
        break;
      case 'regulation':
        sum += 3
        break;
      case 'trading':
      case 'change':
        sum += 6
        break;
      case 'IS':
        sum += 8
        break;
      case 'retail':
        sum += 5
        break;
      case 'cleaning':
        sum += 4
        break;
      case 'pissing about':
        sum += 25
        break;
    }
  }
  
  if ( sum <= 80 ) {
    return 'kill me now';
  } else if ( sum < 100 && sum > 80 ) {
    return 'i can handle this';
  } else {
    return 'party time!!'
  }
}