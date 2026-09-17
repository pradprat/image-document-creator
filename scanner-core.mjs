export function orderQuad(points) {
  if (!Array.isArray(points) || points.length !== 4) {
    throw new Error('A document crop needs exactly four corners.');
  }
  const bySum = [...points].sort((a, b) => (a.x + a.y) - (b.x + b.y));
  const byDiff = [...points].sort((a, b) => (a.x - a.y) - (b.x - b.y));
  return [
    bySum[0],
    byDiff[3],
    bySum[3],
    byDiff[0],
  ];
}

export function defaultQuad(width, height, inset = 0.06) {
  const x = Math.round(width * inset);
  const y = Math.round(height * inset);
  return [
    { x, y },
    { x: width - x, y },
    { x: width - x, y: height - y },
    { x, y: height - y },
  ];
}

export function imageFiles(files) {
  return Array.from(files || []).filter((file) => file?.type?.startsWith('image/'));
}

export function uploadProgress(selected, ready) {
  const selectedPages = Math.max(0, Number(selected) || 0);
  const readyPages = Math.max(0, Number(ready) || 0);
  return {
    selected: selectedPages,
    ready: readyPages,
    remaining: Math.max(0, selectedPages - readyPages),
  };
}

export function outputSize(sourceWidth, sourceHeight) {
  const width = 1200;
  const height = Math.round(width * Math.SQRT2);
  return sourceWidth > sourceHeight
    ? { width: height, height: width }
    : { width, height };
}

export function clampPoint(point, width, height) {
  return {
    x: Math.max(0, Math.min(width, point.x)),
    y: Math.max(0, Math.min(height, point.y)),
  };
}
