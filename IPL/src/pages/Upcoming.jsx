import React from "react";

// All 2025 season data
const season2025 = {
    name: "2025",
    players: [
        {
            pos: 1,
            name: "Sai Sudharsan",
            team: "GT",
            runs: 759,
            mat: 15,
            inns: 15,
            no: 1,
            hs: "108*",
            avg: 54.21,
            bf: 486,
            sr: 156.17,
            hundred: 1,
            fifty: 6,
            fours: 88,
            sixes: 21,
            img: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/Sai%20Sudharsan.png",
        },
        {
            pos: 2,
            name: "Surya Kumar Yadav",
            team: "MI",
            runs: 717,
            mat: 16,
            inns: 16,
            no: 5,
            hs: "73*",
            avg: 65.18,
            bf: 427,
            sr: 167.91,
            hundred: 0,
            fifty: 5,
            fours: 69,
            sixes: 38,
            img: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/Surya%20Kumar%20Yadav.png",
        },
        {
            pos: 3,
            name: "Virat Kohli",
            team: "RCB",
            runs: 657,
            mat: 15,
            inns: 15,
            no: 3,
            hs: "73*",
            avg: 54.75,
            bf: 454,
            sr: 144.71,
            hundred: 0,
            fifty: 8,
            fours: 66,
            sixes: 19,
            img: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/Virat%20Kohli.png",
        },
    ],
    bowlers: [
        {
            pos: 1,
            name: "Prasidh Krishna",
            team: "GT",
            wkts: 25,
            mat: 15,
            inns: 15,
            ov: "59.0",
            runs: 488,
            bbi: "41/4",
            avg: 19.52,
            econ: 8.27,
            sr: 14.16,
            fourw: 1,
            fivew: 0,
            img: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/Prasidh%20Krishna.png",
        },
        {
            pos: 2,
            name: "Noor Ahmad",
            team: "CSK",
            wkts: 24,
            mat: 14,
            inns: 14,
            ov: "50.0",
            runs: 408,
            bbi: "18/4",
            avg: 17.0,
            econ: 8.16,
            sr: 12.5,
            fourw: 2,
            fivew: 0,
            img: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/Noor%20Ahmad.png",
        },
        {
            pos: 3,
            name: "Josh Hazlewood",
            team: "RCB",
            wkts: 22,
            mat: 12,
            inns: 12,
            ov: "44.0",
            runs: 386,
            bbi: "33/4",
            avg: 17.54,
            econ: 8.77,
            sr: 12.0,
            fourw: 1,
            fivew: 0,
            img: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/Josh%20Hazlewood.png",
        },
    ],
    foursTable: [
        {
            pos: 1,
            name: "Sai Sudharsan",
            team: "GT",
            fours: 88,
            mat: 15,
            inns: 15,
            no: 1,
            runs: 759,
            hs: "108*",
            avg: 54.21,
            bf: 486,
            sr: 156.17,
            hundred: 1,
            fifty: 6,
            sixes: 21,
            img: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/Sai%20Sudharsan.png",
        },
        {
            pos: 2,
            name: "Surya Kumar Yadav",
            team: "MI",
            fours: 69,
            mat: 16,
            inns: 16,
            no: 5,
            runs: 717,
            hs: "73*",
            avg: 65.18,
            bf: 427,
            sr: 167.91,
            hundred: 0,
            fifty: 5,
            sixes: 38,
            img: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/Surya%20Kumar%20Yadav.png",
        },
        {
            pos: 3,
            name: "Virat Kohli",
            team: "RCB",
            fours: 66,
            mat: 15,
            inns: 15,
            no: 3,
            runs: 657,
            hs: "73*",
            avg: 54.75,
            bf: 454,
            sr: 144.71,
            hundred: 0,
            fifty: 8,
            sixes: 19,
            img: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/Virat%20Kohli.png",
        },
    ],
    sixesTable: [
        {
            pos: 1,
            name: "Nicholas Pooran",
            team: "LSG",
            sixes: 40,
            mat: 14,
            inns: 14,
            no: 2,
            runs: 524,
            hs: "87*",
            avg: 43.67,
            bf: 267,
            sr: 196.25,
            hundred: 0,
            fifty: 5,
            fours: 45,
            img: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/Nicholas%20Pooran.png",
        },
        {
            pos: 2,
            name: "Shreyas Iyer",
            team: "PBKS",
            sixes: 39,
            mat: 17,
            inns: 17,
            no: 5,
            runs: 604,
            hs: "97*",
            avg: 50.33,
            bf: 345,
            sr: 175.07,
            hundred: 0,
            fifty: 6,
            fours: 43,
            img: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/Shreyas%20Iyer.png",
        },
        {
            pos: 3,
            name: "Surya Kumar Yadav",
            team: "MI",
            sixes: 38,
            mat: 16,
            inns: 16,
            no: 5,
            runs: 717,
            hs: "73*",
            avg: 65.18,
            bf: 427,
            sr: 167.91,
            hundred: 0,
            fifty: 5,
            fours: 69,
            img: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/Surya%20Kumar%20Yadav.png",
        },
    ],
    strikerTable: [
        {
            pos: 1,
            name: "Vaibhav Suryavanshi",
            team: "RR",
            sr: 206.55,
            mat: 7,
            inns: 7,
            no: 0,
            runs: 252,
            hs: "101",
            avg: 36.0,
            bf: 122,
            hundred: 1,
            fifty: 1,
            fours: 18,
            sixes: 24,
            img: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/Vaibhav%20Suryavanshi.png",
        },
    ],
    avgTable: [
        {
            pos: 1,
            name: "Surya Kumar Yadav",
            team: "MI",
            avg: 65.18,
            mat: 16,
            inns: 16,
            no: 5,
            runs: 717,
            hs: "73*",
            bf: 427,
            sr: 167.91,
            hundred: 0,
            fifty: 5,
            fours: 69,
            sixes: 38,
            img: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/Surya%20Kumar%20Yadav.png",
        },
    ],
    mvpTable: [
        {
            pos: 1,
            name: "Surya Kumar Yadav",
            team: "MI",
            pts: 320.5,
            mat: 16,
            wkts: 0,
            dots: 0,
            fours: 69,
            sixes: 38,
            catches: 6,
            runouts: 0,
            stumpings: 0,
            img: "https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/Surya%20Kumar%20Yadav.png",
        },
    ],
};

// You can add more seasons as objects in this array
const allSeasons = [season2025];

// Add this data object after your season objects, outside the allSeasons array
const allTimeBattingLeaders = [
    {
        pos: 1,
        name: "Virat Kohli",
        team: "RCB",
        runs: 8661,
        mat: 267,
        inns: 259,
        no: 40,
        hs: "113",
        avg: 39.55,
        bf: 6519,
        sr: 132.86,
        hundred: 8,
        fifty: 63,
        fours: 771,
        sixes: 291,
    },
    {
        pos: 2,
        name: "Rohit Sharma",
        team: "MI",
        runs: 7046,
        mat: 272,
        inns: 267,
        no: 30,
        hs: "109*",
        avg: 29.73,
        bf: 5334,
        sr: 132.10,
        hundred: 2,
        fifty: 47,
        fours: 640,
        sixes: 302,
    },
    {
        pos: 3,
        name: "Shikhar Dhawan",
        team: "PBKS",
        runs: 6769,
        mat: 222,
        inns: 221,
        no: 29,
        hs: "106*",
        avg: 35.26,
        bf: 5324,
        sr: 127.14,
        hundred: 2,
        fifty: 51,
        fours: 768,
        sixes: 152,
    },
    {
        pos: 4,
        name: "David Warner",
        team: "DC",
        runs: 6565,
        mat: 184,
        inns: 184,
        no: 22,
        hs: "126",
        avg: 40.52,
        bf: 4697,
        sr: 139.77,
        hundred: 4,
        fifty: 61,
        fours: 663,
        sixes: 236,
    },
    {
        pos: 5,
        name: "Suresh Raina",
        team: "CSK",
        runs: 5528,
        mat: 205,
        inns: 200,
        no: 30,
        hs: "100*",
        avg: 32.52,
        bf: 4042,
        sr: 136.76,
        hundred: 1,
        fifty: 39,
        fours: 506,
        sixes: 203,
    },
    {
        pos: 6,
        name: "MS Dhoni",
        team: "CSK",
        runs: 5439,
        mat: 278,
        inns: 242,
        no: 100,
        hs: "84*",
        avg: 38.30,
        bf: 3957,
        sr: 137.45,
        hundred: 0,
        fifty: 24,
        fours: 375,
        sixes: 264,
    },
    {
        pos: 7,
        name: "KL Rahul",
        team: "DC",
        runs: 5222,
        mat: 145,
        inns: 136,
        no: 23,
        hs: "132*",
        avg: 46.21,
        bf: 3839,
        sr: 136.03,
        hundred: 5,
        fifty: 40,
        fours: 452,
        sixes: 208,
    },
    {
        pos: 8,
        name: "AB de Villiers",
        team: "RCB",
        runs: 5162,
        mat: 184,
        inns: 170,
        no: 40,
        hs: "133*",
        avg: 39.70,
        bf: 3403,
        sr: 151.68,
        hundred: 3,
        fifty: 40,
        fours: 413,
        sixes: 251,
    },
    {
        pos: 9,
        name: "Ajinkya Rahane",
        team: "KKR",
        runs: 5032,
        mat: 198,
        inns: 183,
        no: 18,
        hs: "105*",
        avg: 30.50,
        bf: 4025,
        sr: 125.02,
        hundred: 2,
        fifty: 33,
        fours: 514,
        sixes: 123,
    },
    {
        pos: 10,
        name: "Chris Gayle",
        team: "PBKS",
        runs: 4965,
        mat: 142,
        inns: 141,
        no: 16,
        hs: "175*",
        avg: 39.72,
        bf: 3333,
        sr: 148.96,
        hundred: 6,
        fifty: 31,
        fours: 405,
        sixes: 357,
    },
];

