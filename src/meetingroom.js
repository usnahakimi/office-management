'use strict';

class MeetingRoom {
  constructor(name) {
    this.available = true;
    this.name = name
  };

  isAvailable() {
    return this.available;
  };

  enter() {
    if (!this.available) {
      throw new Error('This room is not available!');
    };
    return this.available = false;
  };

  leave() {
    return this.available = true;
  };
} 