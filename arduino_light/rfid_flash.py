import evdev
import serial
import time

# --- Config ---
RFID_DEVICE_PATH = '/dev/input/event7'
ARDUINO_PORT     = '/dev/ttyACM0'
BAUD_RATE        = 9600
# --------------

def main():
    rfid = evdev.InputDevice(RFID_DEVICE_PATH)
    rfid.grab()  # Prevents card data typing into other apps
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
