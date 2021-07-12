'use strict';

describe('Meeting room', () => {
    let meetingRoom = new MeetingRoom('Usna');

    beforeEach( () => {
        meetingRoom = new MeetingRoom('Usna');
    });

    it('checks if the room is available', () => {
        expect(meetingRoom.isAvailable()).toEqual(true);
      });
    
      it('can enter a meeting', () => {
        meetingRoom.enter();
        expect(meetingRoom.isAvailable()).toEqual(false);
      });
    
      it('can leave a meeting', () => {
        meetingRoom.leave();
        expect(meetingRoom.isAvailable()).toEqual(true)
      });
    
      it('throws error on entry if room is not available', () => {
        meetingRoom.available = false;
        expect(function(){ meetingRoom.enter();}).toThrowError('This room is not available!');
      });
    });
})