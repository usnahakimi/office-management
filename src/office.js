class Office {
  
    constructor() {
      this.rooms = [];
    };
    createMeetingRoom(room) {
      this.rooms.push(room);
    };
  
    viewAllRooms() {
      return this.rooms;
    };
}