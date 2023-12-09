const deadZoneThreshold = 0.2;
/*
const ROSBridgeHost = 'ws://0.0.0.0:9090';

const rosbridge = new ROSLIB.Ros({
    url: ROSBridgeHost // Replace with your ROSBridge server URL
    });

rosbridge.on('connection', function(){
    console.log('Connected to ROSBridge')
});


rosbridge.on('connection', function () {
    console.log('Connected to ROSBridge.');
    });
    rosbridge.on('error', function (error) {
    console.error('Error connecting to ROSBridge: ' + error);
    });
    rosbridge.on('close', function () {
    console.log('Connection to ROSBridge closed.');
    });

*/  



document.addEventListener('DOMContentLoaded', init);

function init() {
    if (navigator.getGamepads) {
        window.addEventListener('gamepadconnected', (event) => {
            console.log('Gamepad connected:', event.gamepad.id);
            updateGamepadInfo();
        });

        window.addEventListener('gamepaddisconnected', (event) => {
            console.log('Gamepad disconnected:', event.gamepad.id);
            updateGamepadInfo();
        });

        updateGamepadInfo();
    } else {
        console.log('Gamepad API not supported');
    }
}

function updateGamepadInfo() {
    const gamepads = navigator.getGamepads();

    const ps4Controller = gamepads[0];

    if (ps4Controller) {
    
        console.clear();
        console.log('PS4 Controller Input:');
        console.log('ID:', ps4Controller.id);

        console.log('Buttons:');
        ps4Controller.buttons.forEach((button, index) => {
            const buttonSymbol = getButtonSymbol(index);
            console.log(`  ${buttonSymbol}: ${button.pressed}`);
        });


        console.log('Axes:');
        const deadZoneAxes = ps4Controller.axes.map((axis) =>
            Math.abs(axis) < deadZoneThreshold ? 0 : axis
        );
  
        console.log(`  Left Stick Horizontal: ${applyDeadZone(ps4Controller.axes[0]).toFixed(2)}`);
        console.log(`  Left Stick Vertical: ${applyDeadZone(ps4Controller.axes[1]).toFixed(2)}`);
        console.log(`  Right Stick Horizontal: ${applyDeadZone(ps4Controller.axes[2]).toFixed(2)}`);
        console.log(`  Right Stick Vertical: ${applyDeadZone(ps4Controller.axes[3]).toFixed(2)}`);
    

    } else {
        console.log('PS4 Controller not detected');
    }

    setTimeout(updateGamepadInfo, 500);
}

function applyDeadZone(value) {
    return Math.abs(value) < deadZoneThreshold ? 0 : value;
}


function getButtonSymbol(index) {
    switch (index) {
        case 0:
            return 'X';
        case 1:
            return 'O';
        case 2:
            return '▢';
        case 3:
            return '△';
        case 4:
            return 'L1';
        case 5:
            return 'R1';
        case 6:
            return 'L2';
        case 7:
            return 'R2';
        case 8:
            return 'Share';
        case 9:
            return 'Options';
        case 10:
            return 'L3';
        case 11:
            return 'R3';        
        case 12:
            return '↑';
        case 13:
            return '↓';
        case 14:
            return '←';
        case 15:
            return '→';
        case 16:
            return 'PS Button'    
        case 17: 
            return 'TouchPad';        
        default:
            return `Button ${index}`;
    }
}
