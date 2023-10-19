export default class DailyInsight {
  constructor(mood = '', kickCount = '', weight = '', bloodPressure = '', pains = [], note = '') {
    this.mood = mood;
    this.kickCount = kickCount;
    this.weight = weight;
    this.bloodPressure = bloodPressure;
    this.pains = pains;
    this.note = note;
  }
}
