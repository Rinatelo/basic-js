const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || isNaN(parseFloat(sampleActivity)) || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > MODERN_ACTIVITY) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k;
  return Math.ceil(t);
}

module.exports = {
  dateSample
};
