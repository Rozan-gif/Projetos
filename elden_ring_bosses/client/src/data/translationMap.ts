// Mapa de traduções para fraquezas, resistências e imunidades em português

export const weaknessTranslations: Record<string, string> = {
  // Tipos de Dano de Armas
  "Normal": "Normal",
  "Strike": "Impacto",
  "Slash": "Corte",
  "Pierce": "Perfuração",
  
  // Elementos
  "Fire": "Fogo",
  "Lightning": "Raio",
  "Magic": "Magia",
  "Holy": "Sagrado",
  "Cold": "Frio",
  
  // Efeitos de Status
  "Bleed": "Sangramento",
  "Frost": "Congelamento",
  "Sleep": "Sono",
  "Madness": "Loucura",
  "Death": "Praga da Morte",
  "Poison": "Envenenamento",
  "Scarlet Rot": "Podridão Escarlate",
  "Rot": "Podridão",
  "Hemorrhage": "Hemorragia",
  "Frostbite": "Queimadura de Frio",
  "Black Flame": "Chama Negra",
  "Serpent-Hunter weapon": "Arma Serpent-Hunter",
};

export const resistanceTranslations: Record<string, string> = {
  // Tipos de Dano de Armas
  "Normal": "Normal",
  "Strike": "Impacto",
  "Slash": "Corte",
  "Pierce": "Perfuração",
  "Physical": "Físico",
  
  // Elementos
  "Fire": "Fogo",
  "Lightning": "Raio",
  "Magic": "Magia",
  "Holy": "Sagrado",
  "Cold": "Frio",
  
  // Efeitos de Status
  "Bleed": "Sangramento",
  "Frost": "Congelamento",
  "Sleep": "Sono",
  "Madness": "Loucura",
  "Death": "Praga da Morte",
  "Poison": "Envenenamento",
  "Scarlet Rot": "Podridão Escarlate",
  "Rot": "Podridão",
  "Hemorrhage": "Hemorragia",
  "Frostbite": "Queimadura de Frio",
  "Black Flame": "Chama Negra",
};

export const immunityTranslations: Record<string, string> = {
  // Efeitos de Status
  "Bleed": "Sangramento",
  "Frost": "Congelamento",
  "Sleep": "Sono",
  "Madness": "Loucura",
  "Death": "Praga da Morte",
  "Poison": "Envenenamento",
  "Scarlet Rot": "Podridão Escarlate",
  "Rot": "Podridão",
  "Hemorrhage": "Hemorragia",
  "Frostbite": "Queimadura de Frio",
  "Scarlet Aeonia": "Aeonía Escarlate",
  "Morte": "Morte",
};

export const statusEffectTranslations: Record<string, string> = {
  // Efeitos de Status
  "Bleed": "Sangramento",
  "Hemorrhage": "Sangramento",
  "Frost": "Congelamento",
  "Frostbite": "Congelamento",
  "Sleep": "Sono",
  "Madness": "Loucura",
  "Death": "Praga da Morte",
  "Poison": "Envenenamento",
  "Scarlet Rot": "Podridão Escarlate",
  "Rot": "Podridão Escarlate",
};

export const elementTranslations: Record<string, string> = {
  // Elementos
  "Fire": "Fogo",
  "Lightning": "Raio",
  "Magic": "Magia",
  "Holy": "Sagrado",
  "Cold": "Frio",
};

export const damageTypeTranslations: Record<string, string> = {
  // Tipos de Dano de Armas
  "Normal": "Normal",
  "Strike": "Impacto",
  "Slash": "Corte",
  "Pierce": "Perfuração",
  "Physical": "Físico",
};

export const translateWeakness = (weakness: string): string => {
  return weaknessTranslations[weakness] || weakness;
};

export const translateResistance = (resistance: string): string => {
  return resistanceTranslations[resistance] || resistance;
};

export const translateImmunity = (immunity: string): string => {
  return immunityTranslations[immunity] || immunity;
};

export const translateStatusEffect = (effect: string): string => {
  return statusEffectTranslations[effect] || effect;
};

export const translateElement = (element: string): string => {
  return elementTranslations[element] || element;
};

export const translateDamageType = (damageType: string): string => {
  return damageTypeTranslations[damageType] || damageType;
};