// Add this array after allTimeBattingLeaders, outside the allSeasons array
const allTimeMostFours = [
    {
        pos: 1,
        name: "Virat Kohli",
        team: "RCB",
        fours: 771,
        mat: 267,
        inns: 259,
        no: 40,
        runs: 8661,
        hs: "113",
        avg: 39.55,
        bf: 6519,
        sr: 132.86,
        hundred: 8,
        fifty: 63,
        sixes: 291,
    },
    {
        pos: 2,
        name: "Shikhar Dhawan",
        team: "PBKS",
        fours: 768,
        mat: 222,
        inns: 221,
        no: 29,
        runs: 6769,
        hs: "106*",
        avg: 35.26,
        bf: 5324,
        sr: 127.14,
        hundred: 2,
        fifty: 51,
        sixes: 152,
    },
    {
        pos: 3,
        name: "David Warner",
        team: "DC",
        fours: 663,
        mat: 184,
        inns: 184,
        no: 22,
        runs: 6565,
        hs: "126",
        avg: 40.52,
        bf: 4697,
        sr: 139.77,
        hundred: 4,
        fifty: 61,
        sixes: 236,
    },
    {
        pos: 4,
        name: "Rohit Sharma",
        team: "MI",
        fours: 640,
        mat: 272,
        inns: 267,
        no: 30,
        runs: 7046,
        hs: "109*",
        avg: 29.73,
        bf: 5334,
        sr: 132.10,
        hundred: 2,
        fifty: 47,
        sixes: 302,
    },
    {
        pos: 5,
        name: "Ajinkya Rahane",
        team: "KKR",
        fours: 514,
        mat: 198,
        inns: 183,
        no: 18,
        runs: 5032,
        hs: "105*",
        avg: 30.50,
        bf: 4025,
        sr: 125.02,
        hundred: 2,
        fifty: 33,
        sixes: 123,
    },
    {
        pos: 6,
        name: "Suresh Raina",
        team: "CSK",
        fours: 506,
        mat: 205,
        inns: 200,
        no: 30,
        runs: 5528,
        hs: "100*",
        avg: 32.52,
        bf: 4042,
        sr: 136.76,
        hundred: 1,
        fifty: 39,
        sixes: 203,
    },
    {
        pos: 7,
        name: "Gautam Gambhir",
        team: "DC",
        fours: 492,
        mat: 154,
        inns: 152,
        no: 16,
        runs: 4217,
        hs: "93",
        avg: 31.00,
        bf: 3404,
        sr: 123.88,
        hundred: 0,
        fifty: 36,
        sixes: 59,
    },
    {
        pos: 8,
        name: "Robin Uthappa",
        team: "CSK",
        fours: 481,
        mat: 205,
        inns: 197,
        no: 17,
        runs: 4952,
        hs: "88",
        avg: 27.51,
        bf: 3799,
        sr: 130.35,
        hundred: 0,
        fifty: 27,
        sixes: 182,
    },
    {
        pos: 9,
        name: "Dinesh Karthik",
        team: "RCB",
        fours: 466,
        mat: 257,
        inns: 234,
        no: 50,
        runs: 4842,
        hs: "97*",
        avg: 26.32,
        bf: 3577,
        sr: 135.36,
        hundred: 0,
        fifty: 22,
        sixes: 161,
    },
    {
        pos: 10,
        name: "Suryakumar Yadav",
        team: "MI",
        fours: 454,
        mat: 166,
        inns: 150,
        no: 28,
        runs: 4311,
        hs: "103*",
        avg: 35.34,
        bf: 2900,
        sr: 148.66,
        hundred: 2,
        fifty: 29,
        sixes: 168,
    },
];

// Add this array after allTimeMostFours, outside the allSeasons array
const allTimeMostSixes = [
    {
        pos: 1,
        name: "Chris Gayle",
        team: "PBKS",
        sixes: 357,
        mat: 142,
        inns: 141,
        no: 16,
        runs: 4965,
        hs: "175*",
        avg: 39.72,
        bf: 3333,
        sr: 148.96,
        hundred: 6,
        fifty: 31,
        fours: 405,
    },
    {
        pos: 2,
        name: "Rohit Sharma",
        team: "MI",
        sixes: 302,
        mat: 272,
        inns: 267,
        no: 30,
        runs: 7046,
        hs: "109*",
        avg: 29.73,
        bf: 5334,
        sr: 132.10,
        hundred: 2,
        fifty: 47,
        fours: 640,
    },
    {
        pos: 3,
        name: "Virat Kohli",
        team: "RCB",
        sixes: 291,
        mat: 267,
        inns: 259,
        no: 40,
        runs: 8661,
        hs: "113",
        avg: 39.55,
        bf: 6519,
        sr: 132.86,
        hundred: 8,
        fifty: 63,
        fours: 771,
    },
    {
        pos: 4,
        name: "MS Dhoni",
        team: "CSK",
        sixes: 264,
        mat: 278,
        inns: 242,
        no: 100,
        hs: "84*",
        avg: 38.30,
        bf: 3957,
        sr: 137.45,
        hundred: 0,
        fifty: 24,
        fours: 375,
    },
    {
        pos: 5,
        name: "AB de Villiers",
        team: "RCB",
        sixes: 251,
        mat: 184,
        inns: 170,
        no: 40,
        hs: "133*",
        avg: 39.70,
        bf: 3403,
        sr: 151.68,
        hundred: 3,
        fifty: 40,
        fours: 413,
    },
    {
        pos: 6,
        name: "David Warner",
        team: "DC",
        sixes: 236,
        mat: 184,
        inns: 184,
        no: 22,
        runs: 6565,
        hs: "126",
        avg: 40.52,
        bf: 4697,
        sr: 139.77,
        hundred: 4,
        fifty: 61,
        fours: 663,
    },
    {
        pos: 7,
        name: "Andre Russell",
        team: "KKR",
        sixes: 223,
        mat: 140,
        inns: 115,
        no: 21,
        runs: 2651,
        hs: "88*",
        avg: 28.20,
        bf: 1522,
        sr: 174.18,
        hundred: 0,
        fifty: 12,
        fours: 186,
    },
    {
        pos: 8,
        name: "Kieron Pollard",
        team: "MI",
        sixes: 223,
        mat: 189,
        inns: 171,
        no: 52,
        runs: 3412,
        hs: "87*",
        avg: 28.67,
        bf: 2316,
        sr: 147.32,
        hundred: 0,
        fifty: 16,
        fours: 218,
    },
    {
        pos: 9,
        name: "Sanju Samson",
        team: "RR",
        sixes: 219,
        mat: 177,
        inns: 172,
        no: 20,
        runs: 4704,
        hs: "119",
        avg: 30.95,
        bf: 3383,
        sr: 139.05,
        hundred: 3,
        fifty: 26,
        fours: 379,
    },
    {
        pos: 10,
        name: "KL Rahul",
        team: "DC",
        sixes: 208,
        mat: 145,
        inns: 136,
        no: 23,
        runs: 5222,
        hs: "132*",
        avg: 46.21,
        bf: 3839,
        sr: 136.03,
        hundred: 5,
        fifty: 40,
        fours: 452,
    },
];

// Add this array after allTimeMostSixes, outside the allSeasons array
const allTimeHighestScores = [
    {
        pos: 1,
        name: "Chris Gayle",
        team: "PBKS",
        hs: "175*",
        mat: 142,
        inns: 141,
        no: 16,
        runs: 4965,
        avg: 39.72,
        bf: 3333,
        sr: 148.96,
        hundred: 6,
        fifty: 31,
        fours: 405,
        sixes: 357,
    },
    {
        pos: 2,
        name: "Abhishek Sharma",
        team: "SRH",
        hs: "141",
        mat: 77,
        inns: 74,
        no: 7,
        runs: 1816,
        avg: 27.10,
        bf: 1114,
        sr: 163.02,
        hundred: 1,
        fifty: 9,
        fours: 174,
        sixes: 101,
    },
    {
        pos: 3,
        name: "Quinton de Kock",
        team: "KKR",
        hs: "140*",
        mat: 115,
        inns: 115,
        no: 7,
        runs: 3309,
        avg: 30.64,
        bf: 2469,
        sr: 134.02,
        hundred: 2,
        fifty: 24,
        fours: 325,
        sixes: 134,
    },
    {
        pos: 4,
        name: "AB de Villiers",
        team: "RCB",
        hs: "133*",
        mat: 184,
        inns: 170,
        no: 40,
        runs: 5162,
        avg: 39.70,
        bf: 3403,
        sr: 151.68,
        hundred: 3,
        fifty: 40,
        fours: 413,
        sixes: 251,
    },
    {
        pos: 5,
        name: "KL Rahul",
        team: "DC",
        hs: "132*",
        mat: 145,
        inns: 136,
        no: 23,
        runs: 5222,
        avg: 46.21,
        bf: 3839,
        sr: 136.03,
        hundred: 5,
        fifty: 40,
        fours: 452,
        sixes: 208,
    },
    {
        pos: 6,
        name: "Shubman Gill",
        team: "GT",
        hs: "129",
        mat: 118,
        inns: 115,
        no: 17,
        runs: 3866,
        avg: 39.45,
        bf: 2787,
        sr: 138.72,
        hundred: 4,
        fifty: 26,
        fours: 372,
        sixes: 119,
    },
    {
        pos: 7,
        name: "Rishabh Pant",
        team: "LSG",
        hs: "128*",
        mat: 125,
        inns: 123,
        no: 19,
        runs: 3553,
        avg: 34.16,
        bf: 2407,
        sr: 147.61,
        hundred: 2,
        fifty: 19,
        fours: 319,
        sixes: 170,
    },
    {
        pos: 8,
        name: "Murali Vijay",
        team: "CSK",
        hs: "127",
        mat: 106,
        inns: 106,
        no: 5,
        runs: 2619,
        avg: 25.93,
        bf: 2149,
        sr: 121.87,
        hundred: 2,
        fifty: 13,
        fours: 247,
        sixes: 91,
    },
    {
        pos: 9,
        name: "David Warner",
        team: "DC",
        hs: "126",
        mat: 184,
        inns: 184,
        no: 22,
        runs: 6565,
        avg: 40.52,
        bf: 4697,
        sr: 139.77,
        hundred: 4,
        fifty: 61,
        fours: 663,
        sixes: 236,
    },
    {
        pos: 10,
        name: "Yashasvi Jaiswal",
        team: "RR",
        hs: "124",
        mat: 67,
        inns: 66,
        no: 3,
        runs: 2166,
        avg: 34.38,
        bf: 1417,
        sr: 152.86,
        hundred: 2,
        fifty: 15,
        fours: 258,
        sixes: 92,
    },
];

