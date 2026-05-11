const int BULB_PIN = 13;

void setup() {
  Serial.begin(9600);
  pinMode(BULB_PIN, OUTPUT);
  digitalWrite(BULB_PIN, LOW);
}

void loop() {
  if (Serial.available() > 0) {
    char incoming = Serial.read();
    if (incoming == 'F') {
      flashBulb();
    }
  }
}

void flashBulb() {
  for (int i = 0; i < 3; i++) {
    digitalWrite(BULB_PIN, HIGH);
    delay(200);
    digitalWrite(BULB_PIN, LOW);
    delay(200);
  }
}
