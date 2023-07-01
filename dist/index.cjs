'use strict';

const createUnoKeyframesFromWindKeyframes = (inputKeyframes) => {
  const keyframes = JSON.parse(JSON.stringify(inputKeyframes));
  Object.keys(keyframes).forEach((kfIndex) => {
    const kf = keyframes[kfIndex];
    keyframes[kfIndex] = typeof kf == "string" ? kf : `{${Object.keys(kf).reduce((kfAcc, kfKey) => {
      const kfValue = kf[kfKey];
      const values = Object.keys(kfValue).map((kfProp) => {
        return `${kfProp}:${String(kfValue[kfProp]).replace(/, /g, ",")};`;
      });
      kfAcc.push(`${kfKey} {${values.join(" ")}}`);
      return kfAcc;
    }, new Array()).join(" ")}}`;
  });
  return keyframes;
};

exports.createUnoKeyframesFromWindKeyframes = createUnoKeyframesFromWindKeyframes;