// Add this array after allTimeHighestScores, outside the allSeasons array
const allTimeBestStrikeRate = [
    {
        pos: 1,
        name: "Phil Salt",
        team: "RCB",
        sr: 175.71,
        mat: 34,
        inns: 34,
        no: 3,
        runs: 1056,
        hs: "89*",
        avg: 34.06,
        bf: 601,
        hundred: 0,
        fifty: 10,
        fours: 122,
        sixes: 56,
    },
    {
        pos: 2,
        name: "Andre Russell",
        team: "KKR",
        sr: 174.18,
        mat: 140,
        inns: 115,
        no: 21,
        runs: 2651,
        hs: "88*",
        avg: 28.20,
        bf: 1522,
        hundred: 0,
        fifty: 12,
        fours: 186,
        sixes: 223,
    },
    {
        pos: 3,
        name: "Tim David",
        team: "RCB",
        sr: 173.36,
        mat: 50,
        inns: 44,
        no: 18,
        runs: 846,
        hs: "50*",
        avg: 32.54,
        bf: 488,
        hundred: 0,
        fifty: 1,
        fours: 54,
        sixes: 60,
    },
    {
        pos: 4,
        name: "Travis Head",
        team: "SRH",
        sr: 170.03,
        mat: 38,
        inns: 37,
        no: 4,
        runs: 1146,
        hs: "102",
        avg: 34.73,
        bf: 674,
        hundred: 1,
        fifty: 8,
        fours: 126,
        sixes: 55,
    },
    {
        pos: 5,
        name: "Heinrich Klaasen",
        team: "SRH",
        sr: 169.72,
        mat: 48,
        inns: 45,
        no: 8,
        runs: 1480,
        hs: "105*",
        avg: 40.00,
        bf: 872,
        hundred: 2,
        fifty: 7,
        fours: 98,
        sixes: 89,
    },
    {
        pos: 6,
        name: "Nicholas Pooran",
        team: "LSG",
        sr: 168.98,
        mat: 90,
        inns: 87,
        no: 20,
        runs: 2293,
        hs: "87*",
        avg: 34.22,
        bf: 1357,
        hundred: 0,
        fifty: 14,
        fours: 158,
        sixes: 167,
    },
    {
        pos: 7,
        name: "Sunil Narine",
        team: "KKR",
        sr: 166.51,
        mat: 189,
        inns: 122,
        no: 21,
        runs: 1780,
        hs: "109",
        avg: 17.62,
        bf: 1069,
        hundred: 1,
        fifty: 7,
        fours: 189,
        sixes: 116,
    },
    {
        pos: 8,
        name: "Tristan Stubbs",
        team: "DC",
        sr: 163.19,
        mat: 32,
        inns: 30,
        no: 13,
        runs: 705,
        hs: "71*",
        avg: 41.47,
        bf: 432,
        hundred: 0,
        fifty: 3,
        fours: 51,
        sixes: 37,
    },
    {
        pos: 9,
        name: "Abhishek Sharma",
        team: "SRH",
        sr: 163.02,
        mat: 77,
        inns: 74,
        no: 7,
        runs: 1816,
        hs: "141",
        avg: 27.10,
        bf: 1114,
        hundred: 1,
        fifty: 9,
        fours: 174,
        sixes: 101,
    },
    {
        pos: 10,
        name: "Rashid Khan",
        team: "GT",
        sr: 160.27,
        mat: 136,
        inns: 68,
        no: 26,
        runs: 585,
        hs: "79*",
        avg: 13.93,
        bf: 365,
        hundred: 0,
        fifty: 1,
        fours: 41,
        sixes: 41,
    },
];

// Add this array after allTimeBestStrikeRate, outside the allSeasons array
const allTimeFastestFifties = [
    {
        pos: 1,
        name: "Yashasvi Jaiswal",
        team: "RR",
        bf: 13,
        against: "KKR",
        venue: "Eden Gardens",
        date: "11 May 2023",
    },
    {
        pos: 2,
        name: "KL Rahul",
        team: "PBKS",
        bf: 14,
        against: "DC",
        venue: "IS Bindra Stadium",
        date: "08 April 2018",
    },
    {
        pos: 3,
        name: "Pat Cummins",
        team: "KKR",
        bf: 14,
        against: "MI",
        venue: "Maharashtra Cricket Association Stadium",
        date: "06 April 2022",
    },
    {
        pos: 4,
        name: "Romario Shepherd",
        team: "RCB",
        bf: 14,
        against: "CSK",
        venue: "M Chinnaswamy Stadium",
        date: "03 May 2025",
    },
    {
        pos: 5,
        name: "Yusuf Pathan",
        team: "KKR",
        bf: 15,
        against: "SRH",
        venue: "Eden Gardens",
        date: "24 May 2014",
    },
    {
        pos: 6,
        name: "Sunil Narine",
        team: "KKR",
        bf: 15,
        against: "RCB",
        venue: "M. Chinnaswamy Stadium",
        date: "07 May 2017",
    },
    {
        pos: 7,
        name: "Nicholas Pooran",
        team: "LSG",
        bf: 15,
        against: "RCB",
        venue: "M Chinnaswamy Stadium",
        date: "10 April 2023",
    },
    {
        pos: 8,
        name: "Jake Fraser - McGurk",
        team: "DC",
        bf: 15,
        against: "SRH",
        venue: "Arun Jaitley Stadium",
        date: "20 April 2024",
    },
    {
        pos: 9,
        name: "Jake Fraser - McGurk",
        team: "DC",
        bf: 15,
        against: "MI",
        venue: "Arun Jaitley Stadium",
        date: "27 April 2024",
    },
    {
        pos: 10,
        name: "Travis Head",
        team: "SRH",
        bf: 16,
        against: "DC",
        venue: "Arun Jaitley Stadium",
        date: "20 April 2024",
    },
];

// Add this array after allTimeFastestFifties, outside the allSeasons array
const allTimeFastestCenturies = [
    {
        pos: 1,
        name: "Chris Gayle",
        team: "RCB",
        bf: 30,
        against: "PWI",
        venue: "M. Chinnaswamy Stadium",
        date: "23 April 2013",
    },
    {
        pos: 2,
        name: "Vaibhav Suryavanshi",
        team: "RR",
        bf: 35,
        against: "GT",
        venue: "Sawai Mansingh Stadium",
        date: "28 April 2025",
    },
    {
        pos: 3,
        name: "Heinrich Klaasen",
        team: "SRH",
        bf: 37,
        against: "KKR",
        venue: "Arun Jaitley Stadium",
        date: "25 May 2025",
    },
    {
        pos: 4,
        name: "Yusuf Pathan",
        team: "RR",
        bf: 37,
        against: "MI",
        venue: "Brabourne Stadium",
        date: "13 March 2010",
    },
    {
        pos: 5,
        name: "David Miller",
        team: "PBKS",
        bf: 38,
        against: "RCB",
        venue: "IS Bindra Stadium",
        date: "06 May 2013",
    },
    {
        pos: 6,
        name: "Travis Head",
        team: "SRH",
        bf: 39,
        against: "RCB",
        venue: "M Chinnaswamy Stadium",
        date: "15 April 2024",
    },
    {
        pos: 7,
        name: "Priyansh Arya",
        team: "PBKS",
        bf: 39,
        against: "CSK",
        venue: "New PCA Stadium",
        date: "08 April 2025",
    },
    {
        pos: 8,
        name: "Abhishek Sharma",
        team: "SRH",
        bf: 40,
        against: "PBKS",
        venue: "Rajiv Gandhi International Stadium",
        date: "12 April 2025",
    },
    {
        pos: 9,
        name: "Will Jacks",
        team: "RCB",
        bf: 41,
        against: "GT",
        venue: "Narendra Modi Stadium",
        date: "28 April 2024",
    },
    {
        pos: 10,
        name: "Adam Gilchrist",
        team: "PBKS",
        bf: 42,
        against: "MI",
        venue: "DY Patil Stadium",
        date: "27 April 2008",
    },
];

const allTimeBowlingLeaders = [
  {
    pos: 1,
    name: "Yuzvendra Chahal",
    team: "PBKS",
    wkts: 221,
    mat: 174,
    inns: 172,
    ov: 630,
    runs: 5032,
    bbi: "5/40",
    avg: 22.77,
    econ: 7.96,
    sr: 17.15,
    fourw: 8,
    fivew: 1,
  },
  {
    pos: 2,
    name: "Bhuvneshwar Kumar",
    team: "RCB",
    wkts: 198,
    mat: 190,
    inns: 190,
    ov: 702,
    runs: 5412,
    bbi: "5/19",
    avg: 27.33,
    econ: 7.69,
    sr: 21.32,
    fourw: 2,
    fivew: 2,
  },
  {
    pos: 3,
    name: "Piyush Chawla",
    team: "MI",
    wkts: 192,
    mat: 192,
    inns: 191,
    ov: 640,
    runs: 5108,
    bbi: "4/17",
    avg: 26.60,
    econ: 7.96,
    sr: 20.05,
    fourw: 2,
    fivew: 0,
  },
  {
    pos: 4,
    name: "Sunil Narine",
    team: "KKR",
    wkts: 192,
    mat: 189,
    inns: 187,
    ov: 724,
    runs: 4922,
    bbi: "5/19",
    avg: 25.64,
    econ: 6.80,
    sr: 22.64,
    fourw: 7,
    fivew: 1,
  },
  {
    pos: 5,
    name: "Ravichandran Ashwin",
    team: "CSK",
    wkts: 187,
    mat: 221,
    inns: 217,
    ov: 784,
    runs: 5653,
    bbi: "4/34",
    avg: 30.23,
    econ: 7.20,
    sr: 25.19,
    fourw: 1,
    fivew: 0,
  },
  {
    pos: 6,
    name: "Jasprit Bumrah",
    team: "MI",
    wkts: 183,
    mat: 145,
    inns: 145,
    ov: 553,
    runs: 4030,
    bbi: "5/10",
    avg: 22.02,
    econ: 7.25,
    sr: 18.23,
    fourw: 3,
    fivew: 2,
  },
  {
    pos: 7,
    name: "Dwayne Bravo",
    team: "CSK",
    wkts: 183,
    mat: 161,
    inns: 158,
    ov: 516,
    runs: 4359,
    bbi: "4/22",
    avg: 23.82,
    econ: 8.38,
    sr: 17.05,
    fourw: 2,
    fivew: 0,
  },
  {
    pos: 8,
    name: "Amit Mishra",
    team: "LSG",
    wkts: 174,
    mat: 162,
    inns: 162,
    ov: 561,
    runs: 4149,
    bbi: "5/17",
    avg: 23.84,
    econ: 7.38,
    sr: 19.37,
    fourw: 4,
    fivew: 1,
  },
  {
    pos: 9,
    name: "Lasith Malinga",
    team: "MI",
    wkts: 170,
    mat: 122,
    inns: 122,
    ov: 471,
    runs: 3366,
    bbi: "5/13",
    avg: 19.80,
    econ: 7.14,
    sr: 16.63,
    fourw: 6,
    fivew: 1,
  },
  {
    pos: 10,
    name: "Ravindra Jadeja",
    team: "CSK",
    wkts: 170,
    mat: 254,
    inns: 225,
    ov: 673,
    runs: 5188,
    bbi: "5/16",
    avg: 30.52,
    econ: 7.67,
    sr: 23.86,
    fourw: 3,
    fivew: 1,
  },
];

