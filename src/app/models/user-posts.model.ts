import { Timestamp } from "@angular/fire/firestore";

export interface UserPost {
  title: string;
  content: string;
  createdDate: Timestamp;
}
