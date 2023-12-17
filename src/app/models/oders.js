const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackingInfoSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  status: { type: String, required: true },
  location: { type: String, required: true }
});

const pointManagerStatsSchema = new Schema({
  pointManagerId: { type: String, required: true },
  sentQuantity: { type: Number, default: 0 },
  receivedQuantity: { type: Number, default: 0 }
});

const shipmentInfoSchema = new Schema({
  productName: { type: String, required: true },
  value: { type: Number, required: true },
  weight: { type: Number, required: true },
  quantity: { type: Number, required: true },
  note: { type: String }
});

const oders = new Schema({
  sender: {
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true }
  },
  recipient: {
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true }
  },
  shipmentInfo: shipmentInfoSchema,
  status: { type: String, default: 'pending' },
  trackingInfo: [trackingInfoSchema],
  pointManagerStats: [pointManagerStatsSchema]
});

module.exports = mongoose.model('Order', oders);
