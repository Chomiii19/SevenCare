export interface IAppointment extends Document {
  _id: number;
  patientId: number;
  medicalDepartment:
    | "Consultation"
    | "Vaccination"
    | "Medical Certificate"
    | "Laboratory"
    | "Holistic Care"
    | "Circumcision/TULI"
    | "Medical Check Up"
    | "Prenatal Check Up"
    | "Family Planning";
  schedule: Date;
  email: string;
  phoneNumber: string;
  status: string;
  isPaid: boolean;
  createdAt: Date;
  isDeleted: boolean;
}