// Place this array at the top of your file, outside the component
const allTimeBestBowlingFigures = [
  {
    pos: 1,
    name: "Alzarri Joseph",
    team: "MI",
    bbi: "12/6",
    ov: "3.4",
    runs: 12,
    wkts: 6,
    sr: 3.66,
    against: "SRH",
    venue: "Rajiv Gandhi Intl. Cricket Stadium",
    date: "06 April 2019",
  },
  {
    pos: 2,
    name: "Sohail Tanvir",
    team: "RR",
    bbi: "14/6",
    ov: "4",
    runs: 14,
    wkts: 6,
    sr: 4,
    against: "CSK",
    venue: "Sawai Mansingh Stadium",
    date: "04 May 2008",
  },
  {
    pos: 3,
    name: "Adam Zampa",
    team: "RPS",
    bbi: "19/6",
    ov: "4",
    runs: 19,
    wkts: 6,
    sr: 4,
    against: "SRH",
    venue: "ACA-VDCA Stadium",
    date: "10 May 2016",
  },
  {
    pos: 4,
    name: "Anil Kumble",
    team: "RCB",
    bbi: "5/5",
    ov: "3.1",
    runs: 5,
    wkts: 5,
    sr: 3.8,
    against: "RR",
    venue: "Newlands",
    date: "18 April 2009",
  },
  {
    pos: 5,
    name: "Akash Madhwal",
    team: "MI",
    bbi: "5/5",
    ov: "3.3",
    runs: 5,
    wkts: 5,
    sr: 4.2,
    against: "LSG",
    venue: "MA Chidambaram Stadium",
    date: "24 May 2023",
  },
  {
    pos: 6,
    name: "Jasprit Bumrah",
    team: "MI",
    bbi: "10/5",
    ov: "4",
    runs: 10,
    wkts: 5,
    sr: 4.8,
    against: "KKR",
    venue: "DY Patil Stadium",
    date: "09 May 2022",
  },
  {
    pos: 7,
    name: "Mohit Sharma",
    team: "GT",
    bbi: "10/5",
    ov: "2.2",
    runs: 10,
    wkts: 5,
    sr: 2.8,
    against: "MI",
    venue: "Narendra Modi Stadium",
    date: "26 May 2023",
  },
  {
    pos: 8,
    name: "Ishant Sharma",
    team: "DEC",
    bbi: "12/5",
    ov: "3",
    runs: 12,
    wkts: 5,
    sr: 3.6,
    against: "KTK",
    venue: "Jawaharlal Nehru Stadium",
    date: "27 April 2011",
  },
  {
    pos: 9,
    name: "Lasith Malinga",
    team: "MI",
    bbi: "13/5",
    ov: "3.4",
    runs: 13,
    wkts: 5,
    sr: 4.4,
    against: "DC",
    venue: "Arun Jaitley Stadium",
    date: "10 April 2011",
  },
  {
    pos: 10,
    name: "Mark Wood",
    team: "LSG",
    bbi: "14/5",
    ov: "4",
    runs: 14,
    wkts: 5,
    sr: 4.8,
    against: "DC",
    venue: "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
    date: "01 April 2023",
  },
];

const bestBowlingAverages = [
    {
      pos: 1,
      name: "Lungisani Ngidi",
      team: "RCB",
      avg: 18.24,
      mat: 16,
      inns: 16,
      ov: 62,
      runs: 529,
      wkts: 29,
      bbi: "4/10",
      econ: 8.53,
      sr: 12.83,
      fourW: 1,
      fiveW: 0,
    },
    {
      pos: 2,
      name: "Lasith Malinga",
      team: "MI",
      avg: 19.80,
      mat: 122,
      inns: 122,
      ov: 471,
      runs: 3366,
      wkts: 170,
      bbi: "5/13",
      econ: 7.14,
      sr: 16.63,
      fourW: 6,
      fiveW: 1,
    },
    {
      pos: 3,
      name: "Sai Kishore",
      team: "GT",
      avg: 20.34,
      mat: 25,
      inns: 25,
      ov: 73,
      runs: 651,
      wkts: 32,
      bbi: "4/33",
      econ: 8.86,
      sr: 13.78,
      fourW: 1,
      fiveW: 0,
    },
    {
      pos: 4,
      name: "Imran Tahir",
      team: "CSK",
      avg: 20.77,
      mat: 59,
      inns: 59,
      ov: 219,
      runs: 1703,
      wkts: 82,
      bbi: "4/12",
      econ: 7.76,
      sr: 16.05,
      fourW: 3,
      fiveW: 0,
    },
    {
      pos: 5,
      name: "Josh Hazlewood",
      team: "RCB",
      avg: 20.98,
      mat: 39,
      inns: 39,
      ov: 144,
      runs: 1196,
      wkts: 57,
      bbi: "4/25",
      econ: 8.28,
      sr: 15.21,
      fourW: 2,
      fiveW: 0,
    },
    {
      pos: 6,
      name: "Adam Zampa",
      team: "SRH",
      avg: 21.03,
      mat: 22,
      inns: 22,
      ov: 78,
      runs: 652,
      wkts: 31,
      bbi: "6/19",
      econ: 8.38,
      sr: 15.06,
      fourW: 0,
      fiveW: 1,
    },
    {
      pos: 7,
      name: "Mitchell Marsh",
      team: "LSG",
      avg: 21.49,
      mat: 55,
      inns: 34,
      ov: 92,
      runs: 795,
      wkts: 37,
      bbi: "4/25",
      econ: 8.52,
      sr: 15.14,
      fourW: 2,
      fiveW: 0,
    },
    {
      pos: 8,
      name: "Matheesha Pathirana",
      team: "CSK",
      avg: 21.62,
      mat: 32,
      inns: 32,
      ov: 115,
      runs: 1016,
      wkts: 47,
      bbi: "4/28",
      econ: 8.68,
      sr: 14.94,
      fourW: 1,
      fiveW: 0,
    },
    {
      pos: 9,
      name: "Chris Woakes",
      team: "DC",
      avg: 21.93,
      mat: 21,
      inns: 21,
      ov: 73,
      runs: 658,
      wkts: 30,
      bbi: "3/36",
      econ: 8.97,
      sr: 14.67,
      fourW: 0,
      fiveW: 0,
    },
    {
      pos: 10,
      name: "Jasprit Bumrah",
      team: "MI",
      avg: 22.02,
      mat: 145,
      inns: 145,
      ov: 553,
      runs: 4030,
      wkts: 183,
      bbi: "5/10",
      econ: 7.25,
      sr: 18.23,
      fourW: 3,
      fiveW: 2,
    },
  ];
  

const mostDotsBowlers = [
    {
      pos: 1,
      name: "Bhuvneshwar Kumar",
      team: "RCB",
      dots: 1793,
      mat: 190,
      inns: 190,
      ov: 702,
      runs: 5412,
      wkts: 198,
      avg: 27.33,
      econ: 7.69,
      sr: 21.32,
      fourW: 2,
      fiveW: 2,
    },
    {
      pos: 2,
      name: "Sunil Narine",
      team: "KKR",
      dots: 1694,
      mat: 189,
      inns: 187,
      ov: 724,
      runs: 4922,
      wkts: 192,
      avg: 25.64,
      econ: 6.80,
      sr: 22.64,
      fourW: 7,
      fiveW: 1,
    },
    {
      pos: 3,
      name: "Ravichandran Ashwin",
      team: "CSK",
      dots: 1623,
      mat: 221,
      inns: 217,
      ov: 784,
      runs: 5653,
      wkts: 187,
      avg: 30.23,
      econ: 7.20,
      sr: 25.19,
      fourW: 1,
      fiveW: 0,
    },
    {
      pos: 4,
      name: "Jasprit Bumrah",
      team: "MI",
      dots: 1397,
      mat: 145,
      inns: 145,
      ov: 553,
      runs: 4030,
      wkts: 183,
      avg: 22.02,
      econ: 7.25,
      sr: 18.23,
      fourW: 3,
      fiveW: 2,
    },
    {
      pos: 5,
      name: "Piyush Chawla",
      team: "MI",
      dots: 1337,
      mat: 192,
      inns: 191,
      ov: 640,
      runs: 5108,
      wkts: 192,
      avg: 26.60,
      econ: 7.96,
      sr: 20.05,
      fourW: 2,
      fiveW: 0,
    },
    {
      pos: 6,
      name: "Ravindra Jadeja",
      team: "CSK",
      dots: 1311,
      mat: 254,
      inns: 225,
      ov: 673,
      runs: 5188,
      wkts: 170,
      avg: 30.52,
      econ: 7.67,
      sr: 23.86,
      fourW: 3,
      fiveW: 1,
    },
    {
      pos: 7,
      name: "Yuzvendra Chahal",
      team: "PBKS",
      dots: 1302,
      mat: 174,
      inns: 172,
      ov: 630,
      runs: 5032,
      wkts: 221,
      avg: 22.77,
      econ: 7.96,
      sr: 17.15,
      fourW: 8,
      fiveW: 1,
    },
    {
      pos: 8,
      name: "Harbhajan Singh",
      team: "KKR",
      dots: 1268,
      mat: 163,
      inns: 160,
      ov: 569,
      runs: 4030,
      wkts: 150,
      avg: 26.87,
      econ: 7.08,
      sr: 22.77,
      fourW: 1,
      fiveW: 1,
    },
    {
      pos: 9,
      name: "Umesh Yadav",
      team: "GT",
      dots: 1203,
      mat: 148,
      inns: 147,
      ov: 508,
      runs: 4296,
      wkts: 144,
      avg: 29.83,
      econ: 8.45,
      sr: 21.18,
      fourW: 3,
      fiveW: 0,
    },
    {
      pos: 10,
      name: "Rashid Khan",
      team: "GT",
      dots: 1191,
      mat: 136,
      inns: 136,
      ov: 530,
      runs: 3766,
      wkts: 158,
      avg: 23.84,
      econ: 7.09,
      sr: 20.18,
      fourW: 2,
      fiveW: 0,
    },
];
  
