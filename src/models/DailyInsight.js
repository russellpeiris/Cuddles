export default class DailyInsight {
  constructor(
    day = '',
    insights = { mood: '', kickCount: '', weight: '', bloodPressure: '', pains: [], note: '' }
  ) {
    this.day = day;
    this.insights = insights;
  }
  toFirestoreFormat() {
    return [{
      day: this.day,
      insights: {
        mood: this.insights.mood,
        kickCount: this.insights.kickCount,
        weight: this.insights.weight,
        bloodPressure: this.insights.bloodPressure,
        pains: this.insights.pains,
        note: this.insights.note
      }
    }];
  }
}
