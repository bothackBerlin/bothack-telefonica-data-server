var gen = require('random-seed');
var express = require('express');

const PORT = 4242;

const AREA = [
  'tariff prepaid',
  'tariff postpaid',
  'hardware',
  'dsl',
  'accessory',
];

const PLATFORM = [
  'IOS',
  'Windows',
  'Android',
  'Macintosh',
  'Linux',
  'Windows_Phone',
  'BlackBerry',
  'Chrome_OS',
  'SymbianOS',
];

const GENDER = [
  'male',
  'female',
  'undefined',
];

const DISPLAY_TARGET_GROUP = [
  'privatkunden',
  'student',
  'selbstaendig',
];

const OKT = [
  null,
  null,
  null,
  null,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  9,
  14,
  22,
  42,
];

const PERIOD_ORDER = [
  0,
  12,
  24,
]

const PORTAL_TYPE = [
  'o2',
  'ba',
  'simyo',
];

const SUBSECTION = [
  'Rechnung',
  'Care',
  'Sales',
];

const PRODUCT_AFFINITY = [
  'iPhone 6',
  'o2-free-l',
  'dsl-all-in-m',
];

function generateFakeData(id) {
  var rng = gen.create(id);

  var ag = randomAge(rng);
  var app = randomLastLogin(rng);
  var ar = randomArrayValue(rng, AREA);
  var bp = randomBoolean(rng);
  var bs = randomArrayValue(rng, PLATFORM);
  var ch = randomBoolean(rng);
  var db = null;
  var dp = randomBoolean(rng);
  var dtg = randomArrayValue(rng, DISPLAY_TARGET_GROUP);
  var du30 = rng.intBetween(0, 3000000);
  var du90 = du30 + rng.intBetween(0, 50000000);
  var ea = randomBoolean(rng);
  var ed = null;
  var ep = null;
  var fl = rng.intBetween(0, 1);
  var gd = randomArrayValue(rng, GENDER);
  var kvf = randomBoolean(rng);
  var kvw = 10;
  var lo = randomBoolean(rng);
  var lte = randomBoolean(rng);
  var mb = randomBoolean(rng);
  var mnp = randomBoolean(rng);
  var ms = "01569005XXX";
  var nf = randomBoolean(rng);
  var no = 1;
  var mu = randomBoolean(rng);
  var ob = randomBoolean(rng);
  var okt = randomArrayValue(rng, OKT);
  var op = randomBoolean(rng);
  var os = "BASIC CACS";
  var ou = randomBoolean(rng);
  var ov = randomBoolean(rng);
  var pc = rng.intBetween(1, 3);
  var p1 = "privatkunden-samsung-galaxy-s3-mini-weiss-myhandy-24x17,50euro";
  var p1ps = "783";
  var p1i = "4510+090173+00";
  var p1t = "handy";
  var p2 = "privatkunden-o2-blue-select-1";
  var p2i = "2274";
  var p2t = "tarif";
  var p3 = "privatkunden-samsung-galaxy-s3-flip-cover-weiss";
  var p3i = "4850+020078+00";
  var p3t = "zubehoer";
  var p4 = "privatkunden-acer-iconia-tab-a211-3g-myhandy-24x17,50euro";
  var p4i = "4515+000014+00";
  var p4t = "handy";
  var po = randomArrayValue(rng, PERIOD_ORDER);
  var ps = 5;
  var pt = randomArrayValue(rng, PORTAL_TYPE);
  var ra = null;
  var rm = null;
  var sa = "o2online";
  var se = "google.de";
  var sm = randomBoolean(rng);
  var ss = randomArrayValue(rng, SUBSECTION);
  var sz = 1;
  var tr = "o2 Genion L";
  var td = "Tariff Detail,o2 New Genion L (60/10) home office";
  var vv = randomBoolean(rng);
  var zc = null;
  var fr = null;
  var pa = randomArrayValue(rng, PRODUCT_AFFINITY);
  var fr = null;

// db ,Date of Birth (dd.mm.jjjj),29.02.1981
// ed,VVL (contract extension) Eligible Date ,8/26/2012
// ep,days remaining till VVL Eligible Date,652
// ra,Revenue Average,60.23
// rm,Remote Address,92.77.165.44
// zc,ZIP Code,3042
// fr,first contract date,1/1/2001
// fr,first contract date,1/1/2001

  return {
    user_id: id,
    ag,
    app,
    ar ,
    bp ,
    bs,
    ch,
    db ,
    dp,
    dtg,
    du90,
    du30 ,
    ea ,
    ed,
    ep,
    fl,
    gd,
    kvf,
    kvw,
    lo,
    lte,
    mb,
    mnp,
    ms,
    nf,
    no,
    mu,
    ob,
    okt,
    op,
    os,
    ou,
    ov,
    pc,
    p1,
    p1ps,
    p1i,
    p1t,
    p2 ,
    p2i,
    p2t,
    p3,
    p3i,
    p3t,
    p4,
    p4i,
    p4t,
    po,
    ps,
    pt,
    ra,
    rm,
    sa,
    se,
    sm,
    ss,
    sz,
    tr,
    td ,
    vv,
    zc,
    fr,
    pa,
    fr,
  };
}

function randomBoolean(rng) {
  return rng.random() >= 0.5;
}

function randomAge(rng) {
  return rng.intBetween(1, 100);
}

function randomLastLogin(rng) {
  return rng.intBetween(0, 300);
}

function randomArrayValue(rng, arr) {
  const max = arr.length - 1;
  return arr[rng.intBetween(0, max)];
}

var app = express();

app.use('/static', express.static('assets'));

app.get('/users/:id', function(req, res) {
  var fakeUser = generateFakeData(req.params.id);
  res.send(JSON.stringify(fakeUser));
});

console.log('Starting server on port ' + PORT);
app.listen(PORT);
