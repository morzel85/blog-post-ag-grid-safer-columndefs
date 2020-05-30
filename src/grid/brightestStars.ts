import Star from './Star';

const brightestStars: Star[] = [
    {
        rank: 1,
        magnitude: -26.74,
        name: 'Sol',
        designation: '',
        distance: 0.000015813,
        spectral: 'G2 V'
    },
    {
        rank: 2,
        magnitude: -1.46,
        name: 'Sirius',
        designation: 'α CMa',
        distance: 8.6,
        spectral: 'A0mA1 Va, DA2'
    },
    {
        rank: 3,
        magnitude: -0.74,
        name: 'Canopus',
        designation: 'α Car',
        distance: 310,
        spectral: 'A9 II'
    },
    {
        rank: 4,
        magnitude: -0.27,
        name: 'Rigil Kentaurus & Toliman',
        designation: 'α Cen',
        distance: 4.4,
        spectral: 'G2 V, K1 V'
    },
    {
        rank: 5,
        magnitude: -0.05,
        name: 'Arcturus',
        designation: 'α Boo',
        distance: 37,
        spectral: 'K0 III'
    },
    {
        rank: 6,
        magnitude: 0.03,
        name: 'Vega',
        designation: 'α Lyr',
        distance: 25,
        spectral: 'A0 Va'
    },
    {
        rank: 7,
        magnitude: 0.08,
        name: 'Capella',
        designation: 'α Aur',
        distance: 42,
        spectral: 'K0 III, G1 III'
    },
    {
        rank: 8,
        magnitude: 0.13,
        name: 'Rigel',
        designation: 'β Ori',
        distance: 860,
        spectral: 'B8 Ia'
    },
    {
        rank: 9,
        magnitude: 0.34,
        name: 'Procyon',
        designation: 'α CMi',
        distance: 11,
        spectral: 'F5 IV-V'
    },
    {
        rank: 10,
        magnitude: 0.46,
        name: 'Achernar',
        designation: 'α Eri',
        distance: 140,
        spectral: 'B6 Vep'
    },
    {
        rank: 11,
        magnitude: 0.5,
        name: 'Betelgeuse',
        designation: 'α Ori',
        distance: 640,
        spectral: 'M1-M2 Ia-ab'
    },
    {
        rank: 12,
        magnitude: 0.61,
        name: 'Hadar',
        designation: 'β Cen',
        distance: 350,
        spectral: 'B1 III'
    },
    {
        rank: 13,
        magnitude: 0.76,
        name: 'Altair',
        designation: 'α Aql',
        distance: 17,
        spectral: 'A7 V'
    },
    {
        rank: 14,
        magnitude: 0.76,
        name: 'Acrux',
        designation: 'α Cru',
        distance: 320,
        spectral: 'B0.5 IV, B1 V'
    },
    {
        rank: 15,
        magnitude: 0.86,
        name: 'Aldebaran',
        designation: 'α Tau',
        distance: 65,
        spectral: 'K5 III'
    },
    {
        rank: 16,
        magnitude: 0.96,
        name: 'Antares',
        designation: 'α Sco',
        distance: 600,
        spectral: 'M1.5 Iab-Ib, B2.5 V'
    },
    {
        rank: 17,
        magnitude: 0.97,
        name: 'Spica',
        designation: 'α Vir',
        distance: 260,
        spectral: 'B1 III-IV, B2 V'
    },
    {
        rank: 18,
        magnitude: 1.14,
        name: 'Pollux',
        designation: 'β Gem',
        distance: 34,
        spectral: 'K0 III'
    },
    {
        rank: 19,
        magnitude: 1.16,
        name: 'Fomalhaut',
        designation: 'α PsA',
        distance: 25,
        spectral: 'A3 V'
    },
    {
        rank: 20,
        magnitude: 1.25,
        name: 'Deneb',
        designation: 'α Cyg',
        distance: 2600,
        spectral: 'A2 Ia'
    },
    {
        rank: 21,
        magnitude: 1.25,
        name: 'Mimosa',
        designation: 'β Cru',
        distance: 350,
        spectral: 'B0.5 III, B2 V'
    },
    {
        rank: 22,
        magnitude: 1.39,
        name: 'Regulus',
        designation: 'α Leo',
        distance: 77,
        spectral: 'B8 IVn'
    },
    {
        rank: 23,
        magnitude: 1.5,
        name: 'Adhara',
        designation: 'ε CMa',
        distance: 430,
        spectral: 'B2 II'
    },
    {
        rank: 24,
        magnitude: 1.62,
        name: 'Shaula',
        designation: 'λ Sco',
        distance: 700,
        spectral: 'B2 IV'
    },
    {
        rank: 25,
        magnitude: 1.62,
        name: 'Castor',
        designation: 'α Gem',
        distance: 52,
        spectral: 'A1 V, Am'
    },
    {
        rank: 26,
        magnitude: 1.64,
        name: 'Gacrux',
        designation: 'γ Cru',
        distance: 88,
        spectral: 'M3.5 III'
    },
    {
        rank: 27,
        magnitude: 1.64,
        name: 'Bellatrix',
        designation: 'γ Ori',
        distance: 240,
        spectral: 'B2 III'
    },
    {
        rank: 28,
        magnitude: 1.65,
        name: 'Elnath',
        designation: 'β Tau',
        distance: 130,
        spectral: 'B7 III'
    },
    {
        rank: 29,
        magnitude: 1.69,
        name: 'Miaplacidus',
        designation: 'β Car',
        distance: 110,
        spectral: 'A1 III'
    },
    {
        rank: 30,
        magnitude: 1.69,
        name: 'Alnilam',
        designation: 'ε Ori',
        distance: 2000,
        spectral: 'B0 Ia'
    },
    {
        rank: 31,
        magnitude: 1.72,
        name: 'Regor',
        designation: 'γ1,2 Vel',
        distance: 840,
        spectral: 'WC8, O7.5III'
    },
    {
        rank: 32,
        magnitude: 1.74,
        name: 'Alnair',
        designation: 'α Gru',
        distance: 100,
        spectral: 'B6 V'
    },
    {
        rank: 33,
        magnitude: 1.77,
        name: 'Alioth',
        designation: 'ε UMa',
        distance: 81,
        spectral: 'A1 III-IVp kB9'
    },
    {
        rank: 34,
        magnitude: 1.77,
        name: 'Alnitak',
        designation: 'ζ Ori A',
        distance: 820,
        spectral: 'O9.5 Iab, B1 IV, B0 III'
    },
    {
        rank: 35,
        magnitude: 1.79,
        name: 'Dubhe',
        designation: 'α UMa',
        distance: 120,
        spectral: 'K0 III, F0 V'
    },
    {
        rank: 36,
        magnitude: 1.8,
        name: 'Mirfak',
        designation: 'α Per',
        distance: 590,
        spectral: 'F5 Ib'
    },
    {
        rank: 37,
        magnitude: 1.82,
        name: 'Wezen',
        designation: 'δ CMa',
        distance: 1800,
        spectral: 'F8 Ia'
    },
    {
        rank: 38,
        magnitude: 1.84,
        name: 'Sargas',
        designation: 'θ Sco',
        distance: 270,
        spectral: 'F0 II'
    },
    {
        rank: 39,
        magnitude: 1.85,
        name: 'Kaus Australis',
        designation: 'ε Sgr',
        distance: 140,
        spectral: 'B9.5 III'
    },
    {
        rank: 40,
        magnitude: 1.86,
        name: 'Avior',
        designation: 'ε Car',
        distance: 630,
        spectral: 'K3 III, B2 Vp'
    },
    {
        rank: 41,
        magnitude: 1.86,
        name: 'Alkaid',
        designation: 'η UMa',
        distance: 100,
        spectral: 'B3 V'
    },
    {
        rank: 42,
        magnitude: 1.9,
        name: 'Menkalinan',
        designation: 'β Aur',
        distance: 100,
        spectral: 'A1mIV+A1mIV'
    },
    {
        rank: 43,
        magnitude: 1.91,
        name: 'Atria',
        designation: 'α TrA',
        distance: 420,
        spectral: 'K2 IIb-IIIa'
    },
    {
        rank: 44,
        magnitude: 1.92,
        name: 'Alhena',
        designation: 'γ Gem',
        distance: 100,
        spectral: 'A1.5 IV+'
    },
    {
        rank: 45,
        magnitude: 1.94,
        name: 'Peacock',
        designation: 'α Pav',
        distance: 180,
        spectral: 'B3 V'
    },
    {
        rank: 46,
        magnitude: 1.96,
        name: 'Alsephina',
        designation: 'δ Vel',
        distance: 80,
        spectral: 'A1 Va(n), F7.5 V'
    },
    {
        rank: 47,
        magnitude: 1.98,
        name: 'Mirzam',
        designation: 'β CMa',
        distance: 500,
        spectral: 'B1 II-III'
    },
    {
        rank: 48,
        magnitude: 2.0,
        name: 'Alphard',
        designation: 'α Hya',
        distance: 180,
        spectral: 'K3 II-III'
    },
    {
        rank: 49,
        magnitude: 1.98,
        name: 'Polaris',
        designation: 'α UMi',
        distance: 430,
        spectral: 'F7 Ib'
    },
    {
        rank: 50,
        magnitude: 2.0,
        name: 'Hamal',
        designation: 'α Ari',
        distance: 66,
        spectral: 'K1 IIIb'
    }
];

export default brightestStars;