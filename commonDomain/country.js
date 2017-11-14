"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lang_1 = require("@cashfarm/lang");
const domain_1 = require("../domain");
class Country extends domain_1.ValueObject {
    constructor(name, code) {
        super(Country, ['name', 'code']);
        this.name = name;
        this.code = code;
    }
    /**
     * Finds a country by name, searching for an exact match.
     *
     * If no country is found, it returns null;
     *
     * @static
     * @param {string} name The name of the country
     * @returns {Country} If a country with that name is found
     * @memberof Country
     */
    static find(name) {
        if (!lang_1.isBlank(name))
            throw new Error('Parameter `name` cannot be empty');
        return Country.asArray().find(c => c instanceof Country && c.name === name);
    }
    /**
     * Returns an array with all Countries
     *
     * @static
     * @returns {Country[]} An array with all Country objects
     * @memberof Country
     */
    static asArray() {
        return Object.getOwnPropertyNames(Country).map(p => Country[p]);
    }
    setName(name) {
        return this.newInstanceWith({ name });
    }
    setCode(code) {
        return this.newInstanceWith({ code });
    }
}
Country.AD = new Country('Andorra', 'AD');
Country.AE = new Country('United Arab Emirates', 'AE');
Country.AF = new Country('Afghanistan', 'AF');
Country.AG = new Country('Antigua and Barbuda', 'AG');
Country.AI = new Country('Anguilla', 'AI');
Country.AL = new Country('Albania', 'AL');
Country.AM = new Country('Armenia', 'AM');
Country.AN = new Country('Netherlands Antilles', 'AN');
Country.AO = new Country('Angola', 'AO');
Country.AQ = new Country('Antarctica', 'AQ');
Country.AR = new Country('Argentina', 'AR');
Country.AS = new Country('American Samoa', 'AS');
Country.AT = new Country('Austria', 'AT');
Country.AU = new Country('Australia', 'AU');
Country.AW = new Country('Aruba', 'AW');
Country.AX = new Country('Åland Islands', 'AX');
Country.AZ = new Country('Azerbaijan', 'AZ');
Country.BA = new Country('Bosnia and Herzegovina', 'BA');
Country.BB = new Country('Barbados', 'BB');
Country.BD = new Country('Bangladesh', 'BD');
Country.BE = new Country('Belgium', 'BE');
Country.BF = new Country('Burkina Faso', 'BF');
Country.BG = new Country('Bulgaria', 'BG');
Country.BH = new Country('Bahrain', 'BH');
Country.BI = new Country('Burundi', 'BI');
Country.BJ = new Country('Benin', 'BJ');
Country.BL = new Country('Saint Barthélemy', 'BL');
Country.BM = new Country('Bermuda', 'BM');
Country.BN = new Country('Brunei', 'BN');
Country.BO = new Country('Bolivia', 'BO');
Country.BQ = new Country('British Antarctic Territory', 'BQ');
Country.BR = new Country('Brazil', 'BR');
Country.BS = new Country('Bahamas', 'BS');
Country.BT = new Country('Bhutan', 'BT');
Country.BV = new Country('Bouvet Island', 'BV');
Country.BW = new Country('Botswana', 'BW');
Country.BY = new Country('Belarus', 'BY');
Country.BZ = new Country('Belize', 'BZ');
Country.CA = new Country('Canada', 'CA');
Country.CC = new Country('Cocos [Keeling] Islands', 'CC');
Country.CD = new Country('Congo - Kinshasa', 'CD');
Country.CF = new Country('Central African Republic', 'CF');
Country.CG = new Country('Congo - Brazzaville', 'CG');
Country.CH = new Country('Switzerland', 'CH');
Country.CI = new Country('Côte d’Ivoire', 'CI');
Country.CK = new Country('Cook Islands', 'CK');
Country.CL = new Country('Chile', 'CL');
Country.CM = new Country('Cameroon', 'CM');
Country.CN = new Country('China', 'CN');
Country.CO = new Country('Colombia', 'CO');
Country.CR = new Country('Costa Rica', 'CR');
Country.CS = new Country('Serbia and Montenegro', 'CS');
Country.CT = new Country('Canton and Enderbury Islands', 'CT');
Country.CU = new Country('Cuba', 'CU');
Country.CV = new Country('Cape Verde', 'CV');
Country.CX = new Country('Christmas Island', 'CX');
Country.CY = new Country('Cyprus', 'CY');
Country.CZ = new Country('Czech Republic', 'CZ');
Country.DD = new Country('East Germany', 'DD');
Country.DE = new Country('Germany', 'DE');
Country.DJ = new Country('Djibouti', 'DJ');
Country.DK = new Country('Denmark', 'DK');
Country.DM = new Country('Dominica', 'DM');
Country.DO = new Country('Dominican Republic', 'DO');
Country.DZ = new Country('Algeria', 'DZ');
Country.EC = new Country('Ecuador', 'EC');
Country.EE = new Country('Estonia', 'EE');
Country.EG = new Country('Egypt', 'EG');
Country.EH = new Country('Western Sahara', 'EH');
Country.ER = new Country('Eritrea', 'ER');
Country.ES = new Country('Spain', 'ES');
Country.ET = new Country('Ethiopia', 'ET');
Country.FI = new Country('Finland', 'FI');
Country.FJ = new Country('Fiji', 'FJ');
Country.FK = new Country('Falkland Islands', 'FK');
Country.FM = new Country('Micronesia', 'FM');
Country.FO = new Country('Faroe Islands', 'FO');
Country.FQ = new Country('French Southern and Antarctic Territories', 'FQ');
Country.FR = new Country('France', 'FR');
Country.FX = new Country('Metropolitan France', 'FX');
Country.GA = new Country('Gabon', 'GA');
Country.GB = new Country('United Kingdom', 'GB');
Country.GD = new Country('Grenada', 'GD');
Country.GE = new Country('Georgia', 'GE');
Country.GF = new Country('French Guiana', 'GF');
Country.GG = new Country('Guernsey', 'GG');
Country.GH = new Country('Ghana', 'GH');
Country.GI = new Country('Gibraltar', 'GI');
Country.GL = new Country('Greenland', 'GL');
Country.GM = new Country('Gambia', 'GM');
Country.GN = new Country('Guinea', 'GN');
Country.GP = new Country('Guadeloupe', 'GP');
Country.GQ = new Country('Equatorial Guinea', 'GQ');
Country.GR = new Country('Greece', 'GR');
Country.GS = new Country('South Georgia and the South Sandwich Islands', 'GS');
Country.GT = new Country('Guatemala', 'GT');
Country.GU = new Country('Guam', 'GU');
Country.GW = new Country('Guinea-Bissau', 'GW');
Country.GY = new Country('Guyana', 'GY');
Country.HK = new Country('Hong Kong SAR China', 'HK');
Country.HM = new Country('Heard Island and McDonald Islands', 'HM');
Country.HN = new Country('Honduras', 'HN');
Country.HR = new Country('Croatia', 'HR');
Country.HT = new Country('Haiti', 'HT');
Country.HU = new Country('Hungary', 'HU');
Country.ID = new Country('Indonesia', 'ID');
Country.IE = new Country('Ireland', 'IE');
Country.IL = new Country('Israel', 'IL');
Country.IM = new Country('Isle of Man', 'IM');
Country.IN = new Country('India', 'IN');
Country.IO = new Country('British Indian Ocean Territory', 'IO');
Country.IQ = new Country('Iraq', 'IQ');
Country.IR = new Country('Iran', 'IR');
Country.IS = new Country('Iceland', 'IS');
Country.IT = new Country('Italy', 'IT');
Country.JE = new Country('Jersey', 'JE');
Country.JM = new Country('Jamaica', 'JM');
Country.JO = new Country('Jordan', 'JO');
Country.JP = new Country('Japan', 'JP');
Country.JT = new Country('Johnston Island', 'JT');
Country.KE = new Country('Kenya', 'KE');
Country.KG = new Country('Kyrgyzstan', 'KG');
Country.KH = new Country('Cambodia', 'KH');
Country.KI = new Country('Kiribati', 'KI');
Country.KM = new Country('Comoros', 'KM');
Country.KN = new Country('Saint Kitts and Nevis', 'KN');
Country.KP = new Country('North Korea', 'KP');
Country.KR = new Country('South Korea', 'KR');
Country.KW = new Country('Kuwait', 'KW');
Country.KY = new Country('Cayman Islands', 'KY');
Country.KZ = new Country('Kazakhstan', 'KZ');
Country.LA = new Country('Laos', 'LA');
Country.LB = new Country('Lebanon', 'LB');
Country.LC = new Country('Saint Lucia', 'LC');
Country.LI = new Country('Liechtenstein', 'LI');
Country.LK = new Country('Sri Lanka', 'LK');
Country.LR = new Country('Liberia', 'LR');
Country.LS = new Country('Lesotho', 'LS');
Country.LT = new Country('Lithuania', 'LT');
Country.LU = new Country('Luxembourg', 'LU');
Country.LV = new Country('Latvia', 'LV');
Country.LY = new Country('Libya', 'LY');
Country.MA = new Country('Morocco', 'MA');
Country.MC = new Country('Monaco', 'MC');
Country.MD = new Country('Moldova', 'MD');
Country.ME = new Country('Montenegro', 'ME');
Country.MF = new Country('Saint Martin', 'MF');
Country.MG = new Country('Madagascar', 'MG');
Country.MH = new Country('Marshall Islands', 'MH');
Country.MI = new Country('Midway Islands', 'MI');
Country.MK = new Country('Macedonia', 'MK');
Country.ML = new Country('Mali', 'ML');
Country.MM = new Country('Myanmar [Burma]', 'MM');
Country.MN = new Country('Mongolia', 'MN');
Country.MO = new Country('Macau SAR China', 'MO');
Country.MP = new Country('Northern Mariana Islands', 'MP');
Country.MQ = new Country('Martinique', 'MQ');
Country.MR = new Country('Mauritania', 'MR');
Country.MS = new Country('Montserrat', 'MS');
Country.MT = new Country('Malta', 'MT');
Country.MU = new Country('Mauritius', 'MU');
Country.MV = new Country('Maldives', 'MV');
Country.MW = new Country('Malawi', 'MW');
Country.MX = new Country('Mexico', 'MX');
Country.MY = new Country('Malaysia', 'MY');
Country.MZ = new Country('Mozambique', 'MZ');
Country.NA = new Country('Namibia', 'NA');
Country.NC = new Country('New Caledonia', 'NC');
Country.NE = new Country('Niger', 'NE');
Country.NF = new Country('Norfolk Island', 'NF');
Country.NG = new Country('Nigeria', 'NG');
Country.NI = new Country('Nicaragua', 'NI');
Country.NL = new Country('Netherlands', 'NL');
Country.NO = new Country('Norway', 'NO');
Country.NP = new Country('Nepal', 'NP');
Country.NQ = new Country('Dronning Maud Land', 'NQ');
Country.NR = new Country('Nauru', 'NR');
Country.NT = new Country('Neutral Zone', 'NT');
Country.NU = new Country('Niue', 'NU');
Country.NZ = new Country('New Zealand', 'NZ');
Country.OM = new Country('Oman', 'OM');
Country.PA = new Country('Panama', 'PA');
Country.PC = new Country('Pacific Islands Trust Territory', 'PC');
Country.PE = new Country('Peru', 'PE');
Country.PF = new Country('French Polynesia', 'PF');
Country.PG = new Country('Papua New Guinea', 'PG');
Country.PH = new Country('Philippines', 'PH');
Country.PK = new Country('Pakistan', 'PK');
Country.PL = new Country('Poland', 'PL');
Country.PM = new Country('Saint Pierre and Miquelon', 'PM');
Country.PN = new Country('Pitcairn Islands', 'PN');
Country.PR = new Country('Puerto Rico', 'PR');
Country.PS = new Country('Palestinian Territories', 'PS');
Country.PT = new Country('Portugal', 'PT');
Country.PU = new Country('U.S. Miscellaneous Pacific Islands', 'PU');
Country.PW = new Country('Palau', 'PW');
Country.PY = new Country('Paraguay', 'PY');
Country.PZ = new Country('Panama Canal Zone', 'PZ');
Country.QA = new Country('Qatar', 'QA');
Country.RE = new Country('Réunion', 'RE');
Country.RO = new Country('Romania', 'RO');
Country.RS = new Country('Serbia', 'RS');
Country.RU = new Country('Russia', 'RU');
Country.RW = new Country('Rwanda', 'RW');
Country.SA = new Country('Saudi Arabia', 'SA');
Country.SB = new Country('Solomon Islands', 'SB');
Country.SC = new Country('Seychelles', 'SC');
Country.SD = new Country('Sudan', 'SD');
Country.SE = new Country('Sweden', 'SE');
Country.SG = new Country('Singapore', 'SG');
Country.SH = new Country('Saint Helena', 'SH');
Country.SI = new Country('Slovenia', 'SI');
Country.SJ = new Country('Svalbard and Jan Mayen', 'SJ');
Country.SK = new Country('Slovakia', 'SK');
Country.SL = new Country('Sierra Leone', 'SL');
Country.SM = new Country('San Marino', 'SM');
Country.SN = new Country('Senegal', 'SN');
Country.SO = new Country('Somalia', 'SO');
Country.SR = new Country('Suriname', 'SR');
Country.ST = new Country('São Tomé and Príncipe', 'ST');
Country.SU = new Country('Union of Soviet Socialist Republics', 'SU');
Country.SV = new Country('El Salvador', 'SV');
Country.SY = new Country('Syria', 'SY');
Country.SZ = new Country('Swaziland', 'SZ');
Country.TC = new Country('Turks and Caicos Islands', 'TC');
Country.TD = new Country('Chad', 'TD');
Country.TF = new Country('French Southern Territories', 'TF');
Country.TG = new Country('Togo', 'TG');
Country.TH = new Country('Thailand', 'TH');
Country.TJ = new Country('Tajikistan', 'TJ');
Country.TK = new Country('Tokelau', 'TK');
Country.TL = new Country('Timor-Leste', 'TL');
Country.TM = new Country('Turkmenistan', 'TM');
Country.TN = new Country('Tunisia', 'TN');
Country.TO = new Country('Tonga', 'TO');
Country.TR = new Country('Turkey', 'TR');
Country.TT = new Country('Trinidad and Tobago', 'TT');
Country.TV = new Country('Tuvalu', 'TV');
Country.TW = new Country('Taiwan', 'TW');
Country.TZ = new Country('Tanzania', 'TZ');
Country.UA = new Country('Ukraine', 'UA');
Country.UG = new Country('Uganda', 'UG');
Country.UM = new Country('U.S. Minor Outlying Islands', 'UM');
Country.US = new Country('United States', 'US');
Country.UY = new Country('Uruguay', 'UY');
Country.UZ = new Country('Uzbekistan', 'UZ');
Country.VA = new Country('Vatican City', 'VA');
Country.VC = new Country('Saint Vincent and the Grenadines', 'VC');
Country.VD = new Country('North Vietnam', 'VD');
Country.VE = new Country('Venezuela', 'VE');
Country.VG = new Country('British Virgin Islands', 'VG');
Country.VI = new Country('U.S. Virgin Islands', 'VI');
Country.VN = new Country('Vietnam', 'VN');
Country.VU = new Country('Vanuatu', 'VU');
Country.WF = new Country('Wallis and Futuna', 'WF');
Country.WK = new Country('Wake Island', 'WK');
Country.WS = new Country('Samoa', 'WS');
Country.YD = new Country('People\'s Democratic Republic of Yemen', 'YD');
Country.YE = new Country('Yemen', 'YE');
Country.YT = new Country('Mayotte', 'YT');
Country.ZA = new Country('South Africa', 'ZA');
Country.ZM = new Country('Zambia', 'ZM');
Country.ZW = new Country('Zimbabwe', 'ZW');
Country.ZZ = new Country('Unknown or Invalid Region', 'ZZ');
exports.Country = Country;
//# sourceMappingURL=country.js.map