function foo(people, count) {
  letselectedPeople = [];
  while (selectedPeople.length < count) {
    letrandomIndex = Math.floor(Math.random() * people.length);
    letperson = people[randomIndex];
    if (!selectedPeople.includes(person)) {
      console.log(selectedPeople.push(person));
    }
  }
  return selectedPeople;
}
