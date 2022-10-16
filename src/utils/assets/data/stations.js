const stations = {
  data: [
    {
      label: "ABU ROAD",
      value: "ABR",
    },
    {
      label: "ACHHNERA",
      value: "AH",
    },
    {
      label: "ADONI",
      value: "AD",
    },
    {
      label: "ADRA",
      value: "ADRA",
    },
    {
      label: "AGRA FORT",
      value: "AF",
    },
    {
      label: "AGRA CANTT.",
      value: "AGC",
    },
    {
      label: "AHMADNAGAR",
      value: "ANG",
    },
    {
      label: "AHMEDABAD",
      value: "ADI",
    },
    {
      label: "AJMER",
      value: "AII",
    },
    {
      label: "AKOLA",
      value: "AK",
    },
    {
      label: "ALIGARH",
      value: "ALJN",
    },
    {
      label: "ALIPURDUAR Jn.",
      value: "APDJ",
    },
    {
      label: "ALLAHABAD",
      value: "ALD",
    },
    {
      label: "ALAPPUZHA",
      value: "ALLP",
    },
    {
      label: "ALNAWAR Jn.",
      value: "LWR",
    },
    {
      label: "ALWAR",
      value: "AWR",
    },
    {
      label: "ALUVA",
      value: "AWY",
    },
    {
      label: "AMALNER",
      value: "AN",
    },
    {
      label: "AMBALA CANTT.",
      value: "UMB",
    },
    {
      label: "AMLA",
      value: "AMLA",
    },
    {
      label: "AMRITSAR",
      value: "ASR",
    },
    {
      label: "ANAKAPALLE",
      value: "AKP",
    },
    {
      label: "ANAND",
      value: "ANND",
    },
    {
      label: "ANAND NAGAR",
      value: "ANDN",
    },
    {
      label: "ANANTAPUR",
      value: "ATP",
    },
    {
      label: "ANGUL",
      value: "ANGL",
    },
    {
      label: "ANNAVARAM",
      value: "ANV",
    },
    {
      label: "ANUPPUR",
      value: "APR",
    },
    {
      label: "ARA",
      value: "ARA",
    },
    {
      label: "ARAKKONAM",
      value: "AJJ",
    },
    {
      label: "ARSIKERE",
      value: "ASK",
    },
    {
      label: "ASANSOL",
      value: "ASN",
    },
    {
      label: "AUNRIHAR",
      value: "ARJ",
    },
    {
      label: "AURANGABAD",
      value: "AWB",
    },
    {
      label: "AYODHYA",
      value: "AY",
    },
    {
      label: "AZAMGARH",
      value: "AMH",
    },
    {
      label: "AZIMGANJ Jn.",
      value: "AZ",
    },
    {
      label: "BADARPUR",
      value: "BPB",
    },
    {
      label: "BADNERA Jn.",
      value: "BD",
    },
    {
      label: "BAGAHA",
      value: "BUG",
    },
    {
      label: "BAGALKOT",
      value: "BGK",
    },
    {
      label: "BAGHPAT ROAD",
      value: "BPM",
    },
    {
      label: "BAIDYANATHDHAM",
      value: "BDME",
    },
    {
      label: "BAKTHIYARPUR",
      value: "BKP",
    },
    {
      label: "BALAGHAT Jn.",
      value: "BTC",
    },
    {
      label: "BALASORE",
      value: "BLS",
    },
    {
      label: "BALHARSHAH",
      value: "BPQ",
    },
    {
      label: "BALLIA",
      value: "BUI",
    },
    {
      label: "BANARHAT",
      value: "BNQ",
    },
    {
      label: "BANDA Jn.",
      value: "BNDA",
    },
    {
      label: "BANDEL Jn.",
      value: "BDC",
    },
    {
      label: "BANDIKUI Jn.",
      value: "BKI",
    },
    {
      label: "BANDRA TERMINUS",
      value: "BDTS",
    },
    {
      label: "BANGALORE CITY",
      value: "SBC",
    },
    {
      label: "BANGALORE CANTT.",
      value: "BNC",
    },
    {
      label: "BANGARAPET",
      value: "BWT",
    },
    {
      label: "BANKURA",
      value: "BQK",
    },
    {
      label: "BANMANKHI",
      value: "BNKI",
    },
    {
      label: "BAPATLA",
      value: "BPP",
    },
    {
      label: "BARABANKI Jn.",
      value: "BBK",
    },
    {
      label: "BARAUNI Jn.",
      value: "BJU",
    },
    {
      label: "BARAUT",
      value: "BTU",
    },
    {
      label: "BARABIL",
      value: "BBL",
    },
    {
      label: "BARDDHAMAN Jn.",
      value: "BWN",
    },
    {
      label: "BAREILLY",
      value: "BE",
    },
    {
      label: "BARGARH ROAD",
      value: "BRGA",
    },
    {
      label: "BARHNI",
      value: "BNY",
    },
    {
      label: "BARKAKANA",
      value: "BRKA",
    },
    {
      label: "BARMER",
      value: "BME",
    },
    {
      label: "BAROG",
      value: "BOF",
    },
    {
      label: "BARSOI",
      value: "BOE",
    },
    {
      label: "BARWADIH",
      value: "BRWD",
    },
    {
      label: "BASTI",
      value: "BST",
    },
    {
      label: "BATHINDA Jn.",
      value: "BTI",
    },
    {
      label: "BAYANA",
      value: "BXN",
    },
    {
      label: "BEAS",
      value: "BEAS",
    },
    {
      label: "BELAPUR",
      value: "BAP",
    },
    {
      label: "BELGAUM",
      value: "BGM",
    },
    {
      label: "BELLARY Jn.",
      value: "BAY",
    },
    {
      label: "BETTIAH",
      value: "BTH",
    },
    {
      label: "BETUL",
      value: "BZU",
    },
    {
      label: "BHADOHI",
      value: "BOY",
    },
    {
      label: "BHADRAKH",
      value: "BHC",
    },
    {
      label: "BHAGALPUR",
      value: "BGP",
    },
    {
      label: "BHARATPUR",
      value: "BTE",
    },
    {
      label: "BHARUCH",
      value: "BH",
    },
    {
      label: "BHATAPARA",
      value: "BYT",
    },
    {
      label: "BHATKAL",
      value: "BTJL",
    },
    {
      label: "BHATNI",
      value: "BTT",
    },
    {
      label: "BHAVNAGAR (T)",
      value: "BVC",
    },
    {
      label: "BHILWARA",
      value: "BHL",
    },
    {
      label: "BHIMAVARAM Jn.",
      value: "BVRM",
    },
    {
      label: "BHIMAVARAM TOWN",
      value: "BVRT",
    },
    {
      label: "BHIND",
      value: "BIX",
    },
    {
      label: "BHIWANI",
      value: "BNW",
    },
    {
      label: "BHOJIPURA",
      value: "BPR",
    },
    {
      label: "BHOPAL",
      value: "BPL",
    },
    {
      label: "BHUBANESWAR",
      value: "BBS",
    },
    {
      label: "BHUJ",
      value: "BHUJ",
    },
    {
      label: "BHUSAVAL",
      value: "BSL",
    },
    {
      label: "BIJAPUR",
      value: "BJP",
    },
    {
      label: "BIJNOR",
      value: "BJO",
    },
    {
      label: "BIKANER",
      value: "BKN",
    },
    {
      label: "BILASPUR Jn.",
      value: "BSP",
    },
    {
      label: "BINA",
      value: "BINA",
    },
    {
      label: "BINNAGURI",
      value: "BNV",
    },
    {
      label: "BIRUR",
      value: "RRB",
    },
    {
      label: "BITRAGUNTA",
      value: "BTTR",
    },
    {
      label: "BOBBILI",
      value: "VBL",
    },
    {
      label: "BOKARO STEEL CITY",
      value: "BKSC",
    },
    {
      label: "BOLPURSHANTINIKETAN",
      value: "BHP",
    },
    {
      label: "BORIVALI",
      value: "BVI",
    },
    {
      label: "BOTAD",
      value: "BTD",
    },
    {
      label: "BRAHMAPURI",
      value: "BMP",
    },
    {
      label: "BUDAUN",
      value: "BEM",
    },
    {
      label: "BURHANPUR",
      value: "BAU",
    },
    {
      label: "BURHWAL",
      value: "BUW",
    },
    {
      label: "BUXAR",
      value: "BXR",
    },
    {
      label: "CANACONA",
      value: "CNO",
    },
    {
      label: "CHAKIA",
      value: "CAA",
    },
    {
      label: "CHAKKI BANK",
      value: "CHKB",
    },
    {
      label: "CHAKRADHARPUR",
      value: "CKP",
    },
    {
      label: "CHALISGAON",
      value: "CSN",
    },
    {
      label: "CHALSA",
      value: "CLD",
    },
    {
      label: "CHAMPA",
      value: "CPH",
    },
    {
      label: "CHANDAUSI",
      value: "CH",
    },
    {
      label: "CHANDIGARH",
      value: "CDG",
    },
    {
      label: "CHANDIL",
      value: "CNI",
    },
    {
      label: "CHANDRAPUR",
      value: "CD",
    },
    {
      label: "CHANDRAPURA",
      value: "CRP",
    },
    {
      label: "CHAPARMUKH",
      value: "CPK",
    },
    {
      label: "CHATRAPATI SAHU",
      value: "CSMT",
    },
    {
      label: "MAHARAJ",
      value: "(T)",
    },
    {
      label: "CHENGALPATTU Jn.",
      value: "CGL",
    },
    {
      label: "CHENGANNUR",
      value: "CNGR",
    },
    {
      label: "CHENNAI CENTRAL",
      value: "MAS",
    },
    {
      label: "CHENNAI EGMORE",
      value: "MS",
    },
    {
      label: "CHHAPRA",
      value: "CPR",
    },
    {
      label: "CHIDAMBARAM",
      value: "CDM",
    },
    {
      label: "CHIKJAJUR",
      value: "JRU",
    },
    {
      label: "CHIPLUN",
      value: "CHI",
    },
    {
      label: "CHIRALA",
      value: "CLX",
    },
    {
      label: "CHITRAKOOTDHAM KARVI",
      value: "CKTD",
    },
    {
      label: "CHITTARANJAN",
      value: "CRJ",
    },
    {
      label: "CHITTAURGARH",
      value: "COR",
    },
    {
      label: "CHITTOOR",
      value: "CTO",
    },
    {
      label: "CHOPAN",
      value: "CPU",
    },
    {
      label: "CHUNAR",
      value: "CAR",
    },
    {
      label: "CHURU",
      value: "CUR",
    },
    {
      label: "COIMBATORE Jn.",
      value: "CBE",
    },
    {
      label: "COONOOR",
      value: "ONR",
    },
    {
      label: "CUDDALORE PORT",
      value: "CUPJ",
    },
    {
      label: "CUDDAPAH",
      value: "HX",
    },
    {
      label: "CUTTACK",
      value: "CTC",
    },
    {
      label: "DADAR",
      value: "DR",
    },
    {
      label: "DAHANU ROAD",
      value: "DRD",
    },
    {
      label: "DAHOD",
      value: "DHD",
    },
    {
      label: "DALGAON",
      value: "DLO",
    },
    {
      label: "DALTONGANJ",
      value: "DTO",
    },
    {
      label: "DAMOH",
      value: "DMO",
    },
    {
      label: "DANAPUR",
      value: "DNR",
    },
    {
      label: "DARBHANGA",
      value: "DBG",
    },
    {
      label: "DAUND",
      value: "DD",
    },
    {
      label: "DAVANGERE",
      value: "DVG",
    },
    {
      label: "DEHRADUN",
      value: "DDN",
    },
    {
      label: "DEHRI-ON-SONE",
      value: "DOS",
    },
    {
      label: "DELHI",
      value: "DLI",
    },
    {
      label: "NEW DELHI",
      value: "NDLS",
    },
    {
      label: "DELHI CANTT.",
      value: "DEC",
    },
    {
      label: "DELHI SARAI ROHILLA",
      value: "DEE",
    },
    {
      label: "DELHI SHAHDARA",
      value: "DSA",
    },
    {
      label: "DEORIASADAR",
      value: "DEOS",
    },
    {
      label: "DEVLALI",
      value: "DVL",
    },
    {
      label: "DHAMANGAON",
      value: "DMN",
    },
    {
      label: "DHANBAD",
      value: "DHN",
    },
    {
      label: "DHARMABAD",
      value: "DAB",
    },
    {
      label: "DHARMAPURI",
      value: "DPJ",
    },
    {
      label: "DHARMAVARAM",
      value: "DMM",
    },
    {
      label: "DHARWAD",
      value: "DWR",
    },
    {
      label: "DHASA",
      value: "DAS",
    },
    {
      label: "DHAULPUR",
      value: "DHO",
    },
    {
      label: "DHOLA",
      value: "DLJ",
    },
    {
      label: "DHONE",
      value: "DNC",
    },
    {
      label: "DHRANGADHRA",
      value: "DHG",
    },
    {
      label: "DHURI",
      value: "DUI",
    },
    {
      label: "DIBRUGARH TOWN",
      value: "DBRT",
    },
    {
      label: "DILDARNAGAR",
      value: "DLN",
    },
    {
      label: "DIMAPUR",
      value: "DMV",
    },
    {
      label: "DINDIGUL Jn.",
      value: "DG",
    },
    {
      label: "DONGARGARH",
      value: "DGG",
    },
    {
      label: "DORNAKAL",
      value: "DKJ",
    },
    {
      label: "DUNGARPUR",
      value: "DNRP",
    },
    {
      label: "DURG",
      value: "DURG",
    },
    {
      label: "DURGAPUR",
      value: "DGR",
    },
    {
      label: "DWARKA",
      value: "DWK",
    },
    {
      label: "ELURU",
      value: "EE",
    },
    {
      label: "ERNAKULAM Jn.",
      value: "ERS",
    },
    {
      label: "ERNAKULAM TOWN",
      value: "ERN",
    },
    {
      label: "ERODE",
      value: "ED",
    },
    {
      label: "ETAWAH",
      value: "ETW",
    },
    {
      label: "FAIZABAD",
      value: "FD",
    },
    {
      label: "FARIDABAD",
      value: "FDB",
    },
    {
      label: "FARRUKHABAD",
      value: "FKD",
    },
    {
      label: "FATHEABAD CHAND",
      value: "FTD",
    },
    {
      label: "FATEHPUR",
      value: "FTP",
    },
    {
      label: "FATUHA",
      value: "FUT",
    },
    {
      label: "FAZILKA",
      value: "FKA",
    },
    {
      label: "FIROZABAD",
      value: "FZD",
    },
    {
      label: "FIROZPUR CITY",
      value: "FZP",
    },
    {
      label: "FIROZPUR CANTT.",
      value: "FZR",
    },
    {
      label: "FORBESGANJ",
      value: "FBG",
    },
    {
      label: "FURKATING",
      value: "FKG",
    },
    {
      label: "GADAG",
      value: "GDG",
    },
    {
      label: "GAJRAULA",
      value: "GJL",
    },
    {
      label: "GANDHIDHAM",
      value: "GIM",
    },
    {
      label: "GANDHINAGAR",
      value: "GADJ",
    },
    {
      label: "GANGAPUR CITY",
      value: "GGC",
    },
    {
      label: "GARWA ROAD",
      value: "GHD",
    },
    {
      label: "GAYA",
      value: "GAYA",
    },
    {
      label: "GHATSILA",
      value: "GTS",
    },
    {
      label: "GHAZIABAD",
      value: "GZB",
    },
    {
      label: "GOALPARA TOWN",
      value: "GLPT",
    },
    {
      label: "GODHRA",
      value: "GDA",
    },
    {
      label: "GOLA GOKARANNATH",
      value: "GK",
    },
    {
      label: "GOMOH",
      value: "GMO",
    },
    {
      label: "GONDA",
      value: "GD",
    },
    {
      label: "GONDIA",
      value: "G",
    },
    {
      label: "GOOTY",
      value: "GY",
    },
    {
      label: "GORAKHPUR",
      value: "GKP",
    },
    {
      label: "GOSSAINGAON HAT",
      value: "GOGH",
    },
    {
      label: "GUDIVADA",
      value: "GDV",
    },
    {
      label: "GUDUR",
      value: "GDR",
    },
    {
      label: "GULBARGA",
      value: "GR",
    },
    {
      label: "GUNA",
      value: "GUNA",
    },
    {
      label: "GUNTAKAL",
      value: "GTL",
    },
    {
      label: "GUNTUR",
      value: "GNT",
    },
    {
      label: "GURUVAYUR",
      value: "GUV",
    },
    {
      label: "GUWAHATI",
      value: "GHY",
    },
    {
      label: "GWALIOR",
      value: "GWL",
    },
    {
      label: "GYANPUR ROAD",
      value: "GYN",
    },
    {
      label: "HABIBGANJ",
      value: "HBJ",
    },
    {
      label: "HAJIPUR",
      value: "HJP",
    },
    {
      label: "HALDIA",
      value: "HLZ",
    },
    {
      label: "HALDIBARI",
      value: "HDB",
    },
    {
      label: "HAMILTONGANJ",
      value: "HOJ",
    },
    {
      label: "HANUMANGARH",
      value: "HMH",
    },
    {
      label: "HAPA",
      value: "HAPA",
    },
    {
      label: "HAPUR",
      value: "HPU",
    },
    {
      label: "HARDA",
      value: "HD",
    },
    {
      label: "HARIDWAR",
      value: "HW",
    },
    {
      label: "HARIHAR",
      value: "HRR",
    },
    {
      label: "HARPALPUR",
      value: "HPP",
    },
    {
      label: "HASIMARA",
      value: "HSA",
    },
    {
      label: "HATIA",
      value: "HTE",
    },
    {
      label: "HAZRAT NIZAMUDDIN",
      value: "NZM",
    },
    {
      label: "HILSA",
      value: "HIL",
    },
    {
      label: "HIMMAT NAGAR",
      value: "HMT",
    },
    {
      label: "HINDUPUR",
      value: "HUP",
    },
    {
      label: "HINGOLI",
      value: "HNL",
    },
    {
      label: "HISAR",
      value: "HSR",
    },
    {
      label: "HOSHANGABAD",
      value: "HBD",
    },
    {
      label: "HOSPET",
      value: "HPT",
    },
    {
      label: "HOSUR",
      value: "HSRA",
    },
    {
      label: "HOWBADH",
      value: "HBG",
    },
    {
      label: "HOWRAH",
      value: "HWH",
    },
    {
      label: "HUBLI",
      value: "UBL",
    },
    {
      label: "HYDERABAD",
      value: "HYB",
    },
    {
      label: "IGATPURI",
      value: "IGP",
    },
    {
      label: "INDARA",
      value: "IAA",
    },
    {
      label: "INDORE",
      value: "INDB",
    },
    {
      label: "ISLAMPUR",
      value: "IPR",
    },
    {
      label: "ITARSI",
      value: "ET",
    },
    {
      label: "JABALPUR",
      value: "JBP",
    },
    {
      label: "JAIPUR",
      value: "JP",
    },
    {
      label: "JAISALMER",
      value: "JSM",
    },
    {
      label: "JAJPUR KEONJHAR ROAD",
      value: "JJKR",
    },
    {
      label: "JAKHAL",
      value: "JHL",
    },
    {
      label: "JALAMB",
      value: "JM",
    },
    {
      label: "JALANDHAR CANTT.",
      value: "JRC",
    },
    {
      label: "JALANDHAR CITY",
      value: "JUC",
    },
    {
      label: "JALGAON",
      value: "JL",
    },
    {
      label: "JALNA",
      value: "J",
    },
    {
      label: "JALPAIGURI",
      value: "JPG",
    },
    {
      label: "JAMALPUR",
      value: "JMP",
    },
    {
      label: "JAMMU TAWI",
      value: "JAT",
    },
    {
      label: "JAMNAGAR",
      value: "JAM",
    },
    {
      label: "JANGHAI",
      value: "JNH",
    },
    {
      label: "JASIDIH",
      value: "JSME",
    },
    {
      label: "JAUNPUR Jn.",
      value: "JNU",
    },
    {
      label: "JAYNAGAR",
      value: "JYG",
    },
    {
      label: "JETALSAR",
      value: "JLR",
    },
    {
      label: "JHAJHA",
      value: "JAJ",
    },
    {
      label: "JHANSI",
      value: "JHS",
    },
    {
      label: "JHARGRAM",
      value: "JGM",
    },
    {
      label: "JHARSUGUDA",
      value: "JSG",
    },
    {
      label: "JIND",
      value: "JIND",
    },
    {
      label: "JODHPUR",
      value: "JU",
    },
    {
      label: "JOGBANI",
      value: "JBN",
    },
    {
      label: "JOLARPETTAI",
      value: "JTJ",
    },
    {
      label: "JORHAT",
      value: "JT",
    },
    {
      label: "JUNAGARH Jn.",
      value: "JND",
    },
    {
      label: "KACHEGUDA",
      value: "KCG",
    },
    {
      label: "KAKINADA PORT",
      value: "COA",
    },
    {
      label: "KALCHINI",
      value: "KCF",
    },
    {
      label: "KALKA",
      value: "KLK",
    },
    {
      label: "KALOL",
      value: "KLL",
    },
    {
      label: "KALYAN",
      value: "KYN",
    },
    {
      label: "KAMAKHYA",
      value: "KYQ",
    },
    {
      label: "KANCHIPURAM",
      value: "CJ",
    },
    {
      label: "KANDHLA",
      value: "KQL",
    },
    {
      label: "KANKANADI",
      value: "KNKD",
    },
    {
      label: "KANNIYAKUMARI",
      value: "CAPE",
    },
    {
      label: "KANNUR",
      value: "CAN",
    },
    {
      label: "KANPUR CENTRAL",
      value: "CNB",
    },
    {
      label: "KANPUR ANWARGANJ",
      value: "CPA",
    },
    {
      label: "KAPTANGANJ",
      value: "CPJ",
    },
    {
      label: "KARAIKKUDI JN.",
      value: "KKDI",
    },
    {
      label: "KARNAL",
      value: "KUN",
    },
    {
      label: "KARUR",
      value: "KRR",
    },
    {
      label: "KARWAR",
      value: "KAWR",
    },
    {
      label: "KASARGOD",
      value: "KGQ",
    },
    {
      label: "KASGANJ",
      value: "KSJ",
    },
    {
      label: "KATHGODAM",
      value: "KGM",
    },
    {
      label: "KATIHAR",
      value: "KIR",
    },
    {
      label: "KATNI",
      value: "KTE",
    },
    {
      label: "KATPADI",
      value: "KPD",
    },
    {
      label: "KATWA",
      value: "KWAE",
    },
    {
      label: "KAZIPET",
      value: "KZJ",
    },
    {
      label: "KHAGARIA",
      value: "KGG",
    },
    {
      label: "KHALILABAD",
      value: "KLD",
    },
    {
      label: "KHAMMAM",
      value: "KMT",
    },
    {
      label: "KHANDWA",
      value: "KNW",
    },
    {
      label: "KHARAGPUR",
      value: "KGP",
    },
    {
      label: "KHEKRA",
      value: "KEX",
    },
    {
      label: "KHURDA ROAD",
      value: "KUR",
    },
    {
      label: "KISHANGANJ",
      value: "KNE",
    },
    {
      label: "KISHANGARH",
      value: "KSG",
    },
    {
      label: "KIUL",
      value: "KIUL",
    },
    {
      label: "KOCHUVELI",
      value: "KCVL",
    },
    {
      label: "KODAIKANAL ROAD",
      value: "KQN",
    },
    {
      label: "KOPERGAON",
      value: "KPG",
    },
    {
      label: "KORAPUT",
      value: "KRPU",
    },
    {
      label: "KORBA",
      value: "KRBA",
    },
    {
      label: "KOTA",
      value: "KOTA",
    },
    {
      label: "KOTDWARA",
      value: "KTW",
    },
    {
      label: "KOT KAPURA",
      value: "KKP",
    },
    {
      label: "KOTTAYAM",
      value: "KTYM",
    },
    {
      label: "KOZHIKKODE",
      value: "CLT",
    },
    {
      label: "KRISHNANAGAR CITY",
      value: "KNJ",
    },
    {
      label: "KRISHNARAJAPURAM",
      value: "KJM",
    },
    {
      label: "KUMBAKONAM",
      value: "KMU",
    },
    {
      label: "KUNDAPURA",
      value: "KUDA",
    },
    {
      label: "KURDUWADI",
      value: "KWV",
    },
    {
      label: "KURNOOL TOWN",
      value: "KRNT",
    },
    {
      label: "KURUKSHETRA",
      value: "KKDE",
    },
    {
      label: "LAKHIMPUR",
      value: "LMP",
    },
    {
      label: "LAKSAR",
      value: "LRJ",
    },
    {
      label: "LALGARH",
      value: "LGH",
    },
    {
      label: "LALGOLA",
      value: "LGL",
    },
    {
      label: "LALITPUR",
      value: "LAR",
    },
    {
      label: "LALKUAN JN.",
      value: "LKU",
    },
    {
      label: "LATUR",
      value: "LUR",
    },
    {
      label: "LEDO",
      value: "LEDO",
    },
    {
      label: "LOHARU",
      value: "LHU",
    },
    {
      label: "LOKMANYA TILAK (T)",
      value: "LTT",
    },
    {
      label: "LONAVLA",
      value: "LNL",
    },
    {
      label: "LONDA",
      value: "LD",
    },
    {
      label: "LOWER HALFLONG",
      value: "LFG",
    },
    {
      label: "LUCKNOW",
      value: "LJN/LKO",
    },
    {
      label: "LUDHIANA",
      value: "LDH",
    },
    {
      label: "LUMDING",
      value: "LMG",
    },
    {
      label: "LUNI",
      value: "LUNI",
    },
    {
      label: "MACHILIPATNAM",
      value: "MTM",
    },
    {
      label: "MADARIHAT",
      value: "MDT",
    },
    {
      label: "MADDUR",
      value: "MAD",
    },
    {
      label: "MADGAON (GOA)",
      value: "MAO",
    },
    {
      label: "MADHUBANI",
      value: "MBI",
    },
    {
      label: "MADHUPUR",
      value: "MDP",
    },
    {
      label: "MADURAI Jn.",
      value: "MDU",
    },
    {
      label: "MAHBUBNAGAR",
      value: "MBNR",
    },
    {
      label: "MAHESANA",
      value: "MSH",
    },
    {
      label: "MAHOBA",
      value: "MBA",
    },
    {
      label: "MAILANI",
      value: "MLN",
    },
    {
      label: "MAKSI",
      value: "MKC",
    },
    {
      label: "MALDA TOWN",
      value: "MLDT",
    },
    {
      label: "MANAMADURAI",
      value: "MNM",
    },
    {
      label: "MANDUADIH",
      value: "MUV",
    },
    {
      label: "MANGALORE",
      value: "MAQ",
    },
    {
      label: "MANIKPUR",
      value: "MKP",
    },
    {
      label: "MANKAPUR",
      value: "MUR",
    },
    {
      label: "MANMAD",
      value: "MMR",
    },
    {
      label: "MANSI",
      value: "MNE",
    },
    {
      label: "MARIANI",
      value: "MXN",
    },
    {
      label: "MARWAR Jn.",
      value: "MJ",
    },
    {
      label: "MATHURA",
      value: "MTJ",
    },
    {
      label: "MAU",
      value: "MAU",
    },
    {
      label: "MAYILADUTURAI Jn.",
      value: "MV",
    },
    {
      label: "MEERUT CITY",
      value: "MTC",
    },
    {
      label: "MERTA ROAD",
      value: "MTD",
    },
    {
      label: "METTUPALAIYAM",
      value: "MTP",
    },
    {
      label: "MHOW",
      value: "MHOW",
    },
    {
      label: "MIDNAPORE",
      value: "MDN",
    },
    {
      label: "MIRAJ",
      value: "MRJ",
    },
    {
      label: "MIRYALAGUDA",
      value: "MRGA",
    },
    {
      label: "MIRZAPUR",
      value: "MZP",
    },
    {
      label: "MOKAMA",
      value: "MKA",
    },
    {
      label: "MORADABAD",
      value: "MB",
    },
    {
      label: "MOTIHARI",
      value: "MKI",
    },
    {
      label: "MUDKHED",
      value: "MUE",
    },
    {
      label: "MUGHALSARAI",
      value: "MGS",
    },
    {
      label: "MUMBAI CENTRAL",
      value: "BCT",
    },
    {
      label: "MUMBAI CST",
      value: "CSTM",
    },
    {
      label: "MURI",
      value: "MURI",
    },
    {
      label: "MURKEONGSELEK",
      value: "MZS",
    },
    {
      label: "MURTAJAPUR",
      value: "MZR",
    },
    {
      label: "MUZAFFAR NAGAR",
      value: "MOZ",
    },
    {
      label: "MUZAFFARPUR",
      value: "MFP",
    },
    {
      label: "MYSORE",
      value: "MYS",
    },
    {
      label: "NADIAD",
      value: "ND",
    },
    {
      label: "NADIKUDE",
      value: "NDKD",
    },
    {
      label: "NAGARSOL",
      value: "NSL",
    },
    {
      label: "NAGBHIR",
      value: "NAB",
    },
    {
      label: "NAGDA",
      value: "NAD",
    },
    {
      label: "NAGERCOIL Jn.",
      value: "NCJ",
    },
    {
      label: "NAGORE",
      value: "NCR",
    },
    {
      label: "NAGPUR",
      value: "NGP",
    },
    {
      label: "NAINPUR",
      value: "NIR",
    },
    {
      label: "SAMBALPUR",
      value: "SBP",
    },
    {
      label: "SAMUKTALA ROAD",
      value: "AMTA",
    },
    {
      label: "SANGLI",
      value: "SLI",
    },
    {
      label: "SARNATH",
      value: "SRNT",
    },
    {
      label: "SATARA",
      value: "STR",
    },
    {
      label: "SATNA",
      value: "STA",
    },
    {
      label: "SATTENAPALLE",
      value: "SAP",
    },
    {
      label: "SAWAIMADHOPUR",
      value: "SWM",
    },
    {
      label: "SAWANTWADI ROAD",
      value: "SWV",
    },
    {
      label: "SEALDAH",
      value: "SDAH",
    },
    {
      label: "SECUNDERABAD",
      value: "SC",
    },
    {
      label: "SENGOTTAI",
      value: "SCT",
    },
    {
      label: "SEWAGRAM",
      value: "SEGM",
    },
    {
      label: "SHAHABAD",
      value: "SDB",
    },
    {
      label: "SHAHGANJ",
      value: "SHG",
    },
    {
      label: "SHAHJAHANPUR",
      value: "SXK",
    },
    {
      label: "SHAHPUR PATOREE",
      value: "SPP",
    },
    {
      label: "SHAKTINAGAR",
      value: "SKTN",
    },
    {
      label: "SHALIMAR",
      value: "SHM",
    },
    {
      label: "SHAMGARH",
      value: "SGZ",
    },
    {
      label: "SHAMLI",
      value: "SMQL",
    },
    {
      label: "SHIKOHABAD",
      value: "SKB",
    },
    {
      label: "SHIMLA",
      value: "SML",
    },
    {
      label: "SHIMOGA TOWN",
      value: "SMET",
    },
    {
      label: "SHIVPURI",
      value: "SVPI",
    },
    {
      label: "SHORANUR JN.",
      value: "SRR",
    },
    {
      label: "SHRI MAHABIRJI",
      value: "SMBJ",
    },
    {
      label: "SIHOR GUJARAT",
      value: "SOJN",
    },
    {
      label: "SIKAR",
      value: "SIKR",
    },
    {
      label: "SILCHAR",
      value: "SCL",
    },
    {
      label: "SILIGURI",
      value: "SGUJ",
    },
    {
      label: "SIMALUGURI",
      value: "SLGR",
    },
    {
      label: "SINGRAULI",
      value: "SGRL",
    },
    {
      label: "SIRPUR KAGAZNAGAR",
      value: "SKZR",
    },
    {
      label: "SIRSA",
      value: "SSA",
    },
    {
      label: "SISWA BAZAR",
      value: "SBZ",
    },
    {
      label: "SITAMARHI",
      value: "SMI",
    },
    {
      label: "SITAPUR CITY",
      value: "SPC",
    },
    {
      label: "SITAPUR CANTT.",
      value: "SCC",
    },
    {
      label: "SIURI",
      value: "SURI",
    },
    {
      label: "SIWAN",
      value: "SV",
    },
    {
      label: "SOJAT ROAD",
      value: "SOD",
    },
    {
      label: "SOLAN",
      value: "SOL",
    },
    {
      label: "SOLAPUR",
      value: "SUR",
    },
    {
      label: "SONPUR",
      value: "SEE",
    },
    {
      label: "SRIGANGA NAGAR",
      value: "SGNR",
    },
    {
      label: "SRIKAKULAM ROAD",
      value: "CHE",
    },
    {
      label: "SRI",
      value: "SATYASAI",
    },
    {
      label: "PRASHANTI NILAYAM",
      value: "SSPN",
    },
    {
      label: "SULTANPUR",
      value: "SLN",
    },
    {
      label: "SURAT",
      value: "ST",
    },
    {
      label: "SURATGARH",
      value: "SOG",
    },
    {
      label: "NAJIBABAD",
      value: "NBD",
    },
    {
      label: "NALANDA",
      value: "NLD",
    },
    {
      label: "NALGONDA",
      value: "NLDA",
    },
    {
      label: "NANDALUR",
      value: "NRE",
    },
    {
      label: "NANDED",
      value: "NED",
    },
    {
      label: "NANDGAON",
      value: "NGN",
    },
    {
      label: "NANDURBAR",
      value: "NDB",
    },
    {
      label: "NANDYAL",
      value: "NDL",
    },
    {
      label: "NANGAL DAM",
      value: "NLDM",
    },
    {
      label: "NARKATIAGANJ",
      value: "NKE",
    },
    {
      label: "NARASAPUR",
      value: "NS",
    },
    {
      label: "NARWANA",
      value: "NRW",
    },
    {
      label: "NASIK ROAD",
      value: "NK",
    },
    {
      label: "NAUGARH",
      value: "NUH",
    },
    {
      label: "NELLORE",
      value: "NLR",
    },
    {
      label: "NEW ALIPURDUAR",
      value: "NOQ",
    },
    {
      label: "NEW BONGAIGAON",
      value: "NBQ",
    },
    {
      label: "NEW COOCHBEHAR",
      value: "NCB",
    },
    {
      label: "NEW DELHI",
      value: "NDLS",
    },
    {
      label: "NEW FARAKKA",
      value: "NFK",
    },
    {
      label: "NEW JALPAIGURI",
      value: "NJP",
    },
    {
      label: "NEWMAL Jn.",
      value: "NMZ",
    },
    {
      label: "NEW TINSUKIA",
      value: "NTSK",
    },
    {
      label: "NIDADAVOLU",
      value: "NDD",
    },
    {
      label: "NIDUBROLU",
      value: "NDO",
    },
    {
      label: "NIMACH",
      value: "NMH",
    },
    {
      label: "NIZAMABAD",
      value: "NZB",
    },
    {
      label: "NOLI",
      value: "NOLI",
    },
    {
      label: "NORTH LAKHIMPUR",
      value: "NLP",
    },
    {
      label: "OKHA",
      value: "OKHA",
    },
    {
      label: "ONGOLE",
      value: "OGL",
    },
    {
      label: "ORAI",
      value: "ORAI",
    },
    {
      label: "PACHORA",
      value: "PC",
    },
    {
      label: "PALANI",
      value: "PLNI",
    },
    {
      label: "PALANPUR",
      value: "PNU",
    },
    {
      label: "PALASA",
      value: "PSA",
    },
    {
      label: "PALAKKAD",
      value: "PGT",
    },
    {
      label: "PALAKKAD TOWN",
      value: "PGTN",
    },
    {
      label: "PALIAKALAN",
      value: "PLK",
    },
    {
      label: "PANIPAT",
      value: "PNP",
    },
    {
      label: "PARASNATH",
      value: "PNME",
    },
    {
      label: "PANVEL",
      value: "PNVL",
    },
    {
      label: "PARBHANI",
      value: "PBN",
    },
    {
      label: "PATHANKOT",
      value: "PTK",
    },
    {
      label: "PATIALA",
      value: "PTA",
    },
    {
      label: "PATNA",
      value: "PNBE",
    },
    {
      label: "PATNA SAHIB",
      value: "PNC",
    },
    {
      label: "PHAPHAMAU",
      value: "PFM",
    },
    {
      label: "PHULERA",
      value: "FL",
    },
    {
      label: "PILIBHIT",
      value: "PBE",
    },
    {
      label: "PIPARIYA",
      value: "PPI",
    },
    {
      label: "PODANUR",
      value: "PTJ",
    },
    {
      label: "PORBANDAR",
      value: "PBR",
    },
    {
      label: "PRATAPGARH",
      value: "PBH",
    },
    {
      label: "PUDUCHERRY",
      value: "PDY",
    },
    {
      label: "PUDUKOTTAI",
      value: "PDKT",
    },
    {
      label: "PULGAON",
      value: "PLO",
    },
    {
      label: "PUNE Jn.",
      value: "PUNE",
    },
    {
      label: "PURANPUR",
      value: "PP",
    },
    {
      label: "PURI",
      value: "PURI",
    },
    {
      label: "PURNA",
      value: "PAU",
    },
    {
      label: "PURNIA",
      value: "PRNA",
    },
    {
      label: "PURULIA",
      value: "PRR",
    },
    {
      label: "KOLLAM",
      value: "QLN",
    },
    {
      label: "RAE BARELI",
      value: "RBL",
    },
    {
      label: "RAICHUR",
      value: "RC",
    },
    {
      label: "RAIGARH",
      value: "RIG",
    },
    {
      label: "RAIPUR",
      value: "R",
    },
    {
      label: "RAJAHMUNDRY",
      value: "RJY",
    },
    {
      label: "RAJA-KA-SAHASPUR",
      value: "RJK",
    },
    {
      label: "RAJA-KI-MANDI",
      value: "RKM",
    },
    {
      label: "RAJENDRANAGAR",
      value: "RJQ",
    },
    {
      label: "RAJGIR",
      value: "RGD",
    },
    {
      label: "RAJKOT",
      value: "RJT",
    },
    {
      label: "RAJNANDGAON",
      value: "RJN",
    },
    {
      label: "RAJPURA",
      value: "RPJ",
    },
    {
      label: "RAMAGUNDAM",
      value: "RDM",
    },
    {
      label: "RAMANATHAPURAM",
      value: "RMD",
    },
    {
      label: "RAMESWARAM",
      value: "RMM",
    },
    {
      label: "RAMNAGAR",
      value: "RMR",
    },
    {
      label: "RAMPUR JN.",
      value: "RMU",
    },
    {
      label: "RAMPURHAT",
      value: "RPH",
    },
    {
      label: "RANAGHAT",
      value: "RHA",
    },
    {
      label: "RANCHI",
      value: "RNC",
    },
    {
      label: "RANGAPARA NORTH",
      value: "RPAN",
    },
    {
      label: "RANGIYA",
      value: "RNY",
    },
    {
      label: "RANINAGAR",
      value: "ROJ",
    },
    {
      label: "RATANGARH",
      value: "RTGH",
    },
    {
      label: "RATLAM",
      value: "RTM",
    },
    {
      label: "RATNAGIRI",
      value: "RN",
    },
    {
      label: "RAWATGANJ",
      value: "RJ",
    },
    {
      label: "RAXAUL",
      value: "RXL",
    },
    {
      label: "RAYAGADA",
      value: "RGDA",
    },
    {
      label: "RENIGUNTA",
      value: "RU",
    },
    {
      label: "REWA",
      value: "REWA",
    },
    {
      label: "REWARI",
      value: "RE",
    },
    {
      label: "RINGUS",
      value: "RGS",
    },
    {
      label: "ROHTAK",
      value: "ROK",
    },
    {
      label: "ROORKEE",
      value: "RK",
    },
    {
      label: "ROURKELA",
      value: "ROU",
    },
    {
      label: "SADULPUR",
      value: "SDLP",
    },
    {
      label: "SAGAR JAMBAGARU",
      value: "SRF",
    },
    {
      label: "SAGAULI",
      value: "SGL",
    },
    {
      label: "SAHARANPUR",
      value: "SRE",
    },
    {
      label: "SAHARSA",
      value: "SHC",
    },
    {
      label: "SAHIBGANJ",
      value: "SBG",
    },
    {
      label: "SALEM",
      value: "SA",
    },
    {
      label: "SALEMPUR",
      value: "SRU",
    },
    {
      label: "SAMAKHIYALI",
      value: "SIOB",
    },
    {
      label: "SAMALKOT",
      value: "SLO",
    },
    {
      label: "SAMASTIPUR",
      value: "SPJ",
    },
    {
      label: "SURATHKAL",
      value: "SL",
    },
    {
      label: "SURENDRA NAGAR",
      value: "SUNR",
    },
    {
      label: "TADEPALLIGUDEM",
      value: "TDD",
    },
    {
      label: "TALCHER",
      value: "TLHR",
    },
    {
      label: "TAMBARAM",
      value: "TBM",
    },
    {
      label: "TATANAGAR",
      value: "TATA",
    },
    {
      label: "THALASSERY",
      value: "TLY",
    },
    {
      label: "TENALI",
      value: "TEL",
    },
    {
      label: "TENKASI",
      value: "TSI",
    },
    {
      label: "TEZPUR",
      value: "TZTB",
    },
    {
      label: "THANJAVUR Jn.",
      value: "TJ",
    },
    {
      label: "THIRUVARUR.",
      value: "TVR",
    },
    {
      label: "TIRUCHCHIRAPPALLI Jn.",
      value: "TPJ",
    },
    {
      label: "TIRUNELVELI Jn.",
      value: "TEN",
    },
    {
      label: "TIRUPATI",
      value: "TPTY",
    },
    {
      label: "TIRUR",
      value: "TIR",
    },
    {
      label: "TITLAGARH",
      value: "TIG",
    },
    {
      label: "THRISUR",
      value: "TCR",
    },
    {
      label: "THIRUVANANTHAPURAM",
      value: "TVC",
    },
    {
      label: "TUMSAR ROAD",
      value: "TMR",
    },
    {
      label: "TUNDLA",
      value: "TDL",
    },
    {
      label: "TUNI",
      value: "TUNI",
    },
    {
      label: "TUTICORIN",
      value: "TN",
    },
    {
      label: "UDAIPUR CITY",
      value: "UDZ",
    },
    {
      label: "UDHAMPUR",
      value: "UHP",
    },
    {
      label: "UDHNA",
      value: "UDN",
    },
    {
      label: "UDUPI",
      value: "UD",
    },
    {
      label: "UJJAIN",
      value: "UJN",
    },
    {
      label: "UNA",
      value: "UNA",
    },
    {
      label: "UNCHAHAR",
      value: "UCR",
    },
    {
      label: "UNNAO",
      value: "ON",
    },
    {
      label: "VADAKARA",
      value: "BDJ",
    },
    {
      label: "VADODARA",
      value: "BRC",
    },
    {
      label: "VALSAD",
      value: "BL",
    },
    {
      label: "VANCHI MANIYACHCHI Jn.",
      value: "MEJ",
    },
    {
      label: "VARANASI",
      value: "BSB",
    },
    {
      label: "VARKALA",
      value: "VAK",
    },
    {
      label: "VASAI ROAD",
      value: "BSR",
    },
    {
      label: "VASCO-DA-GAMA",
      value: "VSG",
    },
    {
      label: "VERAVAL",
      value: "VRL",
    },
    {
      label: "VIDISHA",
      value: "BHS",
    },
    {
      label: "VIJAYAWADA",
      value: "BZA",
    },
    {
      label: "VILLUPURAM Jn.",
      value: "VM",
    },
    {
      label: "VIRAMGAM",
      value: "VG",
    },
    {
      label: "VIRUDHUNAGAR",
      value: "VPT",
    },
    {
      label: "VISAKHAPATNAM",
      value: "VSKP",
    },
    {
      label: "VIZIANAGARAM",
      value: "VZM",
    },
    {
      label: "VRIDDHACHALAM Jn.",
      value: "VRI",
    },
    {
      label: "WADI",
      value: "WADI",
    },
    {
      label: "WANKANER",
      value: "WKR",
    },
    {
      label: "WARANGAL",
      value: "WL",
    },
    {
      label: "WARDHA Jn.",
      value: "WR",
    },
    {
      label: "YESVANTPUR",
      value: "YPR",
    },
    {
      label: "ZAFARABAD",
      value: "ZBD",
    },
    {
      label: "Angar",
      value: "AAG",
    },
    {
      label: "Ankaikila",
      value: "AAK",
    },
    {
      label: "Amlai",
      value: "AAL",
    },
    {
      label: "Angadippuram",
      value: "AAM",
    },
    {
      label: "Adesar",
      value: "AAR",
    },
    {
      label: "Asranada",
      value: "AAS",
    },
    {
      label: "Aralvaymozhi",
      value: "AAY",
    },
    {
      label: "Ambur",
      value: "AB",
    },
    {
      label: "Abada",
      value: "ABB",
    },
    {
      label: "Ambli Road",
      value: "ABD",
    },
    {
      label: "Ambarifalakata",
      value: "ABFC",
    },
    {
      label: "Ambarnath",
      value: "ABH",
    },
    {
      label: "Ambaturai",
      value: "ABI",
    },
    {
      label: "Ambikakalna",
      value: "ABKA",
    },
    {
      label: "Ambikapur",
      value: "ABKP",
    },
    {
      label: "Ambale",
      value: "ABLE",
    },
    {
      label: "Akbarpur",
      value: "ABP",
    },
    {
      label: "Abohar",
      value: "ABS",
    },
    {
      label: "Adgaonbuzurg",
      value: "ABZ",
    },
    {
      label: "Achalganj",
      value: "ACH",
    },
    {
      label: "Acharapakkam",
      value: "ACK",
    },
    {
      label: "Ancheli",
      value: "ACL",
    },
    {
      label: "Azimganj City",
      value: "ACLE",
    },
    {
      label: "Adhichchanur",
      value: "ACN",
    },
    {
      label: "Andevnagar",
      value: "ACND",
    },
    {
      label: "Adilabad",
      value: "ADB",
    },
    {
      label: "Adas Road",
      value: "ADD",
    },
    {
      label: "Adari Road",
      value: "ADE",
    },
    {
      label: "Andheri",
      value: "ADH",
    },
    {
      label: "Mandiadampur",
      value: "ADR",
    },
    {
      label: "Aduturai",
      value: "ADT",
    },
    {
      label: "Adhartal",
      value: "ADTL",
    },
    {
      label: "Adavali",
      value: "ADVI",
    },
    {
      label: "Amreli",
      value: "AE",
    },
    {
      label: "Aulenda",
      value: "AED",
    },
    {
      label: "Ateli",
      value: "AEL",
    },
    {
      label: "Amrelipara",
      value: "AEP",
    },
    {
      label: "Angamali",
      value: "AFK",
    },
    {
      label: "Asafpur",
      value: "AFR",
    },
    {
      label: "Raigir",
      value: "AG",
    },
    {
      label: "Agra City",
      value: "AGA",
    },
    {
      label: "Agas",
      value: "AGAS",
    },
    {
      label: "Ambagaon",
      value: "AGB",
    },
    {
      label: "Agasod",
      value: "AGD",
    },
    {
      label: "Amguri",
      value: "AGI",
    },
    {
      label: "Amgaon",
      value: "AGN",
    },
    {
      label: "Amargarh",
      value: "AGR",
    },
    {
      label: "Agartala",
      value: "AGTL",
    },
    {
      label: "Agorikhas",
      value: "AGY",
    },
    {
      label: "Amagura",
      value: "AGZ",
    },
    {
      label: "Abhaipur",
      value: "AHA",
    },
    {
      label: "Ahmadgarh",
      value: "AHH",
    },
    {
      label: "Ahalyapur",
      value: "AHLR",
    },
    {
      label: "Ahiran",
      value: "AHN",
    },
    {
      label: "Adarshnagar",
      value: "AHO",
    },
    {
      label: "Adipur",
      value: "AI",
    },
    {
      label: "Algawan",
      value: "AIG",
    },
    {
      label: "Alindra Road",
      value: "AIR",
    },
    {
      label: "Ait",
      value: "AIT",
    },
    {
      label: "Ajgain",
      value: "AJ",
    },
    {
      label: "Anjar",
      value: "AJE",
    },
    {
      label: "Ajhai",
      value: "AJH",
    },
    {
      label: "Anjhishahabad",
      value: "AJI",
    },
    {
      label: "Ajit",
      value: "AJIT",
    },
    {
      label: "Ajitwal",
      value: "AJL",
    },
    {
      label: "Ajnod",
      value: "AJN",
    },
    {
      label: "Ajni",
      value: "AJNI",
    },
    {
      label: "Ajjampur",
      value: "AJP",
    },
    {
      label: "Ajaibpur",
      value: "AJR",
    },
    {
      label: "Akodia",
      value: "AKD",
    },
    {
      label: "Akanapet",
      value: "AKE",
    },
    {
      label: "Akbarganj",
      value: "AKJ",
    },
    {
      label: "Akbarnagar",
      value: "AKN",
    },
    {
      label: "Akalkot Road",
      value: "AKOR",
    },
    {
      label: "Akot",
      value: "AKOT",
    },
    {
      label: "Akolner",
      value: "AKR",
    },
    {
      label: "Akurdi",
      value: "AKRD",
    },
    {
      label: "Akaltara",
      value: "AKT",
    },
    {
      label: "Angalakuduru",
      value: "AKU",
    },
    {
      label: "Ankleshwar Jn.",
      value: "AKV",
    },
    {
      label: "Akividu",
      value: "AKVD",
    },
    {
      label: "Akividu",
      value: "AKVX",
    },
    {
      label: "Akora",
      value: "AKW",
    },
    {
      label: "Attili",
      value: "AL",
    },
    {
      label: "Alai",
      value: "ALAI",
    },
    {
      label: "Aliabada",
      value: "ALB",
    },
    {
      label: "Aler",
      value: "ALER",
    },
    {
      label: "Alakkudi",
      value: "ALK",
    },
    {
      label: "Alamanda",
      value: "ALM",
    },
    {
      label: "Alandi",
      value: "ALN",
    },
    {
      label: "Alniya",
      value: "ALNI",
    },
    {
      label: "Ariyalur",
      value: "ALU",
    },
    {
      label: "Alwal",
      value: "ALW",
    },
    {
      label: "Allahabad City",
      value: "ALY",
    },
    {
      label: "Ambodala",
      value: "AMB",
    },
    {
      label: "Ambikarohina",
      value: "AMBR",
    },
    {
      label: "Amritapura",
      value: "AMC",
    },
    {
      label: "Amethi",
      value: "AME",
    },
    {
      label: "Alamnagar",
      value: "AMG",
    },
    {
      label: "Amravati",
      value: "AMI",
    },
    {
      label: "Amin",
      value: "AMIN",
    },
    {
      label: "Amalsad",
      value: "AML",
    },
    {
      label: "Amli",
      value: "AMLI",
    },
    {
      label: "Atirampattinam",
      value: "AMM",
    },
    {
      label: "Ammanur",
      value: "AMNR",
    },
    {
      label: "Ahmadpur Jn.",
      value: "AMP",
    },
    {
      label: "Ambalapuzha",
      value: "AMPA",
    },
    {
      label: "Ammuguda",
      value: "AMQ",
    },
    {
      label: "Amroha",
      value: "AMRO",
    },
    {
      label: "Amausi",
      value: "AMS",
    },
    {
      label: "Ammasandra",
      value: "AMSA",
    },
    {
      label: "Ammapet",
      value: "AMT",
    },
    {
      label: "Amanvadi",
      value: "AMW",
    },
    {
      label: "Amla Khurd",
      value: "AMX",
    },
    {
      label: "Akathumuri",
      value: "AMY",
    },
    {
      label: "Aslana",
      value: "ANA",
    },
    {
      label: "Anas",
      value: "ANAS",
    },
    {
      label: "Ammanabrolu",
      value: "ANB",
    },
    {
      label: "Andampaliam",
      value: "AND",
    },
    {
      label: "Ankorahakorha",
      value: "ANH",
    },
    {
      label: "Ajanti",
      value: "ANI",
    },
    {
      label: "Ankai",
      value: "ANK",
    },
    {
      label: "Ankola",
      value: "ANKL",
    },
    {
      label: "Arangmahanadi",
      value: "ANMD",
    },
    {
      label: "Anjani",
      value: "ANO",
    },
    {
      label: "Anandtandavpur",
      value: "ANP",
    },
    {
      label: "Anpara",
      value: "ANPR",
    },
    {
      label: "Anara",
      value: "ANR",
    },
    {
      label: "Anandpursahib",
      value: "ANSB",
    },
    {
      label: "Antu",
      value: "ANTU",
    },
    {
      label: "Anand Vihar",
      value: "ANVR",
    },
    {
      label: "Aonla",
      value: "AO",
    },
    {
      label: "Ashokapuram",
      value: "AP",
    },
    {
      label: "Amarpura",
      value: "APA",
    },
    {
      label: "Alipurduar",
      value: "APD",
    },
    {
      label: "Anupgarh",
      value: "APH",
    },
    {
      label: "Aruppukkottai",
      value: "APK",
    },
    {
      label: "Appikatla",
      value: "APL",
    },
    {
      label: "Aditpara",
      value: "APQ",
    },
    {
      label: "Anaparti",
      value: "APT",
    },
    {
      label: "Apta",
      value: "APTA",
    },
    {
      label: "Ashapuragomat",
      value: "AQG",
    },
    {
      label: "Arunachal",
      value: "ARCL",
    },
    {
      label: "Amarda Road",
      value: "ARD",
    },
    {
      label: "Arnetha",
      value: "ARE",
    },
    {
      label: "Arigada",
      value: "ARGD",
    },
    {
      label: "Arakku",
      value: "ARK",
    },
    {
      label: "Arand",
      value: "ARN",
    },
    {
      label: "Atrampur",
      value: "ARP",
    },
    {
      label: "Arariya Court",
      value: "ARQ",
    },
    {
      label: "Arariya",
      value: "ARR",
    },
    {
      label: "Arni Road",
      value: "ARV",
    },
    {
      label: "Arvi",
      value: "ARVI",
    },
    {
      label: "Ahraura Road",
      value: "ARW",
    },
    {
      label: "Arjansar",
      value: "AS",
    },
    {
      label: "Asifabad Road",
      value: "ASAF",
    },
    {
      label: "Ambasamudram",
      value: "ASD",
    },
    {
      label: "Aishbagh Jn.",
      value: "ASH",
    },
    {
      label: "Ashoknagar",
      value: "ASKN",
    },
    {
      label: "Aslaoda",
      value: "ASL",
    },
    {
      label: "Aslu",
      value: "ASLU",
    },
    {
      label: "Asangaon",
      value: "ASO",
    },
    {
      label: "Asaoti",
      value: "AST",
    },
    {
      label: "Asarva Jn.",
      value: "ASV",
    },
    {
      label: "Asnoti",
      value: "AT",
    },
    {
      label: "Ata",
      value: "ATA",
    },
    {
      label: "Alattambadi",
      value: "ATB",
    },
    {
      label: "Atarra",
      value: "ATE",
    },
    {
      label: "Antah",
      value: "ATH",
    },
    {
      label: "Athmalgola",
      value: "ATL",
    },
    {
      label: "Aithal",
      value: "ATMO",
    },
    {
      label: "Arantangi",
      value: "ATQ",
    },
    {
      label: "Attar",
      value: "ATR",
    },
    {
      label: "Atru",
      value: "ATRU",
    },
    {
      label: "Attabira",
      value: "ATS",
    },
    {
      label: "Atari",
      value: "ATT",
    },
    {
      label: "Atul",
      value: "ATUL",
    },
    {
      label: "Aluabari Road",
      value: "AUB",
    },
    {
      label: "Anugrahan Road",
      value: "AUBR",
    },
    {
      label: "Atrauli Road",
      value: "AUR",
    },
    {
      label: "Anupshahr",
      value: "AUS",
    },
    {
      label: "Auwa",
      value: "AUWA",
    },
    {
      label: "Avadi",
      value: "AVD",
    },
    {
      label: "Aravankadu",
      value: "AVK",
    },
    {
      label: "Amritvel",
      value: "AVL",
    },
    {
      label: "Aravalli",
      value: "AVLI",
    },
    {
      label: "Aravali Road",
      value: "AVRD",
    },
    {
      label: "Auvaneswsarem",
      value: "AVS",
    },
    {
      label: "Alawalpur",
      value: "AWL",
    },
    {
      label: "Aghwanpur",
      value: "AWP",
    },
    {
      label: "Aswani Halt",
      value: "AWS",
    },
    {
      label: "Alluru Road",
      value: "AXR",
    },
    {
      label: "Ayandur",
      value: "AYD",
    },
    {
      label: "Adiyakkamungalm",
      value: "AYM",
    },
    {
      label: "Aiyanapuram",
      value: "AYN",
    },
    {
      label: "Aryankavu",
      value: "AYV",
    },
    {
      label: "Ayyampet",
      value: "AZP",
    },
    {
      label: "Azamnagar Road",
      value: "AZR",
    },
    {
      label: "Bandra",
      value: "BA",
    },
    {
      label: "Babina",
      value: "BAB",
    },
    {
      label: "Bhader",
      value: "BADR",
    },
    {
      label: "Baliakheri",
      value: "BAE",
    },
    {
      label: "Bhagega",
      value: "BAGA",
    },
    {
      label: "Bhabhar",
      value: "BAH",
    },
    {
      label: "Bajana",
      value: "BAJN",
    },
    {
      label: "Banka",
      value: "BAKA",
    },
    {
      label: "Bakal",
      value: "BAKL",
    },
    {
      label: "Budalur",
      value: "BAL",
    },
    {
      label: "Bale",
      value: "BALE",
    },
    {
      label: "Baitalpur",
      value: "BALR",
    },
    {
      label: "Balugan",
      value: "BALU",
    },
    {
      label: "Berhampur",
      value: "BAM",
    },
    {
      label: "Birambad",
      value: "BAMA",
    },
    {
      label: "Bani",
      value: "BANI",
    },
    {
      label: "Bano",
      value: "BANO",
    },
    {
      label: "Banmor",
      value: "BAO",
    },
    {
      label: "Ganjbasoda",
      value: "BAQ",
    },
    {
      label: "Bar",
      value: "BAR",
    },
    {
      label: "Barh",
      value: "BARH",
    },
    {
      label: "Baral",
      value: "BARL",
    },
    {
      label: "Batala Jn.",
      value: "BAT",
    },
    {
      label: "Baihatola",
      value: "BATL",
    },
    {
      label: "Baruva",
      value: "BAV",
    },
    {
      label: "Balwara",
      value: "BAWA",
    },
    {
      label: "Baran",
      value: "BAZ",
    },
    {
      label: "Bombay VT [former]",
      value: "BB",
    },
    {
      label: "Babrala",
      value: "BBA",
    },
    {
      label: "Bhadbhunja",
      value: "BBAI",
    },
    {
      label: "Babarpur",
      value: "BBDE",
    },
    {
      label: "Baruabamungaon",
      value: "BBGN",
    },
    {
      label: "Barabhum",
      value: "BBM",
    },
    {
      label: "Baribrahman",
      value: "BBMN",
    },
    {
      label: "Babugarh",
      value: "BBO",
    },
    {
      label: "Balabhadrapuram",
      value: "BBPM",
    },
    {
      label: "Bagbazar",
      value: "BBR",
    },
    {
      label: "Barbatpur",
      value: "BBTR",
    },
    {
      label: "Bhabua Road",
      value: "BBU",
    },
    {
      label: "Bodarwar",
      value: "BBW",
    },
    {
      label: "Bareilly City",
      value: "BC",
    },
    {
      label: "Bachwara Jn.",
      value: "BCA",
    },
    {
      label: "Bansdih Road",
      value: "BCD",
    },
    {
      label: "Berchha",
      value: "BCH",
    },
    {
      label: "Bacheli",
      value: "BCHL",
    },
    {
      label: "Balichak",
      value: "BCK",
    },
    {
      label: "Bombay Central (Local)",
      value: "BCL",
    },
    {
      label: "Bachhrawan",
      value: "BCN",
    },
    {
      label: "Bhachau",
      value: "BCO",
    },
    {
      label: "Bhachaubg",
      value: "BCOB",
    },
    {
      label: "Bichpuri",
      value: "BCP",
    },
    {
      label: "Barachak",
      value: "BCQ",
    },
    {
      label: "Barchi Road",
      value: "BCRD",
    },
    {
      label: "Bhuchchu",
      value: "BCU",
    },
    {
      label: "Varanasi City",
      value: "BCY",
    },
    {
      label: "Vrindavan",
      value: "BDB",
    },
    {
      label: "Bhadrachalam Road",
      value: "BDCR",
    },
    {
      label: "Badodar",
      value: "BDDR",
    },
    {
      label: "Bodeli",
      value: "BDE",
    },
    {
      label: "Bhedia",
      value: "BDH",
    },
    {
      label: "Badhada",
      value: "BDHA",
    },
    {
      label: "Badhal",
      value: "BDHL",
    },
    {
      label: "Bodhan",
      value: "BDHN",
    },
    {
      label: "Budhi",
      value: "BDHY",
    },
    {
      label: "Bhadli",
      value: "BDI",
    },
    {
      label: "Vindhyachal",
      value: "BDL",
    },
    {
      label: "Badami",
      value: "BDM",
    },
    {
      label: "Bhodwalmajri",
      value: "BDMJ",
    },
    {
      label: "Bhadan",
      value: "BDN",
    },
    {
      label: "Bodinayakkanur",
      value: "BDNK",
    },
    {
      label: "Bidanpur",
      value: "BDNP",
    },
    {
      label: "Byadarahalli",
      value: "BDRL",
    },
    {
      label: "Badnapur",
      value: "BDU",
    },
    {
      label: "Bhadravati",
      value: "BDVT",
    },
    {
      label: "Bandanwara",
      value: "BDW",
    },
    {
      label: "Badhwabara",
      value: "BDWA",
    },
    {
      label: "Bodwad",
      value: "BDWD",
    },
    {
      label: "Biradhwal",
      value: "BDWL",
    },
    {
      label: "Badearapur",
      value: "BDXX",
    },
    {
      label: "Buddireddippati",
      value: "BDY",
    },
    {
      label: "Badkulla",
      value: "BDZ",
    },
    {
      label: "Bihiya",
      value: "BEA",
    },
    {
      label: "Beldanga",
      value: "BEB",
    },
    {
      label: "Bhupdeopur",
      value: "BEF",
    },
    {
      label: "Behtagokul",
      value: "BEG",
    },
    {
      label: "Bagdihi",
      value: "BEH",
    },
    {
      label: "Beohari",
      value: "BEHR",
    },
    {
      label: "Biharsharif",
      value: "BEHS",
    },
    {
      label: "Bundki",
      value: "BEK",
    },
    {
      label: "Birohe",
      value: "BEO",
    },
    {
      label: "Bheerpur",
      value: "BEP",
    },
    {
      label: "Belur",
      value: "BEQ",
    },
    {
      label: "Beawar",
      value: "BER",
    },
    {
      label: "Bero",
      value: "BERO",
    },
    {
      label: "Bareth",
      value: "BET",
    },
    {
      label: "Betavad",
      value: "BEW",
    },
    {
      label: "Bcementnagar",
      value: "BEY",
    },
    {
      label: "Borhat",
      value: "BFD",
    },
    {
      label: "Bhorasbudrukh",
      value: "BFJ",
    },
    {
      label: "Bhalui",
      value: "BFM",
    },
    {
      label: "Bhabta",
      value: "BFT",
    },
    {
      label: "Bhesana",
      value: "BFY",
    },
    {
      label: "Bhongir",
      value: "BG",
    },
    {
      label: "Bagalia",
      value: "BGA",
    },
    {
      label: "Balagarh",
      value: "BGAE",
    },
    {
      label: "Bagbahra",
      value: "BGBR",
    },
    {
      label: "Bantarnathgarh",
      value: "BGG",
    },
    {
      label: "Baghauli",
      value: "BGH",
    },
    {
      label: "Borraguhallu",
      value: "BGHU",
    },
    {
      label: "Bhagat Ki Kothi",
      value: "BGKT",
    },
    {
      label: "Bagumra",
      value: "BGMR",
    },
    {
      label: "Borgaon",
      value: "BGN",
    },
    {
      label: "Bhagwanpura",
      value: "BGPR",
    },
    {
      label: "Bhongaon",
      value: "BGQ",
    },
    {
      label: "Baghnapara",
      value: "BGRA",
    },
    {
      label: "Begusarai",
      value: "BGS",
    },
    {
      label: "Bisugirsharif",
      value: "BGSF",
    },
    {
      label: "Bagratawa",
      value: "BGTA",
    },
    {
      label: "Bhagtanwala",
      value: "BGTN",
    },
    {
      label: "Bairagnia",
      value: "BGU",
    },
    {
      label: "Bhigwan",
      value: "BGVN",
    },
    {
      label: "Begdewadi",
      value: "BGW",
    },
    {
      label: "Bagewadi",
      value: "BGWD",
    },
    {
      label: "Bagrisajjanpur",
      value: "BGX",
    },
    {
      label: "Bahadurgarh",
      value: "BGZ",
    },
    {
      label: "Badli",
      value: "BHD",
    },
    {
      label: "Bhestan",
      value: "BHET",
    },
    {
      label: "Bhatonkigali",
      value: "BHG",
    },
    {
      label: "Baheri",
      value: "BHI",
    },
    {
      label: "Bheja",
      value: "BHJA",
    },
    {
      label: "Bhurkunda",
      value: "BHKD",
    },
    {
      label: "Behula",
      value: "BHLA",
    },
    {
      label: "Bhalki",
      value: "BHLK",
    },
    {
      label: "Bhulanpur",
      value: "BHLP",
    },
    {
      label: "Bhandaridah",
      value: "BHME",
    },
    {
      label: "Bhone",
      value: "BHNE",
    },
    {
      label: "Bhansi",
      value: "BHNS",
    },
    {
      label: "Bhattu",
      value: "BHT",
    },
    {
      label: "Bhatiya",
      value: "BHTA",
    },
    {
      label: "Bhanwartonk",
      value: "BHTK",
    },
    {
      label: "Bhatel",
      value: "BHTL",
    },
    {
      label: "Bhitoni",
      value: "BHTN",
    },
    {
      label: "Bhatparrani",
      value: "BHTR",
    },
    {
      label: "Bhandumotidau",
      value: "BHU",
    },
    {
      label: "Bhua",
      value: "BHUA",
    },
    {
      label: "Bhoma",
      value: "BHV",
    },
    {
      label: "Barharwa Jn.",
      value: "BHW",
    },
    {
      label: "Bechhiwara",
      value: "BHWA",
    },
    {
      label: "Bhayavadar",
      value: "BHY",
    },
    {
      label: "Bihara",
      value: "BHZ",
    },
    {
      label: "Bhilai",
      value: "BIA",
    },
    {
      label: "Bichia",
      value: "BIC",
    },
    {
      label: "Bidadi",
      value: "BID",
    },
    {
      label: "Bidar",
      value: "BIDR",
    },
    {
      label: "Belgahna",
      value: "BIG",
    },
    {
      label: "Bairagarh",
      value: "BIH",
    },
    {
      label: "Birnagar",
      value: "BIJ",
    },
    {
      label: "Bijoor",
      value: "BIJR",
    },
    {
      label: "Bildi",
      value: "BILD",
    },
    {
      label: "Bilkha",
      value: "BILK",
    },
    {
      label: "Bilimora Jn.",
      value: "BIM",
    },
    {
      label: "Bhimal",
      value: "BIML",
    },
    {
      label: "Bordi",
      value: "BIO",
    },
    {
      label: "Bahilpurwa",
      value: "BIP",
    },
    {
      label: "Bheempura",
      value: "BIPR",
    },
    {
      label: "Bansipaharpur",
      value: "BIQ",
    },
    {
      label: "Bir",
      value: "BIR",
    },
    {
      label: "Bhiwandi Road",
      value: "BIRD",
    },
    {
      label: "Bishengarh",
      value: "BISH",
    },
    {
      label: "Bidupur",
      value: "BIU",
    },
    {
      label: "Bisalwaskalan",
      value: "BIWK",
    },
    {
      label: "Bardoli",
      value: "BIY",
    },
    {
      label: "Bahjoi",
      value: "BJ",
    },
    {
      label: "Bijrotha",
      value: "BJA",
    },
    {
      label: "Barejadi",
      value: "BJD",
    },
    {
      label: "Bhojudih Jn.",
      value: "BJE",
    },
    {
      label: "Bijni",
      value: "BJF",
    },
    {
      label: "Bijauli",
      value: "BJI",
    },
    {
      label: "Bijora",
      value: "BJK",
    },
    {
      label: "Bhagavathipuram",
      value: "BJM",
    },
    {
      label: "Barajamda",
      value: "BJMD",
    },
    {
      label: "Baijnath Mandir Halt",
      value: "BJMR",
    },
    {
      label: "Bejnal",
      value: "BJN",
    },
    {
      label: "Bijainagar",
      value: "BJNR",
    },
    {
      label: "Baijnath Paprola",
      value: "BJPL",
    },
    {
      label: "Baghora",
      value: "BJQ",
    },
    {
      label: "Bijuri",
      value: "BJRI",
    },
    {
      label: "Bajva",
      value: "BJW",
    },
    {
      label: "Bakra Road",
      value: "BK",
    },
    {
      label: "Barkhera",
      value: "BKA",
    },
    {
      label: "Bhikamkor",
      value: "BKC",
    },
    {
      label: "Bhankoda",
      value: "BKD",
    },
    {
      label: "Bankhedi",
      value: "BKH",
    },
    {
      label: "Bakhri",
      value: "BKHR",
    },
    {
      label: "Barkur",
      value: "BKJ",
    },
    {
      label: "Bonakalu",
      value: "BKL",
    },
    {
      label: "Bakudi",
      value: "BKLE",
    },
    {
      label: "Bhaktinagar",
      value: "BKNG",
    },
    {
      label: "Bindki Road",
      value: "BKO",
    },
    {
      label: "Bhaluka Road",
      value: "BKRD",
    },
    {
      label: "Bokarothermal",
      value: "BKRO",
    },
    {
      label: "Baikunth",
      value: "BKTH",
    },
    {
      label: "Bhiknur",
      value: "BKU",
    },
    {
      label: "Barlai",
      value: "BLAX",
    },
    {
      label: "Bolda",
      value: "BLC",
    },
    {
      label: "Bhilad",
      value: "BLD",
    },
    {
      label: "Bhildi",
      value: "BLDI",
    },
    {
      label: "Balaudatakun",
      value: "BLDK",
    },
    {
      label: "Bilharghat",
      value: "BLG",
    },
    {
      label: "Balangir",
      value: "BLGR",
    },
    {
      label: "Balurghat",
      value: "BLGT",
    },
    {
      label: "Belakoba",
      value: "BLK",
    },
    {
      label: "Bantanahal",
      value: "BLL",
    },
    {
      label: "Balli",
      value: "BLLI",
    },
    {
      label: "Balamu Jn.",
      value: "BLM",
    },
    {
      label: "Bhalumaska",
      value: "BLMK",
    },
    {
      label: "Bhalukmara",
      value: "BLMR",
    },
    {
      label: "Bolinnadoaba",
      value: "BLND",
    },
    {
      label: "Bhalwani",
      value: "BLNI",
    },
    {
      label: "Bhulon",
      value: "BLO",
    },
    {
      label: "Bilaspur Road",
      value: "BLOR",
    },
    {
      label: "Balrampur",
      value: "BLP",
    },
    {
      label: "Badulipar",
      value: "BLPR",
    },
    {
      label: "Bilpur",
      value: "BLPU",
    },
    {
      label: "Bala Road",
      value: "BLRD",
    },
    {
      label: "Belsiri",
      value: "BLRE",
    },
    {
      label: "Bolsa",
      value: "BLSA",
    },
    {
      label: "Balsamand",
      value: "BLSD",
    },
    {
      label: "Belsonda",
      value: "BLSN",
    },
    {
      label: "Balotra Jn.",
      value: "BLT",
    },
    {
      label: "Belthara Road",
      value: "BLTR",
    },
    {
      label: "Bilhaur",
      value: "BLU",
    },
    {
      label: "Balawali",
      value: "BLW",
    },
    {
      label: "Balawala",
      value: "BLWL",
    },
    {
      label: "Bolai",
      value: "BLX",
    },
    {
      label: "Bally",
      value: "BLY",
    },
    {
      label: "Budhlada",
      value: "BLZ",
    },
    {
      label: "Bamra",
      value: "BMB",
    },
    {
      label: "Bhimalgondi",
      value: "BMC",
    },
    {
      label: "Bissamcuttack",
      value: "BMCK",
    },
    {
      label: "Bhimadolu",
      value: "BMD",
    },
    {
      label: "Basmat",
      value: "BMF",
    },
    {
      label: "Bhimgara",
      value: "BMGA",
    },
    {
      label: "Brahmanagudem",
      value: "BMGM",
    },
    {
      label: "Betamcherla",
      value: "BMH",
    },
    {
      label: "Bamanheri",
      value: "BMHR",
    },
    {
      label: "Bamnia",
      value: "BMI",
    },
    {
      label: "Birangkhera",
      value: "BMK",
    },
    {
      label: "Bhimkhoj",
      value: "BMKJ",
    },
    {
      label: "Bamla",
      value: "BMLL",
    },
    {
      label: "Bhimana",
      value: "BMN",
    },
    {
      label: "Bolarum",
      value: "BMO",
    },
    {
      label: "Brahmanpalli",
      value: "BMPL",
    },
    {
      label: "Badampahar",
      value: "BMPR",
    },
    {
      label: "Bhimarlai",
      value: "BMQ",
    },
    {
      label: "Bikrampur",
      value: "BMR",
    },
    {
      label: "Bamsin",
      value: "BMSN",
    },
    {
      label: "Bhimasar",
      value: "BMSR",
    },
    {
      label: "Begampet",
      value: "BMT",
    },
    {
      label: "Bamhrauli",
      value: "BMU",
    },
    {
      label: "Bamhani",
      value: "BMW",
    },
    {
      label: "Bibinagar",
      value: "BN",
    },
    {
      label: "Binaur",
      value: "BNAR",
    },
    {
      label: "Bangalore East",
      value: "BNCE",
    },
    {
      label: "Bondamunda",
      value: "BNDM",
    },
    {
      label: "Bohani",
      value: "BNE",
    },
    {
      label: "Barnagar",
      value: "BNG",
    },
    {
      label: "Bongaigaon",
      value: "BNGN",
    },
    {
      label: "Bhimnath",
      value: "BNH",
    },
    {
      label: "Bellenahalli",
      value: "BNHL",
    },
    {
      label: "Budni",
      value: "BNI",
    },
    {
      label: "Bevinahalu",
      value: "BNL",
    },
    {
      label: "Bansthaliniwai",
      value: "BNLW",
    },
    {
      label: "Baragaon",
      value: "BNM",
    },
    {
      label: "Barnala",
      value: "BNN",
    },
    {
      label: "Banar",
      value: "BNO",
    },
    {
      label: "Bhanapur",
      value: "BNP",
    },
    {
      label: "Banpimpla",
      value: "BNPP",
    },
    {
      label: "Bhagwanpur",
      value: "BNR",
    },
    {
      label: "Banas",
      value: "BNS",
    },
    {
      label: "Banbasa",
      value: "BNSA",
    },
    {
      label: "Bharthana",
      value: "BNT",
    },
    {
      label: "Bantawala",
      value: "BNTL",
    },
    {
      label: "Bandakpur",
      value: "BNU",
    },
    {
      label: "Bhanvad",
      value: "BNUD",
    },
    {
      label: "Bhaunra",
      value: "BNVD",
    },
    {
      label: "Bhiwani City",
      value: "BNWC",
    },
    {
      label: "Bidhannagar",
      value: "BNXR",
    },
    {
      label: "Badshahnagar",
      value: "BNZ",
    },
    {
      label: "Bobas",
      value: "BOBS",
    },
    {
      label: "Bangrod",
      value: "BOD",
    },
    {
      label: "Bhairongarh",
      value: "BOG",
    },
    {
      label: "Bainchi",
      value: "BOI",
    },
    {
      label: "Bhojo",
      value: "BOJ",
    },
    {
      label: "Bhoke",
      value: "BOKE",
    },
    {
      label: "Bhonra",
      value: "BON",
    },
    {
      label: "Boinda",
      value: "BONA",
    },
    {
      label: "Boisar",
      value: "BOR",
    },
    {
      label: "Baghdogra",
      value: "BORA",
    },
    {
      label: "Baorithikria",
      value: "BOTI",
    },
    {
      label: "Bhatgaon",
      value: "BOV",
    },
    {
      label: "Borawar",
      value: "BOW",
    },
    {
      label: "Bolarumbazar",
      value: "BOZ",
    },
    {
      label: "Barrackpore",
      value: "BP",
    },
    {
      label: "Belampalli",
      value: "BPA",
    },
    {
      label: "Berhamporecrt",
      value: "BPC",
    },
    {
      label: "Bahadurpur",
      value: "BPD",
    },
    {
      label: "Banapura",
      value: "BPF",
    },
    {
      label: "Belpahar",
      value: "BPH",
    },
    {
      label: "Bhilaipwrhs",
      value: "BPHB",
    },
    {
      label: "Bhugaon",
      value: "BPK",
    },
    {
      label: "Bhopalka",
      value: "BPKA",
    },
    {
      label: "Baripada",
      value: "BPO",
    },
    {
      label: "Barpeta Road",
      value: "BPRD",
    },
    {
      label: "Bhogpursirwal",
      value: "BPRS",
    },
    {
      label: "Banpas",
      value: "BPS",
    },
    {
      label: "Badampudi",
      value: "BPY",
    },
    {
      label: "Bazpur",
      value: "BPZ",
    },
    {
      label: "Bharathapuzha",
      value: "BPZA",
    },
    {
      label: "Bankura",
      value: "BQA",
    },
    {
      label: "Bhagwangola",
      value: "BQG",
    },
    {
      label: "Bommidi",
      value: "BQI",
    },
    {
      label: "Barelipur",
      value: "BQM",
    },
    {
      label: "Bagrinagar",
      value: "BQN",
    },
    {
      label: "Bighapur",
      value: "BQP",
    },
    {
      label: "Bakhleta",
      value: "BQQ",
    },
    {
      label: "Bhilainagar",
      value: "BQR",
    },
    {
      label: "Bhattiprolu",
      value: "BQU",
    },
    {
      label: "Bandhbareta",
      value: "BR",
    },
    {
      label: "Birsola",
      value: "BRA",
    },
    {
      label: "Barang",
      value: "BRAG",
    },
    {
      label: "Boribial",
      value: "BRB",
    },
    {
      label: "Bhandara Road",
      value: "BRD",
    },
    {
      label: "Bardhana Halt",
      value: "BRDH",
    },
    {
      label: "Bharwari",
      value: "BRE",
    },
    {
      label: "Bargarh",
      value: "BRG",
    },
    {
      label: "Baraigram Jn.",
      value: "BRGM",
    },
    {
      label: "Bheraghat",
      value: "BRGT",
    },
    {
      label: "Bargawan",
      value: "BRGW",
    },
    {
      label: "Baikunthpur Road",
      value: "BRH",
    },
    {
      label: "Brajrajnagar",
      value: "BRJN",
    },
    {
      label: "Bahraich",
      value: "BRK",
    },
    {
      label: "Braylachaurasi",
      value: "BRLA",
    },
    {
      label: "Biroliya",
      value: "BRLY",
    },
    {
      label: "Barabambo",
      value: "BRM",
    },
    {
      label: "Biramdih",
      value: "BRMD",
    },
    {
      label: "Bermo",
      value: "BRMO",
    },
    {
      label: "Birmitrapur",
      value: "BRMP",
    },
    {
      label: "Baramati",
      value: "BRMT",
    },
    {
      label: "Barhan",
      value: "BRN",
    },
    {
      label: "Boridand",
      value: "BRND",
    },
    {
      label: "Barpali",
      value: "BRPL",
    },
    {
      label: "Birapatti",
      value: "BRPT",
    },
    {
      label: "Barakar",
      value: "BRR",
    },
    {
      label: "Biyavrarajgarh",
      value: "BRRG",
    },
    {
      label: "Birsinghpur",
      value: "BRS",
    },
    {
      label: "Bhortex",
      value: "BRTK",
    },
    {
      label: "Bhairoganj",
      value: "BRU",
    },
    {
      label: "Borvihir",
      value: "BRVR",
    },
    {
      label: "Bareilly",
      value: "BRY",
    },
    {
      label: "Barhiya",
      value: "BRYA",
    },
    {
      label: "Bareta",
      value: "BRZ",
    },
    {
      label: "Banshbaria",
      value: "BSAE",
    },
    {
      label: "Banshlaibridge",
      value: "BSBR",
    },
    {
      label: "Bulandshahr",
      value: "BSC",
    },
    {
      label: "Baniyasandadh",
      value: "BSDA",
    },
    {
      label: "Bharsendi",
      value: "BSDL",
    },
    {
      label: "Bhusandpur",
      value: "BSDP",
    },
    {
      label: "Badshahpur",
      value: "BSE",
    },
    {
      label: "Basugaon",
      value: "BSGN",
    },
    {
      label: "Bhupalsagar",
      value: "BSJ",
    },
    {
      label: "Basikiratpur",
      value: "BSKR",
    },
    {
      label: "Bataspur",
      value: "BSLE",
    },
    {
      label: "Banasandra",
      value: "BSN",
    },
    {
      label: "Biaspind",
      value: "BSPD",
    },
    {
      label: "Bassipathanam",
      value: "BSPN",
    },
    {
      label: "Bishrampur",
      value: "BSPR",
    },
    {
      label: "Barsitakli",
      value: "BSQ",
    },
    {
      label: "Bansipur",
      value: "BSQP",
    },
    {
      label: "Besroli",
      value: "BSRL",
    },
    {
      label: "Bagevadi Road",
      value: "BSRX",
    },
    {
      label: "Bhemswadi",
      value: "BSWD",
    },
    {
      label: "Basar",
      value: "BSX",
    },
    {
      label: "Barsathi",
      value: "BSY",
    },
    {
      label: "Bharwasumerpur",
      value: "BSZ",
    },
    {
      label: "Barasat",
      value: "BT",
    },
    {
      label: "Bihta",
      value: "BTA",
    },
    {
      label: "Basharatganj",
      value: "BTG",
    },
    {
      label: "Bishnathganj",
      value: "BTJ",
    },
    {
      label: "Bankata",
      value: "BTK",
    },
    {
      label: "Bharatkund",
      value: "BTKD",
    },
    {
      label: "Bhatkal",
      value: "BTKL",
    },
    {
      label: "Bharatkup",
      value: "BTKP",
    },
    {
      label: "Bortalao",
      value: "BTL",
    },
    {
      label: "Bhitaura",
      value: "BTO",
    },
    {
      label: "Babatpur",
      value: "BTP",
    },
    {
      label: "Bethampurdi",
      value: "BTPD",
    },
    {
      label: "Bhatpur",
      value: "BTPR",
    },
    {
      label: "Butari",
      value: "BTR",
    },
    {
      label: "Banthra",
      value: "BTRA",
    },
    {
      label: "Basta",
      value: "BTS",
    },
    {
      label: "Baitarani Road",
      value: "BTV",
    },
    {
      label: "Barsi Town",
      value: "BTW",
    },
    {
      label: "Belatal",
      value: "BTX",
    },
    {
      label: "Bethuadahari",
      value: "BTY",
    },
    {
      label: "Baswa",
      value: "BU",
    },
    {
      label: "Baradwar",
      value: "BUA",
    },
    {
      label: "Bissau",
      value: "BUB",
    },
    {
      label: "Bhutakiabhimsa",
      value: "BUBR",
    },
    {
      label: "Badlapur",
      value: "BUD",
    },
    {
      label: "Bundi",
      value: "BUDI",
    },
    {
      label: "Badmal",
      value: "BUDM",
    },
    {
      label: "Burhar",
      value: "BUH",
    },
    {
      label: "Bhalulata",
      value: "BUL",
    },
    {
      label: "Bommasamudram",
      value: "BUM",
    },
    {
      label: "Bariarpur",
      value: "BUP",
    },
    {
      label: "Babupeth",
      value: "BUPH",
    },
    {
      label: "Bargi",
      value: "BUQ",
    },
    {
      label: "Burnpur",
      value: "BURN",
    },
    {
      label: "Badausa",
      value: "BUS",
    },
    {
      label: "Baytu",
      value: "BUT",
    },
    {
      label: "Bhandak",
      value: "BUX",
    },
    {
      label: "Babhnan",
      value: "BV",
    },
    {
      label: "Bauria Jn.",
      value: "BVA",
    },
    {
      label: "Bhadbhadaghat",
      value: "BVB",
    },
    {
      label: "Ballabgarh",
      value: "BVH",
    },
    {
      label: "Bikkavolu",
      value: "BVL",
    },
    {
      label: "Bayyavaram",
      value: "BVM",
    },
    {
      label: "Biswan",
      value: "BVN",
    },
    {
      label: "Bhavaninagar",
      value: "BVNR",
    },
    {
      label: "Bhavanagarpara",
      value: "BVP",
    },
    {
      label: "Bhilavdi",
      value: "BVQ",
    },
    {
      label: "Bhimavaram Town",
      value: "BVRX",
    },
    {
      label: "Bhivpuri Road",
      value: "BVS",
    },
    {
      label: "Balipara",
      value: "BVU",
    },
    {
      label: "Bedetti",
      value: "BVV",
    },
    {
      label: "Bhinwaliya",
      value: "BWA",
    },
    {
      label: "Bagwali",
      value: "BWB",
    },
    {
      label: "Banwali",
      value: "BWC",
    },
    {
      label: "Belvandi",
      value: "BWD",
    },
    {
      label: "Butewala",
      value: "BWF",
    },
    {
      label: "Bhadaura",
      value: "BWH",
    },
    {
      label: "Bilwai",
      value: "BWI",
    },
    {
      label: "Bawanikhera",
      value: "BWK",
    },
    {
      label: "Bawal",
      value: "BWL",
    },
    {
      label: "Bhawanimandi",
      value: "BWM",
    },
    {
      label: "Bhawanipurkaln",
      value: "BWP",
    },
    {
      label: "Barwasagar",
      value: "BWR",
    },
    {
      label: "Bharatwada",
      value: "BWRA",
    },
    {
      label: "Badwasi",
      value: "BWS",
    },
    {
      label: "Barwaha",
      value: "BWW",
    },
    {
      label: "Bangarapet",
      value: "BWY",
    },
    {
      label: "Balod",
      value: "BXA",
    },
    {
      label: "Barsuan",
      value: "BXF",
    },
    {
      label: "Bokajan",
      value: "BXJ",
    },
    {
      label: "Billi",
      value: "BXLL",
    },
    {
      label: "Belrayan",
      value: "BXM",
    },
    {
      label: "Barpathar",
      value: "BXP",
    },
    {
      label: "Brundamal",
      value: "BXQ",
    },
    {
      label: "Bordhal",
      value: "BXY",
    },
    {
      label: "Byculla",
      value: "BY",
    },
    {
      label: "Bellary Cant.",
      value: "BYC",
    },
    {
      label: "Byadgi",
      value: "BYD",
    },
    {
      label: "Baryaram",
      value: "BYHA",
    },
    {
      label: "Belha",
      value: "BYL",
    },
    {
      label: "Banahi",
      value: "BYN",
    },
    {
      label: "Byndoor",
      value: "BYNR",
    },
    {
      label: "Baijnathpur",
      value: "BYP",
    },
    {
      label: "Baiyyappanahali",
      value: "BYPL",
    },
    {
      label: "Bhayandar",
      value: "BYR",
    },
    {
      label: "Byree",
      value: "BYY",
    },
    {
      label: "Bazidajatan",
      value: "BZJT",
    },
    {
      label: "Bhaini Khurd",
      value: "BZK",
    },
    {
      label: "Bazarsau",
      value: "BZLE",
    },
    {
      label: "Bhimsen",
      value: "BZM",
    },
    {
      label: "Bagnan",
      value: "BZN",
    },
    {
      label: "Barsola",
      value: "BZO",
    },
    {
      label: "Bisra",
      value: "BZR",
    },
    {
      label: "Basai",
      value: "BZY",
    },
    {
      label: "Chandafort",
      value: "CAF",
    },
    {
      label: "Chhabragugor",
      value: "CAG",
    },
    {
      label: "Chanpatia",
      value: "CAI",
    },
    {
      label: "Chakrajmal",
      value: "CAJ",
    },
    {
      label: "Chamua",
      value: "CAMU",
    },
    {
      label: "Chatrapur",
      value: "CAP",
    },
    {
      label: "Chhansara",
      value: "CASA",
    },
    {
      label: "Coimbatore",
      value: "CBEE",
    },
    {
      label: "Coimbatorenrth",
      value: "CBF",
    },
    {
      label: "Charbhuja Road",
      value: "CBG",
    },
    {
      label: "Chaube",
      value: "CBH",
    },
    {
      label: "Clutterbuckganj",
      value: "CBJ",
    },
    {
      label: "Chachaurabngj",
      value: "CBK",
    },
    {
      label: "Cumbum",
      value: "CBM",
    },
    {
      label: "Chitbaragaon",
      value: "CBN",
    },
    {
      label: "Chikballapur",
      value: "CBP",
    },
    {
      label: "Chaibasa",
      value: "CBSA",
    },
    {
      label: "Charbatia",
      value: "CBT",
    },
    {
      label: "Cbabusamudram",
      value: "CBU",
    },
    {
      label: "Khambhat",
      value: "CBY",
    },
    {
      label: "Chaurichaura",
      value: "CC",
    },
    {
      label: "Chigicherla",
      value: "CCA",
    },
    {
      label: "Churchgate",
      value: "CCG",
    },
    {
      label: "Chinchvad",
      value: "CCH",
    },
    {
      label: "Chinnekuntapali",
      value: "CCI",
    },
    {
      label: "Kakinada Town",
      value: "CCT",
    },
    {
      label: "Chuda",
      value: "CDA",
    },
    {
      label: "Chandanchauki",
      value: "CDC",
    },
    {
      label: "Chandrakona Road",
      value: "CDGR",
    },
    {
      label: "Chakdaha",
      value: "CDH",
    },
    {
      label: "Chodiala",
      value: "CDL",
    },
    {
      label: "Chandlodiya",
      value: "CDLD",
    },
    {
      label: "Chandaulimjhwr",
      value: "CDMR",
    },
    {
      label: "Chandpara",
      value: "CDP",
    },
    {
      label: "Chadotar",
      value: "CDQ",
    },
    {
      label: "Chhandrauli",
      value: "CDRL",
    },
    {
      label: "Chandisar",
      value: "CDS",
    },
    {
      label: "Chandresal",
      value: "CDSL",
    },
    {
      label: "Chharodi",
      value: "CE",
    },
    {
      label: "Chebrol",
      value: "CEL",
    },
    {
      label: "Chiheru",
      value: "CEU",
    },
    {
      label: "Charghatpipari",
      value: "CGE",
    },
    {
      label: "Cholang",
      value: "CGH",
    },
    {
      label: "Chandragiri",
      value: "CGI",
    },
    {
      label: "Chirgaon",
      value: "CGN",
    },
    {
      label: "Chhidgaon",
      value: "CGO",
    },
    {
      label: "Chandannagar",
      value: "CGR",
    },
    {
      label: "Changanacheri",
      value: "CGY",
    },
    {
      label: "Chawapall",
      value: "CHA",
    },
    {
      label: "Chabua",
      value: "CHB",
    },
    {
      label: "Chaurebazar",
      value: "CHBR",
    },
    {
      label: "Chakarbhatha",
      value: "CHBT",
    },
    {
      label: "Chacher",
      value: "CHCR",
    },
    {
      label: "Chandia Road",
      value: "CHD",
    },
    {
      label: "Chaukhandi",
      value: "CHH",
    },
    {
      label: "Chirai",
      value: "CHII",
    },
    {
      label: "Chata",
      value: "CHJ",
    },
    {
      label: "Challakere",
      value: "CHKE",
    },
    {
      label: "Chola",
      value: "CHL",
    },
    {
      label: "Chavalkhede",
      value: "CHLK",
    },
    {
      label: "Chalthan",
      value: "CHM",
    },
    {
      label: "Chhina",
      value: "CHN",
    },
    {
      label: "Channani",
      value: "CHNN",
    },
    {
      label: "Chhapi",
      value: "CHP",
    },
    {
      label: "Chharra",
      value: "CHRA",
    },
    {
      label: "Chirmiri",
      value: "CHRM",
    },
    {
      label: "Chaneti",
      value: "CHTI",
    },
    {
      label: "Cochinhrbrtms",
      value: "CHTS",
    },
    {
      label: "Cochin",
      value: "CHTX",
    },
    {
      label: "Charvattur",
      value: "CHV",
    },
    {
      label: "Chhaprakacheri",
      value: "CI",
    },
    {
      label: "Chilbila Jn.",
      value: "CIL",
    },
    {
      label: "Chitali",
      value: "CIT",
    },
    {
      label: "Chajli",
      value: "CJL",
    },
    {
      label: "Chinnaganjam",
      value: "CJM",
    },
    {
      label: "Chhatna",
      value: "CJN",
    },
    {
      label: "Chamaraj",
      value: "CJR",
    },
    {
      label: "Charamulakusum",
      value: "CJS",
    },
    {
      label: "Chajawa",
      value: "CJW",
    },
    {
      label: "Chauthkabrwra",
      value: "CKB",
    },
    {
      label: "Charkhidadri",
      value: "CKD",
    },
    {
      label: "Chakdayala",
      value: "CKDL",
    },
    {
      label: "Chokisorath",
      value: "CKE",
    },
    {
      label: "Chalakudi",
      value: "CKI",
    },
    {
      label: "Chakarpur",
      value: "CKK",
    },
    {
      label: "Chikni Road",
      value: "CKNI",
    },
    {
      label: "Chakrod",
      value: "CKOD",
    },
    {
      label: "Chikodi Road",
      value: "CKR",
    },
    {
      label: "Chaksu",
      value: "CKS",
    },
    {
      label: "Chakulia",
      value: "CKU",
    },
    {
      label: "Chakur",
      value: "CKX",
    },
    {
      label: "Kurla Jn.",
      value: "CLA",
    },
    {
      label: "Lokmanyatilakt",
      value: "CLAT",
    },
    {
      label: "Chalala",
      value: "CLC",
    },
    {
      label: "Chandlodiya",
      value: "CLDY",
    },
    {
      label: "Chhulha",
      value: "CLF",
    },
    {
      label: "Kahalgaon",
      value: "CLG",
    },
    {
      label: "Chalgeri",
      value: "CLI",
    },
    {
      label: "Colonelganj",
      value: "CLJ",
    },
    {
      label: "Chilka",
      value: "CLKA",
    },
    {
      label: "Kollidam",
      value: "CLN",
    },
    {
      label: "Chilo",
      value: "CLO",
    },
    {
      label: "Castlerock",
      value: "CLR",
    },
    {
      label: "Chilakalapudi",
      value: "CLU",
    },
    {
      label: "Chiluvur",
      value: "CLVR",
    },
    {
      label: "Cinnamara",
      value: "CMA",
    },
    {
      label: "Chemancheri",
      value: "CMC",
    },
    {
      label: "Chimidipalli",
      value: "CMDP",
    },
    {
      label: "Chamarajapuram",
      value: "CMJ",
    },
    {
      label: "Chamarajanagar",
      value: "CMNR",
    },
    {
      label: "Chaumahla",
      value: "CMU",
    },
    {
      label: "Chimapahad",
      value: "CMW",
    },
    {
      label: "Chamagram",
      value: "CMX",
    },
    {
      label: "Chintamani",
      value: "CMY",
    },
    {
      label: "Chalama",
      value: "CMZ",
    },
    {
      label: "Chanderiya",
      value: "CNA",
    },
    {
      label: "Chinchli",
      value: "CNC",
    },
    {
      label: "Chandur",
      value: "CND",
    },
    {
      label: "Chandimandir",
      value: "CNDM",
    },
    {
      label: "Chandranathpur",
      value: "CNE",
    },
    {
      label: "Chianki",
      value: "CNF",
    },
    {
      label: "Chaunrah",
      value: "CNH",
    },
    {
      label: "Chandok",
      value: "CNK",
    },
    {
      label: "Chandawal",
      value: "CNL",
    },
    {
      label: "Chainpur",
      value: "CNPR",
    },
    {
      label: "Chandar",
      value: "CNR",
    },
    {
      label: "Chuchura",
      value: "CNS",
    },
    {
      label: "Contai Road",
      value: "CNT",
    },
    {
      label: "Kolanalli",
      value: "CNY",
    },
    {
      label: "Kakinada Port",
      value: "COAX",
    },
    {
      label: "Coochbehar",
      value: "COB",
    },
    {
      label: "Chhotagudha",
      value: "COD",
    },
    {
      label: "Chitrod",
      value: "COE",
    },
    {
      label: "Chomunsamod",
      value: "COM",
    },
    {
      label: "Chhotiodai",
      value: "COO",
    },
    {
      label: "Cuddalore Jn.",
      value: "COT",
    },
    {
      label: "Kanpurbgelbk",
      value: "CPB",
    },
    {
      label: "Chinchpada",
      value: "CPD",
    },
    {
      label: "Chhipadohar",
      value: "CPDR",
    },
    {
      label: "Chandiposi",
      value: "CPE",
    },
    {
      label: "Chakarlapalli",
      value: "CPL",
    },
    {
      label: "Chinpal",
      value: "CPLE",
    },
    {
      label: "Champanerrd Jn.",
      value: "CPN",
    },
    {
      label: "Chipurupalle",
      value: "CPP",
    },
    {
      label: "Chandsiau",
      value: "CPS",
    },
    {
      label: "Channapatna",
      value: "CPT",
    },
    {
      label: "Charkhari Road",
      value: "CRC",
    },
    {
      label: "Chaurakheri",
      value: "CRKR",
    },
    {
      label: "Choral",
      value: "CRL",
    },
    {
      label: "Charegaon",
      value: "CRN",
    },
    {
      label: "Chautara",
      value: "CROA",
    },
    {
      label: "Karagola Road",
      value: "CRR",
    },
    {
      label: "Charaud",
      value: "CRW",
    },
    {
      label: "Chirawa",
      value: "CRWA",
    },
    {
      label: "Chirayinkil",
      value: "CRY",
    },
    {
      label: "Chausa",
      value: "CSA",
    },
    {
      label: "Channasandra",
      value: "CSDR",
    },
    {
      label: "Chosla",
      value: "CSL",
    },
    {
      label: "Cansaulim",
      value: "CSM",
    },
    {
      label: "Cossimbazar",
      value: "CSZ",
    },
    {
      label: "Chittapur",
      value: "CT",
    },
    {
      label: "Chitradurg",
      value: "CTA",
    },
    {
      label: "Chhitauni",
      value: "CTE",
    },
    {
      label: "Chitgidda",
      value: "CTF",
    },
    {
      label: "Chikalthan",
      value: "CTH",
    },
    {
      label: "Chitahra",
      value: "CTHR",
    },
    {
      label: "Chotikhatu",
      value: "CTKT",
    },
    {
      label: "Chital",
      value: "CTL",
    },
    {
      label: "Chettinad",
      value: "CTND",
    },
    {
      label: "Chetar",
      value: "CTQ",
    },
    {
      label: "Chatra",
      value: "CTR",
    },
    {
      label: "Chitrawad",
      value: "CTRD",
    },
    {
      label: "Chattriput",
      value: "CTS",
    },
    {
      label: "Chitrasani",
      value: "CTT",
    },
    {
      label: "Chintaparti",
      value: "CTY",
    },
    {
      label: "Chityala",
      value: "CTYL",
    },
    {
      label: "Chagallu",
      value: "CU",
    },
    {
      label: "Tiruppappuliyur",
      value: "CUD",
    },
    {
      label: "Churk",
      value: "CUK",
    },
    {
      label: "Chuli",
      value: "CUL",
    },
    {
      label: "Chaura",
      value: "CUX",
    },
    {
      label: "Cavalrybarrcks",
      value: "CVB",
    },
    {
      label: "Chavaj",
      value: "CVJ",
    },
    {
      label: "Kovilpatti",
      value: "CVP",
    },
    {
      label: "Chorvad Road",
      value: "CVR",
    },
    {
      label: "Chainwa",
      value: "CW",
    },
    {
      label: "Chhindwara Jn.",
      value: "CWA",
    },
    {
      label: "Chondi",
      value: "CWI",
    },
    {
      label: "Cheriyanad",
      value: "CYN",
    },
    {
      label: "Charni Road",
      value: "CYR",
    },
    {
      label: "Datia",
      value: "DAA",
    },
    {
      label: "Dhaban",
      value: "DABN",
    },
    {
      label: "Devargudda",
      value: "DAD",
    },
    {
      label: "Duroji",
      value: "DAJ",
    },
    {
      label: "Dakhineswar",
      value: "DAKE",
    },
    {
      label: "Daliganj",
      value: "DAL",
    },
    {
      label: "Dhamora",
      value: "DAM",
    },
    {
      label: "Dhaneta",
      value: "DAN",
    },
    {
      label: "Daghora",
      value: "DAO",
    },
    {
      label: "Dagmagpur",
      value: "DAP",
    },
    {
      label: "Dapodi",
      value: "DAPD",
    },
    {
      label: "Danwar",
      value: "DAR",
    },
    {
      label: "Dara",
      value: "DARA",
    },
    {
      label: "Dhari Jn.",
      value: "DARI",
    },
    {
      label: "Dagru",
      value: "DAU",
    },
    {
      label: "Devalgaonauchr",
      value: "DAV",
    },
    {
      label: "Dhanuvachapuram",
      value: "DAVM",
    },
    {
      label: "Delhi azadpur",
      value: "DAZ",
    },
    {
      label: "Dabhoi Jn.",
      value: "DB",
    },
    {
      label: "Dabra",
      value: "DBA",
    },
    {
      label: "Dhubri",
      value: "DBB",
    },
    {
      label: "Deoband",
      value: "DBD",
    },
    {
      label: "Devbalodachrda",
      value: "DBEC",
    },
    {
      label: "Dobhbahali",
      value: "DBHL",
    },
    {
      label: "Dablirathan",
      value: "DBI",
    },
    {
      label: "Dabka",
      value: "DBKA",
    },
    {
      label: "Dodbele",
      value: "DBL",
    },
    {
      label: "Dabla",
      value: "DBLA",
    },
    {
      label: "Dabolim",
      value: "DBM",
    },
    {
      label: "Dabhoda",
      value: "DBO",
    },
    {
      label: "Debipur",
      value: "DBP",
    },
    {
      label: "Dabhaura",
      value: "DBR",
    },
    {
      label: "Dodballapur",
      value: "DBU",
    },
    {
      label: "Dabilpur",
      value: "DBV",
    },
    {
      label: "Dubia",
      value: "DBW",
    },
    {
      label: "Digboi",
      value: "DBY",
    },
    {
      label: "Dhandhuka",
      value: "DCK",
    },
    {
      label: "Damalcheruvu",
      value: "DCU",
    },
    {
      label: "Duraundha Jn.",
      value: "DDA",
    },
    {
      label: "Dumdum Cant.",
      value: "DDC",
    },
    {
      label: "Dundi",
      value: "DDCE",
    },
    {
      label: "Dondaicha",
      value: "DDE",
    },
    {
      label: "Dumdum",
      value: "DDJ",
    },
    {
      label: "Dhindsa",
      value: "DDK",
    },
    {
      label: "Dhandarikalan",
      value: "DDL",
    },
    {
      label: "Damdim",
      value: "DDM",
    },
    {
      label: "Daudpur",
      value: "DDP",
    },
    {
      label: "Dadar[wr]",
      value: "DDR",
    },
    {
      label: "Dudhsagar",
      value: "DDS",
    },
    {
      label: "Dudwa",
      value: "DDW",
    },
    {
      label: "Dudwindi",
      value: "DDY",
    },
    {
      label: "Delhi MG",
      value: "DE",
    },
    {
      label: "Debagram",
      value: "DEB",
    },
    {
      label: "Dandeli",
      value: "DED",
    },
    {
      label: "Delang",
      value: "DEG",
    },
    {
      label: "Dehu Road",
      value: "DEHR",
    },
    {
      label: "Denduluru",
      value: "DEL",
    },
    {
      label: "Deorakot",
      value: "DELO",
    },
    {
      label: "Demu",
      value: "DEMU",
    },
    {
      label: "Diyodar",
      value: "DEOR",
    },
    {
      label: "Depalsar",
      value: "DEP",
    },
    {
      label: "Dadri",
      value: "DER",
    },
    {
      label: "Desari",
      value: "DES",
    },
    {
      label: "Devarayi",
      value: "DEV",
    },
    {
      label: "Dewalgaon",
      value: "DEW",
    },
    {
      label: "Deogan Road",
      value: "DFR",
    },
    {
      label: "Dighwara",
      value: "DGA",
    },
    {
      label: "Durgadagate",
      value: "DGDG",
    },
    {
      label: "Digha Flag Station",
      value: "DGHA",
    },
    {
      label: "Dungri",
      value: "DGI",
    },
    {
      label: "Dungar Jn.",
      value: "DGJ",
    },
    {
      label: "Dhulianganga",
      value: "DGLE",
    },
    {
      label: "Dongargaon",
      value: "DGN",
    },
    {
      label: "Dhenglippgoan",
      value: "DGPP",
    },
    {
      label: "Dugdol",
      value: "DGQ",
    },
    {
      label: "Dagori",
      value: "DGS",
    },
    {
      label: "Dhulghat",
      value: "DGT",
    },
    {
      label: "Digaru",
      value: "DGU",
    },
    {
      label: "Dheena",
      value: "DHA",
    },
    {
      label: "Dhule",
      value: "DHI",
    },
    {
      label: "Dhinoj",
      value: "DHJ",
    },
    {
      label: "Dhodakhedi",
      value: "DHKR",
    },
    {
      label: "Dadhalinam",
      value: "DHM",
    },
    {
      label: "Dholamazra",
      value: "DHMZ",
    },
    {
      label: "Dhinda",
      value: "DHND",
    },
    {
      label: "Dhanala",
      value: "DHNL",
    },
    {
      label: "Dichpalli",
      value: "DHP",
    },
    {
      label: "Dappar",
      value: "DHPR",
    },
    {
      label: "Dharnaoda",
      value: "DHR",
    },
    {
      label: "Dhirganj",
      value: "DHRJ",
    },
    {
      label: "Dhirera",
      value: "DHRR",
    },
    {
      label: "Dhavalas",
      value: "DHS",
    },
    {
      label: "Dhubulia",
      value: "DHU",
    },
    {
      label: "Dhanawalawada",
      value: "DHVR",
    },
    {
      label: "Dhariwal",
      value: "DHW",
    },
    {
      label: "Dombivili",
      value: "DI",
    },
    {
      label: "Didwana",
      value: "DIA",
    },
    {
      label: "Dibai",
      value: "DIB",
    },
    {
      label: "Dahisar",
      value: "DIC",
    },
    {
      label: "Duggirala",
      value: "DIG",
    },
    {
      label: "Dharuadihi",
      value: "DIH",
    },
    {
      label: "Dilawarnagar",
      value: "DIL",
    },
    {
      label: "Ding",
      value: "DING",
    },
    {
      label: "Divinenagar",
      value: "DINR",
    },
    {
      label: "Dipa",
      value: "DIPA",
    },
    {
      label: "Dinagaon",
      value: "DIQ",
    },
    {
      label: "Dhanapurorissa",
      value: "DIR",
    },
    {
      label: "Disa",
      value: "DISA",
    },
    {
      label: "Dohrighat",
      value: "DIT",
    },
    {
      label: "Diva",
      value: "DIVA",
    },
    {
      label: "Dhilwan",
      value: "DIW",
    },
    {
      label: "Darjeeling",
      value: "DJ",
    },
    {
      label: "Duliajan",
      value: "DJG",
    },
    {
      label: "Dhoraji",
      value: "DJI",
    },
    {
      label: "Daijar",
      value: "DJJ",
    },
    {
      label: "Dolajikakhera",
      value: "DJKR",
    },
    {
      label: "Dakor",
      value: "DK",
    },
    {
      label: "Dankuni",
      value: "DKAE",
    },
    {
      label: "Daharkabalaji",
      value: "DKBJ",
    },
    {
      label: "Donakonda",
      value: "DKD",
    },
    {
      label: "Dankaur",
      value: "DKDE",
    },
    {
      label: "Dhekiajili Road",
      value: "DKJR",
    },
    {
      label: "Doikallu",
      value: "DKLU",
    },
    {
      label: "Dakaniyatalav",
      value: "DKNT",
    },
    {
      label: "Devakottai Road",
      value: "DKO",
    },
    {
      label: "Dekapam",
      value: "DKPM",
    },
    {
      label: "Darekasa",
      value: "DKS",
    },
    {
      label: "Dhulkot",
      value: "DKT",
    },
    {
      label: "Dhanakwada",
      value: "DKW",
    },
    {
      label: "Dokwa",
      value: "DKWA",
    },
    {
      label: "Dudhwakhara",
      value: "DKX",
    },
    {
      label: "Delhi Kishanganj",
      value: "DKZ",
    },
    {
      label: "Daladi",
      value: "DL",
    },
    {
      label: "Daulatabad",
      value: "DLB",
    },
    {
      label: "Dalmera",
      value: "DLC",
    },
    {
      label: "Dalauda",
      value: "DLD",
    },
    {
      label: "Dhalgaon",
      value: "DLGN",
    },
    {
      label: "Dalkolha",
      value: "DLK",
    },
    {
      label: "Dhelana",
      value: "DLNA",
    },
    {
      label: "Dalpatpur",
      value: "DLP",
    },
    {
      label: "Dayalpur",
      value: "DLPR",
    },
    {
      label: "Dalelnagar",
      value: "DLQ",
    },
    {
      label: "Dullahapur",
      value: "DLR",
    },
    {
      label: "Dilwa",
      value: "DLW",
    },
    {
      label: "Dimow",
      value: "DM",
    },
    {
      label: "Damodar Jn.",
      value: "DMA",
    },
    {
      label: "Dumribihar",
      value: "DMBR",
    },
    {
      label: "Dhemaji",
      value: "DMC",
    },
    {
      label: "Damnagar",
      value: "DME",
    },
    {
      label: "Domingarh",
      value: "DMG",
    },
    {
      label: "Daurammadhpura",
      value: "DMH",
    },
    {
      label: "Dilmili",
      value: "DMK",
    },
    {
      label: "Dumurdaha",
      value: "DMLE",
    },
    {
      label: "Dharmpurhmchl",
      value: "DMP",
    },
    {
      label: "Dharampur",
      value: "DMPR",
    },
    {
      label: "Dharmanagar",
      value: "DMR",
    },
    {
      label: "Diguvametta",
      value: "DMT",
    },
    {
      label: "Dalmau Jn.",
      value: "DMW",
    },
    {
      label: "Dhanari",
      value: "DN",
    },
    {
      label: "Degana Jn.",
      value: "DNA",
    },
    {
      label: "Dandupur",
      value: "DND",
    },
    {
      label: "Dhondi",
      value: "DNDI",
    },
    {
      label: "Dhamni",
      value: "DNE",
    },
    {
      label: "Danea",
      value: "DNEA",
    },
    {
      label: "Dhindhorahkmkd",
      value: "DNHK",
    },
    {
      label: "Dhanakya",
      value: "DNK",
    },
    {
      label: "Dhenkanal",
      value: "DNKL",
    },
    {
      label: "Dhanoli",
      value: "DNL",
    },
    {
      label: "Dhanmandal",
      value: "DNM",
    },
    {
      label: "Dinanagar",
      value: "DNN",
    },
    {
      label: "Dhandhera",
      value: "DNRA",
    },
    {
      label: "Dhanauri",
      value: "DNRE",
    },
    {
      label: "Dantan",
      value: "DNT",
    },
    {
      label: "Donkinavalasa",
      value: "DNV",
    },
    {
      label: "Dangarwa",
      value: "DNW",
    },
    {
      label: "Dhanori",
      value: "DNZ",
    },
    {
      label: "Dausa",
      value: "DO",
    },
    {
      label: "Doraha",
      value: "DOA",
    },
    {
      label: "Dundlodmkdgrh",
      value: "DOB",
    },
    {
      label: "Dhodhar",
      value: "DOD",
    },
    {
      label: "Deori",
      value: "DOE",
    },
    {
      label: "Donigal",
      value: "DOG",
    },
    {
      label: "Dhodramohar",
      value: "DOH",
    },
    {
      label: "Devgarhmadriya",
      value: "DOHM",
    },
    {
      label: "Dholka",
      value: "DOK",
    },
    {
      label: "Dholi",
      value: "DOL",
    },
    {
      label: "Dundara",
      value: "DOR",
    },
    {
      label: "Daurai",
      value: "DOZ",
    },
    {
      label: "Durgapura",
      value: "DPA",
    },
    {
      label: "Darliput",
      value: "DPC",
    },
    {
      label: "Dosapadu",
      value: "DPD",
    },
    {
      label: "Dabpal",
      value: "DPF",
    },
    {
      label: "Dadhapara",
      value: "DPH",
    },
    {
      label: "Danauliphlwria",
      value: "DPL",
    },
    {
      label: "Diplana",
      value: "DPLN",
    },
    {
      label: "Dhirpur",
      value: "DPP",
    },
    {
      label: "Dhampur",
      value: "DPR",
    },
    {
      label: "Diphu",
      value: "DPU",
    },
    {
      label: "Dadpur",
      value: "DPX",
    },
    {
      label: "Devpura",
      value: "DPZ",
    },
    {
      label: "Dhupguri",
      value: "DQG",
    },
    {
      label: "Dhalaibil",
      value: "DQL",
    },
    {
      label: "Dhanera",
      value: "DQN",
    },
    {
      label: "Debari",
      value: "DRB",
    },
    {
      label: "Daraganj",
      value: "DRGJ",
    },
    {
      label: "Dharhara",
      value: "DRH",
    },
    {
      label: "Derol",
      value: "DRL",
    },
    {
      label: "Daurala",
      value: "DRLA",
    },
    {
      label: "Daryaogonj",
      value: "DRO",
    },
    {
      label: "Dhareshwar",
      value: "DRS",
    },
    {
      label: "Dhurwasin",
      value: "DRSN",
    },
    {
      label: "Dasharathpur",
      value: "DRTP",
    },
    {
      label: "Kadur",
      value: "DRU",
    },
    {
      label: "Dharewada",
      value: "DRW",
    },
    {
      label: "Derowanp.h.",
      value: "DRWN",
    },
    {
      label: "Dallirajhara",
      value: "DRZ",
    },
    {
      label: "Dasna",
      value: "DS",
    },
    {
      label: "Sadarbazar",
      value: "DSB",
    },
    {
      label: "Dosvada",
      value: "DSD",
    },
    {
      label: "Delhi Safdarjang",
      value: "DSJ",
    },
    {
      label: "Duskheda",
      value: "DSK",
    },
    {
      label: "Deswal",
      value: "DSL",
    },
    {
      label: "Deshalpar",
      value: "DSLP",
    },
    {
      label: "Darasuram",
      value: "DSM",
    },
    {
      label: "Dausni",
      value: "DSNI",
    },
    {
      label: "Deshnok",
      value: "DSO",
    },
    {
      label: "Dalsinghsarai",
      value: "DSS",
    },
    {
      label: "Dhatrigram",
      value: "DTAE",
    },
    {
      label: "Ditokcherra",
      value: "DTC",
    },
    {
      label: "Detroj",
      value: "DTJ",
    },
    {
      label: "Darritola",
      value: "DTL",
    },
    {
      label: "Dhamtari",
      value: "DTR",
    },
    {
      label: "Dhutra",
      value: "DTV",
    },
    {
      label: "Dhaura",
      value: "DUA",
    },
    {
      label: "Dabtara",
      value: "DUB",
    },
    {
      label: "Dubaha",
      value: "DUBH",
    },
    {
      label: "Dudhani",
      value: "DUD",
    },
    {
      label: "Dubrajpur",
      value: "DUJ",
    },
    {
      label: "Duganpur",
      value: "DUN",
    },
    {
      label: "Desur",
      value: "DUR",
    },
    {
      label: "Dumraon",
      value: "DURE",
    },
    {
      label: "Dulrasar",
      value: "DUS",
    },
    {
      label: "Dusi",
      value: "DUSI",
    },
    {
      label: "Dumduma Town",
      value: "DUT",
    },
    {
      label: "Delvada",
      value: "DVA",
    },
    {
      label: "Duvvada",
      value: "DVD",
    },
    {
      label: "Devgam",
      value: "DVGM",
    },
    {
      label: "Doravartchtram",
      value: "DVR",
    },
    {
      label: "Devaliya",
      value: "DVY",
    },
    {
      label: "Dailwara",
      value: "DWA",
    },
    {
      label: "Dhekvad",
      value: "DWD",
    },
    {
      label: "Dewanganj",
      value: "DWG",
    },
    {
      label: "Dingwahi",
      value: "DWI",
    },
    {
      label: "Dwarkaganj",
      value: "DWJ",
    },
    {
      label: "Diwana",
      value: "DWNA",
    },
    {
      label: "Doiwala",
      value: "DWO",
    },
    {
      label: "Dwarapudi",
      value: "DWP",
    },
    {
      label: "Diwankhavati",
      value: "DWV",
    },
    {
      label: "Dewas",
      value: "DWX",
    },
    {
      label: "Dantewara",
      value: "DWZ",
    },
    {
      label: "Digod",
      value: "DXD",
    },
    {
      label: "Dharangaon",
      value: "DXG",
    },
    {
      label: "Duhai",
      value: "DXH",
    },
    {
      label: "Dhanakherli",
      value: "DXK",
    },
    {
      label: "Duddhinagar",
      value: "DXN",
    },
    {
      label: "Digsar",
      value: "DXR",
    },
    {
      label: "Dumariya",
      value: "DY",
    },
    {
      label: "Daryabad",
      value: "DYD",
    },
    {
      label: "Dudhia Khurd",
      value: "DYK",
    },
    {
      label: "Daryapur",
      value: "DYP",
    },
    {
      label: "Dasuya",
      value: "DZA",
    },
    {
      label: "Dahinazainabad",
      value: "DZB",
    },
    {
      label: "Durgachak Town",
      value: "DZKT",
    },
    {
      label: "Edduladoddi",
      value: "EDD",
    },
    {
      label: "Edamann",
      value: "EDN",
    },
    {
      label: "Ekchari",
      value: "EKC",
    },
    {
      label: "Ekambarakuppam",
      value: "EKM",
    },
    {
      label: "Ezhukone",
      value: "EKN",
    },
    {
      label: "Elamanur",
      value: "EL",
    },
    {
      label: "Elimala",
      value: "ELM",
    },
    {
      label: "Achalpur",
      value: "ELP",
    },
    {
      label: "Ekma",
      value: "EM",
    },
    {
      label: "Isand",
      value: "EN",
    },
    {
      label: "Ellenabad",
      value: "ENB",
    },
    {
      label: "Elphinston Road",
      value: "EPR",
    },
    {
      label: "Erich Road",
      value: "ERC",
    },
    {
      label: "Eraniel",
      value: "ERL",
    },
    {
      label: "Etah",
      value: "ETAH",
    },
    {
      label: "Ettumanur",
      value: "ETM",
    },
    {
      label: "Etmadpur",
      value: "ETUE",
    },
    {
      label: "Edavai",
      value: "EVA",
    },
    {
      label: "Falna",
      value: "FA",
    },
    {
      label: "Fatehnagar",
      value: "FAN",
    },
    {
      label: "Farrukhabad",
      value: "FBD",
    },
    {
      label: "Faridkot",
      value: "FDK",
    },
    {
      label: "Fatehgarh",
      value: "FGR",
    },
    {
      label: "Fatehgarhsahib",
      value: "FGSB",
    },
    {
      label: "Ferok",
      value: "FK",
    },
    {
      label: "Fakhrabad",
      value: "FKB",
    },
    {
      label: "Farakka",
      value: "FKK",
    },
    {
      label: "Fakiragram Jn.",
      value: "FKM",
    },
    {
      label: "Phulad",
      value: "FLD",
    },
    {
      label: "Falakata",
      value: "FLK",
    },
    {
      label: "Kcgfalaknuma",
      value: "FM",
    },
    {
      label: "Fatehpurskhwti",
      value: "FPS",
    },
    {
      label: "Farhedi",
      value: "FRD",
    },
    {
      label: "Fatehsinghpura",
      value: "FSP",
    },
    {
      label: "Fursatganj",
      value: "FTG",
    },
    {
      label: "Fatehpursikri",
      value: "FTS",
    },
    {
      label: "Faizullapur",
      value: "FYZ",
    },
    {
      label: "Fazalpur",
      value: "FZL",
    },
    {
      label: "Gudha",
      value: "GA",
    },
    {
      label: "Galan",
      value: "GAA",
    },
    {
      label: "Gevra Road",
      value: "GAD",
    },
    {
      label: "Gaipura",
      value: "GAE",
    },
    {
      label: "Gangaghat",
      value: "GAG",
    },
    {
      label: "Galgalia",
      value: "GAGA",
    },
    {
      label: "Ganeshganj",
      value: "GAJ",
    },
    {
      label: "Gajarabahara",
      value: "GAJB",
    },
    {
      label: "Gunadala",
      value: "GALA",
    },
    {
      label: "Gankar",
      value: "GALE",
    },
    {
      label: "Ganjam",
      value: "GAM",
    },
    {
      label: "Gogameri",
      value: "GAMI",
    },
    {
      label: "Gangaganj",
      value: "GANG",
    },
    {
      label: "Ghanauli",
      value: "GANL",
    },
    {
      label: "Gurpa",
      value: "GAP",
    },
    {
      label: "Gadarwara",
      value: "GAR",
    },
    {
      label: "Gavadaka",
      value: "GAV",
    },
    {
      label: "Gainjahwa",
      value: "GAW",
    },
    {
      label: "Gauribazar",
      value: "GB",
    },
    {
      label: "Garhbeta",
      value: "GBA",
    },
    {
      label: "Gubbi",
      value: "GBB",
    },
    {
      label: "Gauribidanur",
      value: "GBD",
    },
    {
      label: "Gayabari",
      value: "GBE",
    },
    {
      label: "Gulabpura",
      value: "GBP",
    },
    {
      label: "Gachhipura",
      value: "GCH",
    },
    {
      label: "Ghazipur City",
      value: "GCT",
    },
    {
      label: "Giddarbaha",
      value: "GDB",
    },
    {
      label: "Gadra Road",
      value: "GDD",
    },
    {
      label: "Garladinne",
      value: "GDE",
    },
    {
      label: "Godha",
      value: "GDHA",
    },
    {
      label: "Gudgeri",
      value: "GDI",
    },
    {
      label: "Gondal",
      value: "GDL",
    },
    {
      label: "Gudma",
      value: "GDM",
    },
    {
      label: "Gudupulli",
      value: "GDP",
    },
    {
      label: "Gpochampalli",
      value: "GDPL",
    },
    {
      label: "Gudaparti",
      value: "GDPT",
    },
    {
      label: "Gudivada Jn.",
      value: "GDVX",
    },
    {
      label: "Ghoksadanga",
      value: "GDX",
    },
    {
      label: "Ghoradongri",
      value: "GDYA",
    },
    {
      label: "Gundardehi",
      value: "GDZ",
    },
    {
      label: "Nagar",
      value: "GE",
    },
    {
      label: "Ghatera",
      value: "GEA",
    },
    {
      label: "Guledagudda Road",
      value: "GED",
    },
    {
      label: "Girgadhara",
      value: "GEG",
    },
    {
      label: "Geratpur",
      value: "GER",
    },
    {
      label: "Gandhigram",
      value: "GG",
    },
    {
      label: "Ghoga",
      value: "GGA",
    },
    {
      label: "Gangadhara",
      value: "GGAR",
    },
    {
      label: "Garhmuktesarbr",
      value: "GGB",
    },
    {
      label: "Gullaguda",
      value: "GGD",
    },
    {
      label: "Goshainganj",
      value: "GGJ",
    },
    {
      label: "Goraghuma",
      value: "GGM",
    },
    {
      label: "Gurgaon",
      value: "GGN",
    },
    {
      label: "Goramghat",
      value: "GGO",
    },
    {
      label: "Ghugus",
      value: "GGS",
    },
    {
      label: "Ghunghuti",
      value: "GGT",
    },
    {
      label: "Ghughuli",
      value: "GH",
    },
    {
      label: "Ghagghar",
      value: "GHG",
    },
    {
      label: "Ghagwal",
      value: "GHGL",
    },
    {
      label: "Garhiharsaru",
      value: "GHH",
    },
    {
      label: "Gursahaiganj",
      value: "GHJ",
    },
    {
      label: "Gadadharpur",
      value: "GHLE",
    },
    {
      label: "Gohana",
      value: "GHNA",
    },
    {
      label: "Ghantikhalndpr",
      value: "GHNH",
    },
    {
      label: "Garhwa",
      value: "GHQ",
    },
    {
      label: "Gidhaur",
      value: "GHR",
    },
    {
      label: "Ghum",
      value: "GHUM",
    },
    {
      label: "Garhara",
      value: "GHX",
    },
    {
      label: "Giddalur",
      value: "GID",
    },
    {
      label: "Gidni",
      value: "GII",
    },
    {
      label: "Gandhidhambg",
      value: "GIMB",
    },
    {
      label: "Ginigera",
      value: "GIN",
    },
    {
      label: "Goriyan",
      value: "GIO",
    },
    {
      label: "Gainsari Jn.",
      value: "GIR",
    },
    {
      label: "Gidam",
      value: "GIZ",
    },
    {
      label: "Gangajhari",
      value: "GJ",
    },
    {
      label: "Gujhandi",
      value: "GJD",
    },
    {
      label: "Gajjelakonda",
      value: "GJJ",
    },
    {
      label: "Ganjmuradabad",
      value: "GJMB",
    },
    {
      label: "Gangsarjaitu",
      value: "GJUT",
    },
    {
      label: "Ghatakavarana",
      value: "GKB",
    },
    {
      label: "Gorakhpur Cant.",
      value: "GKC",
    },
    {
      label: "Gadhakda",
      value: "GKD",
    },
    {
      label: "Guskara",
      value: "GKH",
    },
    {
      label: "Gokak Road",
      value: "GKK",
    },
    {
      label: "Gundalukamma",
      value: "GKM",
    },
    {
      label: "Ghaikalan",
      value: "GKX",
    },
    {
      label: "Gorakhpur City",
      value: "GKY",
    },
    {
      label: "Nagal",
      value: "GL",
    },
    {
      label: "Garla",
      value: "GLA",
    },
    {
      label: "Gulabhganj",
      value: "GLG",
    },
    {
      label: "Golaghat",
      value: "GLGT",
    },
    {
      label: "Gulaothi",
      value: "GLH",
    },
    {
      label: "Gollaprolu",
      value: "GLP",
    },
    {
      label: "Gullipadu",
      value: "GLU",
    },
    {
      label: "Gollapally",
      value: "GLY",
    },
    {
      label: "Goregaon",
      value: "GM",
    },
    {
      label: "Gumani",
      value: "GMAN",
    },
    {
      label: "Guramkhedi",
      value: "GMD",
    },
    {
      label: "Gumada",
      value: "GMDA",
    },
    {
      label: "Girimaidan",
      value: "GMDN",
    },
    {
      label: "Gamharia",
      value: "GMH",
    },
    {
      label: "Gumia",
      value: "GMIA",
    },
    {
      label: "Gumman",
      value: "GMM",
    },
    {
      label: "Gahmar",
      value: "GMR",
    },
    {
      label: "Garhmuktesar",
      value: "GMS",
    },
    {
      label: "Gauriyamau",
      value: "GMU",
    },
    {
      label: "Gurmura",
      value: "GMX",
    },
    {
      label: "Goneana",
      value: "GNA",
    },
    {
      label: "Gandhinagarcap",
      value: "GNC",
    },
    {
      label: "Govindgarhmalk",
      value: "GND",
    },
    {
      label: "Gauriganj",
      value: "GNG",
    },
    {
      label: "Gangadharpur",
      value: "GNGD",
    },
    {
      label: "Gangatolia",
      value: "GNGT",
    },
    {
      label: "Gangakher",
      value: "GNH",
    },
    {
      label: "Gunji",
      value: "GNJ",
    },
    {
      label: "Gangani",
      value: "GNNA",
    },
    {
      label: "Goregaon Road",
      value: "GNO",
    },
    {
      label: "Ghanpur",
      value: "GNP",
    },
    {
      label: "Gadiganuru",
      value: "GNR",
    },
    {
      label: "Ghonsor",
      value: "GNS",
    },
    {
      label: "Ganaur",
      value: "GNU",
    },
    {
      label: "Gangiwara",
      value: "GNW",
    },
    {
      label: "Ponmlaigldrck",
      value: "GOC",
    },
    {
      label: "Gidarpindi",
      value: "GOD",
    },
    {
      label: "Garot",
      value: "GOH",
    },
    {
      label: "Gevrai",
      value: "GOI",
    },
    {
      label: "Gokarna Road",
      value: "GOK",
    },
    {
      label: "Goilkera",
      value: "GOL",
    },
    {
      label: "Gole",
      value: "GOLE",
    },
    {
      label: "Gogamukh",
      value: "GOM",
    },
    {
      label: "Gotegaon",
      value: "GON",
    },
    {
      label: "Gopjam",
      value: "GOP",
    },
    {
      label: "Ghosipura",
      value: "GOPA",
    },
    {
      label: "Gopalganj",
      value: "GOPG",
    },
    {
      label: "Gotan",
      value: "GOTN",
    },
    {
      label: "Govindpuri",
      value: "GOV",
    },
    {
      label: "Govindnagar",
      value: "GOVR",
    },
    {
      label: "Govindpuri",
      value: "GOY",
    },
    {
      label: "Golsar",
      value: "GOZ",
    },
    {
      label: "Rajgangpur",
      value: "GP",
    },
    {
      label: "Guptipara",
      value: "GPAE",
    },
    {
      label: "Ghatprabha",
      value: "GPB",
    },
    {
      label: "Gummidipundi",
      value: "GPD",
    },
    {
      label: "Gauriphanta",
      value: "GPF",
    },
    {
      label: "Garpos",
      value: "GPH",
    },
    {
      label: "Gajapatinagaram",
      value: "GPI",
    },
    {
      label: "Gorapur",
      value: "GPJ",
    },
    {
      label: "Gopalpur",
      value: "GPPR",
    },
    {
      label: "Ghorpuri",
      value: "GPR",
    },
    {
      label: "Gulapalyamu",
      value: "GPU",
    },
    {
      label: "Gautampura Road",
      value: "GPX",
    },
    {
      label: "Gohpur",
      value: "GPZ",
    },
    {
      label: "Gurla",
      value: "GQL",
    },
    {
      label: "Gharaunda",
      value: "GRA",
    },
    {
      label: "Garhdhrubeswar",
      value: "GRB",
    },
    {
      label: "Garudubilli",
      value: "GRBL",
    },
    {
      label: "Giridih",
      value: "GRD",
    },
    {
      label: "Gambhiri Road",
      value: "GRF",
    },
    {
      label: "Guwarighat",
      value: "GRG",
    },
    {
      label: "Ghorasahan",
      value: "GRH",
    },
    {
      label: "Girhadmatiya",
      value: "GRHM",
    },
    {
      label: "Guriya",
      value: "GRI",
    },
    {
      label: "Goraul",
      value: "GRL",
    },
    {
      label: "Garhmau",
      value: "GRM",
    },
    {
      label: "Garhimanikpur",
      value: "GRMR",
    },
    {
      label: "Gurra",
      value: "GRO",
    },
    {
      label: "Gurliramgarhwa",
      value: "GRRG",
    },
    {
      label: "Guraru",
      value: "GRRU",
    },
    {
      label: "Ghorawadi",
      value: "GRWD",
    },
    {
      label: "Gaura",
      value: "GRX",
    },
    {
      label: "Goraya",
      value: "GRY",
    },
    {
      label: "Ghosunda",
      value: "GSD",
    },
    {
      label: "Ghosi",
      value: "GSI",
    },
    {
      label: "Ghaso",
      value: "GSO",
    },
    {
      label: "Gurdaspur",
      value: "GSP",
    },
    {
      label: "Gosalpur",
      value: "GSPR",
    },
    {
      label: "Gursarshnewala",
      value: "GSW",
    },
    {
      label: "Gandhismrak Road",
      value: "GSX",
    },
    {
      label: "Golanthra",
      value: "GTA",
    },
    {
      label: "Gothaj",
      value: "GTE",
    },
    {
      label: "Gumthal",
      value: "GTF",
    },
    {
      label: "Ghutai",
      value: "GTI",
    },
    {
      label: "Getorjagatpura",
      value: "GTJT",
    },
    {
      label: "Ghutku",
      value: "GTK",
    },
    {
      label: "Geritakolvada",
      value: "GTKD",
    },
    {
      label: "Gotlam",
      value: "GTLM",
    },
    {
      label: "Ghatampur",
      value: "GTM",
    },
    {
      label: "Gomtinagar",
      value: "GTNR",
    },
    {
      label: "Grant Road",
      value: "GTR",
    },
    {
      label: "Gomta",
      value: "GTT",
    },
    {
      label: "Ghatnandur",
      value: "GTU",
    },
    {
      label: "Gatora",
      value: "GTW",
    },
    {
      label: "Gothangam",
      value: "GTX",
    },
    {
      label: "Gularbhoj",
      value: "GUB",
    },
    {
      label: "Galudih",
      value: "GUD",
    },
    {
      label: "Guldhar",
      value: "GUH",
    },
    {
      label: "Guler",
      value: "GULR",
    },
    {
      label: "Gummanur",
      value: "GUM",
    },
    {
      label: "Guma",
      value: "GUMA",
    },
    {
      label: "Ganagapur Road",
      value: "GUR",
    },
    {
      label: "Gurhi",
      value: "GUX",
    },
    {
      label: "Gunerubamori",
      value: "GVB",
    },
    {
      label: "Gholvad",
      value: "GVD",
    },
    {
      label: "Govindgarh",
      value: "GVG",
    },
    {
      label: "Garividi",
      value: "GVI",
    },
    {
      label: "Gudlavalleru",
      value: "GVL",
    },
    {
      label: "Govindimarwar",
      value: "GVMR",
    },
    {
      label: "Godavari",
      value: "GVN",
    },
    {
      label: "Goresuar",
      value: "GVR",
    },
    {
      label: "Girwar",
      value: "GW",
    },
    {
      label: "Ganjdundwara",
      value: "GWA",
    },
    {
      label: "Gadwal",
      value: "GWD",
    },
    {
      label: "Gannavaram",
      value: "GWM",
    },
    {
      label: "Gaushala",
      value: "GWS",
    },
    {
      label: "Gowdavalli",
      value: "GWV",
    },
    {
      label: "Gudiyattam",
      value: "GYM",
    },
    {
      label: "Gulzarbagh",
      value: "GZH",
    },
    {
      label: "Gazulapalli",
      value: "GZL",
    },
    {
      label: "Gourmalda",
      value: "GZM",
    },
    {
      label: "Nghaziabad",
      value: "GZN",
    },
    {
      label: "Harwada",
      value: "HAA",
    },
    {
      label: "Harippad",
      value: "HAD",
    },
    {
      label: "Hindaun City",
      value: "HAN",
    },
    {
      label: "Hamirpur Road",
      value: "HAR",
    },
    {
      label: "Hassan",
      value: "HAS",
    },
    {
      label: "Hathuran",
      value: "HAT",
    },
    {
      label: "Hautley",
      value: "HAY",
    },
    {
      label: "Habibwala",
      value: "HBW",
    },
    {
      label: "Harchandpur",
      value: "HCP",
    },
    {
      label: "Harischandrpur",
      value: "HCR",
    },
    {
      label: "Hirnoda",
      value: "HDA",
    },
    {
      label: "Haddinagundu",
      value: "HDD",
    },
    {
      label: "Handiakhas",
      value: "HDK",
    },
    {
      label: "Hodal",
      value: "HDL",
    },
    {
      label: "Haidarnagar",
      value: "HDN",
    },
    {
      label: "Hadapsar",
      value: "HDP",
    },
    {
      label: "Haridaspur",
      value: "HDS",
    },
    {
      label: "Hardua",
      value: "HDU",
    },
    {
      label: "Haldwani",
      value: "HDW",
    },
    {
      label: "Himayatnagar",
      value: "HEM",
    },
    {
      label: "Her",
      value: "HER",
    },
    {
      label: "Haflonghill",
      value: "HFG",
    },
    {
      label: "Hafizpeta",
      value: "HFZ",
    },
    {
      label: "Hotgi",
      value: "HG",
    },
    {
      label: "Haidergarh",
      value: "HGH",
    },
    {
      label: "Hagari",
      value: "HGI",
    },
    {
      label: "Harduaganj",
      value: "HGJ",
    },
    {
      label: "Hemagiri",
      value: "HGR",
    },
    {
      label: "Hinganghat",
      value: "HGT",
    },
    {
      label: "Hooghly",
      value: "HGY",
    },
    {
      label: "Harinagar",
      value: "HIR",
    },
    {
      label: "Hojai",
      value: "HJI",
    },
    {
      label: "Hejjala",
      value: "HJL",
    },
    {
      label: "Hugrajuli",
      value: "HJLI",
    },
    {
      label: "Harangajao",
      value: "HJO",
    },
    {
      label: "Helak",
      value: "HK",
    },
    {
      label: "Hirakud",
      value: "HKG",
    },
    {
      label: "Haranyakheri",
      value: "HKH",
    },
    {
      label: "Harkiakhal",
      value: "HKL",
    },
    {
      label: "Hakimpur",
      value: "HKP",
    },
    {
      label: "Kiwarkhed",
      value: "HKR",
    },
    {
      label: "Holealur",
      value: "HLAR",
    },
    {
      label: "Haldi Road",
      value: "HLDD",
    },
    {
      label: "Haldaur",
      value: "HLDR",
    },
    {
      label: "Hilligrove",
      value: "HLG",
    },
    {
      label: "Holalkere",
      value: "HLK",
    },
    {
      label: "Halakatta",
      value: "HLKT",
    },
    {
      label: "Holenarsipur",
      value: "HLN",
    },
    {
      label: "Halisahar",
      value: "HLR",
    },
    {
      label: "Hadmatiya Jn.",
      value: "HM",
    },
    {
      label: "Hamirgarh",
      value: "HMG",
    },
    {
      label: "Hindumalkote",
      value: "HMK",
    },
    {
      label: "Helem",
      value: "HML",
    },
    {
      label: "Hanumangarh Town",
      value: "HMO",
    },
    {
      label: "Hempur",
      value: "HMP",
    },
    {
      label: "Hamarpur",
      value: "HMPR",
    },
    {
      label: "Hamira",
      value: "HMR",
    },
    {
      label: "Harmuti",
      value: "HMY",
    },
    {
      label: "Hathbandh",
      value: "HN",
    },
    {
      label: "Honnavar",
      value: "HNA",
    },
    {
      label: "Hendegir",
      value: "HNDR",
    },
    {
      label: "Hanakere",
      value: "HNK",
    },
    {
      label: "Hansi",
      value: "HNS",
    },
    {
      label: "Hol",
      value: "HOL",
    },
    {
      label: "Haripur",
      value: "HP",
    },
    {
      label: "Hasanpur Road",
      value: "HPO",
    },
    {
      label: "Hirapur",
      value: "HPR",
    },
    {
      label: "Harri",
      value: "HRB",
    },
    {
      label: "Harsud",
      value: "HRD",
    },
    {
      label: "Hirdagarh",
      value: "HRG",
    },
    {
      label: "Harthala",
      value: "HRH",
    },
    {
      label: "Hardoi",
      value: "HRI",
    },
    {
      label: "Hadmadiya",
      value: "HRM",
    },
    {
      label: "Harauni",
      value: "HRN",
    },
    {
      label: "Hiranagar",
      value: "HRNR",
    },
    {
      label: "Harpalganj",
      value: "HRPG",
    },
    {
      label: "Hathras Jn.",
      value: "HRS",
    },
    {
      label: "Harisinga",
      value: "HRSN",
    },
    {
      label: "Harnaut",
      value: "HRT",
    },
    {
      label: "Harrad",
      value: "HRV",
    },
    {
      label: "Harrawala",
      value: "HRW",
    },
    {
      label: "Hosdurga Road",
      value: "HSD",
    },
    {
      label: "Harsauli",
      value: "HSI",
    },
    {
      label: "Harishanker Road",
      value: "HSK",
    },
    {
      label: "Hisvahal",
      value: "HSL",
    },
    {
      label: "Husainpur",
      value: "HSQ",
    },
    {
      label: "Hoshiarpur",
      value: "HSX",
    },
    {
      label: "Hathras City",
      value: "HTC",
    },
    {
      label: "Hatundi",
      value: "HTD",
    },
    {
      label: "Hathigadh",
      value: "HTGR",
    },
    {
      label: "Hathras Road",
      value: "HTJ",
    },
    {
      label: "Hatkalangda",
      value: "HTK",
    },
    {
      label: "Hatikhali",
      value: "HTL",
    },
    {
      label: "Hatra Road",
      value: "HTT",
    },
    {
      label: "Hathidah Jn.",
      value: "HTZ",
    },
    {
      label: "Holambikalan",
      value: "HUK",
    },
    {
      label: "Halvad",
      value: "HVD",
    },
    {
      label: "Hamsavaram",
      value: "HVM",
    },
    {
      label: "Haveri",
      value: "HVR",
    },
    {
      label: "Hooghly Ghat",
      value: "HYG",
    },
    {
      label: "Hadyal",
      value: "HYL",
    },
    {
      label: "Haiaghat",
      value: "HYT",
    },
    {
      label: "Hazaribagh Road",
      value: "HZD",
    },
    {
      label: "Hafizpur",
      value: "HZR",
    },
    {
      label: "Ib",
      value: "IB",
    },
    {
      label: "Indrabil",
      value: "IBL",
    },
    {
      label: "Ichauli",
      value: "ICL",
    },
    {
      label: "Idar",
      value: "IDAR",
    },
    {
      label: "Indargarh",
      value: "IDG",
    },
    {
      label: "Idgahagra Jn.",
      value: "IDH",
    },
    {
      label: "Idalhond",
      value: "IDJ",
    },
    {
      label: "Indalvai",
      value: "IDL",
    },
    {
      label: "Indupalli",
      value: "IDP",
    },
    {
      label: "Indi Road",
      value: "IDR",
    },
    {
      label: "Inchhapuri",
      value: "IHP",
    },
    {
      label: "Irinjalakuda",
      value: "IJK",
    },
    {
      label: "Ikkar",
      value: "IKK",
    },
    {
      label: "Iklehra",
      value: "IKR",
    },
    {
      label: "Silsiman",
      value: "ILA",
    },
    {
      label: "Indore Jn. MG",
      value: "INDM",
    },
    {
      label: "Innanje",
      value: "INJ",
    },
    {
      label: "Indapur",
      value: "INP",
    },
    {
      label: "Idappalli",
      value: "IPL",
    },
    {
      label: "Ichchpuram",
      value: "IPM",
    },
    {
      label: "Ipurupalem",
      value: "IPPM",
    },
    {
      label: "Iqbalpur",
      value: "IQB",
    },
    {
      label: "Iqbalgadh",
      value: "IQG",
    },
    {
      label: "Iravipuram",
      value: "IRP",
    },
    {
      label: "Isarda",
      value: "ISA",
    },
    {
      label: "Isarwara",
      value: "ISH",
    },
    {
      label: "Ismailaharyana",
      value: "ISM",
    },
    {
      label: "Itola",
      value: "ITA",
    },
    {
      label: "Intiyathok",
      value: "ITE",
    },
    {
      label: "Itwari",
      value: "ITR",
    },
    {
      label: "Izzatnagar",
      value: "IZN",
    },
    {
      label: "Jaliya",
      value: "JA",
    },
    {
      label: "Jhalida",
      value: "JAA",
    },
    {
      label: "Yamunabdgagra",
      value: "JAB",
    },
    {
      label: "Jalsu",
      value: "JAC",
    },
    {
      label: "Jalsunanak",
      value: "JACN",
    },
    {
      label: "Jadar",
      value: "JADR",
    },
    {
      label: "Jais",
      value: "JAIS",
    },
    {
      label: "Jawali",
      value: "JAL",
    },
    {
      label: "Jaliyadevani",
      value: "JALD",
    },
    {
      label: "Jarangdih",
      value: "JAN",
    },
    {
      label: "Jaora",
      value: "JAO",
    },
    {
      label: "Jandrapeta",
      value: "JAQ",
    },
    {
      label: "Jari",
      value: "JARI",
    },
    {
      label: "Jarwa",
      value: "JAW",
    },
    {
      label: "Jambur",
      value: "JBB",
    },
    {
      label: "Jungbahadurgnj",
      value: "JBG",
    },
    {
      label: "Jgmblakshnprm",
      value: "JBK",
    },
    {
      label: "Jabli",
      value: "JBL",
    },
    {
      label: "Jabri",
      value: "JBX",
    },
    {
      label: "Jethachndan",
      value: "JCH",
    },
    {
      label: "Jadcherla",
      value: "JCL",
    },
    {
      label: "Junichavand",
      value: "JCN",
    },
    {
      label: "Jagdalpur",
      value: "JDB",
    },
    {
      label: "Jamjodhpur Jn.",
      value: "JDH",
    },
    {
      label: "Jharradih",
      value: "JDI",
    },
    {
      label: "Jagdevwala",
      value: "JDL",
    },
    {
      label: "Jagudan",
      value: "JDN",
    },
    {
      label: "Jogindrnagaroa",
      value: "JDNA",
    },
    {
      label: "Jogindernagar",
      value: "JDNX",
    },
    {
      label: "Jiwdhara",
      value: "JDR",
    },
    {
      label: "Jarudanaraa",
      value: "JDW",
    },
    {
      label: "Jenapur",
      value: "JEN",
    },
    {
      label: "Jeonathpur",
      value: "JEP",
    },
    {
      label: "Jaleswar",
      value: "JER",
    },
    {
      label: "Jaitsar",
      value: "JES",
    },
    {
      label: "Jeur",
      value: "JEUR",
    },
    {
      label: "Jagadishpur",
      value: "JGD",
    },
    {
      label: "Jgnthtmplgte",
      value: "JGE",
    },
    {
      label: "Jogidih",
      value: "JGF",
    },
    {
      label: "Jhagadiya Jn.",
      value: "JGI",
    },
    {
      label: "Jagesharganj",
      value: "JGJ",
    },
    {
      label: "Jagraon",
      value: "JGN",
    },
    {
      label: "Jaswantnagar",
      value: "JGR",
    },
    {
      label: "Jogiwala",
      value: "JGW",
    },
    {
      label: "Jakhaura",
      value: "JHA",
    },
    {
      label: "Jhar",
      value: "JHAR",
    },
    {
      label: "Jehanabad",
      value: "JHD",
    },
    {
      label: "Jhingura",
      value: "JHG",
    },
    {
      label: "Jhimri",
      value: "JHMR",
    },
    {
      label: "Jakhim",
      value: "JHN",
    },
    {
      label: "Jhalawar Road",
      value: "JHW",
    },
    {
      label: "Jigna",
      value: "JIA",
    },
    {
      label: "Jagi Road",
      value: "JID",
    },
    {
      label: "Jalila Road",
      value: "JIL",
    },
    {
      label: "Jira Road",
      value: "JIR",
    },
    {
      label: "Jirat",
      value: "JIT",
    },
    {
      label: "Jiaganj",
      value: "JJG",
    },
    {
      label: "Jhinjhak",
      value: "JJK",
    },
    {
      label: "Jhunjhunun",
      value: "JJN",
    },
    {
      label: "Jhanjharpur",
      value: "JJP",
    },
    {
      label: "Jejuri",
      value: "JJR",
    },
    {
      label: "Jakhvada",
      value: "JKA",
    },
    {
      label: "Jukehi",
      value: "JKE",
    },
    {
      label: "Jahanikhera",
      value: "JKH",
    },
    {
      label: "Jankampet Jn.",
      value: "JKM",
    },
    {
      label: "Jakhanian",
      value: "JKN",
    },
    {
      label: "Jakhapura",
      value: "JKPR",
    },
    {
      label: "Jaksi",
      value: "JKS",
    },
    {
      label: "Jarwal Road",
      value: "JLD",
    },
    {
      label: "Jalalganj",
      value: "JLL",
    },
    {
      label: "Jakhalaun",
      value: "JLN",
    },
    {
      label: "Jalesar Road",
      value: "JLS",
    },
    {
      label: "Jhamat",
      value: "JLT",
    },
    {
      label: "Jhalwara",
      value: "JLW",
    },
    {
      label: "Jhilmili",
      value: "JLY",
    },
    {
      label: "Jamdha",
      value: "JMD",
    },
    {
      label: "Jamga",
      value: "JMG",
    },
    {
      label: "Jamunamukh",
      value: "JMK",
    },
    {
      label: "Jamuniakalan",
      value: "JMKL",
    },
    {
      label: "Jawlmukhi Road",
      value: "JMKR",
    },
    {
      label: "Jamikunta",
      value: "JMKT",
    },
    {
      label: "Jimidipeta",
      value: "JMPT",
    },
    {
      label: "Jamirghata",
      value: "JMQ",
    },
    {
      label: "Jamsar",
      value: "JMS",
    },
    {
      label: "Jamtara",
      value: "JMT",
    },
    {
      label: "Jamui",
      value: "JMU",
    },
    {
      label: "Jambara",
      value: "JMV",
    },
    {
      label: "Jhund",
      value: "JN",
    },
    {
      label: "Julana",
      value: "JNA",
    },
    {
      label: "Junagadhcb",
      value: "JNDC",
    },
    {
      label: "Janiyana",
      value: "JNE",
    },
    {
      label: "Janakinagar",
      value: "JNKR",
    },
    {
      label: "Jandiala",
      value: "JNL",
    },
    {
      label: "Jayngrmajlipur",
      value: "JNM",
    },
    {
      label: "Junnordeo",
      value: "JNO",
    },
    {
      label: "Janakpur Road",
      value: "JNR",
    },
    {
      label: "Jinti Road",
      value: "JNTR",
    },
    {
      label: "Jenal",
      value: "JNZ",
    },
    {
      label: "Jojagabor",
      value: "JO",
    },
    {
      label: "Janwal",
      value: "JOA",
    },
    {
      label: "Asalpurjobner",
      value: "JOB",
    },
    {
      label: "Joba",
      value: "JOBA",
    },
    {
      label: "Joychandipahar",
      value: "JOC",
    },
    {
      label: "Jogimagra",
      value: "JOM",
    },
    {
      label: "Jonha",
      value: "JON",
    },
    {
      label: "Jaunpur City",
      value: "JOP",
    },
    {
      label: "Jorai",
      value: "JOQ",
    },
    {
      label: "Jalor",
      value: "JOR",
    },
    {
      label: "Jogeshwari",
      value: "JOS",
    },
    {
      label: "Jalalpurdhai",
      value: "JPD",
    },
    {
      label: "Jalpaiguri Road",
      value: "JPE",
    },
    {
      label: "Jhantipahari",
      value: "JPH",
    },
    {
      label: "Jhadupudi",
      value: "JPI",
    },
    {
      label: "Japla",
      value: "JPL",
    },
    {
      label: "Jiyapuram",
      value: "JPM",
    },
    {
      label: "Jogighopa",
      value: "JPZ",
    },
    {
      label: "Jaraikela",
      value: "JRA",
    },
    {
      label: "Jharia",
      value: "JRI",
    },
    {
      label: "Jargaon",
      value: "JRJ",
    },
    {
      label: "Jeruwakhera",
      value: "JRK",
    },
    {
      label: "Jangipur Road",
      value: "JRLE",
    },
    {
      label: "Jairamnagar",
      value: "JRMG",
    },
    {
      label: "Jiron",
      value: "JRO",
    },
    {
      label: "Jharokhas",
      value: "JRQ",
    },
    {
      label: "Joravasan",
      value: "JRS",
    },
    {
      label: "Jarti",
      value: "JRT",
    },
    {
      label: "Juriagaon",
      value: "JRX",
    },
    {
      label: "Jasai",
      value: "JSA",
    },
    {
      label: "Jaswantgarh",
      value: "JSH",
    },
    {
      label: "Jasali",
      value: "JSI",
    },
    {
      label: "Jataulasamphka",
      value: "JSKA",
    },
    {
      label: "Jayasingpur",
      value: "JSP",
    },
    {
      label: "Jasra",
      value: "JSR",
    },
    {
      label: "Jarandeshwar",
      value: "JSV",
    },
    {
      label: "Jagatbela",
      value: "JTB",
    },
    {
      label: "Jatinga",
      value: "JTG",
    },
    {
      label: "Jaithari",
      value: "JTI",
    },
    {
      label: "Jhapaterdhal",
      value: "JTL",
    },
    {
      label: "Jotana",
      value: "JTN",
    },
    {
      label: "Jutogh",
      value: "JTO",
    },
    {
      label: "Jetpur",
      value: "JTP",
    },
    {
      label: "Jatkanhar",
      value: "JTR",
    },
    {
      label: "Jath Road",
      value: "JTRD",
    },
    {
      label: "Jorhat Town",
      value: "JTTN",
    },
    {
      label: "Jaitipur",
      value: "JTU",
    },
    {
      label: "Jetalvad",
      value: "JTV",
    },
    {
      label: "Jaitwar",
      value: "JTW",
    },
    {
      label: "Jatpipli",
      value: "JTX",
    },
    {
      label: "Jagadhri",
      value: "JUD",
    },
    {
      label: "Jagadhriwshop",
      value: "JUDW",
    },
    {
      label: "Jaulka",
      value: "JUK",
    },
    {
      label: "Jhulasan",
      value: "JUL",
    },
    {
      label: "Jhunpa",
      value: "JUP",
    },
    {
      label: "Javale",
      value: "JVA",
    },
    {
      label: "Jamwala",
      value: "JVL",
    },
    {
      label: "Jorawarnagar Jn.",
      value: "JVN",
    },
    {
      label: "Jawaibandh",
      value: "JWB",
    },
    {
      label: "Jajiwal",
      value: "JWL",
    },
    {
      label: "Jawad Road",
      value: "JWO",
    },
    {
      label: "Jwalapur",
      value: "JWP",
    },
    {
      label: "Jonekarrang",
      value: "JYK",
    },
    {
      label: "Jaisamand Road",
      value: "JYM",
    },
    {
      label: "Jeypore",
      value: "JYP",
    },
    {
      label: "Khandala",
      value: "KAD",
    },
    {
      label: "Kadi",
      value: "KADI",
    },
    {
      label: "Kodaganur",
      value: "KAG",
    },
    {
      label: "Kalhar",
      value: "KAH",
    },
    {
      label: "Kallal",
      value: "KAL",
    },
    {
      label: "Kudal",
      value: "KALD",
    },
    {
      label: "Kalay",
      value: "KALE",
    },
    {
      label: "Kalana",
      value: "KALN",
    },
    {
      label: "Kamakhyaguri",
      value: "KAMG",
    },
    {
      label: "Khana Jn.",
      value: "KAN",
    },
    {
      label: "Kanil",
      value: "KANJ",
    },
    {
      label: "Kanoh",
      value: "KANO",
    },
    {
      label: "Kansiyanes",
      value: "KANS",
    },
    {
      label: "Kaluparaghat",
      value: "KAPG",
    },
    {
      label: "Kolanukonda",
      value: "KAQ",
    },
    {
      label: "Karna",
      value: "KAR",
    },
    {
      label: "Kiratpursahib",
      value: "KART",
    },
    {
      label: "Kanas Road",
      value: "KASR",
    },
    {
      label: "Kasu",
      value: "KASU",
    },
    {
      label: "Khatauli",
      value: "KAT",
    },
    {
      label: "Katili",
      value: "KATA",
    },
    {
      label: "Katol",
      value: "KATL",
    },
    {
      label: "Katariya",
      value: "KATR",
    },
    {
      label: "Kalamna",
      value: "KAV",
    },
    {
      label: "Kanwat",
      value: "KAWT",
    },
    {
      label: "Kurabalakota",
      value: "KBA",
    },
    {
      label: "Kurebhar",
      value: "KBE",
    },
    {
      label: "Khandbaara",
      value: "KBH",
    },
    {
      label: "Kambrganvi",
      value: "KBI",
    },
    {
      label: "Kantabanji",
      value: "KBJ",
    },
    {
      label: "Khamilghat",
      value: "KBK",
    },
    {
      label: "Koppal",
      value: "KBL",
    },
    {
      label: "Kotabommali",
      value: "KBM",
    },
    {
      label: "Karbigwan",
      value: "KBN",
    },
    {
      label: "Kabakaputtur",
      value: "KBPR",
    },
    {
      label: "Kumrabadrohini",
      value: "KBQ",
    },
    {
      label: "Kabrai",
      value: "KBR",
    },
    {
      label: "Kanjariboriyav",
      value: "KBRV",
    },
    {
      label: "Khoirabari",
      value: "KBY",
    },
    {
      label: "Kuchman",
      value: "KCA",
    },
    {
      label: "Krishnacanal",
      value: "KCC",
    },
    {
      label: "Kurichedu",
      value: "KCD",
    },
    {
      label: "Kasimkota Halt",
      value: "KCH",
    },
    {
      label: "Kallkiri",
      value: "KCI",
    },
    {
      label: "Kasimpur",
      value: "KCJ",
    },
    {
      label: "Keckhi",
      value: "KCKI",
    },
    {
      label: "Kalasumudram",
      value: "KCM",
    },
    {
      label: "Karchana",
      value: "KCN",
    },
    {
      label: "Kachnara Road",
      value: "KCNR",
    },
    {
      label: "Kalgupur",
      value: "KCP",
    },
    {
      label: "Kundarkhi",
      value: "KD",
    },
    {
      label: "Khedbrahma",
      value: "KDBM",
    },
    {
      label: "Sanvardamcrchm",
      value: "KDCR",
    },
    {
      label: "Koradacheri",
      value: "KDE",
    },
    {
      label: "Khundaur",
      value: "KDF",
    },
    {
      label: "Kedgaon",
      value: "KDG",
    },
    {
      label: "Karchha",
      value: "KDHA",
    },
    {
      label: "Kundli",
      value: "KDI",
    },
    {
      label: "Kankroli",
      value: "KDL",
    },
    {
      label: "Kundalgarh",
      value: "KDLG",
    },
    {
      label: "Kandlaport",
      value: "KDLP",
    },
    {
      label: "Kandel Road",
      value: "KDLR",
    },
    {
      label: "Kesamudram",
      value: "KDM",
    },
    {
      label: "Kodiyarmandir",
      value: "KDMR",
    },
    {
      label: "Kudatini",
      value: "KDN",
    },
    {
      label: "Kadaynallur",
      value: "KDNL",
    },
    {
      label: "Kondapuram",
      value: "KDP",
    },
    {
      label: "Kumedpur",
      value: "KDPR",
    },
    {
      label: "Kadipur",
      value: "KDQ",
    },
    {
      label: "Khadarpett",
      value: "KDT",
    },
    {
      label: "Kirodimalnagar",
      value: "KDTR",
    },
    {
      label: "Kadambur",
      value: "KDU",
    },
    {
      label: "Kandaghat",
      value: "KDZ",
    },
    {
      label: "Katra",
      value: "KEA",
    },
    {
      label: "Karambeli",
      value: "KEB",
    },
    {
      label: "Kenduapada",
      value: "KED",
    },
    {
      label: "Krishnamakona",
      value: "KEF",
    },
    {
      label: "Karengi",
      value: "KEG",
    },
    {
      label: "Kapseti",
      value: "KEH",
    },
    {
      label: "Kashi",
      value: "KEI",
    },
    {
      label: "Kathleeghat",
      value: "KEJ",
    },
    {
      label: "Karkheli",
      value: "KEK",
    },
    {
      label: "Kem",
      value: "KEM",
    },
    {
      label: "Kukma",
      value: "KEMA",
    },
    {
      label: "Kotala",
      value: "KEN",
    },
    {
      label: "Koiripur",
      value: "KEPR",
    },
    {
      label: "Kirihrapur",
      value: "KER",
    },
    {
      label: "Kesrisinghpur",
      value: "KESR",
    },
    {
      label: "Koparia",
      value: "KFA",
    },
    {
      label: "Karanjadi",
      value: "KFD",
    },
    {
      label: "Kolda",
      value: "KFF",
    },
    {
      label: "Kappil",
      value: "KFI",
    },
    {
      label: "Kukrakhapa",
      value: "KFP",
    },
    {
      label: "Kafurpur",
      value: "KFPR",
    },
    {
      label: "Kajri",
      value: "KFT",
    },
    {
      label: "Kohand",
      value: "KFU",
    },
    {
      label: "Khaga",
      value: "KGA",
    },
    {
      label: "Kargi Road",
      value: "KGB",
    },
    {
      label: "Kalligudi",
      value: "KGD",
    },
    {
      label: "Katangi",
      value: "KGE",
    },
    {
      label: "Kathghar",
      value: "KGF",
    },
    {
      label: "Kengeri",
      value: "KGI",
    },
    {
      label: "Kupgal",
      value: "KGL",
    },
    {
      label: "Khagraghat Road",
      value: "KGLE",
    },
    {
      label: "Kangramandir",
      value: "KGMR",
    },
    {
      label: "Kurseong",
      value: "KGN",
    },
    {
      label: "Kangra",
      value: "KGRA",
    },
    {
      label: "Khongsara",
      value: "KGS",
    },
    {
      label: "Kauriyalaghath",
      value: "KGT",
    },
    {
      label: "Kariganuru",
      value: "KGW",
    },
    {
      label: "Kanginhal",
      value: "KGX",
    },
    {
      label: "Karunguzhi",
      value: "KGZ",
    },
    {
      label: "Kahiliya",
      value: "KH",
    },
    {
      label: "Khat",
      value: "KHAT",
    },
    {
      label: "Khannabanjari",
      value: "KHBJ",
    },
    {
      label: "Khorana",
      value: "KHC",
    },
    {
      label: "Khinchan",
      value: "KHCN",
    },
    {
      label: "Khodiyar",
      value: "KHD",
    },
    {
      label: "Kankather",
      value: "KHE",
    },
    {
      label: "Khed",
      value: "KHED",
    },
    {
      label: "Kichha",
      value: "KHH",
    },
    {
      label: "Khajraha",
      value: "KHJ",
    },
    {
      label: "Kherakalan",
      value: "KHKN",
    },
    {
      label: "Kusmhi",
      value: "KHM",
    },
    {
      label: "Khatima",
      value: "KHMA",
    },
    {
      label: "Khanyan",
      value: "KHN",
    },
    {
      label: "Kundaharnamgnj",
      value: "KHNM",
    },
    {
      label: "Khopoli",
      value: "KHPI",
    },
    {
      label: "Khalipali",
      value: "KHPL",
    },
    {
      label: "Kharik",
      value: "KHQ",
    },
    {
      label: "Khar Road",
      value: "KHR",
    },
    {
      label: "Kumbhraj",
      value: "KHRJ",
    },
    {
      label: "Kharak",
      value: "KHRK",
    },
    {
      label: "Khareshwar Road",
      value: "KHRS",
    },
    {
      label: "Kharsia",
      value: "KHS",
    },
    {
      label: "Srikalahasti",
      value: "KHT",
    },
    {
      label: "Khatgaon",
      value: "KHTG",
    },
    {
      label: "Khatu",
      value: "KHTU",
    },
    {
      label: "Khurhand",
      value: "KHU",
    },
    {
      label: "Khakhrechibg",
      value: "KHXB",
    },
    {
      label: "Khairar Jn.",
      value: "KID",
    },
    {
      label: "Karaikal",
      value: "KIK",
    },
    {
      label: "Kurwaikethora",
      value: "KIKA",
    },
    {
      label: "Kandivali",
      value: "KILE",
    },
    {
      label: "Kim",
      value: "KIM",
    },
    {
      label: "Kapasan",
      value: "KIN",
    },
    {
      label: "Khalilpur",
      value: "KIP",
    },
    {
      label: "Kapilas Road",
      value: "KIS",
    },
    {
      label: "Khallikot",
      value: "KIT",
    },
    {
      label: "Kita",
      value: "KITA",
    },
    {
      label: "Kaialsa",
      value: "KIV",
    },
    {
      label: "Kajgaon",
      value: "KJ",
    },
    {
      label: "Khajurhat",
      value: "KJA",
    },
    {
      label: "Karajgi",
      value: "KJG",
    },
    {
      label: "Kajra",
      value: "KJH",
    },
    {
      label: "Khajauli",
      value: "KJI",
    },
    {
      label: "Kodavaluru",
      value: "KJJ",
    },
    {
      label: "Kajoragram",
      value: "KJME",
    },
    {
      label: "Kannauj",
      value: "KJN",
    },
    {
      label: "Krishnarajasgra",
      value: "KJS",
    },
    {
      label: "Karjat",
      value: "KJT",
    },
    {
      label: "Kuntighat",
      value: "KJU",
    },
    {
      label: "Khijadiya Jn.",
      value: "KJV",
    },
    {
      label: "Khajwana",
      value: "KJW",
    },
    {
      label: "Khurja City",
      value: "KJY",
    },
    {
      label: "Karonji",
      value: "KJZ",
    },
    {
      label: "Khadki",
      value: "KK",
    },
    {
      label: "Kankaha",
      value: "KKAH",
    },
    {
      label: "Karakbel",
      value: "KKB",
    },
    {
      label: "Kalkund",
      value: "KKD",
    },
    {
      label: "Kekatumar",
      value: "KKG",
    },
    {
      label: "Kakirigumma",
      value: "KKGM",
    },
    {
      label: "Karkeli",
      value: "KKI",
    },
    {
      label: "Kakori",
      value: "KKJ",
    },
    {
      label: "Khakharia",
      value: "KKK",
    },
    {
      label: "Kaikolur",
      value: "KKLR",
    },
    {
      label: "Kaklur",
      value: "KKLU",
    },
    {
      label: "Kaikolur",
      value: "KKLX",
    },
    {
      label: "Kamalapuram",
      value: "KKM",
    },
    {
      label: "Khirkiya",
      value: "KKN",
    },
    {
      label: "Khunkhuna",
      value: "KKNA",
    },
    {
      label: "Kallakkudiplgh",
      value: "KKPM",
    },
    {
      label: "Kokpara",
      value: "KKPR",
    },
    {
      label: "Kikakui Road",
      value: "KKRD",
    },
    {
      label: "Kaikoram",
      value: "KKRM",
    },
    {
      label: "Kunkavav Jn.",
      value: "KKV",
    },
    {
      label: "Kankavali",
      value: "KKW",
    },
    {
      label: "Kottarakara",
      value: "KKZ",
    },
    {
      label: "Kheril",
      value: "KL",
    },
    {
      label: "Kulwa",
      value: "KLA",
    },
    {
      label: "Kulpahar",
      value: "KLAR",
    },
    {
      label: "Kiraoli",
      value: "KLB",
    },
    {
      label: "Kalambha",
      value: "KLBA",
    },
    {
      label: "Kalunga",
      value: "KLG",
    },
    {
      label: "Kollengode",
      value: "KLGD",
    },
    {
      label: "Khemli",
      value: "KLH",
    },
    {
      label: "Kamalganj",
      value: "KLJ",
    },
    {
      label: "Kalamboli",
      value: "KLMG",
    },
    {
      label: "Kalanaurkalan",
      value: "KLNK",
    },
    {
      label: "Kalinarynpur Jn.",
      value: "KLNP",
    },
    {
      label: "Kelod",
      value: "KLOD",
    },
    {
      label: "Kotalpukur",
      value: "KLP",
    },
    {
      label: "Kailasapuram",
      value: "KLPM",
    },
    {
      label: "Kilikollur",
      value: "KLQ",
    },
    {
      label: "Khalari",
      value: "KLRE",
    },
    {
      label: "Kulitalai",
      value: "KLT",
    },
    {
      label: "Kalmitar",
      value: "KLTR",
    },
    {
      label: "Kalluru",
      value: "KLU",
    },
    {
      label: "Kelva Road",
      value: "KLV",
    },
    {
      label: "Kolakalur",
      value: "KLX",
    },
    {
      label: "Khileriyan",
      value: "KLYN",
    },
    {
      label: "Keolari",
      value: "KLZ",
    },
    {
      label: "Khamargachhi",
      value: "KMAE",
    },
    {
      label: "Kamathe",
      value: "KMAH",
    },
    {
      label: "Kadambankulam",
      value: "KMBK",
    },
    {
      label: "Khambhaliya",
      value: "KMBL",
    },
    {
      label: "Kamareddi",
      value: "KMC",
    },
    {
      label: "Kodumudi",
      value: "KMD",
    },
    {
      label: "Karimuddinpur",
      value: "KMDR",
    },
    {
      label: "Kumhari",
      value: "KMI",
    },
    {
      label: "Kaimganj",
      value: "KMJ",
    },
    {
      label: "Komakhan",
      value: "KMK",
    },
    {
      label: "Kamtaul",
      value: "KML",
    },
    {
      label: "Kamli",
      value: "KMLI",
    },
    {
      label: "Kamalur",
      value: "KMLR",
    },
    {
      label: "Kannamangalam",
      value: "KMM",
    },
    {
      label: "Kumardubi",
      value: "KMME",
    },
    {
      label: "Khamgaon",
      value: "KMN",
    },
    {
      label: "Kuchaman City",
      value: "KMNC",
    },
    {
      label: "Kumendi",
      value: "KMND",
    },
    {
      label: "Kamalnagar",
      value: "KMNR",
    },
    {
      label: "Kumbla",
      value: "KMQ",
    },
    {
      label: "Kumarganj",
      value: "KMRJ",
    },
    {
      label: "Karamnasa",
      value: "KMS",
    },
    {
      label: "Kumarsadra",
      value: "KMSD",
    },
    {
      label: "Kamshet",
      value: "KMST",
    },
    {
      label: "Kumarhatti",
      value: "KMTI",
    },
    {
      label: "Karmad",
      value: "KMV",
    },
    {
      label: "Komatipalli",
      value: "KMX",
    },
    {
      label: "Kamudakkudi",
      value: "KMY",
    },
    {
      label: "Kadalundi",
      value: "KN",
    },
    {
      label: "Kandra",
      value: "KND",
    },
    {
      label: "Kandrori",
      value: "KNDI",
    },
    {
      label: "Khandip",
      value: "KNDP",
    },
    {
      label: "Kanhegaon",
      value: "KNGN",
    },
    {
      label: "Kanthan Jn.",
      value: "KNHN",
    },
    {
      label: "Kanalas Jn.",
      value: "KNLS",
    },
    {
      label: "Khanna",
      value: "KNN",
    },
    {
      label: "Khinaniyan",
      value: "KNNA",
    },
    {
      label: "Kaninakhas",
      value: "KNNK",
    },
    {
      label: "Kundgol",
      value: "KNO",
    },
    {
      label: "Khanapur",
      value: "KNP",
    },
    {
      label: "Kandanurpvaya",
      value: "KNPL",
    },
    {
      label: "Kendrapara Road",
      value: "KNPR",
    },
    {
      label: "Kanhargaonnaka",
      value: "KNRG",
    },
    {
      label: "Kuneru",
      value: "KNRT",
    },
    {
      label: "Kanasar",
      value: "KNSR",
    },
    {
      label: "Kanth",
      value: "KNT",
    },
    {
      label: "Kinwat",
      value: "KNVT",
    },
    {
      label: "Kosgi",
      value: "KO",
    },
    {
      label: "Karonda",
      value: "KOA",
    },
    {
      label: "Kodi",
      value: "KODI",
    },
    {
      label: "Marwarkori",
      value: "KOF",
    },
    {
      label: "Kohir Deccan",
      value: "KOHR",
    },
    {
      label: "Khodri",
      value: "KOI",
    },
    {
      label: "Kokrajhar",
      value: "KOJ",
    },
    {
      label: "Koka",
      value: "KOKA",
    },
    {
      label: "Kolad",
      value: "KOL",
    },
    {
      label: "Kolnur",
      value: "KOLR",
    },
    {
      label: "Kodikkalpalaiym",
      value: "KOM",
    },
    {
      label: "Kisoni",
      value: "KONY",
    },
    {
      label: "Khusropur",
      value: "KOO",
    },
    {
      label: "Kolhapur",
      value: "KOP",
    },
    {
      label: "Kuthur",
      value: "KOQ",
    },
    {
      label: "Koti",
      value: "KOTI",
    },
    {
      label: "Koduru",
      value: "KOU",
    },
    {
      label: "Kirloskarvadi",
      value: "KOV",
    },
    {
      label: "Kamptee",
      value: "KP",
    },
    {
      label: "Kanchrapara",
      value: "KPA",
    },
    {
      label: "Kharpokhra",
      value: "KPB",
    },
    {
      label: "Kapurdha Halt",
      value: "KPDH",
    },
    {
      label: "Kauwapur",
      value: "KPE",
    },
    {
      label: "Kalpi",
      value: "KPI",
    },
    {
      label: "Kalipahari",
      value: "KPK",
    },
    {
      label: "Khaprikheda",
      value: "KPKD",
    },
    {
      label: "Kantakapalle",
      value: "KPL",
    },
    {
      label: "Kopai",
      value: "KPLE",
    },
    {
      label: "Kottapndlpalli",
      value: "KPLL",
    },
    {
      label: "Kumarapuram",
      value: "KPM",
    },
    {
      label: "Kuppam",
      value: "KPN",
    },
    {
      label: "Kapan",
      value: "KPNA",
    },
    {
      label: "Kalapipal",
      value: "KPP",
    },
    {
      label: "Kannapuram",
      value: "KPQ",
    },
    {
      label: "Kalyanpur Road",
      value: "KPRD",
    },
    {
      label: "Kotapar Road",
      value: "KPRR",
    },
    {
      label: "Kambarasampetai",
      value: "KPT",
    },
    {
      label: "Keshoraipatan",
      value: "KPTN",
    },
    {
      label: "Kashipur",
      value: "KPV",
    },
    {
      label: "Karunagapalli",
      value: "KPY",
    },
    {
      label: "Kapren",
      value: "KPZ",
    },
    {
      label: "Kondagunta",
      value: "KQA",
    },
    {
      label: "Kalaakhar",
      value: "KQE",
    },
    {
      label: "Kotikulam",
      value: "KQK",
    },
    {
      label: "Koderma",
      value: "KQR",
    },
    {
      label: "Kurgunta",
      value: "KQT",
    },
    {
      label: "Kamarkundu",
      value: "KQU",
    },
    {
      label: "Kheduli",
      value: "KQW",
    },
    {
      label: "Kolar",
      value: "KQZ",
    },
    {
      label: "Karepalli",
      value: "KRA",
    },
    {
      label: "Kahet",
      value: "KRAI",
    },
    {
      label: "Khariar Road",
      value: "KRAR",
    },
    {
      label: "Karaboh",
      value: "KRBO",
    },
    {
      label: "Kiroda",
      value: "KRC",
    },
    {
      label: "Kharwachanda",
      value: "KRCD",
    },
    {
      label: "Karad",
      value: "KRD",
    },
    {
      label: "Koradih",
      value: "KRDH",
    },
    {
      label: "Kirandul",
      value: "KRDL",
    },
    {
      label: "Kartarpur",
      value: "KRE",
    },
    {
      label: "Koregaon",
      value: "KRG",
    },
    {
      label: "Khairthal",
      value: "KRH",
    },
    {
      label: "Korai Halt",
      value: "KRIH",
    },
    {
      label: "Khurja Jn.",
      value: "KRJ",
    },
    {
      label: "Karanja",
      value: "KRJA",
    },
    {
      label: "Karjoda",
      value: "KRJD",
    },
    {
      label: "Kyarkop",
      value: "KRKP",
    },
    {
      label: "Kotarlia",
      value: "KRL",
    },
    {
      label: "Kurali",
      value: "KRLI",
    },
    {
      label: "Karaila Road Jn.",
      value: "KRLR",
    },
    {
      label: "Kuarmunda",
      value: "KRMD",
    },
    {
      label: "Karmali",
      value: "KRMI",
    },
    {
      label: "Khorason Road",
      value: "KRND",
    },
    {
      label: "Krishanrajanaga",
      value: "KRNR",
    },
    {
      label: "Krishnapur",
      value: "KRP",
    },
    {
      label: "Karepur",
      value: "KRPR",
    },
    {
      label: "Koraputdistoa",
      value: "KRPT",
    },
    {
      label: "Karari",
      value: "KRQ",
    },
    {
      label: "Karisath",
      value: "KRS",
    },
    {
      label: "Kharsaliya",
      value: "KRSA",
    },
    {
      label: "Krishnashilla",
      value: "KRSL",
    },
    {
      label: "Kiratgarh",
      value: "KRTH",
    },
    {
      label: "Kheralu",
      value: "KRU",
    },
    {
      label: "Karavadi",
      value: "KRV",
    },
    {
      label: "Kharwa",
      value: "KRW",
    },
    {
      label: "Kharamp",
      value: "KRXA",
    },
    {
      label: "Kadiri",
      value: "KRY",
    },
    {
      label: "Khetasarai",
      value: "KS",
    },
    {
      label: "Kosamba Jn.",
      value: "KSB",
    },
    {
      label: "Kashichak",
      value: "KSC",
    },
    {
      label: "Keshod",
      value: "KSD",
    },
    {
      label: "Kosad",
      value: "KSE",
    },
  ],
};

export default stations;
