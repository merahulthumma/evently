import { model, models, Schema } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  createdAt: Date;
  location?: string;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  category: { _id: string; name: string };
  organiser: { _id: string; firstName: string; lastName: string };
}
const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  location: { type: String },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organiser: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
