// Auto-generated. Do not edit!

// (in-package calypso.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class joystick {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.lx = null;
      this.ly = null;
    }
    else {
      if (initObj.hasOwnProperty('lx')) {
        this.lx = initObj.lx
      }
      else {
        this.lx = 0.0;
      }
      if (initObj.hasOwnProperty('ly')) {
        this.ly = initObj.ly
      }
      else {
        this.ly = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type joystick
    // Serialize message field [lx]
    bufferOffset = _serializer.float64(obj.lx, buffer, bufferOffset);
    // Serialize message field [ly]
    bufferOffset = _serializer.float64(obj.ly, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type joystick
    let len;
    let data = new joystick(null);
    // Deserialize message field [lx]
    data.lx = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [ly]
    data.ly = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 16;
  }

  static datatype() {
    // Returns string type for a message object
    return 'calypso/joystick';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4ea7417bf6c4ea7f9c68a7b66f76e96c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 lx
    float64 ly
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new joystick(null);
    if (msg.lx !== undefined) {
      resolved.lx = msg.lx;
    }
    else {
      resolved.lx = 0.0
    }

    if (msg.ly !== undefined) {
      resolved.ly = msg.ly;
    }
    else {
      resolved.ly = 0.0
    }

    return resolved;
    }
};

module.exports = joystick;
