export default {
    state: {
      mapArea: [
        { 
          name: 'alanianEmpire',
          alt: 'Аланская империя',
          title: 'Аланская империя',
          description: 'Страна, находящаяся на западе континента. Старается всегда держать нейтралитет. Имеет сильный морской флот.',
          coords: '318,367,318,399,299,424,315,447,323,480,321,497,354,485,369,454,376,433,405,408,439,404,447,376,467,344,440,319,449,313,445,295,474,283,447,262,429,262,391,271,369,288,376,321,339,324' ,
          shape: 'poly'
        },
        { 
          name: 'kingdomCold',
          alt: 'Королевство Холодов',
          title: 'Королевство Холодов',
          description: 'Королевство, на территории которого никогда не бывает холодов.',
          coords: '325,504,299,516,311,572,321,604,348,580,357,569,371,587,405,574,420,585,439,539,473,555,478,611,502,630,515,627,553,633,566,635,562,595,583,550,568,500,578,442,576,421,601,383,569,322,523,299,482,281,455,295,456,322,471,336,436,414,407,412,380,439,361,484' ,
          shape: 'poly'
        },
        { 
          name: 'kingdomBasilica',
          alt: 'Королевство Базилика',
          title: 'Королевство Базилика',
          description: 'Королевство, созданное великим Базиликом и процветающее на протяжении всего своего существования.',
          coords: '577,635,615,652,637,642,658,646,681,642,686,661,710,668,729,679,749,678,770,679,775,640,787,617,791,587,774,562,771,539,781,516,767,493,737,480,737,456,722,436,706,428,700,409,684,395,664,394,641,397,620,394,614,383,597,393,587,414,581,439,577,473,576,504,581,533,581,572,569,598' ,
          shape: 'poly'
        },
        { 
          name: 'Rinar',
          alt: 'Ринар',
          title: 'Ринар',
          description: 'Маленькое южное государство, основной деятельностью которого является рыбалка.',
          coords: '757,687,784,678,802,676,807,645,810,623,838,612,856,610,865,625,895,619,922,610,920,587,920,569,926,553,916,535,898,524,894,547,883,553,864,561,848,550,826,535,802,515,781,504,774,535,783,564,792,587,792,612,777,648,772,671' ,
          shape: 'poly'
        },
        { 
          name: 'principalityCold',
          alt: 'Княжество Стужи',
          title: 'Княжество Стужи',
          description: 'Маленькое княжество, отличающееся наличием постоянных холодов при отсутствии каких-либо ветров.',
          coords: '858,619,862,642,874,642,888,648,869,660,885,664,908,667,939,667,962,668,981,659,992,659,1009,650,1018,668,1057,669,1084,678,1087,694,1084,717,1097,722,1117,714,1125,695,1131,678,1137,659,1120,646,1109,629,1087,618,1083,589,1055,580,1036,580,1014,579,981,579,957,585,939,596,923,617,888,623,880,631' ,
          shape: 'poly'
        },
        { 
          name: 'selianHorde', 
          alt: 'Селианская Орда', 
          title: 'Селианская Орда', 
          description: 'Ну тут всё просто - Орки',
          coords: '1100,726,1120,756,1137,759,1172,766,1207,752,1234,741,1264,751,1279,725,1270,702,1255,676,1230,654,1198,657,1168,661,1153,683,1125,697,1119,714' ,
          shape: 'poly'
        },
        { 
          name: 'principalityStorm', 
          alt: 'Княжество Штормия', 
          title: 'Княжество Штормия', 
          description: 'Княжество, основной особенность которого является - наличие лучших штормовых магов.',
          coords: '1284,725,1312,732,1321,717,1334,703,1369,706,1386,716,1391,732,1452,697,1440,644,1433,599,1409,598,1384,606,1364,615,1342,626,1317,640,1291,634,1257,631,1245,661' ,
          shape: 'poly'
        },
        { 
          name: 'republicTebredil', 
          alt: 'Республика Тебредил', 
          title: 'Республика Тебредил', 
          description: 'Южная республика, имеющая в своём подчинении хорошо натренированных воинов. Особенность - наездники на черепахах.',
          coords: '1440,592,1464,617,1466,644,1478,669,1474,687,1477,707,1460,716,1444,718,1437,733,1433,758,1444,779,1464,781,1482,774,1468,758,1486,751,1516,758,1562,754,1574,774,1591,779,1608,749,1608,716,1611,695,1581,676,1572,661,1578,641,1553,626,1584,630,1596,618,1562,600,1557,561,1543,541,1524,517,1501,511,1459,503,1426,507,1398,507,1383,520,1379,565,1375,591,1394,599,1425,591' ,
          shape: 'poly'
        },
        { 
          name: 'kingdomShi', 
          alt: 'Королевство Ши', 
          title: 'Королевство Ши', 
          description: 'Королевство, названное в честь дерева Ши, которое произрастает тут почти на каждом участке суши.',
          coords: '1622,553,1655,585,1682,577,1687,599,1715,607,1708,626,1692,626,1708,639,1723,644,1706,656,1705,673,1694,696,1687,714,1693,732,1690,755,1705,760,1730,770,1744,758,1769,747,1781,701,1799,671,1797,690,1819,692,1834,684,1830,658,1827,625,1841,602,1838,577,1814,587,1821,563,1809,541,1797,552,1781,529,1781,513,1797,510,1726,422,1733,384,1698,370,1722,336,1692,323,1698,309,1680,290,1657,256,1623,259,1599,278,1580,313,1572,323,1595,348,1609,380,1622,401,1631,448,1652,489,1644,507,1631,532' ,
          shape: 'poly'
        },
        { 
          name: 'Facade', 
          alt: 'Фасад', 
          title: 'Фасад', 
          description: 'Маленькая страна. Основная особенность форпост для ведения для переговоров между Королевством Ши и Объединённым королевством Стрыги',
          coords: '1562,326,1553,370,1525,329,1512,343,1517,372,1535,402,1538,428,1551,452,1544,481,1535,523,1547,538,1566,526,1584,509,1597,540,1614,549,1641,507,1646,477,1620,420,1613,390,1592,353' ,
          shape: 'poly'
        },
        { 
          name: 'unitedKingdomStrygi', 
          alt: 'Объединённое Королевство Стрыги', 
          title: 'Объединённое Королевство Стрыги', 
          description: 'Королевство, собравшее под собой объединённые кланы расы стрыг',
          coords: '1175,658,1167,634,1185,604,1175,596,1181,575,1188,551,1198,528,1201,501,1200,481,1189,467,1196,455,1224,456,1243,445,1232,429,1247,413,1254,398,1259,379,1265,362,1278,349,1297,353,1322,327,1338,299,1359,296,1376,272,1405,272,1417,282,1417,261,1429,253,1458,270,1483,288,1509,307,1523,314,1520,330,1513,350,1524,367,1532,381,1538,410,1547,433,1561,445,1562,468,1554,490,1554,504,1543,531,1525,516,1501,508,1479,502,1451,508,1428,504,1393,511,1374,536,1384,555,1379,569,1371,573,1378,585,1392,599,1376,610,1361,619,1344,628,1321,635,1298,621,1276,622,1257,641,1235,646,1211,648,1196,660,1223,644' ,
          shape: 'poly'
        },
        {
          name: 'Bizadi',
          alt: 'Бизади',
          title: 'Бизади',
          description: 'Северный маленький город-государство, отгороженнное от других стран ветряной стеной',
          coords: '1185,450,1179,423,1182,405,1182,389,1177,368,1185,348,1200,353,1224,348,1249,352,1260,361,1250,379,1243,394,1251,410,1235,425,1234,444,1219,450,1198,458',
          shape: 'poly'
        },
        { 
          name: 'empireGrand', 
          alt: 'Империя Гранд', 
          title: 'Империя Гранд', 
          description: 'Империя, созданное королём-наёмником. Следовательно, живут там по большей части наёмники.',
          coords: '975,311,1013,318,1037,328,1055,340,1078,325,1083,359,1099,330,1119,338,1132,356,1152,349,1175,348,1185,374,1184,402,1184,450,1198,492,1193,531,1178,566,1171,589,1181,611,1170,654,1156,682,1129,688,1139,663,1113,629,1091,614,1084,585,1042,572,973,576,929,597,928,551,899,519,900,497,923,484,924,465,907,455,889,450,863,423,870,402,914,378,889,353,901,340,942,336,960,338' ,
          shape: 'poly'
        },
        { 
          name: 'grandDuchyHaga', 
          alt: 'Великое Княжество Хага', 
          title: 'Великое Княжество Хага', 
          description: 'Княжество, на защите которого стоят величественные и чтящие законы воины-скелеты.',
          coords: '781,473,789,456,800,444,827,440,843,447,861,433,876,436,888,451,916,462,919,482,900,496,893,526,890,548,859,555,823,523,787,500,775,494' ,
          shape: 'poly'
        },
        { 
          name: 'zorguzEmpire', 
          alt: 'Зоргузская Империя', 
          title: 'Зоргузская Империя', 
          description: 'Зоргуская империя является одной из самых слабых на континенте. Но благодаря особым способностям ремесленников захватила достаточно много территории.',
          coords: '441,253,458,224,479,219,515,207,531,192,539,176,565,180,589,180,600,136,619,162,637,176,652,189,665,172,679,159,702,154,729,157,744,140,767,146,763,187,767,208,767,237,787,215,797,235,798,252,829,260,857,248,893,233,919,238,923,252,950,249,979,265,1011,286,1039,324,979,306,958,334,901,340,889,352,903,375,870,393,863,420,846,439,806,437,783,458,772,488,743,475,735,450,703,417,686,390,621,393,595,367,570,316,478,276' ,
          shape: 'poly'
        },
      ]
    }
}