const bestEconomyBowlers = [
    {
      pos: 1,
      name: "Muttiah Muralitharan",
      team: "RCB",
      econ: 6.68,
      mat: 66,
      inns: 66,
      ov: 254,
      runs: 1696,
      wkts: 63,
      bbi: "3/11",
      avg: 26.92,
      sr: 24.19,
      fourW: 0,
      fiveW: 0,
    },
    {
      pos: 2,
      name: "Roelof van der Merwe",
      team: "DC",
      econ: 6.74,
      mat: 21,
      inns: 21,
      ov: 73,
      runs: 498,
      wkts: 21,
      bbi: "3/20",
      avg: 23.71,
      sr: 21.10,
      fourW: 0,
      fiveW: 0,
    },
    {
      pos: 3,
      name: "Sunil Narine",
      team: "KKR",
      econ: 6.80,
      mat: 189,
      inns: 187,
      ov: 724,
      runs: 4922,
      wkts: 192,
      bbi: "5/19",
      avg: 25.64,
      sr: 22.64,
      fourW: 7,
      fiveW: 1,
    },
    {
      pos: 4,
      name: "Jayant Yadav",
      team: "GT",
      econ: 6.85,
      mat: 20,
      inns: 20,
      ov: 65,
      runs: 445,
      wkts: 8,
      bbi: "1/23",
      avg: 55.63,
      sr: 48.75,
      fourW: 0,
      fiveW: 0,
    },
    {
      pos: 5,
      name: "Dale Steyn",
      team: "RCB",
      econ: 6.92,
      mat: 95,
      inns: 95,
      ov: 362,
      runs: 2508,
      wkts: 97,
      bbi: "3/11",
      avg: 25.86,
      sr: 22.43,
      fourW: 0,
      fiveW: 0,
    },
    {
      pos: 6,
      name: "Harbhajan Singh",
      team: "KKR",
      econ: 7.08,
      mat: 163,
      inns: 160,
      ov: 569,
      runs: 4030,
      wkts: 150,
      bbi: "5/18",
      avg: 26.87,
      sr: 22.77,
      fourW: 1,
      fiveW: 1,
    },
    {
      pos: 7,
      name: "Rashid Khan",
      team: "GT",
      econ: 7.09,
      mat: 136,
      inns: 136,
      ov: 530,
      runs: 3766,
      wkts: 158,
      bbi: "4/24",
      avg: 23.84,
      sr: 20.18,
      fourW: 2,
      fiveW: 0,
    },
    {
      pos: 8,
      name: "Lasith Malinga",
      team: "MI",
      econ: 7.14,
      mat: 122,
      inns: 122,
      ov: 471,
      runs: 3366,
      wkts: 170,
      bbi: "5/13",
      avg: 19.80,
      sr: 16.63,
      fourW: 6,
      fiveW: 1,
    },
    {
      pos: 9,
      name: "Ravichandran Ashwin",
      team: "CSK",
      econ: 7.20,
      mat: 221,
      inns: 217,
      ov: 784,
      runs: 5653,
      wkts: 187,
      bbi: "4/34",
      avg: 30.23,
      sr: 25.19,
      fourW: 1,
      fiveW: 0,
    },
    {
      pos: 10,
      name: "Pragyan Ojha",
      team: "MI",
      econ: 7.22,
      mat: 80,
      inns: 78,
      ov: 270,
      runs: 1952,
      wkts: 85,
      bbi: "3/11",
      avg: 22.96,
      sr: 19.09,
      fourW: 0,
      fiveW: 0,
    },
  ];
  
  

