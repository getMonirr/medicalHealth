// spcecialty enum
export enum Specialty {
  Anaesthestic = "Anaesthestic",
  Pediatric = "Pediatric",
  Nutritionist = "Nutritionist",
  Orthopedic = "Orthopedic",
}

export interface IDoctor {
  _id: string;
  name: string;
  specialty: string;
  likes: number;
  experience: number;
  image: string;
}
