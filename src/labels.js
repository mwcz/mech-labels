import { map, mapKeys } from "lodash";
import csv from "./labels.csv";

function match(pattern, key) {
  const re = new RegExp(`.*${pattern}.*`);
  if (re.test(key.toLowerCase()))
    return pattern;
}

const KEY_PATTERNS = [
  "build description",
  "off the shelf",
  "email",
  "picture",
  "for sale",
  "model",
  "link",
  "timestamp",
  "keycaps",
  "switches",
];

function sanitizeKey(key) {
  for (let keyPattern of KEY_PATTERNS) {
    if (match(keyPattern, key)) {
      return keyPattern;
    }
  }
}

function sanitizeKeys(label) {
  return mapKeys(label, (_, key) => sanitizeKey(key));
}

export function getLabels() {
  console.log("Getting labesl!");
  const sanitizedLabels = map(csv, sanitizeKeys);
  console.log(sanitizedLabels);
  return sanitizedLabels;
}
