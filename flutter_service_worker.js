'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "13853c34d3c1fd6eec16f101c68f7f42",
"favicon.ico": "2b0eaa09c4441df00632c230df7c941b",
"index.html": "84e2a8ced3344accf61cc4925d35f5dd",
"/": "84e2a8ced3344accf61cc4925d35f5dd",
"main.dart.js": "c2d62c8041d72a5bee724c41c83247f1",
"icons/Icon-192.png": "c915984ce705ec794b1341c129a9cf48",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "b82b4dceb4204625d06d1b3606000991",
"manifest.json": "2d54449e96ead7c451036bdb814b0b8d",
".git/config": "39d86527bfdbabf96d6808a623acd1da",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/d4e45e6f5eacd0d5aecee810f94935f3d8fb7e": "263c6bcbeb2ed9a1eadafa38e2508b29",
".git/objects/66/eebfe9631ebea987ddec69ec95bdef40398508": "b856dff383db286243c117a931d3ba77",
".git/objects/3e/45788865f6cfa96b990592f0659376de760307": "b7331c97118507c199be8135f319746c",
".git/objects/3b/e87315c38076abcd00a7e9d973cb0b8d73e6ff": "52ea5884dc5f4ef14d084bb70e6395c7",
".git/objects/03/39117bb3dc24fd1eb900de8ba8c7edddd83355": "025b62df02ea2138470837661d0986de",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/11fe1e554704b1ad727b60d4ba9ab82a827cdd": "07c40ff03008e8cb91dc0f8cb929ef51",
".git/objects/35/30d840ad7a82aceddea39ce882f7b7a53576a8": "a3ed619e3191b13e4cbe6a124be72b19",
".git/objects/56/82cce45e7c76666fb2c3224d522d5e94435475": "b4b0a8b98dddb0cc803afce0b84ef4a6",
".git/objects/3d/396fffb923db59b29a0ab8cdbacf8df9b3e079": "9af1a3c5c4eecd80b7f5117463c8a95b",
".git/objects/58/12a62042a3880f9581bfc3c41b25d51c37b888": "c6f4f0c4f23a7d2660f4677f734d84c3",
".git/objects/0b/1b85dcf6c07aef4b4a14b094b4732dab8169e6": "b1466811ea4a642bfc1d157038c10a82",
".git/objects/33/43539f312701d839a9055a89a1332630d81189": "0cb039b39715e13d77de9e6281bb61b8",
".git/objects/9c/5ed0bdcd15988368c1095916eb0aadd61080c5": "1096ca211e472c7085d3616c6e7e85af",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a3/d56ddb218155f121678ce7bb29fbe5aa647d6c": "ff079f4b0d00104dd4f47a3ae8de5009",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ad/c4cab1425bb5a4f3e0b483bf16c38eee59a253": "64149592d17fdf7436a5b575e8ca6111",
".git/objects/bb/94cea132457b82ae887566977d42885520f949": "b10dd0cd427760466e8dc5eaab30f283",
".git/objects/d0/831f2a31b55036bee5f1fc8ca65f4c68156c48": "028d814792af5cd4ba3eb66dc6263220",
".git/objects/be/87545a8b4f8ed0555aca520ab689add3b704f8": "858167fc977b79e12a2b768a33ceecc5",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/df/7ee3a111b9d891fdda7f61bfbd41274a155737": "b8d83cf5096ac4f9ee981b9cb384bb0c",
".git/objects/da/94e23919dd5b13fa2a569b8f4aebc699930390": "16544c5e537d3cf3d95cfce462a4941a",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/8bd860734c41d262078990f42567ff3151f54c": "0510f0046f5c502bd0808763714f4062",
".git/objects/bc/78e0ea06a55cfc45f8eb93e4274f2039965ed7": "27dd7a2f7f84c99b854a9eb3e9df22b8",
".git/objects/ae/f4c1d186e3ff0a78ebf4c5733d562d7c3a2e32": "44c6304cb835b81d0c6f12ff04eba655",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/1e68adb5a9199342e0bccec0f219b0a6ad6661": "6dec91eeecfff5a694afee6bd7d0e46b",
".git/objects/c0/878998b46cb08400e2d13d9e0cc0f78aade478": "f07c491ce322cb4db5ca3da50646c635",
".git/objects/c9/638de335eb864f1e57af3f47b2cf67e18eac34": "dc8e9a93ff056709bcabd94fe798c543",
".git/objects/fc/4b39f973fe99db6d623f48b532a1c894ef7813": "4cef1a3aabf2f5496766939bd1b5e941",
".git/objects/cf/3fc0f48591197f1901a96ad6b78bf7342eb7ce": "c4f77b1495fa4da97f96b2e22d221d91",
".git/objects/e4/fd76ac0fe8c67bb40ee1153ab3de4f83da85eb": "5f8f7db64e8f8061e242abf9a5bcc110",
".git/objects/c8/fa12ec8ee2476a8b378b3efbecaa866f1b66da": "5068b98817017a7e9272d4cbe91ab57b",
".git/objects/c1/45a6ae5f3dbe4e98807d13293cf8e13352a100": "2841a8894f45a9d12335834ed94ac667",
".git/objects/c6/b08a45999efd7a0abdcf86729ebaffa42f63e8": "caaf09ff0a2876947f71947aeb69ed36",
".git/objects/c6/9effb802411c573299d267bd1dcbace12c12c7": "b827ee898578f2baf3d919188e36e785",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/27/3a847213173e0f3aea1c9d7db2cb522c8329db": "28114b3932772f4c1e0ee86bbb9d3fff",
".git/objects/29/200943095a1e0553aac9dfec88f5217169d91e": "2e8d1c65ae297c8ed714c9ecffa0f395",
".git/objects/7c/6f41b2df2d7e023d10a26a4a356fc5b0e096e7": "a0cadade4f7eb1b8036fc1f16a917f1e",
".git/objects/16/f58798c8b13739c11e30ce009ff511adc581d8": "c01b9471b8ccc036363c329015b838a3",
".git/objects/80/b3122a65bc1afd87eedf77d0b0874684b73ff7": "355bab3d7b961e832c9c6b766b08d5bf",
".git/objects/80/a58bd8ba5a5ce8840c3aaffbdf3c029e43bffa": "5663d9d46cd5040d81cc26f15a8d3cc5",
".git/objects/8f/8e47dc2c89f9a66cd77caba094f909e456a755": "7b2fa3c282689eebc3822dc0500fd588",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/2ee7b1d2b26ab228503672717799d4d87a0d97": "3e3e7e932c1e34831d922d8944cf778b",
".git/objects/19/9f52bffd245e634c5844284a1eb3910b79ce02": "1980d0f52befd16b6b73543231b9ecf9",
".git/objects/19/3e5f67f6a26236f4ade7793cb1347fea0f1347": "6cb43486f2cfa0dee0cc43bd1ef84789",
".git/objects/4c/ec6bc692c3c157da6a43f281716016b6a1250b": "d343a2f475acd9468d89b492f6fb0e4e",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/44/83c3e0797fc0417dd0d4c4f6922cf78b67422d": "15ac04ead63e49016481e8232301a667",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/2b0228efbae8223a6e9ee3ae927ea6888a407f": "1eef4bdc83fe3516f92d4f6f7ea04cac",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/6e/2893f626aa898cedc67d7a170b187e3f2a51c2": "a9b4a005c596417933bdfc380b5fb88c",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/09/42dea5b0861d92b9145a1541cdcebd78a118ce": "c12163c7153133c334e69d6f14110644",
".git/objects/31/a42fa771d39851f52a72df17fe8433d46a79f6": "302cf980bad26f47deac7b05334eebd0",
".git/objects/31/2d3e968ff6c02f7f2ed7c3c1a134ac30e3bb21": "dd6833c44ce42b254cf97a71e021774c",
".git/objects/65/5469847e8603d3787c0184cc129280ea1496f8": "8ace1594109208fb2f513fd1ee8b13c9",
".git/objects/62/11aa01497d6cab276c57a31b89139c96b96f01": "b9498c15f5eb743243d4c917465118d5",
".git/objects/3f/1dab582319820f535e66ec251a1be572a3d939": "33517e20f9c2682ee05ed9a55a32e1ca",
".git/objects/30/92ba10ae392b8491221d1be6ef9f3ed626b6f9": "678030d9c22e94abf02b586b4a6f71e6",
".git/objects/37/4698bfa05442a3b41b90b7a27d3ad6b1c2e06d": "d79658f435bdc135a830e97fa3922378",
".git/objects/06/9d1c36bd977dbcc9d6772d645480ceda5dd84d": "49ce827dc8e120622620fed82a4f3f6d",
".git/objects/06/730f287075054c75deb18ceed5c981065f14b7": "8148f1c9955c7a18c7ccaaa770d01e69",
".git/objects/6c/356803970dab9c594105e2b5c40ddfc7596a30": "4e80250289f16982937f4e8b52c5009d",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/0f/52bb440e4292b54831567def1c4c3e581dd8eb": "5afcad443e579e9957788b41a67d0f47",
".git/objects/0a/2c3341901e9d6f1b6db1f190e99c3f987bbdbb": "54d5a35529727188e76aed48424ec693",
".git/objects/0a/253df28b5e455a3f814abf53a2ff211f637082": "bcaf77e79ad24bc70bc95f2f8e2e3c0e",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/d4/250a5716ef400f70f7bd6cd0a43ad1fcadc551": "9aa8b7113391e57cbbd52ab83635cce2",
".git/objects/d4/da4c45e92e059f099ec1448d1b9e8f26d254e5": "c4252da48bdb3f84fb2b0e2dc6bb7165",
".git/objects/a0/7f8f34de2f245a0957a74ff1f2d479e1a91ad8": "cccc57c7edf6d20a44126074b47a89e6",
".git/objects/a7/2f2efd696cb51ca4e0f10f5744343c95bdddf6": "58e3c1c93fa193a5a438af723b6f3fa0",
".git/objects/dd/a369eed040ef47ba92546680804a0021fabaf8": "4f16ef08b5796d86c09fcb9f79f0603b",
".git/objects/dd/5587c78f43aa2874c585bed7baa105357de5ba": "e649e3d817f255d776768e13cd0d9752",
".git/objects/a9/85130bb90fb944369a8851ac45c62cf692b76a": "c50990b0e3ce7c4a5e6c186a98ee5189",
".git/objects/a9/8ebf1b010c2ec08150f89052db0b29fc1726ac": "b7b8f9390f2480140fe8e7eb02973f41",
".git/objects/d5/7005bd0163f90219408d0e606b4fe8c71afac6": "de3e5abf692675c1c530e78098c76fa1",
".git/objects/d2/594461f73dec1ebe619a2248dd4106bacdc4ce": "26885d86e91e182a7a51a9787cc1bd73",
".git/objects/d2/b43db4db0ed41cf2e9dddad3ee60d98cd433e6": "12025fa7a8ae2d7f25fc85a1071f86d0",
".git/objects/aa/2232b8aa0242c206327df60f7d0fc33de7e771": "c4a55eb7e544867012b35555ee7fef33",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e9044bcfc716fd2de91129c3e8957b8935966f": "3c56dc9b169541903e86fc5ddf100afc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/df91929e34deea19348eaead454cc8ff77f092": "ebfc266b2c5052737800296b5f0d5044",
".git/objects/a6/d25fef20dffb27ed84df4f98142d4cc790fcc9": "e8a28820a8ce7c7516abe4224292c06d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/89325f73fb7c4901b56b0881a55ac17c7b788e": "9cef5f418805fc6ad1e770cd7d4d5f49",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/ea/3fa3af9e5e203f31002ec47684a4a855f7b875": "9d4eb5c6c287de91fa359601a615edb5",
".git/objects/e1/a0a239d2c5d93b970a257175108a61e5581ee4": "24a62d6ed4363d120c7a012b30ce3c8a",
".git/objects/e1/e053410bb4ebf4d8deb361d83b382d896d0fcd": "19920aaccc767e1a93581c7bc3f2aeb3",
".git/objects/cc/e84d5a91021c5b785fa408c71abef9ecd1607b": "38bb5de71e6e4e7ec7666756a23a58c0",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/fa/1764f7318ef2eba2c2191c7c044775b8212f2d": "aa5d36fbabf71b2c72cea0ba9c8741cf",
".git/objects/fa/25a616b4c2d446c5ef8576e693a6e32ee18c7a": "56349ebed46ccbe49e3dd419644a6e12",
".git/objects/ff/41c19d64e3908ffaa3bff1bd6dfb1cfa9e002f": "23e613b200819414c65d32355eca14bc",
".git/objects/c2/3c35ecd6c2b300cc701f2e046f4df1cdb5e3b3": "357b68420c1885468196e1b67a283717",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/cb/aa293bef43df5fca9769e36be77befb05dc05c": "182b68d27d13e09f380e62320c703867",
".git/objects/f8/f242fa9200c34a7ad74260062d1a75276f2942": "5d8794531889358db9ec1afda56540ad",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/26430af58f956123181f197a1acda952acfe6c": "7e5fb6db467207182084811d580b3b49",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/1b/5bc9a0baf6d023bcd3a05c72e2eaa8c5489f2e": "dddd004be267c5773f7529a85f5e7adf",
".git/objects/1b/12bec174a8bc55af28449d3b0560be2bf81361": "08235012efec6dd93c1944cbdde11ff2",
".git/objects/48/08b353836a6bbcba6f552d1b49feec08fb633d": "9596d71a29641c11efa2f3291a81b658",
".git/objects/70/f48953adfd0e0b482347aaf85dc341aca56622": "f5e9929bd5b732a0230d8e41479c75ab",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/24/680519a3ec0db6f566d65a91b3c91c8b40ecb7": "33a2161ebb867d51a2c200b5e6381e51",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/fe0d9033be789ceb5ffe553f2c5837d38671e3": "9c0f31c83a7e041dbf4a026a600783cf",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/12/764da8372c75391cc8eb1570327ac16d2dd4e6": "c3a3b7a3cc54875f907f73d654bf4092",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/1d/4748a5ff63554c2a7cffc1ce202676c67a3e11": "bcbe1eabd29cb64b21ba69580601c438",
".git/objects/71/501bcbc359de70f2df29994b876466add5c292": "f7a19dee4cb7a948a0284c152cfe5315",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/2e/a9b551c7dfd9bea5e6dffac3076625c98456e5": "6c937f901b0a26e2a98e3f2bc515039d",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/78/62df47e0640472837f90362737fb8c0471da20": "c6d95f4caf05a17df2e73e5190b88504",
".git/objects/78/2d20c7959a5fae174704f624367f3c47f0fb39": "6400f61cb420396ef0d25f16ef4213fa",
".git/objects/13/5d55efe15e04ba07c4519f76f6c0a31b0f7205": "c1f2b0b486b9a535ad79ee6b5717f219",
".git/objects/7f/30034ff0732d118c14e97230faf8f0058c0a88": "313b55b4602c6e5b3699ce98428658bb",
".git/objects/7a/2fc92afbfb6ae8c62c542baaee6a6ac40efa43": "5831a05342ab1933e3ba91db97ef541f",
".git/objects/14/2e9f828ef695d096fca699a33bffc573d4c54c": "e12e43ed80e72754705214b77ac645c8",
".git/objects/8e/46e9aab5fb39e379afdf404b5e2da68fc98467": "892f133e1d8cfecc906d494ea1a6a0a0",
".git/objects/22/2be2ab10b5058317d338be0dfedfea618dd05b": "20c773808aa1b300282fafc1f814316b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "261fa20e059544413d8e428a4d23645a",
".git/logs/refs/heads/main": "2aa3ffde045bb876cab77e7e402a64b3",
".git/logs/refs/remotes/origin/main": "45f983c409b3cd0d84c194f6cf796542",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "c783eb1b936f61f1baa9b4e40807d8bd",
".git/refs/remotes/origin/main": "c783eb1b936f61f1baa9b4e40807d8bd",
".git/index": "89d8983f3c491acd6baa88d9a3536fb1",
".git/COMMIT_EDITMSG": "047c71db5a7981908984f544cda17ace",
"assets/AssetManifest.json": "bdeb0deb23d8953a35332e5b28499e9d",
"assets/NOTICES": "577a22dae3526b9080fec264cb04c32d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/Screen-5.png": "26039123e3a577f58defe5114bd7dc19",
"assets/assets/images/Screen-4.png": "c596146102aea8af9c1f9a34289b5023",
"assets/assets/images/Screen-1.png": "a62b623553e1a4166541ec1fedf5de84",
"assets/assets/images/instagram%2012.23.50%20AM.png": "344fea7e70c37d2e5dd55332327efa46",
"assets/assets/images/Screen-3.png": "9cd14090dbb48861ee13b439007135e5",
"assets/assets/images/instagram.png": "344fea7e70c37d2e5dd55332327efa46",
"assets/assets/images/Screen-2.png": "64baf2ef3adcffcaa8af58d5292df5f9",
"assets/assets/images/Banner.png": "5dc3e4746ccc6fcbd0c5f31cce417717",
"assets/assets/images/Banner%2012.23.50%20AM.png": "5dc3e4746ccc6fcbd0c5f31cce417717",
"assets/assets/images/IMG_1115.jpg": "156627540cc54b5695ca626c450b4c8a",
"assets/assets/images/Screen-5%2012.23.50%20AM.png": "26039123e3a577f58defe5114bd7dc19",
"assets/assets/images/maxcodes.jpg": "87fc8fb67a79ecc784fe75a53c214d5b",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/playstore%252012.23.49%2520AM.svg": "290ef1678ec4323a3a50e90de9fb15cd",
"assets/assets/icons/instagram.svg": "ee05c6178aec3c298c1e684617d62c8d",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
