# Designing-Tomorrow

Endangered Animals an Immersive Experience is  an interactive website which can be navigated by scanning the bottom of our models of animals on an RFID reader. This can be used on any system, including Windows and Linux, however in this repository we will only specify how to use it on Linux, specifically a Raspberry Pi. For the full experience, this will also require an Arduino Uno connected via USB to the Pi. 

## How to set it up

You will first need to have a fully set up and functional Raspberry Pi, this will not be covered here. Then begin to install the required packages to run the website. To do this run:
- sudo apt install nodejs npm arduino
- npm install -g pnpm@latest-10

Download the .zip of this repository and extract it into any location of your choice on the Pi.

Once the required packages are installed, you will need to ensure that an Arduino is connected via USB to the Pi, with a light bulb connected to it with the short pin in GND and the long pin in 13. For what this will be used for the code can be found [here](arduino_light/rfid_flash.py). 

You will also need to connect the RFID reader to the Pi, you can confim it is connected by the light flashing for a moment upon it turning on, as well as a high frequency noise.

## Run the website

Once all packages are installed, run this in the same terminal window, once it has been run it should inform you what the localhost port number is (it should be http://localhost:3000) and then open it in your browser:
- cd frontend
- pnpm install
- pnpm run dev

- cd backend
- pip install -r requirements.txt

Now open [the Arduino code](arduino_light/arduino_light.ino) in the Arduino Ide which was installed in the setup and verify it. Then upload it to the Ardiono.

Next, in another terminal window (ensure you are in the correct folder), run this after ensuring the RFID reader path is correct on line 6(change it to the correct path if not):
- cd arduino_light
- python3 rfid_flash.py

## Use the website

With everything attatched and setup, you will be able to open the website page and click 'Scan Animal'. Then hold up the bottom of an animal model onto the RFID reader and it will automatically take you to the page for the respective animal. After this you will be able to read all the information and take part in the quiz. At any time you can switch animal pages by going to the bottom of the page and clicking 'Scan New Animal' and then you will be able to repleat the process again. When you scan the animal on the RFID reader, the Arduino will flash its light 3 times to confirm this has worked, and you will also hear a confirmation noise.

## Required Software

For this website to function, you will need to have Node.js, pnpm, Python and Arduino Ide installed on your Pi.
