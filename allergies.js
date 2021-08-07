export class Allergies {
  constructor(score) {
    this.score = this.getScore(score);
    this.allergiesList = [];
    this.SCORES = [128, 64, 32, 16, 8, 4, 2, 1];
  }

  list() {
    while(this.score > 0) {
      let allergyScore = this.SCORES.find(element => this.score >= element)
      this.allergiesList.push(this.scoreRelations()[allergyScore]);
      this.score -= allergyScore
    }
    return this.allergiesList.reverse();
  }

  allergicTo(allergy) {
    return this.list().includes(allergy);
  }

  getScore(score){
    if (score > 256)
      return score = score % 256
    return score;
  }

  scoreRelations(){
    return {
      128: 'cats',
      64: 'pollen',
      32: 'chocolate',
      16: 'tomatoes',
      8: 'strawberries',
      4: 'shellfish',
      2: 'peanuts',
      1: 'eggs'
    }
  }
}
