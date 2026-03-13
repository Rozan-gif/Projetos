export const statusEffectsMap: Record<string, { vulnerable: string[]; resistant: string[] }> = {
  malenia: {
    vulnerable: ["Sangramento"],
    resistant: ["Envenenamento", "Podridão Escarlate", "Congelamento"]
  },
  radahn: {
    vulnerable: ["Sangramento"],
    resistant: ["Envenenamento", "Podridão Escarlate", "Congelamento"]
  },
  morgott: {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  godrick: {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento"]
  },
  maliketh: {
    vulnerable: ["Sangramento"],
    resistant: ["Envenenamento", "Podridão Escarlate", "Congelamento"]
  },
  rennala: {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  rykard: {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  mohg: {
    vulnerable: ["Congelamento"],
    resistant: ["Sangramento", "Envenenamento", "Podridão Escarlate"]
  },
  "mohg-the-omen": {
    vulnerable: ["Congelamento"],
    resistant: ["Sangramento", "Envenenamento"]
  },
  margit: {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento"]
  },
  "fire-giant": {
    vulnerable: ["Congelamento"],
    resistant: ["Sangramento", "Envenenamento", "Podridão Escarlate"]
  },
  "godskin-duo": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "godfrey-golden-shade": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento"]
  },
  radagon: {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "elden-beast": {
    vulnerable: ["Sangramento"],
    resistant: ["Envenenamento", "Podridão Escarlate", "Congelamento"]
  },
  "lichdragon-fortissax": {
    vulnerable: ["Sangramento"],
    resistant: ["Envenenamento", "Podridão Escarlate", "Congelamento"]
  },
  "maliketh-beast-clergyman": {
    vulnerable: ["Sangramento"],
    resistant: ["Envenenamento", "Podridão Escarlate", "Congelamento"]
  },
  "flying-dragon-agheel": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "glintstone-dragon-smarag": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "glintstone-dragon-adula": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "dragonlord-placidusax": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "decaying-ekzykes": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "elder-dragon-greyoll": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "astel-naturalborn": {
    vulnerable: ["Sangramento"],
    resistant: ["Envenenamento", "Podridão Escarlate", "Congelamento"]
  },
  "astel-stars-darkness": {
    vulnerable: ["Sangramento"],
    resistant: ["Envenenamento", "Podridão Escarlate", "Congelamento"]
  },
  "mimic-tear": {
    vulnerable: ["Varia conforme seu build"],
    resistant: ["Varia conforme seu build"]
  },
  "fia-champions": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento"]
  },
  "godskin-apostle": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "godskin-noble": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "commander-niall": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento"]
  },
  "sir-gideon-ofnir": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "crucible-knight": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "crucible-knight-siluria": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "leonine-misbegotten": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento"]
  },
  "scaly-misbegotten": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento"]
  },
  "erdtree-avatar": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "ulcerated-tree-spirit": {
    vulnerable: ["Sangramento"],
    resistant: ["Envenenamento", "Podridão Escarlate", "Congelamento"]
  },
  "magma-wyrm": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "flying-dragon-greyll": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "tree-sentinel": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "draconic-tree-sentinel": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "royal-knight-loretta": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "red-wolf-radagon": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "ancestor-spirit": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "regal-ancestor-spirit": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  },
  "fallingstar-beast": {
    vulnerable: ["Sangramento"],
    resistant: ["Envenenamento", "Podridão Escarlate", "Congelamento"]
  },
  "godefroy-grafted": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento"]
  },
  "elemer-briar": {
    vulnerable: ["Sangramento", "Congelamento"],
    resistant: ["Envenenamento", "Podridão Escarlate"]
  }
};
