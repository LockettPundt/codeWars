function shorterestTime(n, m, speeds) {
  const [elevatorSpeed, doorOpenSpeed, doorClosedSpeed, walkingSpeed] = speeds;
  const travelTimes = [];
  const elevatorDistance = Math.abs(n - m);

  // walking only
  travelTimes.push(n * walkingSpeed);

  // by walking and elevator
  travelTimes.push(
    elevatorDistance * walkingSpeed +
      doorOpenSpeed +
      doorClosedSpeed +
      m * elevatorSpeed +
      doorOpenSpeed
  );

  // by elevator only
  travelTimes.push(
    elevatorDistance * elevatorSpeed +
      doorOpenSpeed +
      doorClosedSpeed +
      n * elevatorSpeed +
      doorOpenSpeed
  );

  return Math.min(...travelTimes);
}
