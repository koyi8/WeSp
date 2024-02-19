export const cartesianToSphericalRad = (x, y, z) => {
  const distance = Math.sqrt(x * x + y * y + z * z);
  const azimuth = Math.atan2(y, x);
  const elevation = Math.atan2(z, Math.sqrt(x * x + y * y));

  return { azimuth, elevation, distance };
};

export const cartesianToSphericalDeg = (x, y, z) => {
  const distance = Math.sqrt(x * x + y * y + z * z);
  const azimuth = Math.atan2(y, x) * (180 / Math.PI);
  const elevation = Math.atan2(z, Math.sqrt(x * x + y * y)) * (180 / Math.PI);

  return { azimuth, elevation, distance };
};
