# Designing-Tomorrow

Endangered Animals an Immersive Experience is  an interactive website which can be navigated by scanning the bottom of our models of animals on an RFID reader. This can be used on any system, including Windows and Linux, however in this repository we will only specify how to use it on Linux, specifically a Raspberry Pi. For the full experience, this will also require an Arduino Uno connected via USB to the Pi. 

## How to set it up

You will first need to have a fully set up and functional Raspberry Pi, this will not be covered here. Then begin to install the required packages to run the website. To do this run:
- sudo apt install nodejs npm arduino
- npm install -g pnpm@latest-10

Once the required packages are installed, you will need to ensure that an Arduino is connected via USB to the Pi, with a light bulb connected to it with the short pin in GND and the long pin in 13. The code can be found at 
## Required Software

- Node.js
- Python

## Setup

- cd frontend
- pnpm install
- pnpm run dev

- cd backend
- pip install -r requirements.txt
