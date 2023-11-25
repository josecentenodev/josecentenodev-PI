import React from "react";
import { v4 as uuidv4 } from "uuid";
import Driver from "../Driver";
import { GridContainer } from "./styles";

const drivers = [
  {
    id: "e95182e8-f409-4eea-84e4-f9548a0b5de6",
    nombre: "Jose",
    apellido: "Centeno",
    descripcion: "El primer Driver",
    imagen: "https://ansarorthospinalhospital.com/wp-content/uploads/2020/05/blank-head-profile-pic-for-a-man.jpg",
    nacionalidad: "Argentino",
    fechaNacimiento: "1993-10-14",
    Teams: [
      {
        id: 1,
        nombre: "McLaren",
      },
      {
        id: 2,
        nombre: "Mercedes",
      },
      {
        id: 3,
        nombre: "Prost",
      },
    ],
  },
  {
    id: 1,
    driverRef: "hamilton",
    number: 44,
    code: "HAM",
    name: {
      forename: "Lewis",
      surname: "Hamilton",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg",
      imageby:
        "By Morio - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=52060566",
    },
    dob: "1985-01-07",
    nationality: "British",
    url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
    teams: "McLaren, Mercedes",
    description:
      "Sir Lewis Carl Davidson Hamilton MBE HonFREng (born 7 January 1985) is a British racing driver currently competing in Formula One, driving for Mercedes-AMG Petronas Formula One Team. In Formula One, Hamilton has won a joint-record seven World Drivers' Championship titles (tied with Michael Schumacher), and holds the records for the most wins (103), pole positions (103), and podium finishes (191), among many others. He is statistically considered as the most successful driver in Formula One history.",
  },
  {
    id: 2,
    driverRef: "heidfeld",
    number: "\\N",
    code: "HEI",
    name: {
      forename: "Nick",
      surname: "Heidfeld",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Nick_Heidfeld_Goodwood_Festival_of_Speed_2019_%2848242681251%29.jpg/330px-Nick_Heidfeld_Goodwood_Festival_of_Speed_2019_%2848242681251%29.jpg",
      imageby:
        "By https://www.flickr.com/photos/69527563@N05/ - https://www.flickr.com/photos/69527563@N05/48242681251/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=80386033",
    },
    dob: "1977-05-10",
    nationality: "German",
    url: "https://en.wikipedia.org/wiki/Nick_Heidfeld",
    teams: "Prost, Sauber, Jordan,Williams,BMW Sauber,Renault",
    description:
      "Nick Lars Heidfeld (born 10 May 1977) is a German professional racing driver. Despite scoring regular podium finishes in 2005 with Williams, and in 2007 and 2008 with BMW Sauber, Heidfeld never won a race after debuting in Formula One in 2000. Heidfeld currently holds two Formula One records; most podium finishes without a Grand Prix win, and the most second-place finishes without a wi. In 2011, Heidfeld raced in Formula One for the Renault team as a replacement for the injured Robert Kubica, his former BMW Sauber teammate,before being replaced by Bruno Senna. He last drove for the Rebellion Racing team in the FIA World Endurance Championship and for Mahindra Racing Formula E Team in Formula E.",
  },
  {
    id: 3,
    driverRef: "rosberg",
    number: 6,
    code: "ROS",
    name: {
      forename: "Nico",
      surname: "Rosberg",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Nico_Rosberg_2016.jpg/330px-Nico_Rosberg_2016.jpg",
      imageby:
        "By Sven Mandel - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=63355783",
    },
    dob: "1985-06-27",
    nationality: "German",
    url: "http://en.wikipedia.org/wiki/Nico_Rosberg",
    teams: "Williams, Mercedes",
    description:
      "Nico Erik Rosberg (born 27 June 1985) is a German-Finnish former professional racing driver. He competed in Formula One from 2006 to 2016, winning the World Drivers' Championship in 2016 with Mercedes-AMG Petronas Motorsport. The only child of Finnish 1982 Formula One World Champion Keke Rosberg and his German wife Sina Rosberg, he was raised primarily in the Principality of Monaco.",
  },
  {
    id: 4,
    driverRef: "alonso",
    number: 14,
    code: "ALO",
    name: {
      forename: "Fernando",
      surname: "Alonso",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Alonso_2016.jpg/360px-Alonso_2016.jpg",
      imageby:
        "By Box Repsol | Flickr - https://www.flickr.com/photos/box_repsol/26877535660/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=53803565",
    },
    dob: "1981-07-29",
    nationality: "Spanish",
    url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
    teams: "Minardi, Renault, McLaren, Ferrari, Alpine",
    description:
      "Fernando Alonso Díaz is a Spanish racing driver currently competing for Aston Martin in Formula One. He won the series' World Drivers' Championship in 2005 and 2006 with Renault, and has also driven for McLaren, Ferrari, and Minardi. With Toyota, Alonso won the 24 Hours of Le Mans twice, in 2018 and 2019, and the FIA World Endurance Championship in 2018–19. He also won the 24 Hours of Daytona with Wayne Taylor Racing in 2019.",
  },
  {
    id: 5,
    driverRef: "kovalainen",
    number: "\\N",
    code: "KOV",
    name: {
      forename: "Heikki",
      surname: "Kovalainen",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Effect_20190609_091716.jpg",
      imageby:
        "By SF-R - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=79563828",
    },
    dob: "1981-10-19",
    nationality: "Finnish",
    url: "http://en.wikipedia.org/wiki/Heikki_Kovalainen",
    teams: "Renault, McLaren, Lotus, Caterham, Lotus",
    description:
      "Heikki Johannes Kovalainen; is a Finnish racing driver competing in the Japan Rally Championship for Rally Team AICELLO. He raced in Formula One between 2007 and 2013 for the Renault, McLaren, Team Lotus, Caterham and Lotus F1 teams, scoring a single victory at the 2008 Hungarian Grand Prix. After leaving Formula One, he raced in the Japanese Super GT series between 2015 and 2021, where he won the championship in 2016.",
  },
  {
    id: 6,
    driverRef: "nakajima",
    number: "\\N",
    code: "NAK",
    name: {
      forename: "Kazuki",
      surname: "Nakajima",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Kazuki_Nakajima_2012_WEC_Fuji.jpg/330px-Kazuki_Nakajima_2012_WEC_Fuji.jpg",
      imageby:
        "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=22170228",
    },
    dob: "1985-01-11",
    nationality: "Japanese",
    url: "http://en.wikipedia.org/wiki/Kazuki_Nakajima",
    teams: "Williams",
    description:
      "Kazuki Nakajima is a retired Japanese professional racing driver who drove in Formula One for the Williams-Toyota team from 2007 to 2009. In 2012 and 2014, he won the Super Formula Championship driving for TOM'S. Racing for Toyota Gazoo Racing, he won the 2018, 2019 and 2020 24 Hours of Le Mans, as well as the 2018–19 World Endurance Championship along with team-mates Fernando Alonso and Sébastien Buemi. He is the second FIA world champion from Japan after Toshi Arai.",
  },
  {
    id: 7,
    driverRef: "bourdais",
    number: "\\N",
    code: "BOU",
    name: {
      forename: "Sébastien",
      surname: "Bourdais",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sebastien_Bourdais_in_2021_%2851221641988%29_%28cropped%29.jpg/1024px-Sebastien_Bourdais_in_2021_%2851221641988%29_%28cropped%29.jpg",
      imageby:
        "De Zach Catanzareti Photo - sebastien bourdais tony stewart, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=106663586",
    },
    dob: "1979-02-28",
    nationality: "French",
    url: "http://en.wikipedia.org/wiki/S%C3%A9bastien_Bourdais",
    teams: "Toro Rosso",
    description:
      "Sébastien Olivier Bourdais is a French professional racing driver. He is one of the most successful drivers in the history of American open-wheel car racing, having won 37 races. He won four successive championships under Champ Car World Series sanction from 2004 to 2007. He drove in Formula One for the Toro Rosso team during 2008, and the start of the 2009 season, returned to America in the united IndyCar Series in 2011, and has raced sports cars throughout his career, winning his home race, the 24 Hours of Le Mans in the GTE-Pro class in 2016. He last competed in the NTT IndyCar Series in 2021, driving the No. 14 car for A. J. Foyt Racing.",
  },
  {
    id: 8,
    driverRef: "raikkonen",
    number: 7,
    code: "RAI",
    name: {
      forename: "Kimi",
      surname: "Räikkönen",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/F12019_Schloss_Gabelhofen_%2822%29_%28cropped%29.jpg",
      imageby: "By XaviYuahanda - Own work, CC BY-SA 4.0",
    },
    dob: "1979-10-17",
    nationality: "Finnish",
    url: "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
    teams: "Sauber, McLaren, Ferrari, Lotus, Alfa Romeo",
    description:
      "Kimi-Matias Räikkönen, nicknamed The Iceman, is a Finnish racing driver who competed in Formula One between 2001 and 2021 for Sauber, McLaren, Ferrari, Lotus, and Alfa Romeo. Räikkönen won the 2007 Formula One World Championship while driving for Ferrari; he also managed to finish second overall twice and third three times. Räikkönen is the most successful Finnish Formula One driver by several metrics,[a] and has the fifth-most podium finishes, third-most fastest laps, and second-most race starts in Formula One history. He is known for his reserved personality and reluctance to participate in public relations.",
  },
  {
    id: 9,
    driverRef: "kubica",
    number: 88,
    code: "KUB",
    name: {
      forename: "Robert",
      surname: "Kubica",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2019_Formula_One_tests_Barcelona%2C_Kubica_%2832309897777%29.jpg/800px-2019_Formula_One_tests_Barcelona%2C_Kubica_%2832309897777%29.jpg",
      imageby:
        "By Marc Alvarado - https://www.flickr.com/photos/170206857@N06/32309897777/, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=77013331",
    },
    dob: "1984-12-07",
    nationality: "Polish",
    url: "http://en.wikipedia.org/wiki/Robert_Kubica",
    teams: "BMW Sauber, Renault, Williams, Alfa Romeo Racing",
    description:
      "Robert Józef Kubica is a Polish racing and rally driver. He was the first and, as of 2023, the only Polish racing driver to compete in Formula One. Between 2006 and 2009 he drove for the BMW Sauber F1 team, promoted from test driver to race driver during 2006. In June 2008, Kubica took his maiden and only Formula One victory at the Canadian Grand Prix. That season he led the championship at one stage, before finishing fourth overall, his best career position. Kubica drove for Renault in 2010 and was set to remain with the team in 2011. Several years later Kubica confirmed he had signed a pre-contract for the 2012 season with Ferrari, a move that was eventually cancelled by his devastating rally crash in early 2011.Kubica returned to racing in September 2012, winning a minor rally in Italy.Kubica was named one of The Men of the Year 2012 by Top Gear magazine for his return to auto racing. In 2013, he drove for Citroën in the European and World Rally-2 Championships.He went on to win the inaugural WRC-2 title, and moved to the WRC championship full-time in 2014, driving a Ford Fiesta RS WRC prepared by M-Sport.On 16 January 2018, it was announced that Kubica would become the reserve driver of Williams for the 2018 season.On 22 November 2018, Kubica was announced as a Williams race driver for the 2019 Formula One season.He left the Williams team at the end of 2019, moving across to the Deutsche Tourenwagen Masters,while maintaining a Formula One presence as reserve and test driver for Alfa Romeo. He has made several appearances during practice sessions in his role as test driver, and he replaced Kimi Räikkönen at the Dutch and Italian Grands Prix in 2021",
  },
  {
    id: 10,
    driverRef: "glock",
    number: "\\N",
    code: "GLO",
    name: {
      forename: "Timo",
      surname: "Glock",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Timo_Glock_Canada_2011-Cropped.jpg/800px-Timo_Glock_Canada_2011-Cropped.jpg",
      imageby:
        "By ph-stop - https://www.flickr.com/photos/ph-stop/5817328106/, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=19979628",
    },
    dob: "1982-03-18",
    nationality: "German",
    url: "http://en.wikipedia.org/wiki/Timo_Glock",
    teams: "Jordan, Toyota, Virgin, Marussia",
    description:
      "Timo Glock is a German professional racing driver, and BMW Motorsport works driver. He raced in Formula One for the Jordan, Toyota, Virgin Racing and Marussia F1 teams. He finished 10th in the Drivers' Championship in both 2008 and 2009, scoring three podium finishes. After leaving Formula One in 2013, Glock became a works driver for BMW in the Deutsche Tourenwagen Masters, driving for BMW Team MTEK, and achieved his first DTM podium at the Red Bull Ring, and a first win at the season finale at the Hockenheimring.",
  },
  {
    id: 11,
    driverRef: "sato",
    number: "\\N",
    code: "SAT",
    name: {
      forename: "Takuma",
      surname: "Sato",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Takuma_Sato_%282021%29.jpg/800px-Takuma_Sato_%282021%29.jpg",
      imageby:
        "By Wolkenjaeger - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=110568755",
    },
    dob: "1977-01-28",
    nationality: "Japanese",
    url: "http://en.wikipedia.org/wiki/Takuma_Sato",
    teams: "Jordan, BAR, Super Aguri",
    description:
      "Takuma Sato, nicknamed: Taku, is a Japanese professional racing driver. He competes part-time in the IndyCar Series, driving the No. 11 Honda for Chip Ganassi Racing. Sato is a two time winner of the Indianapolis 500, having won the event in 2017 and 2020. He was the first Asian driver to win the Indianapolis 500, and the twentieth driver to win the race more than once. Before winning the Indianapolis 500, Sato became the first Japanese-born driver to win an IndyCar Series race when he won the 2013 Grand Prix of Long Beach. Sato raced full-time in the IndyCar Series from 2010 until 2022 for KV Racing Technology, Rahal Letterman Lanigan Racing, A. J. Foyt Enterprises, Andretti Autosport, and Dale Coyne Racing, all with Honda engines. He competed in Formula One from 2002 to 2008 for the Honda-powered Jordan, BAR and Super Aguri teams, scoring 44 points overall, and a single podium which was at the 2004 United States Grand Prix. His 8th-place finish in the 2004 Formula One World Drivers' Championship is the best-ever result for a Japanese driver in the series. Sato has become known among fans and media for his motto no attack, no chance with regards to his racing style.",
  },
  {
    id: 12,
    driverRef: "piquet_jr",
    number: "\\N",
    code: "PIQ",
    name: {
      forename: "Nelson",
      surname: "Piquet Jr.",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Piquet_Jr._2015.jpg",
      imageby:
        "By Andreas Bakkerud - http://www.mynewsdesk.com/no/andreasbakkerud/images/andreas-bakkerud-tok-seg-til-x-games-finalen-439633, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=45295644",
    },
    dob: "1985-07-25",
    nationality: "Brazilian",
    url: "http://en.wikipedia.org/wiki/Nelson_Piquet,_Jr.",
    teams: "Renault",
    description:
      "Nelson Angelo Tamsma Piquet Souto Maior, also known as Nelson Piquet Junior or Nelsinho Piquet, is a Brazilian stock car racing driver and former Formula One and Formula E driver where he was champion in the 2014–15 season. He currently competes full-time in the Brazilian Stock Car Pro Series, driving the No. 33 Toyota Corolla E210 for Motul TMG Racing.He also races a Rebellion R-One LMP1 in the FIA World Endurance Championship. The son of three-time Formula One world champion Nelson Piquet, he was signed as test driver for Renault Formula One team for the 2007 season, and was promoted to the race team for 2008, before being dropped midway through the 2009 season.[3] After losing his drive, it emerged that he had, under instruction from senior members of the team, crashed deliberately at the 2008 Singapore Grand Prix to help his teammate, Fernando Alonso, win the race. The resulting scandal became one of the most significant in motor sport history, and ultimately saw a permanent end to Piquet Junior's career in Formula 1. Piquet also finished runner-up in the 2006 GP2 Series, fourth in the 2014 Global RallyCross Championship, and seventh in the 2012 NASCAR Truck Series.",
  },
  {
    id: 13,
    driverRef: "massa",
    number: 19,
    code: "MAS",
    name: {
      forename: "Felipe",
      surname: "Massa",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Felipe_Massa_Le_Mans_Classic_2018_%28cropped%29.jpg/800px-Felipe_Massa_Le_Mans_Classic_2018_%28cropped%29.jpg",
      imageby:
        "By Y.Leclercq - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=77068897",
    },
    dob: "1981-04-25",
    nationality: "Brazilian",
    url: "http://en.wikipedia.org/wiki/Felipe_Massa",
    teams: "Sauber, Ferrari, Williams",
    description:
      "Felipe Massa is a Brazilian racing driver. He competed in 15 seasons of Formula One between 2002 and 2017, where he scored 11 Grand Prix victories, 41 podiums and finished as championship runner-up in 2008 by one point. He currently competes full-time in the Brazilian Stock Car Pro Series, driving the No. 19 Chevrolet Cruze for Lubrax Podium.Massa started his career in go-karting from the age of eight continuing in national and regional championships for seven years. He moved into Formula Chevrolet and claimed the championship. He moved in Italian Formula Renault in 2000 and won the title along with the European championship. He went into Euro Formula 3000 taking the championship in 2001.He started his Formula One career with Sauber before joining Scuderia Ferrari as a test driver for 2003. He returned to Sauber for 2004 and 2005 before rejoining Ferrari where he won two races in 2006 including his home Grand Prix becoming the first Brazilian since Ayrton Senna to win the Brazilian Grand Prix. He won three races in 2007, finishing 4th in the Drivers' Championship. He finished second in the 2008 Drivers' World Championship after a long title battle with Lewis Hamilton, winning six races to Hamilton's five. At the 2009 Hungarian Grand Prix, he was injured by a suspension spring off the Brawn GP car of Rubens Barrichello. He was forced to miss the rest of the season but returned in 2010 during which he briefly led the championship. He suffered a dip in form in 2011 scoring no podiums but consistently scoring points. He contributed to Ferrari's Constructors' Championships in 2007 and 2008 and was under contract to race for the team until the end of the 2013 season.On 10 September 2013, he confirmed he would be leaving Ferrari at the end of the 2013 season. He replaced Pastor Maldonado alongside Valtteri Bottas at Williams from 2014.Massa announced that he would retire from Formula One at the end of the 2016 season.However, the abrupt retirement of 2016 Formula One Champion Nico Rosberg from Mercedes precipitated the late move of Valtteri Bottas from Williams to Mercedes, leaving a late vacancy at Williams. Massa subsequently postponed his retirement, returning to Williams to partner rookie Lance Stroll for the 2017 season.[4] On 4 November 2017, Massa confirmed that he would be retiring from Formula One at the end of the 2017 season.Since retirement from Formula One, Massa has pursued a career in the FIA's all electric series Formula E. He retired from Formula E at the end of the 2019-20 Championship. He then joined the 2021 season of the Stock Car Brasil series.",
  },
  {
    id: 14,
    driverRef: "coulthard",
    number: "\\N",
    code: "COU",
    name: {
      forename: "David",
      surname: "Coulthard",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/David_Coulthard_Champions_for_Charity_2022_%28cropped%29.jpg/330px-David_Coulthard_Champions_for_Charity_2022_%28cropped%29.jpg",
      imageby:
        "By Sven Mandel - Sven Mandel, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=123036859",
    },
    dob: "1971-03-27",
    nationality: "British",
    url: "http://en.wikipedia.org/wiki/David_Coulthard",
    teams: "Williams, McLaren, Red Bull",
    description:
      "David Marshall Coulthard MBE is a British former racing driver from Scotland, later turned presenter, commentator and journalist. Nicknamed 'DC', he competed in 15 seasons of Formula One between 1994 and 2008, taking 13 Grand Prix victories and 62 podium finishes. He was runner-up in the 2001 championship, driving for McLaren. Coulthard began karting at the age of eleven and achieved early success before progressing to car racing in the British Formula Ford Championship and the Formula 3000 series. He first drove in Formula One with Williams in the 1994 season succeeding the late Ayrton Senna. The following year he won his first Grand Prix in Portugal, and then for the 1996 season he moved to McLaren. After winning two races in the 1997 season, he finished 3rd in the World Drivers' Championship in the 1998 season. He won five races during 1999 and 2000 before finishing 2nd in the Drivers' Championship to Michael Schumacher in 2001. Two more victories followed between 2002 and 2003 before he left McLaren at the end of 2004. He moved to Red Bull in 2005 and secured their first podium a year later. Coulthard retired from Formula One racing at the end of 2008. After retiring from Formula One, Coulthard continued working with Red Bull as a consultant and joined the BBC as a commentator and pundit for their coverage of Formula One. He returned to active motorsports in 2010 joining Mücke Motorsport in DTM, the Deutsche Tourenwagen Masters (German Touring Car Masters) and retired at the end of 2012. Coulthard has also participated in the Race of Champions, finishing runner-up in the Drivers' Cup in 2008, and winning the competition in 2014 and 2018. Since 2016 he has worked as a commentator and analyst for Channel 4 after they took over the BBC's terrestrial television rights. In 2019, he was elected president of the British Racing Drivers' Club",
  },
  {
    id: 15,
    driverRef: "trulli",
    number: "\\N",
    code: "TRU",
    name: {
      forename: "Jarno",
      surname: "Trulli",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Jarno-Trulli-2014-cropped.jpg/1024px-Jarno-Trulli-2014-cropped.jpg",
      imageby:
        "By 12. Internationale Sportnacht Davos from Davos, Schweiz - 12. Internationale Sportnacht Davos 2014, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=113876789",
    },
    dob: "1974-07-13",
    nationality: "Italian",
    url: "http://en.wikipedia.org/wiki/Jarno_Trulli",
    teams: "Minardi, Prost, Jordan, Renault, Toyota, Lotus",
    description:
      "Jarno Trulli is an Italian racing driver. He regularly competed in Formula One from 1997 to 2011, driving for Minardi, Prost, Jordan, Renault, Toyota, Lotus Racing and Team Lotus. His best result in the World Drivers' Championship (WDC) was sixth place in 2004; this was also the year in which he scored the only win of his Formula One career at the 2004 Monaco Grand Prix. Throughout his Formula One career, Trulli was renowned for his skill in qualifying, regularly achieving far better grid positions than rivals with superior cars to his own. He was also known for his defensive driving style which allowed him to successfully hold off quicker drivers, sometimes for an entire race. The combination of being able to achieve high grid positions in comparatively slow cars and his ability to hold off faster drivers would often result in a line of vehicles forming behind him during a race, which was commonly referred to as the 'Trulli Train' by commentators, fans and journalists. Trulli was slated to compete in the 2012 Formula One season, but retired before the season began. In 2014–15 he competed in the inaugural season of the FIA Formula E Championship, driving for Trulli GP, a team he founded. He is the father of racing driver Enzo Trulli",
  },
  {
    id: 16,
    driverRef: "sutil",
    number: 99,
    code: "SUT",
    name: {
      forename: "Adrian",
      surname: "Sutil",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Adrian_Sutil.jpg/800px-Adrian_Sutil.jpg",
      imageby:
        "By Nic Redhead - Flickr: Adrian Sutil, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=16588831",
    },
    dob: "1983-01-11",
    nationality: "German",
    url: "http://en.wikipedia.org/wiki/Adrian_Sutil",
    teams: "Spyker, Force India, Sauber",
  },
  {
    id: 17,
    driverRef: "webber",
    number: "\\N",
    code: "WEB",
    name: {
      forename: "Mark",
      surname: "Webber",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Mark_Webber_2017_Malaysian_GP_podium.jpg/800px-Mark_Webber_2017_Malaysian_GP_podium.jpg",
      imageby:
        "By Morio - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=79072288",
    },
    dob: "1976-08-27",
    nationality: "Australian",
    url: "http://en.wikipedia.org/wiki/Mark_Webber",
    teams: "Porsche, Mercedes AMG",
  },
  {
    id: 18,
    driverRef: "button",
    number: 22,
    code: "BUT",
    name: {
      forename: "Jenson",
      surname: "Button",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Jenson_Button_Bahrain_2012_%28crop%29.jpg/330px-Jenson_Button_Bahrain_2012_%28crop%29.jpg",
      imageby:
        "By Ryan Bayona - https://commons.wikimedia.org/wiki/File:Jenson_Button_bahrain_2012.jpg, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=97883671",
    },
    dob: "1980-01-19",
    nationality: "British",
    url: "http://en.wikipedia.org/wiki/Jenson_Button",
    teams: "Porsche",
  },
  {
    id: 19,
    driverRef: "davidson",
    number: "\\N",
    code: "DAV",
    name: {
      forename: "Anthony",
      surname: "Davidson",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Anthony_Davidson_Goodwood_Festival_of_Speed_2019_%2848242774922%29.jpg/800px-Anthony_Davidson_Goodwood_Festival_of_Speed_2019_%2848242774922%29.jpg",
      imageby:
        "By Jen_ross83 - https://www.flickr.com/photos/69527563@N05/48242774922/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=80386032",
    },
    dob: "1979-04-18",
    nationality: "British",
    url: "http://en.wikipedia.org/wiki/Anthony_Davidson",
    teams: "Minardi, BAR, Super Aguri",
  },
  {
    id: 20,
    driverRef: "vettel",
    number: 5,
    code: "VET",
    name: {
      forename: "Sebastian",
      surname: "Vettel",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sebastian_Vettel_2015_Malaysia_podium_1.jpg/330px-Sebastian_Vettel_2015_Malaysia_podium_1.jpg",
      imageby:
        "By Morio - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=39371108",
    },
    dob: "1987-07-03",
    nationality: "German",
    url: "http://en.wikipedia.org/wiki/Sebastian_Vettel",
    teams: "BMW Sauber, Toro Rosso, Red Bull, Ferrari, Aston Martin",
  },
  {
    id: 21,
    driverRef: "fisichella",
    number: "\\N",
    code: "FIS",
    name: {
      forename: "Giancarlo",
      surname: "Fisichella",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Giancarlo_Fisichella_2012_WEC_Fuji.jpg/330px-Giancarlo_Fisichella_2012_WEC_Fuji.jpg",
      imageby:
        "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=22170040",
    },
    dob: "1973-01-14",
    nationality: "Italian",
    url: "http://en.wikipedia.org/wiki/Giancarlo_Fisichella",
    teams: "Minardi, Jordan, Benetton, Sauber, Renault, Force India, Ferrari",
  },
  {
    id: 22,
    driverRef: "barrichello",
    number: "\\N",
    code: "BAR",
    name: {
      forename: "Rubens",
      surname: "Barrichello",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/2/28/Rubens_Barrichello_2010_Malaysia.jpg",
      imageby:
        "By bert en ernie - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=9944223",
    },
    dob: "1972-05-23",
    nationality: "Brazilian",
    url: "http://en.wikipedia.org/wiki/Rubens_Barrichello",
    teams: "Jordan, Stewart, Ferrari, Honda, Brawn, Williams",
  },
  {
    id: 23,
    driverRef: "ralf_schumacher",
    number: "\\N",
    code: "SCH",
    name: {
      forename: "Ralf",
      surname: "Schumacher",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ralf_Schumacher%2C_2016.png/800px-Ralf_Schumacher%2C_2016.png",
      imageby:
        "By 9EkieraM1 - File:Ralf_Schuhmacher.jpg, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=89214206",
    },
    dob: "1975-06-30",
    nationality: "German",
    url: "http://en.wikipedia.org/wiki/Ralf_Schumacher",
    teams: "Jordan, Williams, Toyota",
  },
  {
    id: 24,
    driverRef: "liuzzi",
    number: "\\N",
    code: "LIU",
    name: {
      forename: "Vitantonio",
      surname: "Liuzzi",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/0/01/Vitantonio_Liuzzi_2011_Malaysia.jpg",
      imageby:
        "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=14877027",
    },
    dob: "1980-08-06",
    nationality: "Italian",
    url: "http://en.wikipedia.org/wiki/Vitantonio_Liuzzi",
    teams: "McLaren,Benetton, Williams, Joest Racing, Peugeot",
  },
  {
    id: 25,
    driverRef: "wurz",
    number: "\\N",
    code: "WUR",
    name: {
      forename: "Alexander",
      surname: "Wurz",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Alexander_Wurz_-_2016_24_Hours_of_Le_Mans_-_Pit_Walk.jpg/368px-Alexander_Wurz_-_2016_24_Hours_of_Le_Mans_-_Pit_Walk.jpg",
      imageby:
        "De David Merrett - Flickr: Alexander Wurz two-time winner of Le Mans 24 Hours (1996 and 2009), CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=54692681",
    },
    dob: "1974-02-15",
    nationality: "Austrian",
    url: "http://en.wikipedia.org/wiki/Alexander_Wurz",
    teams: "Benetton,McLaren,Williams",
  },
  {
    id: 26,
    driverRef: "speed",
    number: "\\N",
    code: "SPE",
    name: {
      forename: "Scott",
      surname: "Speed",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Red_Bull_Global_Rallycross_2016_160630-M-NZ408-020.jpg/1280px-Red_Bull_Global_Rallycross_2016_160630-M-NZ408-020.jpg",
      imageby:
        "By Lance Cpl. Austin Livingston - https://www.dvidshub.net/image/2704214/red-bull-global-rallycross-2016, Public Domain, https://commons.wikimedia.org/w/index.php?curid=58081666",
    },
    dob: "1983-01-24",
    nationality: "American",
    url: "http://en.wikipedia.org/wiki/Scott_Speed",
    teams: "Toro Rosso",
  },
  {
    id: 27,
    driverRef: "albers",
    number: "\\N",
    code: "ALB",
    name: {
      forename: "Christijan",
      surname: "Albers",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Christijan_Albers_2006_%28cropped%29.JPG",
      imageby:
        "By I, SilverArrows, CC BY 2.5, https://commons.wikimedia.org/w/index.php?curid=21988866",
    },
    dob: "1979-04-16",
    nationality: "Dutch",
    url: "http://en.wikipedia.org/wiki/Christijan_Albers",
    teams: "Minardi,Midland,Spyker",
  },
  {
    id: 28,
    driverRef: "markus_winkelhock",
    number: "\\N",
    code: "WIN",
    name: {
      forename: "Markus",
      surname: "Winkelhock",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Markus_winkelhock_brandshatch2014.JPG/800px-Markus_winkelhock_brandshatch2014.JPG",
      imageby:
        "By Robk23oxf - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=33181105",
    },
    dob: "1980-06-13",
    nationality: "German",
    url: "http://en.wikipedia.org/wiki/Markus_Winkelhock",
    teams: "Spyker",
  },
  {
    id: 29,
    driverRef: "yamamoto",
    number: "\\N",
    code: "YAM",
    name: {
      forename: "Sakon",
      surname: "Yamamoto",
    },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Sakon_Yamamoto_2010_Motorsport_Japan.jpg",
      imageby:
        "By Morio - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=11669359",
    },
    dob: "1982-07-09",
    nationality: "Japanese",
    url: "http://en.wikipedia.org/wiki/Sakon_Yamamoto",
    teams: "Super Aguri,Spyker,Hispania",
  },
];

const Drivers = () => {
  return (
    <GridContainer>
      {drivers.map((driver) => (
        <Driver
          id={driver.id}
          key={uuidv4()}
          nombre={driver.nombre || driver.name.forename}
          apellido={driver.apellido || driver.name.surname}
          imagen={driver.imagen || driver.image.url}
          teams={
            driver.Teams
              ? driver.Teams
              : driver.teams
              ? driver.teams
              : "Sin escuderías"
          }
          fechaNacimiento={driver.fechaNacimiento || driver.dob}
        />
      ))}
    </GridContainer>
  );
};

export default Drivers;
