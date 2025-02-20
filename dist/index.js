var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/index.tsx
import * as React from "react";
import Select from "react-select";
import spacetime from "spacetime";
import soft from "timezone-soft";

// src/timezone-list.ts
var allTimezones = {
  "Pacific/Midway": "Midway Island, Samoa",
  "Pacific/Honolulu": "Hawaii",
  "America/Juneau": "Alaska",
  "America/Boise": "Mountain Time",
  "America/Dawson": "Dawson, Yukon",
  "America/Chihuahua": "Chihuahua, La Paz, Mazatlan",
  "America/Phoenix": "Arizona",
  "America/Chicago": "Central Time",
  "America/Regina": "Saskatchewan",
  "America/Mexico_City": "Guadalajara, Mexico City, Monterrey",
  "America/Belize": "Central America",
  "America/Detroit": "Eastern Time",
  "America/Bogota": "Bogota, Lima, Quito",
  "America/Caracas": "Caracas, La Paz",
  "America/Santiago": "Santiago",
  "America/St_Johns": "Newfoundland and Labrador",
  "America/Sao_Paulo": "Brasilia",
  "America/Tijuana": "Tijuana",
  "America/Montevideo": "Montevideo",
  "America/Argentina/Buenos_Aires": "Buenos Aires, Georgetown",
  "America/Godthab": "Greenland",
  "America/Los_Angeles": "Pacific Time",
  "Atlantic/Azores": "Azores",
  "Atlantic/Cape_Verde": "Cape Verde Islands",
  GMT: "UTC",
  "Europe/London": "Edinburgh, London",
  "Europe/Dublin": "Dublin",
  "Europe/Lisbon": "Lisbon",
  "Africa/Casablanca": "Casablanca, Monrovia",
  "Atlantic/Canary": "Canary Islands",
  "Europe/Belgrade": "Belgrade, Bratislava, Budapest, Ljubljana, Prague",
  "Europe/Sarajevo": "Sarajevo, Skopje, Warsaw, Zagreb",
  "Europe/Brussels": "Brussels, Copenhagen, Madrid, Paris",
  "Europe/Amsterdam": "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
  "Africa/Algiers": "West Central Africa",
  "Europe/Bucharest": "Bucharest",
  "Africa/Cairo": "Cairo",
  "Europe/Helsinki": "Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
  "Europe/Athens": "Athens",
  "Asia/Jerusalem": "Jerusalem",
  "Africa/Harare": "Harare, Pretoria",
  "Europe/Moscow": "Istanbul, Minsk, Moscow, St. Petersburg, Volgograd",
  "Asia/Kuwait": "Kuwait, Riyadh",
  "Africa/Nairobi": "Nairobi",
  "Asia/Baghdad": "Baghdad",
  "Asia/Tehran": "Tehran",
  "Asia/Dubai": "Abu Dhabi, Muscat",
  "Asia/Baku": "Baku, Tbilisi, Yerevan",
  "Asia/Kabul": "Kabul",
  "Asia/Yekaterinburg": "Ekaterinburg",
  "Asia/Karachi": "Islamabad, Karachi, Tashkent",
  "Asia/Kolkata": "Chennai, Kolkata, Mumbai, New Delhi",
  "Asia/Kathmandu": "Kathmandu",
  "Asia/Dhaka": "Astana, Dhaka",
  "Asia/Colombo": "Sri Jayawardenepura",
  "Asia/Almaty": "Almaty, Novosibirsk",
  "Asia/Rangoon": "Yangon Rangoon",
  "Asia/Bangkok": "Bangkok, Hanoi, Jakarta",
  "Asia/Krasnoyarsk": "Krasnoyarsk",
  "Asia/Shanghai": "Beijing, Chongqing, Hong Kong SAR, Urumqi",
  "Asia/Kuala_Lumpur": "Kuala Lumpur, Singapore",
  "Asia/Taipei": "Taipei",
  "Australia/Perth": "Perth",
  "Asia/Irkutsk": "Irkutsk, Ulaanbaatar",
  "Asia/Seoul": "Seoul",
  "Asia/Tokyo": "Osaka, Sapporo, Tokyo",
  "Asia/Yakutsk": "Yakutsk",
  "Australia/Darwin": "Darwin",
  "Australia/Adelaide": "Adelaide",
  "Australia/Sydney": "Canberra, Melbourne, Sydney",
  "Australia/Brisbane": "Brisbane",
  "Australia/Hobart": "Hobart",
  "Asia/Vladivostok": "Vladivostok",
  "Pacific/Guam": "Guam, Port Moresby",
  "Asia/Magadan": "Magadan, Solomon Islands, New Caledonia",
  "Asia/Kamchatka": "Kamchatka, Marshall Islands",
  "Pacific/Fiji": "Fiji Islands",
  "Pacific/Auckland": "Auckland, Wellington",
  "Pacific/Tongatapu": "Nuku'alofa"
};
var timezone_list_default = allTimezones;