// Add this table in your Upcoming component where you want to show the Best Bowling Figures
const Upcoming = () => (
    <div className="flex flex-col items-center min-h-screen gap-16 py-16 bg-gray-100">
        {/* All Time Batting Leaders Table */}
        <div className="w-full">
            <h1 className="mb-8 text-5xl font-bold text-center text-indigo-900 drop-shadow-lg">
                All Time Batting Leaders (Orange cap)
            </h1>
            <div className="w-full px-4 mx-auto mb-12 max-w-7xl">
                <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                    <table className="min-w-full text-sm text-center">
                        <thead className="bg-indigo-100">
                            <tr className="text-gray-700">
                                <th className="p-3">POS</th>
                                <th className="p-3">Player</th>
                                <th className="p-3">Team</th>
                                <th className="p-3">Runs</th>
                                <th className="p-3">Mat</th>
                                <th className="p-3">Inns</th>
                                <th className="p-3">NO</th>
                                <th className="p-3">HS</th>
                                <th className="p-3">Avg</th>
                                <th className="p-3">BF</th>
                                <th className="p-3">SR</th>
                                <th className="p-3">100</th>
                                <th className="p-3">50</th>
                                <th className="p-3">4s</th>
                                <th className="p-3">6s</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTimeBattingLeaders.map((player) => (
                                <tr
                                    key={player.pos}
                                    className="font-semibold text-gray-800 transition border-b hover:bg-indigo-50"
                                >
                                    <td className="p-3">{player.pos}</td>
                                    <td className="p-3">{player.name}</td>
                                    <td className="p-3">{player.team}</td>
                                    <td className="p-3">{player.runs}</td>
                                    <td className="p-3">{player.mat}</td>
                                    <td className="p-3">{player.inns}</td>
                                    <td className="p-3">{player.no}</td>
                                    <td className="p-3">{player.hs}</td>
                                    <td className="p-3">{player.avg}</td>
                                    <td className="p-3">{player.bf}</td>
                                    <td className="p-3">{player.sr}</td>
                                    <td className="p-3">{player.hundred}</td>
                                    <td className="p-3">{player.fifty}</td>
                                    <td className="p-3">{player.fours}</td>
                                    <td className="p-3">{player.sixes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* All Time Most Fours Table */}
        <div className="w-full">
            <h1 className="mb-8 text-5xl font-bold text-center text-pink-900 drop-shadow-lg">
                All Time Most Fours
            </h1>
            <div className="w-full px-4 mx-auto mb-12 max-w-7xl">
                <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                    <table className="min-w-full text-sm text-center">
                        <thead className="bg-pink-100">
                            <tr className="text-gray-700">
                                <th className="p-3">POS</th>
                                <th className="p-3">Player</th>
                                <th className="p-3">Team</th>
                                <th className="p-3">4s</th>
                                <th className="p-3">Mat</th>
                                <th className="p-3">Inns</th>
                                <th className="p-3">NO</th>
                                <th className="p-3">Runs</th>
                                <th className="p-3">HS</th>
                                <th className="p-3">Avg</th>
                                <th className="p-3">BF</th>
                                <th className="p-3">SR</th>
                                <th className="p-3">100</th>
                                <th className="p-3">50</th>
                                <th className="p-3">6s</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTimeMostFours.map((player) => (
                                <tr
                                    key={player.pos}
                                    className="font-semibold text-gray-800 transition border-b hover:bg-pink-50"
                                >
                                    <td className="p-3">{player.pos}</td>
                                    <td className="p-3">{player.name}</td>
                                    <td className="p-3">{player.team}</td>
                                    <td className="p-3">{player.fours}</td>
                                    <td className="p-3">{player.mat}</td>
                                    <td className="p-3">{player.inns}</td>
                                    <td className="p-3">{player.no}</td>
                                    <td className="p-3">{player.runs}</td>
                                    <td className="p-3">{player.hs}</td>
                                    <td className="p-3">{player.avg}</td>
                                    <td className="p-3">{player.bf}</td>
                                    <td className="p-3">{player.sr}</td>
                                    <td className="p-3">{player.hundred}</td>
                                    <td className="p-3">{player.fifty}</td>
                                    <td className="p-3">{player.sixes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* All Time Most Sixes Table */}
        <div className="w-full">
            <h1 className="mb-8 text-5xl font-bold text-center text-purple-900 drop-shadow-lg">
                All Time Most Sixes
            </h1>
            <div className="w-full px-4 mx-auto mb-12 max-w-7xl">
                <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                    <table className="min-w-full text-sm text-center">
                        <thead className="bg-purple-100">
                            <tr className="text-gray-700">
                                <th className="p-3">POS</th>
                                <th className="p-3">Player</th>
                                <th className="p-3">Team</th>
                                <th className="p-3">6s</th>
                                <th className="p-3">Mat</th>
                                <th className="p-3">Inns</th>
                                <th className="p-3">NO</th>
                                <th className="p-3">Runs</th>
                                <th className="p-3">HS</th>
                                <th className="p-3">Avg</th>
                                <th className="p-3">BF</th>
                                <th className="p-3">SR</th>
                                <th className="p-3">100</th>
                                <th className="p-3">50</th>
                                <th className="p-3">4s</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTimeMostSixes.map((player) => (
                                <tr
                                    key={player.pos}
                                    className="font-semibold text-gray-800 transition border-b hover:bg-purple-50"
                                >
                                    <td className="p-3">{player.pos}</td>
                                    <td className="p-3">{player.name}</td>
                                    <td className="p-3">{player.team}</td>
                                    <td className="p-3">{player.sixes}</td>
                                    <td className="p-3">{player.mat}</td>
                                    <td className="p-3">{player.inns}</td>
                                    <td className="p-3">{player.no}</td>
                                    <td className="p-3">{player.runs}</td>
                                    <td className="p-3">{player.hs}</td>
                                    <td className="p-3">{player.avg}</td>
                                    <td className="p-3">{player.bf}</td>
                                    <td className="p-3">{player.sr}</td>
                                    <td className="p-3">{player.hundred}</td>
                                    <td className="p-3">{player.fifty}</td>
                                    <td className="p-3">{player.fours}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* All Time Highest Scores Table */}
        <div className="w-full">
            <h1 className="mb-8 text-5xl font-bold text-center text-orange-900 drop-shadow-lg">
                All Time Highest Scores
            </h1>
            <div className="w-full px-4 mx-auto mb-12 max-w-7xl">
                <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                    <table className="min-w-full text-sm text-center">
                        <thead className="bg-orange-100">
                            <tr className="text-gray-700">
                                <th className="p-3">POS</th>
                                <th className="p-3">Player</th>
                                <th className="p-3">Team</th>
                                <th className="p-3">HS</th>
                                <th className="p-3">Mat</th>
                                <th className="p-3">Inns</th>
                                <th className="p-3">NO</th>
                                <th className="p-3">Runs</th>
                                <th className="p-3">Avg</th>
                                <th className="p-3">BF</th>
                                <th className="p-3">SR</th>
                                <th className="p-3">100</th>
                                <th className="p-3">50</th>
                                <th className="p-3">4s</th>
                                <th className="p-3">6s</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTimeHighestScores.map((player) => (
                                <tr
                                    key={player.pos}
                                    className="font-semibold text-gray-800 transition border-b hover:bg-orange-50"
                                >
                                    <td className="p-3">{player.pos}</td>
                                    <td className="p-3">{player.name}</td>
                                    <td className="p-3">{player.team}</td>
                                    <td className="p-3">{player.hs}</td>
                                    <td className="p-3">{player.mat}</td>
                                    <td className="p-3">{player.inns}</td>
                                    <td className="p-3">{player.no}</td>
                                    <td className="p-3">{player.runs}</td>
                                    <td className="p-3">{player.avg}</td>
                                    <td className="p-3">{player.bf}</td>
                                    <td className="p-3">{player.sr}</td>
                                    <td className="p-3">{player.hundred}</td>
                                    <td className="p-3">{player.fifty}</td>
                                    <td className="p-3">{player.fours}</td>
                                    <td className="p-3">{player.sixes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* All Time Best Strike Rate Table */}
        <div className="w-full">
            <h1 className="mb-8 text-5xl font-bold text-center text-yellow-900 drop-shadow-lg">
                All Time Best Strike Rate
            </h1>
            <div className="w-full px-4 mx-auto mb-12 max-w-7xl">
                <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                    <table className="min-w-full text-sm text-center">
                        <thead className="bg-yellow-100">
                            <tr className="text-gray-700">
                                <th className="p-3">POS</th>
                                <th className="p-3">Player</th>
                                <th className="p-3">Team</th>
                                <th className="p-3">SR</th>
                                <th className="p-3">Mat</th>
                                <th className="p-3">Inns</th>
                                <th className="p-3">NO</th>
                                <th className="p-3">Runs</th>
                                <th className="p-3">HS</th>
                                <th className="p-3">Avg</th>
                                <th className="p-3">BF</th>
                                <th className="p-3">100</th>
                                <th className="p-3">50</th>
                                <th className="p-3">4s</th>
                                <th className="p-3">6s</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTimeBestStrikeRate.map((player) => (
                                <tr
                                    key={player.pos}
                                    className="font-semibold text-gray-800 transition border-b hover:bg-yellow-50"
                                >
                                    <td className="p-3">{player.pos}</td>
                                    <td className="p-3">{player.name}</td>
                                    <td className="p-3">{player.team}</td>
                                    <td className="p-3">{player.sr}</td>
                                    <td className="p-3">{player.mat}</td>
                                    <td className="p-3">{player.inns}</td>
                                    <td className="p-3">{player.no}</td>
                                    <td className="p-3">{player.runs}</td>
                                    <td className="p-3">{player.hs}</td>
                                    <td className="p-3">{player.avg}</td>
                                    <td className="p-3">{player.bf}</td>
                                    <td className="p-3">{player.hundred}</td>
                                    <td className="p-3">{player.fifty}</td>
                                    <td className="p-3">{player.fours}</td>
                                    <td className="p-3">{player.sixes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* All Time Fastest Fifties Table */}
        <div className="w-full">
            <h1 className="mb-8 text-5xl font-bold text-center text-pink-700 drop-shadow-lg">
                All Time Fastest Fifties
            </h1>
            <div className="w-full max-w-4xl px-4 mx-auto mb-12">
                <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                    <table className="min-w-full text-sm text-center">
                        <thead className="bg-pink-100">
                            <tr className="text-gray-700">
                                <th className="p-3">POS</th>
                                <th className="p-3">Player</th>
                                <th className="p-3">Team</th>
                                <th className="p-3">Balls Faced</th>
                                <th className="p-3">Against</th>
                                <th className="p-3">Venue</th>
                                <th className="p-3">Match Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTimeFastestFifties.map((entry) => (
                                <tr
                                    key={entry.pos}
                                    className="font-semibold text-gray-800 transition border-b hover:bg-pink-50"
                                >
                                    <td className="p-3">{entry.pos}</td>
                                    <td className="p-3">{entry.name}</td>
                                    <td className="p-3">{entry.team}</td>
                                    <td className="p-3">{entry.bf}</td>
                                    <td className="p-3">{entry.against}</td>
                                    <td className="p-3">{entry.venue}</td>
                                    <td className="p-3">{entry.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* All Time Fastest Centuries Table */}
        <div className="w-full">
            <h1 className="mb-8 text-5xl font-bold text-center text-green-700 drop-shadow-lg">
                All Time Fastest Centuries
            </h1>
            <div className="w-full max-w-4xl px-4 mx-auto mb-12">
                <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                    <table className="min-w-full text-sm text-center">
                        <thead className="bg-green-100">
                            <tr className="text-gray-700">
                                <th className="p-3">POS</th>
                                <th className="p-3">Player</th>
                                <th className="p-3">Team</th>
                                <th className="p-3">Balls Faced</th>
                                <th className="p-3">Against</th>
                                <th className="p-3">Venue</th>
                                <th className="p-3">Match Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTimeFastestCenturies.map((entry) => (
                                <tr
                                    key={entry.pos}
                                    className="font-semibold text-gray-800 transition border-b hover:bg-green-50"
                                >
                                    <td className="p-3">{entry.pos}</td>
                                    <td className="p-3">{entry.name}</td>
                                    <td className="p-3">{entry.team}</td>
                                    <td className="p-3">{entry.bf}</td>
                                    <td className="p-3">{entry.against}</td>
                                    <td className="p-3">{entry.venue}</td>
                                    <td className="p-3">{entry.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* All Time Bowling Leaders (Purple Cap) Table */}
        <div className="w-full">
            <h1 className="mb-8 text-5xl font-bold text-center text-purple-700 drop-shadow-lg">
                All Time Bowling Leaders (Purple Cap)
            </h1>
            <div className="w-full px-4 mx-auto mb-12 max-w-7xl">
                <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                    <table className="min-w-full text-sm text-center">
                        <thead className="bg-purple-100">
                            <tr className="text-gray-700">
                                <th className="p-3">POS</th>
                                <th className="p-3">Player</th>
                                <th className="p-3">Team</th>
                                <th className="p-3">Wkts</th>
                                <th className="p-3">Mat</th>
                                <th className="p-3">Inns</th>
                                <th className="p-3">Ov</th>
                                <th className="p-3">Runs</th>
                                <th className="p-3">BBI</th>
                                <th className="p-3">Avg</th>
                                <th className="p-3">Econ</th>
                                <th className="p-3">SR</th>
                                <th className="p-3">4w</th>
                                <th className="p-3">5w</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTimeBowlingLeaders.map((bowler) => (
                                <tr
                                    key={bowler.pos}
                                    className="font-semibold text-gray-800 transition border-b hover:bg-purple-50"
                                >
                                    <td className="p-3">{bowler.pos}</td>
                                    <td className="p-3">{bowler.name}</td>
                                    <td className="p-3">{bowler.team}</td>
                                    <td className="p-3">{bowler.wkts}</td>
                                    <td className="p-3">{bowler.mat}</td>
                                    <td className="p-3">{bowler.inns}</td>
                                    <td className="p-3">{bowler.ov}</td>
                                    <td className="p-3">{bowler.runs}</td>
                                    <td className="p-3">{bowler.bbi}</td>
                                    <td className="p-3">{bowler.avg}</td>
                                    <td className="p-3">{bowler.econ}</td>
                                    <td className="p-3">{bowler.sr}</td>
                                    <td className="p-3">{bowler.fourw}</td>
                                    <td className="p-3">{bowler.fivew}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* All Time Best Bowling Figures Table */}
        <div className="w-full">
  <h1 className="mb-8 text-5xl font-bold text-center text-blue-700 drop-shadow-lg">
    All Time Best Bowling Figures
  </h1>
  <div className="w-full px-4 mx-auto mb-12 max-w-7xl">
    <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
      <table className="min-w-full text-sm text-center">
        <thead className="bg-blue-100">
          <tr className="text-gray-700">
            <th className="p-3">POS</th>
            <th className="p-3">Player</th>
            <th className="p-3">Team</th>
            <th className="p-3">BBI</th>
            <th className="p-3">Ov</th>
            <th className="p-3">Runs</th>
            <th className="p-3">Wkts</th>
            <th className="p-3">SR</th>
            <th className="p-3">Against</th>
            <th className="p-3">Venue</th>
            <th className="p-3">Match Date</th>
          </tr>
        </thead>
        <tbody>
          {allTimeBestBowlingFigures.map((entry) => (
            <tr
              key={entry.pos}
              className="font-semibold text-gray-800 transition border-b hover:bg-blue-50"
            >
              <td className="p-3">{entry.pos}</td>
              <td className="p-3">{entry.name}</td>
              <td className="p-3">{entry.team}</td>
              <td className="p-3">{entry.bbi}</td>
              <td className="p-3">{entry.ov}</td>
              <td className="p-3">{entry.runs}</td>
              <td className="p-3">{entry.wkts}</td>
              <td className="p-3">{entry.sr}</td>
              <td className="p-3">{entry.against}</td>
              <td className="p-3">{entry.venue}</td>
              <td className="p-3">{entry.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
        </div>
        
        
        
        <div className="w-full">
  <h1 className="mb-8 text-5xl font-bold text-center text-blue-700 drop-shadow-lg">
    Best Bowling Averages in IPL
  </h1>
  <div className="w-full px-4 mx-auto mb-12 max-w-7xl">
    <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
      <table className="min-w-full text-sm text-center">
        <thead className="sticky top-0 z-10 bg-blue-100">
          <tr className="text-gray-700">
            <th className="p-3">POS</th>
            <th className="p-3">Player</th>
            <th className="p-3">Team</th>
            <th className="p-3">Avg</th>
            <th className="p-3">Mat</th>
            <th className="p-3">Inns</th>
            <th className="p-3">Ov</th>
            <th className="p-3">Runs</th>
            <th className="p-3">Wkts</th>
            <th className="p-3">BBI</th>
            <th className="p-3">Econ</th>
            <th className="p-3">SR</th>
            <th className="p-3">4W</th>
            <th className="p-3">5W</th>
          </tr>
        </thead>
        <tbody>
          {bestBowlingAverages.map((entry) => (
            <tr
              key={entry.pos}
              className={`font-semibold text-gray-800 transition border-b hover:bg-blue-50 ${
                entry.pos === 1 ? "bg-yellow-100 font-bold text-blue-700" : ""
              }`}
            >
              <td className="p-3">{entry.pos}</td>
              <td className="p-3">{entry.name}</td>
              <td className="p-3">{entry.team}</td>
              <td className="p-3">{entry.avg}</td>
              <td className="p-3">{entry.mat}</td>
              <td className="p-3">{entry.inns}</td>
              <td className="p-3">{entry.ov}</td>
              <td className="p-3">{entry.runs}</td>
              <td className="p-3">{entry.wkts}</td>
              <td className="p-3">{entry.bbi}</td>
              <td className="p-3">{entry.econ}</td>
              <td className="p-3">{entry.sr}</td>
              <td className="p-3">{entry.fourW}</td>
              <td className="p-3">{entry.fiveW}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
        
        
<div className="w-full">
  <h1 className="mb-8 text-5xl font-bold text-center text-blue-700 drop-shadow-lg">
    Best Economy in IPL
  </h1>
  <div className="w-full px-4 mx-auto mb-12 max-w-7xl">
    <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
      <table className="min-w-full text-sm text-center">
        <thead className="sticky top-0 z-10 bg-blue-100">
          <tr className="text-gray-700">
            <th className="p-3">POS</th>
            <th className="p-3">Player</th>
            <th className="p-3">Team</th>
            <th className="p-3">Econ</th>
            <th className="p-3">Mat</th>
            <th className="p-3">Inns</th>
            <th className="p-3">Ov</th>
            <th className="p-3">Runs</th>
            <th className="p-3">Wkts</th>
            <th className="p-3">BBI</th>
            <th className="p-3">Avg</th>
            <th className="p-3">SR</th>
            <th className="p-3">4W</th>
            <th className="p-3">5W</th>
          </tr>
        </thead>
        <tbody>
          {bestEconomyBowlers.map((entry) => (
            <tr
              key={entry.pos}
              className={`font-semibold text-gray-800 transition border-b hover:bg-blue-50 ${
                entry.pos === 1 ? "bg-yellow-100 font-bold text-blue-700" : ""
              }`}
            >
              <td className="p-3">{entry.pos}</td>
              <td className="p-3">{entry.name}</td>
              <td className="p-3">{entry.team}</td>
              <td className="p-3">{entry.econ}</td>
              <td className="p-3">{entry.mat}</td>
              <td className="p-3">{entry.inns}</td>
              <td className="p-3">{entry.ov}</td>
              <td className="p-3">{entry.runs}</td>
              <td className="p-3">{entry.wkts}</td>
              <td className="p-3">{entry.bbi}</td>
              <td className="p-3">{entry.avg}</td>
              <td className="p-3">{entry.sr}</td>
              <td className="p-3">{entry.fourW}</td>
              <td className="p-3">{entry.fiveW}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>


        
        <div className="w-full">
  <h1 className="mb-8 text-5xl font-bold text-center text-green-700 drop-shadow-lg">
    Most Dot Balls in IPL
  </h1>
  <div className="w-full px-4 mx-auto mb-12 max-w-7xl">
    <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
      <table className="min-w-full text-sm text-center">
        <thead className="sticky top-0 z-10 bg-green-100">
          <tr className="text-gray-700">
            <th className="p-3">POS</th>
            <th className="p-3">Player</th>
            <th className="p-3">Team</th>
            <th className="p-3">Dots</th>
            <th className="p-3">Mat</th>
            <th className="p-3">Inns</th>
            <th className="p-3">Ov</th>
            <th className="p-3">Runs</th>
            <th className="p-3">Wkts</th>
            <th className="p-3">Avg</th>
            <th className="p-3">Econ</th>
            <th className="p-3">SR</th>
            <th className="p-3">4W</th>
            <th className="p-3">5W</th>
          </tr>
        </thead>
        <tbody>
          {mostDotsBowlers.map((entry) => (
            <tr
              key={entry.pos}
              className={`font-semibold text-gray-800 transition border-b hover:bg-green-50 ${
                entry.pos === 1 ? "bg-yellow-100 font-bold text-green-700" : ""
              }`}
            >
              <td className="p-3">{entry.pos}</td>
              <td className="p-3">{entry.name}</td>
              <td className="p-3">{entry.team}</td>
              <td className="p-3">{entry.dots}</td>
              <td className="p-3">{entry.mat}</td>
              <td className="p-3">{entry.inns}</td>
              <td className="p-3">{entry.ov}</td>
              <td className="p-3">{entry.runs}</td>
              <td className="p-3">{entry.wkts}</td>
              <td className="p-3">{entry.avg}</td>
              <td className="p-3">{entry.econ}</td>
              <td className="p-3">{entry.sr}</td>
              <td className="p-3">{entry.fourW}</td>
              <td className="p-3">{entry.fiveW}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>


        {allSeasons.map((season) => (
            <div key={season.name} className="w-full">
                <h1 className="mb-8 text-5xl font-bold text-center text-blue-900 drop-shadow-lg">
                    IPL Season {season.name}
                </h1>

                {/* Top Run Scorers */}
                <h2 className="mb-6 text-3xl font-bold text-center text-blue-700">Top IPL Run Scorers</h2>
                <div className="w-full max-w-6xl px-4 mx-auto mb-12">
                    <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                        <table className="min-w-full text-sm text-center">
                                                       <thead className="bg-blue-100">
                                <tr className="text-gray-700">
                                    <th className="p-3">POS</th>
                                    <th className="p-3">Player</th>
                                    <th className="p-3">Team</th>
                                    <th className="p-3">Runs</th>
                                    <th className="p-3">Mat</th>
                                    <th className="p-3">Inns</th>
                                    <th className="p-3">NO</th>
                                    <th className="p-3">HS</th>
                                    <th className="p-3">Avg</th>
                                    <th className="p-3">BF</th>
                                    <th className="p-3">SR</th>
                                    <th className="p-3">100</th>
                                    <th className="p-3">50</th>
                                    <th className="p-3">4s</th>
                                    <th className="p-3">6s</th>
                                    <th className="p-3">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {season.players.map((player) => (
                                    <tr
                                        key={player.pos}
                                        className="font-semibold text-gray-800 transition border-b hover:bg-blue-50"
                                    >
                                        <td className="p-3">{player.pos}</td>
                                        <td className="p-3">{player.name}</td>
                                        <td className="p-3">{player.team}</td>
                                        <td className="p-3">{player.runs}</td>
                                        <td className="p-3">{player.mat}</td>
                                        <td className="p-3">{player.inns}</td>
                                        <td className="p-3">{player.no}</td>
                                        <td className="p-3">{player.hs}</td>
                                        <td className="p-3">{player.avg}</td>
                                        <td className="p-3">{player.bf}</td>
                                        <td className="p-3">{player.sr}</td>
                                        <td className="p-3">{player.hundred}</td>
                                        <td className="p-3">{player.fifty}</td>
                                        <td className="p-3">{player.fours}</td>
                                        <td className="p-3">{player.sixes}</td>
                                        <td className="p-3">
											<img
                                                src={player.img}
                                                alt={player.name}
                                                className="object-contain mx-auto border-2 border-blue-300 rounded-full w-14 h-14"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Top Wicket Takers */}
                <h2 className="mb-6 text-3xl font-bold text-center text-green-700">Top IPL Wicket Takers</h2>
                <div className="w-full max-w-6xl px-4 mx-auto mb-12">
                    <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                        <table className="min-w-full text-sm text-center">
                            <thead className="bg-green-100">
                                <tr className="text-gray-700">
                                    <th className="p-3">POS</th>
                                    <th className="p-3">Player</th>
                                    <th className="p-3">Team</th>
                                    <th className="p-3">Wkts</th>
                                    <th className="p-3">Mat</th>
                                    <th className="p-3">Inns</th>
                                    <th className="p-3">Ov</th>
                                    <th className="p-3">Runs</th>
                                    <th className="p-3">BBI</th>
                                    <th className="p-3">Avg</th>
                                    <th className="p-3">Econ</th>
                                    <th className="p-3">SR</th>
                                    <th className="p-3">4w</th>
                                    <th className="p-3">5w</th>
                                    <th className="p-3">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {season.bowlers.map((bowler) => (
                                    <tr
                                        key={bowler.pos}
                                        className="font-semibold text-gray-800 transition border-b hover:bg-green-50"
                                    >
                                        <td className="p-3">{bowler.pos}</td>
                                        <td className="p-3">{bowler.name}</td>
                                        <td className="p-3">{bowler.team}</td>
                                        <td className="p-3">{bowler.wkts}</td>
                                        <td className="p-3">{bowler.mat}</td>
                                        <td className="p-3">{bowler.inns}</td>
                                        <td className="p-3">{bowler.ov}</td>
                                        <td className="p-3">{bowler.runs}</td>
                                        <td className="p-3">{bowler.bbi}</td>
                                        <td className="p-3">{bowler.avg}</td>
                                        <td className="p-3">{bowler.econ}</td>
                                        <td className="p-3">{bowler.sr}</td>
                                        <td className="p-3">{bowler.fourw}</td>
                                        <td className="p-3">{bowler.fivew}</td>
                                        <td className="p-3">
                                            <img
                                                src={bowler.img}
                                                alt={bowler.name}
                                                className="object-contain mx-auto border-2 border-green-300 rounded-full w-14 h-14"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* RuPay On-The-Go 4s of the Season */}
                <h2 className="mb-6 text-3xl font-bold text-center text-pink-700">RuPay On-The-Go 4s of the Season</h2>
                <div className="w-full max-w-6xl px-4 mx-auto mb-12">
                    <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                        <table className="min-w-full text-sm text-center">
                            <thead className="bg-pink-100">
                                <tr className="text-gray-700">
                                    <th className="p-3">POS</th>
                                    <th className="p-3">Player</th>
                                    <th className="p-3">Team</th>
                                    <th className="p-3">4s</th>
                                    <th className="p-3">Mat</th>
                                    <th className="p-3">Inns</th>
                                    <th className="p-3">NO</th>
                                    <th className="p-3">Runs</th>
                                    <th className="p-3">HS</th>
                                    <th className="p-3">Avg</th>
                                    <th className="p-3">BF</th>
                                    <th className="p-3">SR</th>
                                    <th className="p-3">100</th>
                                    <th className="p-3">50</th>
                                    <th className="p-3">6s</th>
                                    <th className="p-3">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {season.foursTable.map((player) => (
                                    <tr
                                        key={player.pos}
                                        className="font-semibold text-gray-800 transition border-b hover:bg-pink-50"
                                    >
                                        <td className="p-3">{player.pos}</td>
                                        <td className="p-3">{player.name}</td>
                                        <td className="p-3">{player.team}</td>
                                        <td className="p-3">{player.fours}</td>
                                        <td className="p-3">{player.mat}</td>
                                        <td className="p-3">{player.inns}</td>
                                        <td className="p-3">{player.no}</td>
                                        <td className="p-3">{player.runs}</td>
                                        <td className="p-3">{player.hs}</td>
                                        <td className="p-3">{player.avg}</td>
                                        <td className="p-3">{player.bf}</td>
                                        <td className="p-3">{player.sr}</td>
                                        <td className="p-3">{player.hundred}</td>
                                        <td className="p-3">{player.fifty}</td>
                                        <td className="p-3">{player.sixes}</td>
                                        <td className="p-3">
                                            <img
                                                src={player.img}
                                                alt={player.name}
                                                className="object-contain mx-auto border-2 border-pink-300 rounded-full w-14 h-14"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Angel One Super Sixes of the Season */}
                <h2 className="mb-6 text-3xl font-bold text-center text-purple-700">Angel One Super Sixes of the Season</h2>
                <div className="w-full max-w-6xl px-4 mx-auto mb-12">
                    <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                        <table className="min-w-full text-sm text-center">
                            <thead className="bg-purple-100">
                                <tr className="text-gray-700">
                                    <th className="p-3">POS</th>
                                    <th className="p-3">Player</th>
                                    <th className="p-3">Team</th>
                                    <th className="p-3">6s</th>
                                    <th className="p-3">Mat</th>
                                    <th className="p-3">Inns</th>
                                    <th className="p-3">NO</th>
                                    <th className="p-3">Runs</th>
                                    <th className="p-3">HS</th>
                                    <th className="p-3">Avg</th>
                                    <th className="p-3">BF</th>
                                    <th className="p-3">SR</th>
                                    <th className="p-3">100</th>
                                    <th className="p-3">50</th>
                                    <th className="p-3">4s</th>
                                    <th className="p-3">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {season.sixesTable.map((player) => (
                                    <tr
                                        key={player.pos}
                                        className="font-semibold text-gray-800 transition border-b hover:bg-purple-50"
                                    >
                                        <td className="p-3">{player.pos}</td>
                                        <td className="p-3">{player.name}</td>
                                        <td className="p-3">{player.team}</td>
                                        <td className="p-3">{player.sixes}</td>
                                        <td className="p-3">{player.mat}</td>
                                        <td className="p-3">{player.inns}</td>
                                        <td className="p-3">{player.no}</td>
                                        <td className="p-3">{player.runs}</td>
                                        <td className="p-3">{player.hs}</td>
                                        <td className="p-3">{player.avg}</td>
                                        <td className="p-3">{player.bf}</td>
                                        <td className="p-3">{player.sr}</td>
                                        <td className="p-3">{player.hundred}</td>
                                        <td className="p-3">{player.fifty}</td>
                                        <td className="p-3">{player.fours}</td>
                                        <td className="p-3">
                                            <img
                                                src={player.img}
                                                alt={player.name}
                                                className="object-contain mx-auto border-2 border-purple-300 rounded-full w-14 h-14"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Curvv Super Striker of the Season */}
                <h2 className="mb-6 text-3xl font-bold text-center text-yellow-700">Curvv Super Striker of the Season</h2>
                <div className="w-full max-w-6xl px-4 mx-auto mb-12">
                    <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                        <table className="min-w-full text-sm text-center">
                            <thead className="bg-yellow-100">
                                <tr className="text-gray-700">
                                    <th className="p-3">POS</th>
                                    <th className="p-3">Player</th>
                                    <th className="p-3">Team</th>
                                    <th className="p-3">SR</th>
                                    <th className="p-3">Mat</th>
                                    <th className="p-3">Inns</th>
                                    <th className="p-3">NO</th>
                                    <th className="p-3">Runs</th>
                                    <th className="p-3">HS</th>
                                    <th className="p-3">Avg</th>
                                    <th className="p-3">BF</th>
                                    <th className="p-3">100</th>
                                    <th className="p-3">50</th>
                                    <th className="p-3">4s</th>
                                    <th className="p-3">6s</th>
                                    <th className="p-3">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {season.strikerTable.map((player) => (
                                    <tr
                                        key={player.pos}
                                        className="font-semibold text-gray-800 transition border-b hover:bg-yellow-50"
                                    >
                                        <td className="p-3">{player.pos}</td>
                                        <td className="p-3">{player.name}</td>
                                        <td className="p-3">{player.team}</td>
                                        <td className="p-3">{player.sr}</td>
                                        <td className="p-3">{player.mat}</td>
                                        <td className="p-3">{player.inns}</td>
                                        <td className="p-3">{player.no}</td>
                                        <td className="p-3">{player.runs}</td>
                                        <td className="p-3">{player.hs}</td>
                                        <td className="p-3">{player.avg}</td>
                                        <td className="p-3">{player.bf}</td>
                                        <td className="p-3">{player.hundred}</td>
                                        <td className="p-3">{player.fifty}</td>
                                        <td className="p-3">{player.fours}</td>
                                        <td className="p-3">{player.sixes}</td>
                                        <td className="p-3">
                                            <img
                                                src={player.img}
                                                alt={player.name}
                                                className="object-contain mx-auto border-2 border-yellow-300 rounded-full w-14 h-14"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Best Batting Averages of the Season */}
                <h2 className="mb-6 text-3xl font-bold text-center text-orange-700">Best Batting Averages of the Season</h2>
                <div className="w-full max-w-6xl px-4 mx-auto mb-12">
                    <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                        <table className="min-w-full text-sm text-center">
                            <thead className="bg-orange-100">
                                <tr className="text-gray-700">
                                    <th className="p-3">POS</th>
                                    <th className="p-3">Player</th>
                                    <th className="p-3">Team</th>
                                    <th className="p-3">Avg</th>
                                    <th className="p-3">Mat</th>
                                    <th className="p-3">Inns</th>
                                    <th className="p-3">NO</th>
                                    <th className="p-3">Runs</th>
                                    <th className="p-3">HS</th>
                                    <th className="p-3">BF</th>
                                    <th className="p-3">SR</th>
                                    <th className="p-3">100</th>
                                    <th className="p-3">50</th>
                                    <th className="p-3">4s</th>
                                    <th className="p-3">6s</th>
                                    <th className="p-3">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {season.avgTable.map((player) => (
                                    <tr
                                        key={player.pos}
                                        className="font-semibold text-gray-800 transition border-b hover:bg-orange-50"
                                    >
                                        <td className="p-3">{player.pos}</td>
                                        <td className="p-3">{player.name}</td>
                                        <td className="p-3">{player.team}</td>
                                        <td className="p-3">{player.avg}</td>
                                        <td className="p-3">{player.mat}</td>
                                        <td className="p-3">{player.inns}</td>
                                        <td className="p-3">{player.no}</td>
                                        <td className="p-3">{player.runs}</td>
                                        <td className="p-3">{player.hs}</td>
                                        <td className="p-3">{player.bf}</td>
                                        <td className="p-3">{player.sr}</td>
                                        <td className="p-3">{player.hundred}</td>
                                        <td className="p-3">{player.fifty}</td>
                                        <td className="p-3">{player.fours}</td>
                                        <td className="p-3">{player.sixes}</td>
                                        <td className="p-3">
                                            <img
                                                src={player.img}
                                                alt={player.name}
                                                className="object-contain mx-auto border-2 border-orange-300 rounded-full w-14 h-14"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Most Valuable Player of the Season */}
                <h2 className="mb-6 text-3xl font-bold text-center text-red-700">Most Valuable Player of the Season</h2>
                <div className="w-full max-w-4xl px-4 mx-auto mb-12">
                    <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                        <table className="min-w-full text-sm text-center">
                            <thead className="bg-red-100">
                                <tr className="text-gray-700">
                                    <th className="p-3">POS</th>
                                    <th className="p-3">Player</th>
                                    <th className="p-3">Team</th>
                                    <th className="p-3">Pts</th>
                                    <th className="p-3">Mat</th>
                                    <th className="p-3">Wkts</th>
                                    <th className="p-3">Dots</th>
                                    <th className="p-3">4s</th>
                                    <th className="p-3">6s</th>
                                    <th className="p-3">Catches</th>
                                    <th className="p-3">Run outs</th>
                                    <th className="p-3">Stumpings</th>
                                    <th className="p-3">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {season.mvpTable.map((player) => (
                                    <tr
                                        key={player.pos}
                                        className="font-semibold text-gray-800 transition border-b hover:bg-red-50"
                                    >
                                        <td className="p-3">{player.pos}</td>
                                        <td className="p-3">{player.name}</td>
                                        <td className="p-3">{player.team}</td>
                                        <td className="p-3">{player.pts}</td>
                                        <td className="p-3">{player.mat}</td>
                                        <td className="p-3">{player.wkts}</td>
                                        <td className="p-3">{player.dots}</td>
                                        <td className="p-3">{player.fours}</td>
                                        <td className="p-3">{player.sixes}</td>
                                        <td className="p-3">{player.catches}</td>
                                        <td className="p-3">{player.runouts}</td>
                                        <td className="p-3">{player.stumpings}</td>
                                        <td className="p-3">
                                            <img
                                                src={player.img}
                                                alt={player.name}
                                                className="object-contain mx-auto border-2 border-red-300 rounded-full w-14 h-14"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default Upcoming;