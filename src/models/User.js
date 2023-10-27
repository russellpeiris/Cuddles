export default class User {
  constructor(
    firstName = '',
    lastName = '',
    email = '',
    phoneNumber = '',
    dueDate = '',
    emergencyContact = '',
    dateOfBirth = '',
    city = '',
    height = '',
    medicalHistory = '',
    dailyInsights = [] 
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.dueDate = dueDate;
    this.emergencyContact = emergencyContact;
    this.dateOfBirth = dateOfBirth;
    this.city = city;
    this.height = height;
    this.medicalHistory = medicalHistory;
    this.dailyInsights = dailyInsights; 
  }

  addDailyInsight(dailyInsight) {
    this.dailyInsights.push(dailyInsight);
  }
}