// src/index.tsx
function useTimezoneSelect({
  timezones = timezone_list_default,
  labelStyle = "original",
  displayValue = "GMT",
  maxAbbrLength = 4,
  date
}) {
  const options = React.useMemo(() => {
    return Object.entries(timezones).map((zone) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      try {
        const currentDate = date ? spacetime(date, zone[0]) : spacetime.now(zone[0]);
        const tz = currentDate.timezone();
        const tzStrings = soft(zone[0]);
        let label = "";
        const standardAbbr = (_c = (_b = (_a = tzStrings == null ? void 0 : tzStrings[0]) == null ? void 0 : _a.standard) == null ? void 0 : _b.abbr) != null ? _c : "";
        const dstAbbr = (_f = (_e = (_d = tzStrings == null ? void 0 : tzStrings[0]) == null ? void 0 : _d.daylight) == null ? void 0 : _e.abbr) != null ? _f : standardAbbr;
        let abbr = currentDate.isDST() ? dstAbbr : standardAbbr;
        const standardAltName = (_i = (_h = (_g = tzStrings == null ? void 0 : tzStrings[0]) == null ? void 0 : _g.standard) == null ? void 0 : _h.name) != null ? _i : "";
        const dstAltName = (_l = (_k = (_j = tzStrings == null ? void 0 : tzStrings[0]) == null ? void 0 : _j.daylight) == null ? void 0 : _k.name) != null ? _l : standardAltName;
        let altName = currentDate.isDST() ? dstAltName : standardAltName;
        const min = tz.current.offset * 60;
        const hr = `${min / 60 ^ 0}:` + (min % 60 === 0 ? "00" : Math.abs(min % 60));
        const prefix = `(${displayValue}${hr.includes("-") ? hr : `+${hr}`}) ${zone[1]}`;
        switch (labelStyle) {
          case "original":
            label = prefix;
            break;
          case "altName":
            label = `${prefix} ${altName ? `(${altName})` : ""}`;
            break;
          case "abbrev":
            label = `${prefix} (${abbr.substring(0, maxAbbrLength)})`;
            break;
          default:
            label = `${prefix}`;
        }
        return {
          value: tz.name,
          label,
          offset: tz.current.offset,
          abbrev: abbr,
          altName
        };
      } catch (e) {
        return null;
      }
    }).filter(Boolean).sort((a, b) => a.offset - b.offset);
  }, [labelStyle, timezones, date]);
  const findFuzzyTz = (zone) => {
    let currentTime = spacetime.now("GMT");
    try {
      currentTime = spacetime.now(zone);
    } catch (err) {
      return;
    }
    return options.filter(
      (tz) => tz.offset === currentTime.timezone().current.offset
    ).map((tz) => {
      let score = 0;
      if (currentTime.timezones[tz.value.toLowerCase()] && !!currentTime.timezones[tz.value.toLowerCase()].dst === currentTime.timezone().hasDst) {
        if (tz.value.toLowerCase().indexOf(
          currentTime.tz.substring(currentTime.tz.indexOf("/") + 1)
        ) !== -1) {
          score += 8;
        }
        if (tz.label.toLowerCase().indexOf(
          currentTime.tz.substring(currentTime.tz.indexOf("/") + 1)
        ) !== -1) {
          score += 4;
        }
        if (tz.value.toLowerCase().indexOf(currentTime.tz.substring(0, currentTime.tz.indexOf("/")))) {
          score += 2;
        }
        score += 1;
      } else if (tz.value === "GMT") {
        score += 1;
      }
      return { tz, score };
    }).sort((a, b) => b.score - a.score).map(({ tz }) => tz)[0];
  };
  const parseTimezone = (zone) => {
    if (typeof zone === "object" && zone.value && zone.label)
      return zone;
    if (typeof zone === "string") {
      return options.find((tz) => tz.value === zone) || zone.indexOf("/") !== -1 && findFuzzyTz(zone);
    } else if (zone.value && !zone.label) {
      return options.find((tz) => tz.value === zone.value);
    }
  };
  return { options, parseTimezone };
}
var TimezoneSelect = (_a) => {
  var _b = _a, {
    value,
    onBlur,
    onChange,
    labelStyle,
    displayValue,
    maxAbbrLength,
    timezones,
    date
  } = _b, props = __objRest(_b, [
    "value",
    "onBlur",
    "onChange",
    "labelStyle",
    "displayValue",
    "maxAbbrLength",
    "timezones",
    "date"
  ]);
  const { options, parseTimezone } = useTimezoneSelect({
    timezones,
    labelStyle,
    displayValue,
    maxAbbrLength,
    date
  });
  const handleChange = (tz) => {
    onChange && onChange(tz);
  };
  return /* @__PURE__ */ React.createElement(
    Select,
    __spreadValues({
      value: parseTimezone(value),
      onChange: handleChange,
      options,
      onBlur
    }, props)
  );
};
export {
  timezone_list_default as allTimezones,
  TimezoneSelect as default,
  useTimezoneSelect
};
