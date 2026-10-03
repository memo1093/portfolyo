export interface StarPoint {
  /** 0–100 (yüzde) */
  x: number;
  y: number;
}

/** Her çağrıda aynı sonucu veren sözde-rastgele sayı (SSR/CSR uyumsuzluğu olmaz). */
const noise = (seed: number) => {
  const v = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return (v - Math.floor(v)) * 2 - 1; // -1..1
};

/**
 * Öğeleri ızgara hücrelerine yerleştirip hafifçe kaydırır; böylece rastgele
 * görünen ama asla üst üste binmeyen bir takımyıldızı elde edilir.
 * Satırlar "yılan" düzeninde dizilir: ardışık yıldızları birleştiren çizgiler kesişmez.
 */
export function constellationLayout(count: number, cols: number, salt = 0): StarPoint[] {
  const rows = Math.ceil(count / cols);
  return Array.from({ length: count }, (_, i) => {
    const row = Math.floor(i / cols);
    const rawCol = i % cols;
    const col = row % 2 === 1 ? cols - 1 - rawCol : rawCol;
    const cellW = 100 / cols;
    const cellH = 100 / rows;
    return {
      x: (col + 0.5) * cellW + noise(i + salt) * cellW * 0.16,
      y: (row + 0.5) * cellH + noise(i * 3 + salt + 7) * cellH * 0.18,
    };
  });
}
