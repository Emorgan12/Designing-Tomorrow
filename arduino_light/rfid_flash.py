import keyboard
import serial
import time

# --- Config ---
ARDUINO_PORT = 'COM4'   # Change to match your Arduino (check Device Manager)
BAUD_RATE    = 9600
# --------------

arduino = serial.Serial(ARDUINO_PORT, BAUD_RATE, timeout=1)
time.sleep(2)  # Wait for Arduino to boot

current_card = []
print("Listening for RFID scans...")

def on_key(event):
    global current_card
    if event.name == 'enter':
        if current_card:
            card_id = ''.join(current_card)
            print(f"Card scanned: {card_id}")
            arduino.write(b'F')
            current_card = []
    elif len(event.name) == 1:
        current_card.append(event.name)

keyboard.on_press(on_key)
keyboard.wait()  # Keeps script running
