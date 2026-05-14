# Designing-Tomorrow

Endangered Animals an Immersive Experience is  an interactive website which can be navigated by scanning the bottom of our models of animals on an RFID reader. This can be used on any system, including Windows and Linux, however in this repository we will only specify how to use it on Linux, specifically a Raspberry Pi. For the full experience, this will also require an Arduino Uno connected via USB to the Pi. 

## How to set it up

You will first need to have a fully set up and functional Raspberry Pi, this will not be covered here. Then begin to install the required packages to run the website. To do this run:
```
sudo apt install nodejs npm arduino
npm install -g pnpm@latest-10
```

Download the .zip of this repository and extract it into any location of your choice on the Pi.

Once the required packages are installed, you will need to ensure that an Arduino is connected via USB to the Pi, with a light bulb connected to it with the short pin in GND and the long pin in 13. For what this will be used for the code can be found [here](arduino_light/arduino_light.ino). Ensure the Arduino port is correct on line 7 (e.g. `/dev/ttyACM0`) — run `ls /dev/ttyACM*` to confirm.

You will also need to connect the RFID reader to the Pi, you can confirm it is connected by the light flashing for a moment upon it turning on, as well as a high frequency noise.

## Run the website

Once all packages are installed, run this in the same terminal window, once it has been run it should inform you what the localhost port number is (it should be http://localhost:3000) and then open it in your browser:
```
cd frontend
pnpm install
pnpm run dev
```

Now open [the Arduino code](arduino_light/arduino_light.ino) in the Arduino IDE which was installed in the setup and verify it. Then upload it to the Arduino.

Next, in another terminal window (ensure you are in the correct folder), run this after ensuring the RFID reader path is correct on line 6(change it to the correct path if not):
```
pip3 install evdev pyserial
```

Then run this to run the [python script](arduino_light/rfid_flash.py):
```
cd arduino_light
python3 rfid_flash.py
```

## Use the website

With everything attached and setup, you will be able to open the website page and click `Scan Animal`. Then hold up the bottom of an animal model onto the RFID reader and it will automatically take you to the page for the respective animal. After this you will be able to read all the information and take part in the quiz. At any time you can switch animal pages by going to the bottom of the page and clicking `Scan New Animal` and then you will be able to repeat the process again. When you scan the animal on the RFID reader, the Arduino will flash its light 3 times to confirm this has worked, and you will also hear a confirmation noise.

If you do not have the animal models available, you will be able to access each page by adding /animals/penguin or /animals/elephant or /animals/tiger to the end of the URL (eg http://localhost:3000/animals/penguin).

## Required Software

For this website to function, you will need to have Node.js, pnpm, Python and Arduino IDE installed on your Pi.
