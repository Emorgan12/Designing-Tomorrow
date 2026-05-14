import evdev
import serial
import time

# --- Config ---
ARDUINO_PORT = '/dev/ttyACM0'
BAUD_RATE    = 9600
# --------------

def find_rfid():
    for path in evdev.list_devices():
        dev = evdev.InputDevice(path)
        if 'IC' in dev.name or 'RFID' in dev.name or 'HID' in dev.name:
            print(f"Found RFID reader: {dev.name} at {path}")
            return dev
    raise Exception("No RFID reader found — is it plugged in?")

def main():
    rfid = find_rfid()
    arduino = serial.Serial(ARDUINO_PORT, BAUD_RATE, timeout=1)
    time.sleep(2)

    print("Listening for RFID scans...")
    current_card = []

    for event in rfid.read_loop():
        if event.type == evdev.ecodes.EV_KEY:
            key = evdev.categorize(event)
            if key.keystate == evdev.KeyEvent.key_down:
                if key.keycode == 'KEY_ENTER':
                    card_id = ''.join(current_card)
                    print(f"Card scanned: {card_id}")
                    arduino.write(b'F')
                    current_card = []
                else:
                    digit = key.keycode.replace('KEY_', '')
                    current_card.append(digit)

if __name__ == '__main__':
    main()
