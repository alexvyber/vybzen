/**
 * 
 * @param {number} start where we start generate additional spacing
 * @param {number} numberOfNewSteps how much steps should be generated
 * @param {number} step number of rem's to count as a step 1 = 1 rem
 * @returns object with shape of tailwind's spacing: {
  ...
  '176': '44rem',
  '192': '48rem',
  '208': '52rem',
  ...
    },
 */
const getSpacingRange = (start, numberOfNewSteps, step) => {
  const spacing = {};

  for (let i = start + step * 4; i < start + numberOfNewSteps * step * 4; i = i + step * 4) {
    spacing[`${i}`] = `${i / 4}rem`;
  }

  return spacing;
};

module.exports = {
  getSpacingRange,
};
