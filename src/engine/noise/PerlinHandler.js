import params from "./PerlinCofig.js"
import perlin from './perlin.js';

class Perlin {
    constructor(params) {
        this.params = params
    }
    noise2D(x, y) {
        return perlin(x, y) * 2.0 - 1.0;
    }
    Get(x, y) {
        const xs = x / this.params.scale;
        const ys = y / this.params.scale;
        let amplitude = 1;
        let frequency = 1;
        let normalization = 0;
        let total = 0;

        for (let o = 0; o < this.params.octaves; o++) {
            const noiseValue = this.noise2D(xs * frequency, ys * frequency) * 0.5 + 0.5;

            total += noiseValue * amplitude;
            normalization += amplitude;
            amplitude *= this.params.persistence;
            frequency *= this.params.lacunarity;

        }
        total /= normalization;

        let out = Math.pow(total, this.params.exponentiation) * this.params.height
        return out;
    }
}
let perlin2 = new Perlin(params)
export default perlin2